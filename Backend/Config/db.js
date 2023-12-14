const mongoose = require('mongoose');
require('dotenv').config();

const connection = mongoose.connect("mongodb+srv://pallaveekumari:Pallavee0126@cluster0.5oeiz6a.mongodb.net/bellavitaDB?retryWrites=true&w=majority");

module.exports = {
    connection
}