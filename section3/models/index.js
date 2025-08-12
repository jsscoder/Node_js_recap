const { videoTable } = require('./video.model');
const { channelTable } = require('./youtuber.model');

module.exports = [channelTable, videoTable]; // export array of tables
