const Author = require('../models/author');

exports.createAuthor = async (req, res) => {
    try {
        const { name, bio } = req.body;
        
        const author = new Author({ name, bio });

        await author.save();

        res.status(201).json({
            success: true,
            data: author
        });

    } catch(error) {
        return res.status(400).json({ message: error.message })
    }
};

exports.getAuthors = async (req, res) => {
    try {
        const authors = await Author.find();

        res.status(200).json({
            success: true,
            data: authors
        });

    } catch(error) {
        return res(500).json({ message: error.message });
    };
}

exports.getAuthor = async (req, res) => {

    try {
        const author = await Author.findById(req.params.id);

        if (!author) {
            return res.status(404).json({ message: "Author not found" });
        }

        return res.status(200).json({
                success: true,
                data: author
            });

    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};

exports.updateAuthor = async (req, res) => {
    try {
        const updatedAuthor = await Author.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

      return res.status(200).json({
            success: true,
            data: updatedAuthor
        });

    } catch(error) {
        return res.status(500).json({ message: error.mesaage })
    }
};
 
exports.deleteAuthor = async (req, res) => {
    try {
        await Author.findByIdAndDelete(req.params.id);

        res.status(200).json({
            success: true,
            data: "Author deleted"
        });

    } catch(error) {
        return res.status(500).jsom({ message: error.message })
    }
};