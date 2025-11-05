// No seu arquivo de associações (ex: associations.js)

import Pessoa from "../models/Pessoa.js";
import Projeto from "../models/Projeto.js";
import Alocacao from "../models/Alocacao.js";
import Papel from "../models/Papel.js"; // Opcional, mas recomendado

const defineAssociations = () => {
    // 1. Relacionamento Muitos para Muitos entre Pessoa e Projeto
    
    // Pessoa pertence a Muitos Projetos, através da tabela Alocacao
    Pessoa.belongsToMany(Projeto, {
        through: Alocacao,
        foreignKey: 'id_pessoa', // A chave estrangeira de Pessoa em Alocacao
        otherKey: 'id_projeto'   // A chave estrangeira do outro lado (Projeto) em Alocacao
    });

    // Projeto pertence a Muitas Pessoas, através da tabela Alocacao
    Projeto.belongsToMany(Pessoa, {
        through: Alocacao,
        foreignKey: 'id_projeto', // A chave estrangeira de Projeto em Alocacao
        otherKey: 'id_pessoa'    // A chave estrangeira do outro lado (Pessoa) em Alocacao
    });
    
    // 2. Relacionamento da Tabela de Junção (Alocacao) com os Modelos
    
    // Para poder incluir os dados da alocação e do papel, defina:
    Alocacao.belongsTo(Pessoa, { foreignKey: 'id_pessoa' });
    Alocacao.belongsTo(Projeto, { foreignKey: 'id_projeto' });
    Alocacao.belongsTo(Papel, { foreignKey: 'id_papel' });
    
    // Relacionamento Opcional: Papel com Alocacao
    Papel.hasMany(Alocacao, { foreignKey: 'id_papel' });

    // Para facilitar a consulta, adicione também o 'hasMany'
    Pessoa.hasMany(Alocacao, { foreignKey: 'id_pessoa' });
    Projeto.hasMany(Alocacao, { foreignKey: 'id_projeto' });
};

export default defineAssociations;