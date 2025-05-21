import fetch from 'node-fetch';

const handler = async (m, {conn, usedPrefix, text, isPrems}) => {

  try {
    //const img = './media/menus/Menu2.jpg';
    const videoUrl = 'https://files.catbox.moe/siww4z.mp4'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];

    const str = `>  Holaaa soy zerotwo 👋, ${taguser}

\`\`\`${fechaHora}\`\`\`

╭─• *MENÚ FREE FIRE*
│ 𝙝𝙤𝙡𝙖𝙖👋 𝙨𝙤𝙮 𝙕𝙚𝙧𝙤 𝙏𝙬𝙤 𝙚𝙨𝙩𝙚 𝙚𝙨 𝙚𝙡 𝙢𝙚𝙣𝙪́ 𝙙𝙚 𝙁𝙧𝙚𝙚 𝙛𝙞𝙧𝙚 𝙚𝙘𝙝𝙖 𝙪𝙣 𝙫𝙞𝙨𝙩𝙖𝙯𝙤 
╰─────────────•

 𝙈𝙀𝙉𝙐 𝘿𝙀 𝙁𝙍𝙀𝙀 𝙁𝙄𝙍𝙀 👑. 
 
 👑 𝙁𝙍𝙀𝙀 𝙁𝙄𝙍𝙀 👑
🖤 ➺ 🎫.donarsala
🖤 ➺ 🗼.mapa (mapa Aleatorio)

👑 𝙍𝙀𝙂𝙇𝘼𝙎 𝙂𝙀𝙉𝙀𝙍𝘼𝙇𝙀𝙎 👑
🖤 ➺ 🎮.𝘳𝘦𝘨𝘭𝘢𝘴𝘭𝘪𝘥𝘦𝘳𝘦𝘴
🖤 ➺ 🎮.𝘳𝘦𝘨𝘭𝘢𝘴𝘭𝘪𝘥𝘦𝘳𝘦𝘴2

▸▸ 𝙇𝙄𝙎𝙏𝘼 𝙑𝙀𝙍𝙎𝙐𝙎 👑 ◂◂


⚔ ➺.4𝘷𝘴4 
⚔ ➺.6𝘷𝘴6 
⚔ ➺.8𝘷𝘴8 
⚔ ➺.𝘴𝘤𝘳𝘪𝘮 
⚔ ➺.12𝘷𝘴12 
⚔ ➺.16𝘷𝘴16 
⚔ ➺.20𝘷𝘴20 
⚔ ➺.24𝘷𝘴24 
`.trim();
/*
    conn.sendMessage(m.chat, { image: { url: img }, caption: str, mentions: [m.sender] }, { quoted: fkontak });

await conn.sendMessage(m.chat, { react: { text: '🎮', key: m.key } });*/

      await conn.sendMessage(m.chat, {
            video: { url: videoUrl },
            caption: str,
            mentions: [m.sender],
            gifPlayback: true
        }, { quoted: fkontak })

//await conn.sendMessage(m.chat, { react: { text: '😇', key: m.key } });

  } catch {
    conn.reply(m.chat,'*[ 💔 ] Error al enviar el video.*\n\n${e}', m);
  }
};

handler.command = /^(menuff|comandosff)$/i;
handler.fail = null;

export default handler;

function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
