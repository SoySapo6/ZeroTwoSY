import fetch from 'node-fetch';

const handler = async (m, { conn, usedPrefix, __dirname, text, isPrems}) => {
  try {
    const pp = imagen2;
    const videoURL = 'https://files.catbox.moe/m7nd3i.mp4'; // Cambia esto por otro GIF si deseas

    const d = new Date(new Date() + 3600000);
    const locale = 'es';
    const date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' });
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length;

    const str = `┏━━━━━━━━━━━━━━━━━━━━┓
⊂(・▽・⊂) ¡𝙃𝙤𝙡𝙞𝙨! ¿𝘾𝙤𝙢𝙤 𝙩𝙖𝙣 𝙗𝙧𝙞𝙡𝙡𝙖𝙣𝙩𝙚 𝙝𝙤𝙮?  
💙${taguser}
❤️ ${saludo}  
┃ ◉— 𝙕𝙚𝙧𝙤 𝙩𝙬𝙤 —◉
┣⟣☯ 𝙾𝚆𝙽𝙴𝚁: Yosue
┣⟣☯ 𝙽𝚄𝙼𝙴𝚁𝙾: +58 4242773183
┣⟣☯ 𝙵𝙴𝙲𝙃𝙰: ${date}
┣⟣☯ 𝚃𝙸𝙴𝙈𝙿𝙊 𝙰𝙲𝚃𝙸𝚅𝙾: ${uptime}
┣⟣☯ 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂: ${rtotalreg}
┗━━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ 🤪𝐌𝐄𝐌𝐄𝐒 𝐆𝐈𝐅𝐒🧃
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣⟣❥😂 _${usedPrefix}gifgracioso_
┣⟣❥🤣 _${usedPrefix}memegif_
┣⟣❥😆 _${usedPrefix}failgif_
┣⟣❥😝 _${usedPrefix}perreogif_
┣⟣❥😎 _${usedPrefix}thuglife_
┣⟣❥👀 _${usedPrefix}reactiongif_
┣⟣❥🙃 _${usedPrefix}randomgif_
┣⟣❥📸 _${usedPrefix}stickerface_

> Este menú traerá más gifs divertidos en el futuro, así que stay tuned mi king/queen.
(⁠◍⁠•⁠ᴗ⁠•⁠◍⁠)⁠❤ creado con amor por SoyMaycol, Yosue y Nagi
┗━━━━━━━━━━━━━━━━┛`;

    const fkontak2 = {
      'key': {
        'participants': '0@s.whatsapp.net',
        'remoteJid': 'status@broadcast',
        'fromMe': false,
        'id': 'Halo'
      },
      'message': {
        'contactMessage': {
          'vcard': `BEGIN:VCARD\nVERSION:3.0\nFN:Yosue\nEND:VCARD`
        }
      },
      'participant': '0@s.whatsapp.net'
    };

    await conn.sendMessage(m.chat, { image: pp, caption: str.trim() }, { quoted: fkontak2 });
    await conn.sendMessage(m.chat, { video: { url: videoURL }, caption: '🌈 *Aquí tienes tu menú de GIFs estilo meme pa reírte un rato*' }, { quoted: fkontak2 });

  } catch (err) {
    conn.reply(m.chat, '*[❗INFO❗] Ocurrió un error al enviar el menú. Revisa tu conexión o el link del video.*', m);
  }
};

handler.command = /^(menu5|menumemes|gifmenu)$/i;
export default handler;

function clockString(ms) {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor(ms / 60000) % 60;
  const s = Math.floor(ms / 1000) % 60;
  return [h, m, s].map(v => v.toString().padStart(2, '0')).join(':');
  }
