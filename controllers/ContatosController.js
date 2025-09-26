import express from "express"

const router = express.Router()

router.get("/contatos", (req, res) => {
  const contatos = [
    { nome: "Ana Souza",        email: "ana.souza@ai.com",      ramal: 1010 },
    { nome: "Bruno Lima",       email: "bruno.lima@ai.com",     ramal: 1020 },
    { nome: "Carla Mendes",     email: "Carla.Mendes@ai.com",   ramal: 1030 },
    { nome: "Daniel Oliveira",  email: "daniel.oliveira@ai.com", ramal: 1040 },
    { nome: "Fernanda Costa",   email: "fernanda.costa@ai.com", ramal: 1050 },
    { nome: "Gustavo Pereira",  email: "gustavo.pereira@ai.com", ramal: 1060 },
    { nome: "Helena Rocha",     email: "helena.rocha@ai.com",   ramal: 1070 },
    { nome: "Igor Santos",      email: "igor.santos@ai.com",    ramal: 1080 },
  ];
  res.render("contatos", {
    contatos : contatos
  });
});

export default router;
