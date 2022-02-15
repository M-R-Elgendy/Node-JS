const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("First msg")
});


const port = 3000;
app.listen(port, listening);

function listening() {
    console.log(`Server ruinng on http://localhost:${port}`);
}