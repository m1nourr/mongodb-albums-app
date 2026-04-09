const express = require("express");
const Album = require("../models/album");

const router = express.Router();

// GET all albums
router.get("/", async (req, res) => {
  try {
    const albums = await Album.find();
    res.json(albums);
  } catch (err) {
    console.error("Error fetching albums:", err.message);
    res.status(500).json({ error: "Failed to fetch albums" });
  }
});

// GET album by ID
router.get("/:id", async (req, res) => {
  try {
    const album = await Album.findById(req.params.id);

    if (!album) {
      return res.status(404).json({ error: "Album not found" });
    }

    res.json(album);
  } catch (err) {
    console.error("Error fetching album by ID:", err.message);
    res.status(500).json({ error: "Failed to fetch album" });
  }
});

// POST new album
router.post("/", async (req, res) => {
  try {
    const { title, artistName, year } = req.body;

    const newAlbum = new Album({
      title,
      artistName,
      year,
    });

    const savedAlbum = await newAlbum.save();
    res.status(201).json(savedAlbum);
  } catch (err) {
    console.error("Error creating album:", err.message);
    res.status(400).json({ error: err.message });
  }
});

// PUT update album
router.put("/:id", async (req, res) => {
  try {
    const updatedAlbum = await Album.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedAlbum) {
      return res.status(404).json({ error: "Album not found" });
    }

    res.json(updatedAlbum);
  } catch (err) {
    console.error("Error updating album:", err.message);
    res.status(400).json({ error: err.message });
  }
});

// DELETE album
router.delete("/:id", async (req, res) => {
  try {
    const deletedAlbum = await Album.findByIdAndDelete(req.params.id);

    if (!deletedAlbum) {
      return res.status(404).json({ error: "Album not found" });
    }

    res.json({ message: "Album deleted", album: deletedAlbum });
  } catch (err) {
    console.error("Error deleting album:", err.message);
    res.status(500).json({ error: "Failed to delete album" });
  }
});

module.exports = router;