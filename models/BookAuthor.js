const { Model, DataTypes } = require('sequelize');

const sequelize = require('../home/config/connection');

class BookAuthor extends Model { }

BookAuthor.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        book_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "book",
                key: "id",
            },
        },
        author_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "author",
                key: "id",
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'book_author',
    }
);

module.exports = BookAuthor;
