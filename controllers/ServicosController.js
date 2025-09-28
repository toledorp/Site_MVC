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
      video: "" // ou omita se não tiver" 
    },
    { 
      foto: "/img/vendasonline.png", 
      projeto: "Sistema de Vendas Online", 
      video: "" // ou omita se não tiver
    },
    { 
      foto: "/img/gestaoescolar.png", 
      projeto: "Sistema de Gestão Escolar",
      video: "" // sem vídeo
    },
    { 
      foto: "/img/agendamedica.png", 
      projeto: "Aplicativo de Agenda Médica",
      video: "https://youtu.be/7OLAtpBdvSA" // exemplo
    },
  ];
  res.render("servicos", { servicos });
});

// exportando o objeto router
export default router;
