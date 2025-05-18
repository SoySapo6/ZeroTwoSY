import fetch from 'node-fetch';

const handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
    const pp = 'https://telegra.ph/file/f8d52cf2533629126ded8.jpg'; // Imagen decorativa (puedes usar una local o buffer)
    const videoURL = 'https://files.catbox.moe/m7nd3i.mp4'; // URL del video del menú

    const d = new Date(new Date() + 3600000);  
    const locale = 'es';  
    const date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric'});  
    const _uptime = process.uptime() * 1000;  
    const uptime = clockString(_uptime);  
    const rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length;  

    const str = `
╭━━〔 *Zero Two* 〕━━◆
┃
┃ *Fecha:* ${date}
┃ *Uptime:* ${uptime}
┃ *Registrados:* ${rtotalreg}
┃
┃ > Hola soy Zero Two.
┃   Aquí está tu menú:
┃
┃ ∘ .play
┃ ∘ .ytmp3
┃ ∘ .ytmp4
┃ ∘ .play2
┃ ∘ .playaudio
┃ ∘ .playvideo
┃ ∘ .tiktoksearch
┃ ∘ .tiktoksearch2
┃ ∘ .spotifysearch
┃ ∘ .pinterest
┃ ∘ .imágenes
┃
╰━━━━━━━━━━━━━━━━━━◆
`.trim();

    const fkontak2 = {
      key: { participants: '0@s.whatsapp.net', remoteJid: 'status@broadcast', fromMe: false, id: 'Halo' },
      message: {
        contactMessage: {
          vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:Yosue\nEND:VCARD`
        }
      },
      participant: '0@s.whatsapp.net'
    };

    await conn.sendMessage(m.chat, { image: { url: pp }, caption: str }, { quoted: fkontak2 });
    await conn.sendMessage(m.chat, { video: { url: videoURL }, caption: '🌸 *Aquí tienes tu menú junto con el video*' }, { quoted: fkontak2 });

  } catch (err) {
    console.error(err);
    conn.reply(m.chat, '[❗INFO❗] Hubo un error al enviar el menú. Verifica la conexión o la URL del video.', m);
  }
};

handler.command = /^(menudl)$/i;
export default handler;

function clockString(ms) {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor(ms / 60000) % 60;
  const s = Math.floor(ms / 1000) % 60;
  return [h, m, s].map(v => v.toString().padStart(2, '0')).join(':');
}
