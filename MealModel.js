const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema({
    title: {
        // type string - чтобы потом убедиться, что все введенные данные это строка (в input например)
        type: String,
        // required - может быть по разному обозначить
        required: true
    }
})

module.exports = mongoose.model('Meal', mealSchema);