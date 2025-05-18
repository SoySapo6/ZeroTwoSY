import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
   await m.react('😸');

    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
    let name = await conn.getName(who);
    let edtr = `@${m.sender.split`@`[0]}`;
    let username = conn.getName(m.sender);

    // VCARD
    let list = [{
        displayName: "zero two OFC",
        vcard: `BEGIN:VCARD\nVERSION:3.0\nFN: yosue ortega\nitem1.TEL;waid=584242773183:584242773183\nitem1.X-ABLabel:Número\nitem2.EMAIL;type=INTERNE: yosueortega630@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://whatsapp.com/channel/0029VbAXuUtB4hdYWC6m2R1h\nitem3.X-ABLabel:Internet\nitem4.ADR:;; Perú;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`,
    }];

    await conn.sendMessage(m.chat, {
        contacts: {
            displayName: `${list.length} Contacto`,
            contacts: list
        },
        contextInfo: {
            externalAdReply: {
                ZerotwoAdAttribution: true,
                title: '𝙝𝙤𝙡𝙖 𝙘𝙤𝙢𝙤 𝙚𝙨𝙩𝙖𝙨 𝙨𝙤𝙢𝙤𝙨 𝙡𝙤𝙨 𝙘𝙧𝙚𝙖𝙙𝙤𝙧𝙚𝙨 𝙙𝙚 𝙕𝙚𝙧𝙤 𝙩𝙬𝙤 𝙗𝙤𝙩',
                body: dev,
                thumbnailUrl: 'https://d.uguu.se/wrCvoNjp.jpg',
                sourceUrl: 'https://wa.me/51927238856?text=Vengo+Del+Comando+.owner',
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, {
        quoted: m
    });

    let txt = `👋 *Hola como estás😸\`${username}\` este es*\n*el contacto de mi creador*`;

    await conn.sendMessage(m.chat, { text: txt });
};

handler.help = ['owner', 'creador'];
handler.tags = ['info'];
handler.command = /^(owner|creator|creador|dueño)$/i;

export default handler;
