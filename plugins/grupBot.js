let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
// JANGAN DI UBAH LAH BABI :V
let grupBot = '*「 OFFICIAL BOT GROUP 」*\n\nSini Bang Join\n\n> https://chat.whatsapp.com/Gj0kHatV2AoFyL2WyTTv2o'
conn.reply(m.chat, grupBot, m)
}
handler.help = ['']
handler.tags = ['AndaTauMemek?'] 
handler.customPrefix = /^(GROUP BOT 🕊)$/i
handler.command = new RegExp

module.exports = handler
