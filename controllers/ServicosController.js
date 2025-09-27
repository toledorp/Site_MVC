// Importando o Express
import express from "express";

// Carregando na variavel router o express.Router() que é responsavel por gerenciar as rotas da aplicação
const router = express.Router();

//Rota de Serviços
router.get("/servicos", (req, res) => {
  //Criando a variavel que será enviada para a página
  const servicos = [
    { foto:"/img/agendamedica.png", projeto: "Plataforma de Curso EAD", link: https://youtu.be/7OLAtpBdvSA },
    { projeto: "Sistema de Vendas Online" },
    { projeto: "Sistema de Gestão Escolar" },
    { projeto: "Aplicativo de Agenda Médica"},
  ];
  res.render("servicos", {
    servicos: servicos,
  });
});

// exportando o objeto router
export default router;
