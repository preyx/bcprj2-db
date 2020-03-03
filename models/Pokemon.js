const {Model, STRING, INTEGER, DECIMAL, BOOLEAN, DOUBLE} = require('sequelize')

class Pokemon extends Model {}

Pokemon.init({
    against_bug: DOUBLE,
    against_dark: DOUBLE,
    against_dragon: DOUBLE,
    against_electric: DOUBLE,
    against_fairy: DOUBLE,
    against_fight: DOUBLE,
    against_fire: DOUBLE,
    against_flying: DOUBLE,
    against_ghost: DOUBLE,
    against_grass: DOUBLE,
    against_ground: DOUBLE,
    against_ice: DOUBLE,
    against_normal: DOUBLE,
    against_poison: DOUBLE,
    against_psychic: DOUBLE,
    against_rock: DOUBLE,
    against_steel: DOUBLE,
    against_water: DOUBLE,
    attack: INTEGER,
    base_total: INTEGER,
    defense: INTEGER,
    hp: INTEGER,
    japanese_name: STRING,
    name: STRING,
    pokedex_number: INTEGER,
    sp_attack: INTEGER,
    sp_defense: INTEGER,
    speed: INTEGER,
    type1: STRING,
    type2: STRING
}, {sequelize: require('../config'), modelName: 'pokemon', timestamps: false})

module.exports = Pokemon