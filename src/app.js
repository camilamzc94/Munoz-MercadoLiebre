let express = require ('express');
const path = require ('path');

let app = express();

app.use(express.static(path.join(__dirname, "../public")));

const PORT = 3001;

app.listen(PORT,() => {
    console.log('servidor corriendo en el puerto ${PORT}');
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views/home.html"));
});
