const Discord = require("discord.js");
const botsettings = require("./botsettings.json");


const bot = new Discord.Client({disableEveryone: true});



bot.on("ready", async () => {
    console.log(`${bot.user.username} is online`);
    bot.user.setActivity("Windah Basudara", {type: "WATCHING"});
})

bot.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;

    let prefix = botsettings.prefix;
    let messageArray = message.content.split(" ")
    let command = messageArray[0];
    let args = messageArray.slice(1);
    const taggedUser = message.mentions.user.first();

    if(command === `${prefix}jadwal`) {
        return message.channel.send("JADWAL VALO 20:30-23:00");
    }
    if(command === `${prefix}join`) {
        return message.reply("sok kenal");
    }
})

bot.login(botsettings.token);