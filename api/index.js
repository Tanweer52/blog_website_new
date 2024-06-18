const express = require('express');
const app = express();
const mongoose = require('mongoose');
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoriesRoute = require("./routes/categories");
const dotenv = require("dotenv")
dotenv.config();
// const multer = require('multer');
app.use(express.json());
// const multer = require("multer");
// app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));



app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoriesRoute);


app.listen(process.env.PORT, () => {
    console.log("Server is Ready");
});


