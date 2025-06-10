let handler = async (m, { conn, args }) => {
  let userId = m.mentionedJid?.[0] || m.sender
  let user = global.db.data.users[userId]
  let name = conn.getName(userId)
  let _uptime = process.uptime() * 1000
  let uptime = clockString(_uptime)
  let totalreg = Object.keys(global.db.data.users).length

  // Saludo decorado
  let hour = new Intl.DateTimeFormat('es-PE', {
  hour: 'numeric',
  hour12: false,
  timeZone: 'America/Lima'
}).format(new Date())
  
  let saludo = hour < 6 ? "🌌 Buenas madrugadas, espíritu insomne..." :
               hour < 12 ? "🌅 Buenos días, alma luminosa~" :
               hour < 18 ? "🌄 Buenas tardes, viajero astral~" :
               "🌃 Buenas noches, sombra errante~"

  // Agrupar comandos por categorías
  let categories = {}
  for (let plugin of Object.values(global.plugins)) {
    if (!plugin.help || !plugin.tags) continue
    for (let tag of plugin.tags) {
      if (!categories[tag]) categories[tag] = []
      categories[tag].push(...plugin.help.map(cmd => `#${cmd}`))
    }
  }

  // Emojis random por categoría
  let decoEmojis = ['✨', '🌸', '👻', '⭐', '🔮', '💫', '☁️', '🦋', '🪄']
  let emojiRandom = () => decoEmojis[Math.floor(Math.random() * decoEmojis.length)]

  //🌌 MENU DE KURIMI 🌌
  let menuText = `
╭───❖ 𝓗𝓪𝓷𝓪𝓴𝓸 𝓑𝓸𝓽 ❖───╮

 ｡ﾟ☆: *.${name}.* :☆ﾟ｡  
> *_${saludo}_*

╰─────❖ 𝓜𝓮𝓷𝓾 ❖─────╯

✦ 𝙸𝙽𝙵𝙾 𝙳𝙴 kurumi✦

💻 Sistema: Multi-Device
👤 Usado por: @${userId.split('@')[0]}
⏰ Tiempo activo: ${uptime}
👥 Usuarios: ${totalreg} usuarios 
⌚ Hora: ${hour}

> *_esta bot está en pleno desarrollo pronto tendrá más cositas_*

≪──── ⋆𓆩✧𓆪⋆ ────≫
`.trim()

  for (let [tag, cmds] of Object.entries(categories)) {
    let tagName = tag.toUpperCase().replace(/_/g, ' ')
    let deco = emojiRandom()
    menuText += `

╭─━━━ ${deco} ${tagName} ${deco} ━━━╮
${cmds.map(cmd => `│ ➯ ${cmd}`).join('\n')}
╰─━━━━━━━━━━━━━━━━╯`
  }

  // Mensaje previo cute
  await conn.reply(m.chat, '⌜ ⊹ Espera un momento, estamos enviando su menu...😸 ⊹ ⌟', m, {
    contextInfo: {
      externalAdReply: {
        title: botname,
        body: "🌌No importa lo que pase debes vivir vive y se feliz🌌",
        thumbnailUrl: 'https://files.catbox.moe/hha29x.jpg',
        sourceUrl: redes,
        mediaType: 1,
        showAdAttribution: true,
        renderLargerThumbnail: true,
      }
    }
  })

  // Enviar menú con video estilo gif
  await conn.sendMessage(m.chat, {
    video: { url:'https://raw.githubusercontent.com/IrokzDal/uploads/main/1749581606606.mp4', gifPlayback: true },
    caption: menuText,
    gifPlayback: true,
    contextInfo: {
      mentionedJid: [m.sender, userId],
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: '120363372883715167@newsletter',
        newsletterName: 'yosue y maycol y wirk <3',
        serverMessageId: -1,
      },
      forwardingScore: 999,
      externalAdReply: {
        title: botname,
        body: "❤️🌌",
        thumbnailUrl: banner,
        sourceUrl: redes,
        mediaType: 1,
        showAdAttribution: true,
        renderLargerThumbnail: true,
      },
    }
  }, { quoted: m })
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = ['menu', 'menú', 'help', 'ayuda']

export default handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  return `${h}h ${m}m ${s}s`
    }
