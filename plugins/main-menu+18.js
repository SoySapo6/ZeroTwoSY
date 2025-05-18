import fetch from 'node-fetch';

const handler = async (m, {conn, usedPrefix, text, isPrems}) => {

  try {
    const img = './media/menus/Menu.jpg';
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];

    const str = `👋 ¡Hᴏʟᴀ soy zero two 🔥! ${taguser}
Bienvenido al menú más caliente de por aquí 🔥

\`\`\`${fechaHora}\`\`\`

  ঞじòぴé𝘽𝙪𝙨𝙘𝙖𝙙𝙤𝙧𝙚𝙨 🔥ઈଓᦗ࿐
🔥.xnxxsearch *texto*
🔥.xvsearch *texto*
🔥.phsearch *texto*
🔥.r34 *texto*
◌⑅⃝●♡⋆♡ descargas😏 ♡⋆♡●⑅⃝◌
🔥.xnxxdl *ulr*
🔥.xvdl *url*
🔥 .phdl *url*

༻𓊈𒆜gif🔥 𒆜𓊉༺ര ׄ⃟🦪🔥 .follar *@tag*
🔥.coger *@tag*
🔥.coger2 *@tag*
🔥.penetrar *@tag*
🔥 .anal *@tag*
🔥 .sexo *@tag*
🔥 .violar *@tag*
🔥 .rusa *@tag*
🔥 .sixnine *@tag*
🔥 .pies *@tag*
🔥.mamada *@tag*
🔥 .lickpussy *@tag*
🔥.grabboobs *@tag*
🔥 .suckboobs *@tag*
🔥 .cum *@tag*
🔥 .fap *@tag*
🔥 .manosear *@tag*
🔥 .lesbianas *@tag*
დ .•*””*•   𝙘𝙤𝙣𝙩𝙚𝙣𝙞𝙙𝙤 🔞   •*””*•.დ
🔥.pack
🔥 .pack2
🔥 .pack3
🔥 .videoxxx
🔥 .videoxxx2
🔥 .randomxxx
🔥 .nsfwloli
🔥.nsfwfoot
🔥.nsfwass
🔥 .nsfwbdsm
🔥 .nsfwcum
🔥 .nsfwero
🔥.nsfwfemdom
🔥 .nsfwglass
🔥 .nsfworgy
🔥 .yuri
🔥 .yuri2
🔥 .yaoi
🔥 .yaoi2
🔥.panties
🔥 .tetas
🔥 .booty
🔥 .ecchi
🔥 .furro
🔥 .hentai
🔥.trapito
🔥 .imagenlesbians
🔥 .pene
🔥.porno
🔥 .pechos

> Hola queridos usuarios soy zero two como ya todos saben 😏 este es el menú más caliente que hay por aquí haci que echa un vistazo que si lo usaste fue para algo🔥 *creadores soymaycol wirk yosue y nagi 🔥*
`.trim();
 conn.sendMessage(m.chat, { image: { url: img }, caption: str, mentions: [m.sender] }, { quoted: fkontak });

await conn.sendMessage(m.chat, { react: { text: '😏', key: m.key } });

  } catch {
    conn.reply(m.chat,'*[ ℹ️ ] uhhh 😓 Error al enviar el menú.*\n\n> ${e}', m);
  }
};

handler.help = ['menunsfw']
handler.command = /^(menunsfw|comandosnsfw|menuhorny|hornymenu|labiblia|menu18|menu+18|menucaliente|menuporno|pornomenu|menuxxx)$/i;
handler.fail = null;

export default handler;
