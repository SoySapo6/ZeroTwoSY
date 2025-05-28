import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
import { promises } from 'fs'
import { join } from 'path'

let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {
    try {
        let { exp, diamantes, level, role } = global.db.data.users[m.sender]
        let { min, xp, max } = xpRange(level, global.multiplier)
        let name = await conn.getName(m.sender)
        exp = exp || 'Desconocida';
        role = role || 'Aldeano';

        const _uptime = process.uptime() * 1000;
        const uptime = clockString(_uptime);

        let totalreg = Object.keys(global.db.data.users).length
        let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length

        await m.react('❤️')

        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
        let perfil = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://files.catbox.moe/wmbm7l.jpg')

        const videoUrl = 'https://files.catbox.moe/m7nd3i.mp4' 
        const imagenAviso = 'https://files.catbox.moe/ot3wfw.jpg' 

        await conn.sendMessage(m.chat, {
            image: { url: imagenAviso },
            caption: "😊 ** Estamos enviando el menú, espere unos segundos por favor...🤭"
        });

        await new Promise(resolve => setTimeout(resolve, 2000));
        
        let menu = `
૮₍ ˶•⤙•˶ ₎ა  ¡Hola! ¿Cómo estás?
💙${taguser}
❤ ${saludo} 💙
☯『❤ Zero Two💙』☯

💙 *Usuario:* ${name}
❤ *Rango:* ${role}
💙 *Activo por:* ${uptime}
❤ *Miembros de Zero Two:* ${totalreg}

💙『Comandos de Zero Two』❤
> Listas de menú de la bot
> Menu
> Menu2
> Menu5
> Menuff
> Menulogos
> Menuown
> Menusearch 
> Menugp
> Menufun
> Menudl
> Menu +18
> Menuanime

> Hola 👋😁 Esta bot está en desarrollo, puedes usarla si deseas. En próximas actualizaciones habrá más funciones ❤️ Desarrollo por Soymaycol y Yosue
`.trim();

        await conn.sendMessage(m.chat, {
            video: { url: videoUrl }, 
            caption: menu,
            contextInfo: {
                mentionedJid: [m.sender],
                isForwarded: true,
                forwardingScore: 999,
                externalAdReply: {
                    title:'૮₍ ˶•⤙•˶ ₎ა Zero Two',
                    thumbnailUrl: perfil,
                    mediaType: 1,
                    renderLargerThumbnail: false,
                },
            },
            gifPlayback: true,
            gifAttribution: 0
        }, { quoted: null })
    } catch (e) {
        await m.reply(`*[ 😞 ] Ocurrió un error al enviar el menú 😞.*\n\n${e}`)
    }
}

handler.help = ['menuff'];
handler.tags = ['main'];
handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|cmd)$/i;
handler.fail = null;

export default handler;

const more = String.fromCharCode(8206)
const
