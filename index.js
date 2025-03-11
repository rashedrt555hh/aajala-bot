//Made By : _6xz
const lineReply = require ('discord-reply')
const express = require("express");
const app = express();
//Made By : _6xz
app.listen(() =>  ("im ready"));
require('events').EventEmitter.defaultMaxListeners = 30;
app.use('/ping', (req, res) => {
  res.send(new Date());  //Made By : _6xz
});
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "$"
const moment = require("moment")
//Made By : _6xz
//Made By : _6xz
client.on("ready", () => {
    client.user.setActivity(`$help`)
})


///الاكواد
//Made By : _6xz
 var owner = ["1262170177789755404"];///ايدي اليستعمل البوت
let ayan = [ "1m","700k","500k","100k","50k","حظ اوفر"]/// عدل الجوائز اذا تبي
    client.on("message", message => { 
      if (message.content.startsWith(prefix + "spin")) {
    if(!owner.includes(message.author.id)) return;
        
      let v = ayan[Math.floor(Math.random() * ayan.length)];
      let embed = new Discord.MessageEmbed() 
      .setTitle(`** __مسابقة عجلة الحظ__**`)
      .setDescription(`**  ربحت ي عسل   ${v} **`) //عدلها اذا تبي لانه بتكون الجائزه
      .setColor("RANDOM")
      message.channel.send(embed)

    }
  });
  //Made By : _6xz
    client.on("message", message => { 
      if (message.content.startsWith(prefix + "help")) {
          message.channel.send("**مساعدة بوت عجلة الحظ** ")
        message.channel.send("**$spin امر العجلة** ")
         message.channel.send("** (نيترو كلاسيك شهر , نيترو غيمنق شهر , 10الف , 15 الف , 50الف , حظ اوفر ) الاشياء الموجودة ب عجلة ** ")
          message.channel.send("**Made By : _6xz ** ")
}
  });
//Made By : _6xz
client.login(process.env.token);
