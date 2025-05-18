art(2, '0')).join(':');
      }
import fetch from 'node-fetch';

const handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
    const videoMenu = 'https://files.catbox.moe/m7nd3i.mp4'; // URL del video del menú

    const ownerMenu = `
🌟 『 👑 𝙈𝙚𝙣𝙪 𝙊𝙬𝙣𝙚𝙧 👑 』 🌟

📆 *Fecha:* ${new Date().toLocaleDateString('es', { day: 'numeric', month: 'long', year: 'numeric'})}
⏳ *Activo por:* ${clockString(process.uptime() * 1000)}

(≧∇≦)/ 𝙘𝙤𝙢𝙖𝙣𝙙𝙤𝙨 𝙙𝙚 𝘼𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙘𝙞𝙤́𝙣 ૮(˶ᵔᵕᵔ˶)ა
😖.𝙖𝙙𝙙𝙚𝙨𝙩𝙧𝙚𝙡𝙡𝙖𝙨
🤭.𝙖𝙙𝙙𝙥𝙧𝙚𝙢
☺. 𝘼𝙪𝙩𝙤𝙖𝙙𝙢𝙞𝙣 
😘.𝙖𝙫𝙖𝙣𝙯𝙖𝙙𝙤𝙨
😍.𝙗𝙖𝙘𝙠𝙪𝙥
🤩.𝙗𝙖𝙣𝙘𝙝𝙖𝙩
😇.𝙗𝙖𝙣𝙡𝙞𝙨𝙩
😡.𝙗𝙖𝙣𝙪𝙨𝙚𝙧
🥲.𝙗𝙘𝙜𝙘
😝.𝙗𝙘𝙜𝙘2
😃.𝙗𝙡𝙤𝙘𝙠-𝙪𝙣𝙗𝙡𝙤𝙘𝙠
👋.owner-setbanner
🤔.owner-setbotname
😧.owner-sp
😌.owner-spame2
🤯.owner-sugerencia
👻.owner-sugerencia2
😊.owner-unbanchats
😍.owner-unbanuser
🔥.owner-update
🤧.owner blocklist
😳.owner broadcast
🤫.owner chetar
😍.owner cleardb
🧐.owner cleartmp
😵.owner creargc
🥱.owner delmsg
🤕.owner delprem
😺.owner desactivarwa
😸.owner dsowner
📁 .owner-enviarmsg
📜 .owner-enviarmsg
🤕.owner-enviarmsgcanal
⚙️ .owner-exec
🛠️ .owner-exec2
🧩 .owner-funcas
📦 .owner-getdb
📄. owner-getfile
 📑. owner-grouplist
➕ .owner-join
🧲 .owner-kickall.js
🚪 .owner-leavegc.js
🤖 .owner-nuevabiobot
📸 .owner-nuevafotobot
😸.owner-nuevonombrebo
⚙️ .owner-prefix.js
💰 .owner-prestamo
⚠️ .owner-reporte
🔄 .owner-resetpersonajes
⚙️ .owner-resetprefix.js
👤 .owner-resetuser.js
🚀 .owner-restart.js
🤝 .owner-reunion
👋 .owner-saludo
🖼️ .owner-saveimagen

🤧 *"El control total está en tus manos."* 😊
> Hola queridos owners 👋 cómo ya saben soy zero two 😌 y estos son los comandos de los owners 😸 haci que echa un vistazo porfavor 
> `creadores soymaycol,adonay, yosue y nagi`🔥
`.trim();

    // 📜 Enviar el menú completo con video
    await conn.sendMessage(m.chat, {
      video: { url: videoMenu},
      caption: ownerMenu,
      gifPlayback: true,
      gifAttribution: 0
});

} catch {
    conn.reply(m.chat, '*❌ Error al enviar el menú, por favor verifica la URL o la conexión.*', m);
}
};

handler.command = /^(menuowner)$/i;
export default handler;

function clockString(ms) {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor(ms / 60000) % 60;
  const s = Math.floor(ms / 1000) % 60;
  return [h, m, s].map(v => v.toString().padStart(2, '0')).join(':');
      }
