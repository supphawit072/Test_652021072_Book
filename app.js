const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
dotenv.config();

// MongoDB Config

// Routing Config

// Server Running
const MONGO_URI =  process.env.MONGO_URI;
mongoose.connect(MONGO_URI)
  .then(()=> console.log('Connected to MogoDB'))
  .catch(err => console.error('Could not connect to MogoDB',err));

const bookRoutes = require('./routes/books');
app.use('/api/',bookRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT,()=> console.log(`Server runing on port ${PORT}`));
// app.listen(PORT, () => {
//   console.log("Server running at http://localhost:" + PORT);
// });
