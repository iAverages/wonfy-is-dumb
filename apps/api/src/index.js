import express from "express";
const app = express();
app.get("/", (req, res) => {
    res.send("wonfy is still dumb");
});
app.listen(1234, () => {
    console.log("Server is running on http://localhost:3000");
});
