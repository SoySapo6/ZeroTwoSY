import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, command, text }) => {
  if (!text) return m.reply(`🌟 Ingresa un nombre para buscar en YouTube.\n\n✨ *Ejemplo:* ${usedPrefix + command} toxic`);

  try {
    const searchApi = `https://delirius-apiofc.vercel.app/search/ytsearch?q=${text}`;
    const searchResponse = await fetch(searchApi);
    const searchData = await searchResponse.json();

    if (!searchData?.data || searchData.data.length === 0) {
      return m.reply(`⚠️ No encontré resultados para *"${text}"*...`);
    }

    const video = searchData.data[0];

    const waitMessage = `☁️ *︙${video.title}*\n\n` +
      `🎧 *Artista:* ${video.author.name}\n` +
      `⏳ *Duración:* ${video.duration}\n` +
      `👀 *Vistas:* ${video.views}\n` +
      `➺ 𝑬𝒔𝒑𝒆𝒓𝒂 𝒖𝒏 𝒑𝒐𝒒𝒖𝒊𝒕𝒐, 𝒆𝒔𝒕𝒂𝒎𝒐𝒔 𝒃𝒂𝒋𝒂𝒏𝒅𝒐 𝒕𝒖 𝒄𝒂𝒏𝒄𝒊ó𝒏... 𝙉𝙤𝙩𝙖 𝙮 𝙧𝙚𝙘𝙪𝙚𝙧𝙙𝙖 𝙦𝙪𝙚 𝙥𝙪𝙚𝙙𝙚𝙨 𝙪𝙨𝙖𝙧 𝙥𝙡𝙖𝙮𝙖𝙪𝙙𝙞𝙤 𝙥𝘼𝙧𝙖 𝙢𝙚𝙟𝙤𝙧 𝙘𝙖𝙡𝙞𝙙𝙖𝙙 🤫`;

    await conn.sendMessage(m.chat, {
      image: { url: video.image },
      caption: waitMessage.trim(),
      contextInfo: {
        forwardingScore: 999,
        isForwarded: true
      }
    }, { quoted: m });

    const downloadApi = `https://api.vreden.my.id/api/ytmp3?url=${video.url}`;
    const downloadResponse = await fetch(downloadApi);
    const downloadData = await downloadResponse.json();

    if (!downloadData?.result?.download?.url) {
      return m.reply("❌ No se pudo obtener el audio del video.");
    }

    const audioUrl = downloadData.result.download.url;

    await conn.sendMessage(m.chat, {
      audio: { url: audioUrl },
      mimetype: 'audio/mpeg',
      ptt: false,
      fileName: `🎵 ${video.title}.mp3`,
      contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        externalAdReply: {
          title: "ツ 𝙕𝙚𝙧𝙤-𝙗𝙤𝙩 ૮₍ ˶•⤙•˶ ₎ა",
          body: "©𝙋𝙤𝙬𝙚𝙧𝙚𝙙 𝙗𝙮 𝙢𝙖𝙮𝙘𝙤𝙡 𝙮 𝙮𝙤𝙨𝙪𝙚😉",
          thumbnailUrl: video.image,
          mediaUrl: "https://chat.whatsapp.com/KqkJwla1aq1LgaPiuFFtEY",
          mediaType: 2,
          showAdAttribution: true,
          renderLargerThumbnail: true
        }
      }
    }, { quoted: m });

    await m.react("▶️");
  } catch (error) {
    console.error(error);
    m.reply(`❌ Ocurrió un error:\n${error.message}`);
  }
};

handler.command = ['play', 'play'];
handler.help = ['play <texto>', 'playaudio <texto>'];
handler.tags = ['media'];

export default handler;
