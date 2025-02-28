const dbConfig = {
  database: process.env.DB_NAME || 'test',
  port: process.env.DB_PORT || 3306,
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PSWD || '',
  namedPlaceholders: true,
}

export default dbConfig
