
const fs = require('fs');
const tts = require('google-translate-tts');

module.exports = {
	name: 'tts',
	description: "s!tts (le texte)",
}


module.exports.run = async (bot, message,) => {
    message.delete();

    if (!message.guild.me.hasPermission("SPEAK")) {
        message.channel.send("j'ai pas les permissions :(")
        return;
    }

    var prefix = "s!tts" ;
        const args = message.content.slice(prefix.length).trim().split('/ +/');
        const command = args.shift().toString();
        var nom = command;

        var stringLength = nom.length;
if (stringLength > 199) {
    message.reply("message etre comme : plus de 200 caractères = pas bien");
    return;
}
// notice that `tts.synthesize` returns a Promise<Buffer>
const saveFile = async () => {
    const buffer = await tts.synthesize({
        text: nom,
        voice: 'fr'
    });

    fs.writeFileSync('hello-world.mp3', buffer);
};

saveFile();

if (message.member.voice.channel) {
    const connection = await message.member.voice.channel.join();
    setTimeout(() => {
       
        
        const dispatcher = connection.play('./hello-world.mp3', {
            volume: 0.5,
        });
        dispatcher.on('finish', () => {
            fs.rename('hello-world.mp3', 'old.mp3', err => {
                if (err) {
                  return console.error(err)
                }
            })
        });
    }, 1000);
}else {
    message.reply('Il faut etre dans le : channel vocal');
}


    var user = message.author.tag
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var date = today.getDate()+'/'+(today.getMonth()+1);
    console.log("[TTS] " + user + " a tts: " + nom + " | " + time + " Le " + date)

    if (message.guild.id == 730433603808264192) {
        
        
        const channel = message.guild.channels.cache.get("795755947879825408")
        
   
        channel.send("[TTS] " + user + " a tts: " + nom + " | " + time + " Le " + date);
    }
    
    bot.guilds.cache.get("554674515028738050").channels.cache.get("803747020522782720").send("[TTS] " + user + " a tts: " + nom + " | " + time + " Le " + date);
}
        
module.exports.help = {
    name: "tts"
}
