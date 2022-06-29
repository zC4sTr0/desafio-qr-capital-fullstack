const dbConnectionInfo = {
    username: "QR_USER",
    password: "alwaysLearning",
    database: "QR_DB",
    host: "127.0.0.1",
    dialect: "postgres",
    operatorsAliases: false,
    logging: false,
    define: {
      timestamps: true,
      underscore: true,
      underscoredAll: true
    }
};

module.exports = dbConnectionInfo;