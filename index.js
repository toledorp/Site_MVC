// Importando o Express
import express from "express"
//Iniciando o Express
const app = express();

//Importando o Middleware de Autenticação
// import Auth fron "./middleware/Auth.js"

//Importando o express-session (gerador de sessões)
import session from "express-session";

//importando o Sequelize
//import connection from "./config/sequelize-config.js";

//Importando os Controllers
import ContatosController from "./controllers/ContatosController.js";
import ServicosController from "./controllers/ServicosController.js";

//Importando Controller de usuários
//import UsersController from "./controller/UsersController.js";

//Importando os models
//import Cliente from "./models/Cliente.js";
//import


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
