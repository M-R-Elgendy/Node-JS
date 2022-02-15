const express = require('express');
const app = express();
const data = [];

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());


// GET 
app.get("/first", (req, res) => {
    res.send("First msg");
});

app.get("/get-data", (req, res) => {
    res.send(data);
});


//POST
app.get("/confirm-data-arrived", (req, res) => {
    res.send("Post Msg");
});

app.get("/add-data", (req, res) => {
    data.push(req.body);
    res.send(data);
});


// Start Server
const port = 3000;
app.listen(port, listening);

function listening() {
    console.log(`Server ruinng on http://localhost:${port}`);
}











/*

const postData = async ( url = '', data = {})=>{
    console.log(data);
      const response = await fetch(url, {
      method: 'POST', 
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
     // Body data type must match "Content-Type" header        
      body: JSON.stringify(data), 
    });

      try {
        const newData = await response.json();
        console.log(newData);
        return newData;
      }catch(error) {
      console.log("error", error);
      }
  }

postData('/add', {answer:42});

*/