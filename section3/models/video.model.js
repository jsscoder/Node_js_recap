const { pgTable, varchar, text, uuid } = require('drizzle-orm/pg-core');
const { channelTable } = require('./youtuber.model');  // destructure here!

const videoTable = pgTable('videos', {
  id: uuid().primaryKey().defaultRandom(),
  title: varchar({ length: 255 }).notNull(),
  description: text(),
  videoId: uuid().references(() => channelTable.id),  // this is fine
});

module.exports = { videoTable };
