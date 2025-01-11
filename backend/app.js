import express from "express";
import path from "path";
import fs from "fs/promises";
import { makeFavicons, makeZip } from "./utils.js";

const app = express();

app.use(express.json());


const uploadsDir = path.resolve(__dirname, "tmp", "uploads");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const fileName = `${Date.now()}-${file.originalname}`;
    cb(null, fileName);
  },
});

const upload = multer({ storage });

// Middleware to parse JSON body
app.use(express.json());

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

    // Return a response
    res.status(200).json({
      message: "File and text data received successfully.",
      file: {
        originalName: file.originalname,
        path: file.path,
      },
      textData,
    });
  } catch (err) {
    console.error("Error in processing request:", err);
    return res.status(500).json({ error: "Internal server error." });
  }
});

/**
 * GET /api/download - Download the generated ZIP file
 */
app.get("/api", async (req, res) => {
  const { q } = req.query;

  if (!q || !q.endsWith(".zip")) {
    return res.status(400).json({ error: "Path is not defined or invalid" });
  }

  const downloadPath = path.join(buildDir, q);

  try {
    console.log("Attempting to access:", downloadPath);

    await fs.access(downloadPath);

    const { size } = await fs.stat(downloadPath);
    const response = await fs.readFile(downloadPath);

    res.setHeader("Content-Type", "application/zip");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${path.basename(q)}"`,
    );
    res.setHeader("Content-Length", size);

    return res.send(response);
  } catch (err) {
    console.error("Error in sending data:", err);
    return res.status(500).json({ error: err.message });
  }
});

app.listen(2626, () => {
  console.log("Hello");
});
