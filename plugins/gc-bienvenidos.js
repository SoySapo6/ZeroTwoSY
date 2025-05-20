import fs from 'fs';
import path from 'path';

let handler = async (m, { conn, usedPrefix }) => {
    let who;

    if (m.mentionedJid.length > 0) {
        who = m.mentionedJid[0];
    } else if (m.quoted) {
        who = m.quoted.sender;
    } else {
        who = m.sender;
    }

    let name = conn.getName(who);
    let name2 = conn.getName(m.sender);
    m.react('❤️'); // Reacción inspirada en el amor característico de Zero Two

    // Mensajes personalizados con referencias a Zero Two
    let str;
    if (m.mentionedJid.length > 0) {
        str = `✨ ${name2} *te da la bienvenida con un toque de Zero Two:* "Bienvenido, ${name || who}. ¿Estás listo para ser mi Darling?" ✨`;
    } else if (m.quoted) {
        str = `🌸 ${name2} *saluda a* ${name || who} *con un mensaje estilo Zero Two:* "Espero que lo disfrutes... y que no te olvides de sonreír, como un verdadero compañero de equipo."`;
    } else {
        str = `💖 ${name2} *le da la bienvenida a los nuevos miembros:* "Recuerden disfrutar como si estuvieran en un mundo de emoción y aventura. ¡Lean las reglas y prepárense para lo mejor!"`.trim();
    }

    if (m.isGroup) {
        let pp = 'https://telegra.ph/file/zero-two-inspired-video.mp4'; // Puedes usar un video relacionado con Zero Two

        const videos = [pp];
        const video = videos[Math.floor(Math.random() * videos.length)];

        let mentions = [who];
        conn.sendMessage(m.chat, { video: { url: video }, gifPlayback: true, caption: str, mentions }, { quoted: m });
    }
}

handler.help = ['bienvenidos/nuevos @tag'];
handler.tags = ['grupo'];
handler.command = ['bienvenidos','nuevos'];
handler.group = true;

export default handler;
