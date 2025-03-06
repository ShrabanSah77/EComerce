require ("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require ("cors");

const app = express();
app.use(express.json());
app.use(cors());

// connect to MongoDB

mongoose
.connect(process.env.MONGO-URIError, {useNewUrlParser: true, useUnifiedTopology:true})
.then(() => console.log("MongoDB Connected"))
.catch((error) => console.log(error));

// Routes

const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});