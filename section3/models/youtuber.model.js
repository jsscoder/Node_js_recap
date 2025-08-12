const { integer, pgTable, varchar, text, uuid, boolean } = require('drizzle-orm/pg-core');

const channelTable = pgTable('channel', {
  id: uuid().primaryKey().defaultRandom(),
  views: integer().notNull(),
  monetization: boolean().notNull().default(false),
  default_run: integer().notNull(),
  subscriber: integer().notNull(),
});

module.exports = { channelTable };
