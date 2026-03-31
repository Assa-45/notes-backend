const noteModel = require("../models/notesModels");

const getAllNotes = async (req, res) => {
    try {
        const allDataNote = await noteModel.findAll();
        res.status(200).json({
            success: true,
            message: "Notes retrieved succesfully",
            total: allDataNote.length,
            data: allDataNote
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error retrieving notes",
            error: error.message
        });
    }
};

const createNote = async (req, res) => {
    const { title, content } = req.body;

    try {
        const newNote = await noteModel.create({ title, content });
        res.status(201).json({
            success: true,
            message: "Note created successfully",
            data: newNote
        });
    } catch (error) {
        res.status(400).json({
            status: false,
            message: "Validation error",
            error: error.message
        });
    }
};

const getNoteByID = async (req, res) => {
    const {id} = req.params;

    try {
        const note = await noteModel.findByID(id);

        if (!note) {
            return res.status(404).json({
                status: false,
                message: "The Note you are searching for not found",
            });
        }

        res.status(200).json({
            status: true,
            message: "Note retrieving successfully",
            data: note
        });
    } catch {
        res.status(500).json({
            status: false,
            message: "Error retrieving note",
            data: error.message
        });
    }
};

const updateNote = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;

    try {
        const note = await noteModel.findByID(id);

        if (!note) {
            return res.status(404).json({
                status: false,
                message: "The Note you are searching for not found",
            });
        }

        const updatedNote = await noteModel.updateByID(id, { title, content });
        res.status(200).json({
            status: true,
            message: "Note updated successfully",
            data: updatedNote
        });
    } catch {
        res.status(500).json({
            status: false,
            message: "Error updating note",
            data: error.message
        });
    }
};

const deleteNote = async (req, res) => {
    const {id} = req.params;

    try {
        const note = await noteModel.findByID(id);

        if (!note) {
            return res.status(404).json({
                status: false,
                message: "The Note you are searching for not found",
            });
        }

        const deleteNote = await noteModel.deleteByID(id);
        res.status(200).json({
            status: true,
            message: "Note deleted successfully",
            data: note
        });
    } catch {
        res.status(500).json({
            status: false,
            message: "Error deleting note",
            data: error.message
        });
    }
};

module.exports = {
    getAllNotes,
    createNote,
    getNoteByID,
    updateNote,
    deleteNote
};