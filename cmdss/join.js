const Discord = require('discord.js');
const fs = require('fs');
var stream = require("ytdl-core");

module.exports = {
	name: 'join',
	description: "Fait rejoindre le bot en vocal",
}

module.exports.run = async (bot, message, args) => {
  

    var channel = message.member.voiceChannel;
    message.delete();
    if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.join();
      } else {
        message.reply('Il faut etre dans le : channel vocal');
    
    const dispatcher = connection.play('./sons/stop.mp3');
    

        }
    }
module.exports.help = {
    name: "join"
}
