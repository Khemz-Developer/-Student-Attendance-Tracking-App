import { int, mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const GRADES = mysqlTable("grades", {
  id: int("id").primaryKey(),
  grade: varchar("grade", { length: 10 }).notNull(),
});

/*
Summary:
id:: The key in the object that defines the column name in the table schema.
int("id"): Specifies the column type as an integer and sets the column name in the database to "id".
.primaryKey(): Adds a primary key constraint to the column.

*/

export const STUDENTS = mysqlTable("students", {
  id:int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  grade: varchar('grade',{length:10}).notNull(),
  address: varchar('address',{length:100}).notNull(),
  contact: varchar('contact',{length:10}).notNull(),
  

});