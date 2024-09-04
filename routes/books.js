const express = require("express");
const router = express.Router();
const { getbooks, getbook, addbook, updatebook, deletebook } = require('../controllers/bookController');

router.get("/books/", getbooks);
router.get("/books/:genre", getbook);
router.post("/books/", addbook);  // เปลี่ยน 'book' เป็น 'books' เพื่อให้สอดคล้องกัน
router.put("/books/:id", updatebook);
router.delete("/books/:id", deletebook);  // แก้ไขช่องว่างและเส้นทาง

module.exports = router;
