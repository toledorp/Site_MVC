// Importando o Express
import express from "express";

// Carregando na variavel router o express.Router() que é responsavel por gerenciar as rotas da aplicação
const router = express.Router();

//Rota de Serviços
// Rota de Serviços
router.get("/servicos", (req, res) => {
  const servicos = [
    {
      foto: "/img/ead.png",
      projeto: "Plataforma de Curso EAD",
      versao: 1.1, 
    },
    {
      foto: "/img/vendasonline.png",
      projeto: "Sistema de Vendas Online",
      versao: 1.3, 
    },    
    {
      foto: "/img/gestaoescolar.png",
      projeto: "Sistema de Gestão Escolar",
      versao: 1.2, 
    },
    {
      foto: "/img/agendamedica.png",
      projeto: "Aplicativo de Agenda Médica",
      versao: 2.1, 
    },
  ];
  res.render("servicos", { servicos });
});

// exportando o objeto router
export default router;
