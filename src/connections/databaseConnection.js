
const appConfig = require("../config/appConfig")

const { database, host, password, port, username } = appConfig.postgres

const sequelize = new Sequelize({
    database, password, username: username, dialect: 'postgres', host, port: +port
})

const query = async (query) => {
    const [results, metadata] = await sequelize.query(query)
    return {
        results, metadata
    }
}

