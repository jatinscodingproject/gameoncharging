const { DataTypes } = require("sequelize");
const sequelize = require("../Config/db");

const Gameon = sequelize.define(
    "be_gameon", {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        msisdn: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        origin: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        client_ip: {
            type: DataTypes.STRING,
            allowNull: true
        },
         is_chargin: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        }

    }, {
        tableName: "be_gameon",
        timestamps: true,
    }
);




module.exports = Gameon;