const Book = require('../models/book');
const Author = require('../models/author');
const Attendant = require('../models/attendant');
const Student = require('../models/student');


exports.createBook = async (req, res) => {
    try {
        const { title, isbn, authors } = req.body;

        if (!authors || authors.length === 0) {
            return res.status(400).json({
                message: "Authors are required"
            });
        }

        const existingAuthors = await Author.find({
            _id: { $in: authors }
        });

        if (existingAuthors.length !== authors.length) {
            return res.status(400).json({ message:'Invalid author IDs'});
        }

        const book = new Book({
            title,
            isbn,
            authors
        });

        await book.save();

        return res.status(201).json({
            success: true, 
            data: book
        });

    } catch(error) {
        return res.status(400).json({ message: error.message });
    }
}; 

exports.getBooks = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 5;
        const search = req.query.search;
       
        const skip = (page - 1) * limit;

        let query = {};

        if (search) {
            query.title = { $regex: search, $options: "i" };
        }

        const books = await Book.find(query)
            .populate('authors')
            .skip(skip)
            .limit(limit);

        console.log("FINAL QUERY USED:", query);

        const total = await Book.countDocuments();
        
        return res.status(200).json({
            success: true,
            page,
            totalPages: Math.ceil(total / limit),
            totalBooks: total,
            data: books
        });

    } catch(error) {
        return res.status(500).json({ message: error.message });
    }
};

exports.getBook = async (req, res) => {

    try {
        const { id } = req.params;

        const book = await Book.findById(id)
        .populate('authors')
        .populate('borrowedBy')
        .populate('issuedBy');


    if (!book) {
        return res.status(404).json({ message: "Book not found "});
    }

    return res.status(200).json({
        success: true,
        data: book
    });

    } catch(error) {
        return res.status(500).json({ message: error.message });
    }
};

exports.updateBook = async (req, res) => {
    try {
        const { title, isbn, authors } = req.body;

        if (authors) {
            const existingAuthors = await Author.find({
                _id: { $in: authors }
            });

        if (existingAuthors.length !== authors.length) {
            return res.status(400).json({ message: "Invalid author IDs"});
            }
        }

        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id,
            { title, isbn, authors },
            { new: true }
        ).populate('authors');

        if (!updatedBook) {
            return res.status(404).json({ message: "Book not found" });
        }

        return res.status(200).json({
            success: true,
            data: updatedBook
        });

    } catch(error) {
        return res.status(500).json({ message: error.message });
    }
};

exports.deleteBook = async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);

        if (!deletedBook) {
            return res.status(404).json({ message: "Book not found" });
        }

        return res.status(200).json({
            success: true,
            data: "Book deleted successfully"
        });

    } catch(error) {
        return res.status(500).json({ message: error.message });
    }
};

exports.borrowBook = async (req, res) => {
    try {
        const { studentId, attendantId, returnDate } = req.body;
       
        const book = await Book.findById(req.params.id);

        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }

        if (book.status === "OUT") {
            return res.status(400).json({ message: "Book is already borrowed" });
        }

        const student = await Student.findById(studentId);
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        console.log("STUDENT:", student);

        const attendant = await Attendant.findById(attendantId);
        if (!attendant) {
            return res.status(404).json({ message: "Attendant not found" });
        }

        book.status = "OUT";
        book.borrowedBy = studentId;
        book.issuedBy = attendantId;
        book.returnDate = returnDate;

        await book.save();

        return res.status(200).json({
            message: "Book borrowed successfully",
            data: book
    });

    } catch(error) {
        return res.status(500).json({ message: error.message });
    }
};

exports.returnBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);

        if (!book) {
            return res.status(404).json({ message: "Book not found"});
        }

        if (book.status === "IN") {
            return res.status(400).json({ message: "Book is not currently borrowed" });
        }

        book.status = "IN";
        book.borrowedBy = null;
        book.issuedBy = null;
        book.returnDate = null;

        await book.save();

        return res.status(200).json({
            message: "Book returned successfully",
            data: book
        });

    } catch(error) {
        return res.status(500).json({ message: error.message });
    }
};