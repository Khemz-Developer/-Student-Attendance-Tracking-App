import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "mysql",
  schema: "./utils/schema.js", // Ensure this path is correct
  out: "./drizzle", // Directory where migrations or schema files will be saved
  dbCredentials: {
    host: "localhost",
    user: "root",
    database: "student_attendance_db",
    password: "1234",
    port: 3306,
  },
});  