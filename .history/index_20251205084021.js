const express = require("express");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log())
