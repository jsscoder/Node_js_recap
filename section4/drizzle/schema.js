const { integer, pgTable, varchar } = require("drizzle-orm/pg-core");

const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  rank:varchar({length:255}).notNull().default("rookie").unique()
});


module.exports = {
  usersTable,
};
