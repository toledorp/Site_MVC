import express from "express"
const app = express();

import ContatosController from "./controllers/ContatosController.js";
import ServicosController from "./controllers/ServicosController.js";

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use("/", ContatosController)
app.use("/", ServicosController)

app.get("/", (req, res) => {
    res.render("index");
});

const port = 8080;

app.listen(port, (error) => {
    if (error) {
        console.log(
            `Não foi possível iniciar o servidor: ${error}`
        );
    } else {
        console.log(`Servidor iniciado com sucesso em : http://localhost:${port}`);
    }
});
