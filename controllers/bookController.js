const Books = require('../models/books');

exports.getbooks =async(req,res)=>{
    try{
        const books = await Books.find();
        res.json(books);
    }catch(err){
        res.status(500).json({message: err.message});
    }
};

exports.getbook = async (req, res) => {
    try {
        const { genre } = req.params;  // รับค่า genre จาก URL พารามิเตอร์
        const books = await Books.find({ genre: genre });  // ค้นหาหนังสือที่มี genre ที่ตรงกับที่รับมา
        if (!books || books.length === 0) return res.status(404).json({ message: 'Book not found' });
        res.json(books);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.addbook= async(req,res)=>{
    const{title,author ,published_year, genre , available } = req.body;
    try{
        const books = new Books({title,author ,published_year, genre , available})
        await books.save();
        res.status(201).json(books);
    }catch(err){
        res.status(400).json({massage:err.massage});
    }

};

exports.updatebook= async(req,res)=>{
    
    try{
        const {id} =req.params;
        const books = await Books.findById(id);
        if(!books)return res.status(404).json({massage:'Book not fond'});
        const data = {$set: req.body};
       await Books.updateOne({_id:id},data);
       res.status(201).send('update');
    }catch(err){
        res.status(400).json({massage:err.massage});
    }

};

exports.deletebook = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Books.findById(id);  // ใช้ 'book' แทน 'books' สำหรับความชัดเจน
        if (!book) return res.status(404).json({ message: 'Book not found' });
        
        await Books.findByIdAndDelete(id);
        res.status(200).json({ message: 'Book deleted successfully' });  // ส่งสถานะ 200 และข้อความสำเร็จ
    } catch (err) {
        res.status(500).json({ message: err.message });  // ใช้สถานะ 500 แทน 400 สำหรับข้อผิดพลาดในเซิร์ฟเวอร์
    }
};



