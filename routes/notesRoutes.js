const express = require("express");
const router = express.Router();
const noteController = require("../controllers/notesController");

router.get("/", noteController.getAllNotes);
router.get("/:id", noteController.getNoteByID);
router.post("/", noteController.createNote);
router.put("/:id", noteController.updateNote);
router.delete("/:id", noteController.deleteNote);

module.exports = router;
