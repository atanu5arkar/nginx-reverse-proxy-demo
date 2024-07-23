import express from "express";

const app = express();
const port = 1234;

app.get("/", (req, res) => {
    res.status(200).send(`<h2>This is Express from port ${port}</h2>`);
})

app.listen(port, () => {
    console.log("Server running at", port);
})