import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import multer from "multer";
import fsPromises from "fs/promises";
import { makeFavicons, makeZip, postProcess } from "./utils.js";
import fs from "fs";

const app = express();
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uploadsDir = path.resolve(__dirname, "tmp", "uploads");
const destDir = path.resolve(__dirname, "tmp", "dest");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const fileExtension = file.mimetype.split("/")[1];
    const fileName = `${Date.now()}.${fileExtension}`;
    cb(null, fileName);
  },
});
const upload = multer({ storage });

/**
 * POST /api - Process and generate favicons
 */
app.post("/api", upload.single("icon_image"), async (req, res) => {
  try {
    // Accessing the uploaded file
    const file = req.file;
    // Accessing additional text data from the request body
    const textData = req.body;

    // Debug log the file and text data
    console.log("Uploaded file:", file);
    console.log("Text data:", textData);

    if (!file) {
      return res.status(400).json({ error: "File is required." });
    }
    
    const id = file.path.split("/uploads")[1].split(".")[0].split("/")[1];

    res.status(200).json({
      status: "OK",
      id: id + ".zip",
      //eg "/home/admin/tagcraft/backend/tmp/uploads/1736623416413.jpeg"
    });
    
    setImmediate(() => {
      postProcess(id, file.path);
    });
  } catch (err) {
    console.error("Error in processing request:", err);
    return res.status(500).json({ error: "Internal server error." });
  }
});


/**
 * GET /api - Download the generated ZIP file
 */
app.get("/api", async (req, res) => {
  const { q } = req.query;

  if (!q || !q.endsWith(".zip")) {
    return res.status(400).json({ error: "Path is not defined or invalid" });
  }

  const downloadPath = path.join(destDir, q);

  try {
    console.log("Attempting to access:", downloadPath);

    // Use fs.promises.access here
    await fsPromises.access(downloadPath); // Make sure to use fs.promises.access

    const { size } = await fsPromises.stat(downloadPath); // Use fs.promises.stat
    const response = await fsPromises.readFile(downloadPath); // Use fs.promises.readFile

    res.setHeader("Content-Type", "application/zip");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${path.basename(q)}"`
    );
    res.setHeader("Content-Length", size);

    return res.send(response);
  } catch (err) {
    console.error("Error in sending data:", err);
    return res.status(500).json({ error: err.message });
  }
});

app.listen(2626, () => {
  const uploadDir = "./tmp/uploads";
  const buildDir = "./tmp/build";

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(buildDir, { recursive: true });
  }
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  console.log("Server started at 2626");
});