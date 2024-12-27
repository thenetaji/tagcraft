import { Hono } from "hono";
import { promises as fsPromises } from "fs";
import sharp from "sharp";
import archiver from "archiver";
import path from "path";

const app = new Hono();


const cwd = process.cwd();
const uploadsDir = path.join(cwd, "uploads");
const buildDir = path.join(cwd, "build");

app.get("/api", async (ctx) => {
  const query = ctx.req.query();
  const { p } = query;

  if (!p || !p.includes(".zip")) {
    return ctx.json({ error: "Path is not defined or invalid" }, 400);
  }

  const downloadPath = path.join(buildDir, p);

  try {
    console.log("Attempting to access:", downloadPath);

    await fsPromises.access(downloadPath);

    const { size } = await fsPromises.stat(downloadPath);
    const response = await fsPromises.readFile(downloadPath);

    ctx.header("Content-Type", "application/zip");
    ctx.header("Content-Disposition", `attachment; filename="${p}"`);
    ctx.header("Content-Length", size);

    return ctx.body(response);
  } catch (err) {
    console.error("Error in sending data:", err);

    return ctx.json({ error: err.message }, 500);
  }
});

app.post("/api", async (ctx) => {
  try {
    const body = await ctx.req.parseBody();
    const meta = await saveFile(body);
    console.log("meta", meta);

    const processedIcon = await makeFavicons(meta);
    console.log("processedIcon", processedIcon);

    const resultZip = await makeZip(processedIcon);
    console.log("resultZip value", resultZip);

    return ctx.json({ url: resultZip });
  } catch (err) {
    console.error("Error in processing request:", err);
    return ctx.status(500).json({ error: err.message });
  }
});

export default app;

async function saveFile(body) {
  try {
    const file = body["image"];
    const buffer = Buffer.from(await file.arrayBuffer());

    const { name, type, size } = file;
    const extension = path.extname(name);
    const baseName = path.basename(name, extension);
    const uniqueFilename = `${baseName}-${Date.now()}${extension}`;

    await fsPromises.access(uploadsDir).catch(() =>
      fsPromises.mkdir(uploadsDir, { recursive: true })
    );

    const fullFilename = path.join(uploadsDir, uniqueFilename);

    await fsPromises.writeFile(fullFilename, buffer);

    return {
      name: fullFilename,
      size,
      type,
    };
  } catch (err) {
    throw new Error(`Error in saving file: ${err.message}`);
  }
}

async function makeFavicons({ name }) {
  const icons = [
    { size: "16x16", name: "favicon-16x16.png" },
    { size: "32x32", name: "favicon-32x32.png" },
    { size: "120x120", name: "apple-touch-icon-120x120.png" },
    { size: "180x180", name: "apple-touch-icon-180x180.png" },
  ];

  const uniqueFolder = path.join(buildDir, `tagcraft-${Date.now()}`, "icons");

  await fsPromises.access(uniqueFolder).catch(() =>
    fsPromises.mkdir(uniqueFolder, { recursive: true })
  );

  for (const icon of icons) {
    try {
      await sharp(name)
        .resize(
          parseInt(icon.size.split("x")[0]),
          parseInt(icon.size.split("x")[1])
        )
        .toFile(path.join(uniqueFolder, icon.name));
    } catch (err) {
      console.error(`Error processing ${icon.name}:`, err);
      throw new Error("An internal error occurred while processing the favicon");
    }
  }

  return uniqueFolder;
}

async function makeZip(folderPath) {
  const dest = path.join(buildDir, `${path.basename(folderPath)}.zip`);

  await fsPromises.access(buildDir).catch(() =>
    fsPromises.mkdir(buildDir, { recursive: true })
  );

  const output = fs.createWriteStream(dest);
  const archive = archiver("zip", { zlib: { level: 9 } });

  output.on("close", () => {
    console.info("Created archive of size", archive.pointer());
  });

  output.on("error", (err) => {
    console.error("Error in archiving", err);
    throw err;
  });

  archive.pipe(output);
  archive.directory(folderPath, false);
  await archive.finalize();

  return dest;
}