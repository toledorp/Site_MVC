import express from "express"

const router = express.Router()

router.get("/contatos", (req, res) => {
  const contatos = [
    { nome: "Ana Souza",        
      email: "ana.souza@ai.com",
      ramal: 1010, 
      foto: "/img/pessoal/AnaSouza.png"
    },
    { nome: "Bruno Lima",
      email: "bruno.lima@ai.com",
      ramal: 1020,
      foto: "/img/pessoal/BrunoLima.png"
    },
    { nome: "Carla Mendes",
      email: "Carla.Mendes@ai.com",
      ramal: 1030,
      foto: "/img/pessoal/CarlaMendes.png"
    },
    { nome: "Daniel Oliveira",
      email: "daniel.oliveira@ai.com",
      ramal: 1040,
      foto: "/img/pessoal/DanielOliveira.png"
    },
    { nome: "Fernanda Costa",
      email: "fernanda.costa@ai.com",
      ramal: 1050,
      foto: "/img/pessoal/FernandaCosta.png"
    },
    { nome: "Gustavo Pereira",
      email: "gustavo.pereira@ai.com",
      ramal: 1060,
      foto: "/img/pessoal/GustavoPereira.png"
    },
    { nome: "Helena Rocha",
      email: "helena.rocha@ai.coom",
      ramal: 1070,
      foto: "/img/pessoal/HelenaRocha.png"
    },
    { nome: "Igor Santos",
      email: "igor.santos@ai.com",
      ramal: 1080,
      foto: "/img/pessoal/IgorSantos.png"
    },    
  ];
  res.render("contatos", {
    contatos : contatos
  });
});

export default router;
