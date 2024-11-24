import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
let db;
async function initializeDB() {
  // Create the MySQL connection
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "student_attendance_db", // replace with your actual database name
    password: "1234",
    port: 3306,
  });

  // Initialize Drizzle ORM with the connection
  db = drizzle(connection);

  return db;
}

// Call initializeDB to get the database instance
initializeDB().then((db) => {
  console.log("Database connected successfully");
  // You can now use `db` to interact with your database
}).catch((error) => {
  console.error("Failed to connect to the database:", error);
});

export {db};
