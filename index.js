// index.js
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const links = [
    "https://vt.tiktok.com/ZSfXLgJJs/",
    "https://vt.tiktok.com/ZSfXLWtQS/",
    "https://vt.tiktok.com/ZSfXLWGqR/",
    "https://vt.tiktok.com/ZSfXLme4c/",
    "https://vt.tiktok.com/ZSfXLXuxC/",
    "https://vt.tiktok.com/ZSfXLyYMo/",
    "https://vt.tiktok.com/ZSfXLyE6C/",
    "https://vt.tiktok.com/ZSfXNkBgT/",
    "https://vt.tiktok.com/ZSfXLw9sw/",
    "https://vt.tiktok.com/ZSfXLKyPm/",
    "https://vt.tiktok.com/ZSfXL3aoa/",
    "https://vt.tiktok.com/ZSfXN24Ff/",
    "https://vt.tiktok.com/ZSfXLox6Q/",
    "https://vt.tiktok.com/ZSfXN8JnD/",
    "https://vt.tiktok.com/ZSfXNF5C1/",
    "https://vt.tiktok.com/ZSfXN6wcC/",
    "https://vt.tiktok.com/ZSfXNF9hY/",
    "https://vt.tiktok.com/ZSfXNYfeu/",
    "https://vt.tiktok.com/ZSfXNjFxS/",
    "https://vt.tiktok.com/ZSfXNF1MU/",
    "https://vt.tiktok.com/ZSfXNY9MF/",
    "https://vt.tiktok.com/ZSfXNNr68/",
    "https://vt.tiktok.com/ZSfXNrkfM/",
    "https://vt.tiktok.com/ZSfXNFD7Q/",
    "https://vt.tiktok.com/ZSfXLTAsv/",
    "https://vt.tiktok.com/ZSfXNjX51/",
    "https://vt.tiktok.com/ZSfXNhK1J/",
    "https://vt.tiktok.com/ZSfXLoRXA/",
    "https://vt.tiktok.com/ZSfXNFJcB/",
    "https://vt.tiktok.com/ZSfXNkPUA/",
    "https://vt.tiktok.com/ZSfXL3JkN/",
    "https://vt.tiktok.com/ZSfXNNC8Y/",
    "https://vt.tiktok.com/ZSfXNY2Hy/",
    "https://vt.tiktok.com/ZSfXN1YRU/",
    "https://vt.tiktok.com/ZSfXNJYxC/",
    "https://vt.tiktok.com/ZSfXL3qQv/",
    "https://vt.tiktok.com/ZSfXLEuxd/",
    "https://vt.tiktok.com/ZSfXLvbEJ/",
    "https://vt.tiktok.com/ZSfXNLwgn/"
];

app.get("/api/get", (req, res) => {
    const random = links[Math.floor(Math.random() * links.length)];

    res.json({
        status: "success",
        data: random
    });
});

app.listen(port, () => {
    console.log(`API running on port ${port}`);
});
