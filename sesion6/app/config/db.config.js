module.exports = {
    HOST:'127.0.0.1',
    USER: 'root',
    PASSWORD:'admin',
    DB: 'nodejs',
    dialect: 'mysql',
    pool: {
        max: 15,
        min: 0,
        acquire: 6000,
        idle: 3000
    },
};