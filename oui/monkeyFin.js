
module.exports = (bot) => {
  var CronJob = require('cron').CronJob;
const Discord = require('discord.js');
const d = new Date();


console.log('Before job instantiation');
const job = new CronJob('00 00 01 * * 0', function() {
  console.log('At Ten Minutes:', d);
  
  
  
 
  const channel = bot.channels.cache.get("730527992148656211");
  channel.send("Funky monkey samedi fini je : pleure")


});
console.log('After job instantiation', d);
job.start();

}
