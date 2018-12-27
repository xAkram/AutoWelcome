const Discord = require('discord.js'),
    client = new Discord.client({sisableEveryone: true})
    console.log("muuuuuuuuute,");
client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("527397485753139211");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`**# Welcome To __Magic NetWork__ :Heart: ..**`)        
}


client.login(process.env.TOKEN);