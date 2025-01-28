import { createPool } from "mariadb"

const pool = createPool({
    host: "localhost",
    user: "khizar_db",
    port: 3306,
    password: "khizar@222",
    database: "khizar_db",
})

export default Object.freeze({
    pool: pool
})
