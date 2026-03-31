const Note = require("../schema/notes");

const findAll = async () => {
    return await Note.findAll({
        attributes: ["id", "title", "content"]
    });
};

const create = async (noteData) => {
    return await Note.create(noteData);
};

const findByID = async (id, noteData) => {
    return await Note.findByPk(id, {
        attributes: ["id", "title", "content"] 
    });
};

const updateByID = async (id, noteData) => {
    return await Note.update(noteData, {
        where: {
            id: id
        }
    });
};

const deleteByID = async (id) => {
    return await Note.destroy({
        where: {
            id: id
        }
    });
}

module.exports = {
    findAll,
    create,
    findByID,
    updateByID,
    deleteByID
};