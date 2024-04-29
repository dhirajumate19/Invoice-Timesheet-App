import "dotenv/config";

const { DB_URL = "mongodb://localhost", DB_PORT = 27017 } = process.env;
export const dbUrl = `${DB_URL}:${DB_PORT}`;
