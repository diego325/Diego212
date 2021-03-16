let handler = async m => m.reply(`
╭─〘 𝗗𝗢𝗡𝗔𝗦𝗜 〙
│ • 𝗔𝗫𝗜𝗦 [5521982310081]
│ • 𝗗𝗔𝗡𝗔 [5521982310081]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
