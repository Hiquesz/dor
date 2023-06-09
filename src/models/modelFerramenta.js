import { Sequelize } from "sequelize"
import db from "../../db.js"

export const Ferramenta = db.define('Ferramenta', {
        id: {
            type: Sequelize.INTEGER,
            autoIncremente: true,
            primaryKey: true
        },
        idFerramenta: {
            type: Sequelize.STRING,
            allowNull: false
        },
        nome: {
            type: Sequelize.STRING,
            allowNull: false
        },
        quantidade: {
            type: Sequelize.STRING,
            allowNull: false
        },
        arq2d: {
            type: Sequelize.STRING,
            allowNull: false
        },
        arq3d: {
            type: Sequelize.STRING,
            allowNull: false
        },
        dataIns: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        dataAlt: {
            type: Sequelize.TEXT,
            allowNull: false
        }
    }
)

export const destroyFer = (id) => {
    const ferramenta = FindByPk(id)
    if(!ferramenta) {
        return false
    }
    const index = dbFerramenta.indexOf(ferramenta)
    dbFerramenta.splice(index, 1)
    return true
}

export const FindByPk = (id) => {
    return dbFerramenta.find(ferramenta=> ferramenta.id === id)
}

export const updateFer = (id,ferramenta) => {
    const ferramentaToUpdate = FindByPk(id)
    if(!ferramentaToUpdate) {
        return false
    }

    const index = dbFerramenta.indexOf(ferramentaToUpdate)
    dbFerramenta[index] = ferramenta
    return true
}

 export const getFerramenta = () => {
    return dbFerramenta
}

export const getFerramentaCount = () => {
    return dbFerramenta.length 
}

export const createFerramenta = (ferramenta) => {
    dbFerramenta.push(ferramenta)
}

 export const dbFerramenta = [
    new Ferramenta(1,'IdFerramenta', 'nome', 'quantidade','arq2d' , 'arq3d', 'dataIns', 'dataAlt'),
 ]
