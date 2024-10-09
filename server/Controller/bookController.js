const Book = require('../Model/bookStack');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Ensure the uploads directory exists
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true }); // Create the directory if it doesn't exist
}

// Set up Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir); // Use the uploads directory
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Append timestamp to the file name
  }
});

const upload = multer({ storage: storage }).single('file');

exports.addbook = (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({
        error: "File upload failed",
        details: err.message
      });
    }

    try {
      const { title, description } = req.body;
      const filePath = req.file ? `uploads/${req.file.filename}` : null; // File path relative to uploads folder

      const newBook = await Book.create({
        title,
        description,
        file: filePath // Store the file path in the database
      });

      res.status(201).json({
        message: "Book added successfully",
        newBook
      });

    } catch (error) {
      console.error(error);
      res.status(400).json({
        error: "Something went wrong"
      });
    }
  });
};
