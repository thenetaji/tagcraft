import fs from "fs";
import { promises as fsPromises } from "fs";
import sharp from "sharp";
import archiver from "archiver";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uploadsDir = path.resolve(__dirname, "tmp", "uploads");
const buildDir = path.resolve(__dirname, "tmp", "build");
const destDir = path.resolve(__dirname, "tmp", "dest");

export async function postProcess(id, imgPath) {
  try {
  const uniqueFolder = await makeFavicons(id, imgPath);
  console.log("uniqueFolder provided by makeFavicons function",uniqueFolder);
  
  const processMakeZip = await makeZip(uniqueFolder,id);
  console.log("make zip result",processMakeZip);
  } catch(err){
    console.error("Post process error",err);
    throw new Error("postProcess error",err);
  }
};

export async function makeFavicons(id, imgPath) {
  const icons = [
    { size: "16x16", name: "favicon-16x16.png" },
    { size: "32x32", name: "favicon-32x32.png" },
    { size: "120x120", name: "apple-touch-icon-120x120.png" },
    { size: "180x180", name: "apple-touch-icon-180x180.png" },
  ];

  const uniqueFolder = path.join(buildDir, id, "icons");

  await fsPromises
    .access(uniqueFolder)
    .catch(() => fsPromises.mkdir(uniqueFolder, { recursive: true }));

  for (const icon of icons) {
    try {
      await sharp(imgPath)
        .resize(
          parseInt(icon.size.split("x")[0]),
          parseInt(icon.size.split("x")[1]),
        )
        .toFile(path.join(uniqueFolder, icon.name));
    } catch (err) {
      console.error(`Error processing ${icon.name}:`, err);
      throw new Error(
        "An internal error occurred while processing the favicon",
      );
    }
  }
  return uniqueFolder;
}

export async function makeZip(folderPath,id) {
  const dest = path.join(destDir, `${id}.zip`);

  await fsPromises
    .access(destDir)
    .catch(() => fsPromises.mkdir(destDir, { recursive: true }));

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
