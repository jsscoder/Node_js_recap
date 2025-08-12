const fs=require('node:fs')
function logger(req, res, next) {
  const now = new Date(); // create Date object
  const log = `\n${now.toLocaleString('en-GB')} ${req.method} ${req.path}`;
  fs.appendFileSync('log.txt', log, 'utf-8');
  next();
}
module.exports=logger