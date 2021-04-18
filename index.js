

//--Whatsapp Connecting
const {
  WAConnection,
  MessageType,
  Presence,
  Mimetype,
  GroupSettingChange,
  MessageOptions,
  WALocationMessage,
  WA_MESSAGE_STUB_TYPES,
  ReconnectMode,
  ProxyAgent,
  waChatKey,
  mentionedJid,
  processTime,
  ChatModification,
} = require('@adiwajshing/baileys');
//--

//--File js
const {color, bgcolor} = require('./lib/color');
const {bahasa} = require('./src/bahasa');
const {negara} = require('./src/kodenegara');
const {wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, clos } = require('./lib/functions');
const {fetchJson} = require('./lib/fetcher');
const {recognize} = require('./lib/ocr');

//--

//--Pakage Npm
const fs = require('fs');
const moment = require('moment-timezone');
const {exec} = require('child_process');
const kagApi = require('@kagchi/kag-api');
const fetc = require('node-fetch');
const tiktod = require('tiktok-scraper');
const ffmpeg = require('fluent-ffmpeg');
const {removeBackgroundFromImageFile} = require('remove.bg');
const imgbb = require('imgbb-uploader');
const lolis = require('lolis.life');
const loli = new lolis();
const speed = require('performance-now');
const cd = 4.32e+7 ;
const crypto = require('crypto');
const qrcode = require("qrcode-terminal");
const axios = require('axios');
//--

//--File json bot
const welkom = JSON.parse(fs.readFileSync('./data/welkom.json'));
const up = JSON.parse(fs.readFileSync('./data/settings.json'));
const samih = JSON.parse(fs.readFileSync('./data/simi.json'))
//--

//--File json temp
const setiker = JSON.parse(fs.readFileSync('./temp/stik.json'))
const videonye = JSON.parse(fs.readFileSync('./temp/vid.json'))
const audionye = JSON.parse(fs.readFileSync('./temp/vn.json'))
const imagenye = JSON.parse(fs.readFileSync('./temp/image.json'))

//--File json user
/*const _limit = JSON.parse(fs.readFileSync('./datauser/limit.json'));
const uang = JSON.parse(fs.readFileSync('./datauser/uang.json'));*/
const _registered = JSON.parse(fs.readFileSync('./datauser/registered.json'));
//--

//--File json data
const trut = JSON.parse(fs.readFileSync('./data/truth.json'));
const fak = JSON.parse(fs.readFileSync('./data/dare.json'));
const dare = JSON.parse(fs.readFileSync('./data/fakta.json'));
//--


//--Setting
prefix = up.prefix
//const limitawal = up.limit;
const memberlimit = up.memberlimit;
const cr = up.cr;
//const hargalimit = up.hargalimit;
const NamaBot = up.NamaBot;
const Ig = up.Ig;
const Wa1 = up.Wa1;
const Wa2 = up.Wa2;
const Ovo = up.Ovo;
const Pulsa = up.Pulsa;
const Dana = up.Dana;
const blocked = [];
const ownerNumber = up.ownerNumber;
//--

//--Apikey
BarBarKey = up.BarBarKey;
vKey = up.Vhtearkey;
viKey = up.Vinzapi
meKey = up.Itsmeikyapi
lolKey = up.LolHumanKey
//--

//--Kontak
const vcard = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ 'FN:Mr.Pato\n' // Nama
+ 'ORG:Mr.Pato-Bot;\n' // Nama bot
+ 'TEL;type=CELL;type=VOICE;waid=523317595519:+52 33 1759 5519\n' // Nomor bot
+ 'END:VCARD' 


//--Datauser

/*const getLimit = (sender) => {
  let position = false
  Object.keys(limit).forEach ((i) => {
if (limit[position].id === sender) {
  position = i
}
  })
  if (position !== false) {
return limit[position].limit
  }
}
*/
const getRegisteredRandomId = () => {
  return _registered[Math.floor(Math.random() * _registered.length)].id
}

const addRegisteredUser = (userid, sender, age, time, serials) => {
  const obj = {
id: userid,
name: sender,
age: age,
time: time,
serial: serials
  }
  _registered.push(obj)
  fs.writeFileSync('./datauser/registered.json', JSON.stringify(_registered))
}

const createSerial = (size) => {
  return crypto.randomBytes(size).toString('hex').slice(0, size)
}

const checkRegisteredUser = (sender) => {
  let status = false
  Object.keys(_registered).forEach((i) => {
if (_registered[i].id === sender) {
  status = true
}
  })
  return status
}


/*const addATM = (sender) => {
  const obj = {
id: sender, uang: 0
  }
  uang.push(obj)
  fs.writeFileSync('./datauser/uang.json',
JSON.stringify(uang))
}

const addKoinUser = (sender, amount) => {
  let position = false
  Object.keys(uang).forEach((i) => {
if (uang[i].id === sender) {
  position = i
}
  })
  if (position !== false) {
uang[position].uang += amount
fs.writeFileSync('./datauser/uang.json', JSON.stringify(uang))
  }
}

const checkATMuser = (sender) => {
  let position = false
  Object.keys(uang).forEach((i) => {
if (uang[i].id === sender) {
  position = i
}
  })
  if (position !== false) {
return uang[position].uang
  }
}

const bayarLimit = (sender, amount) => {
  let position = false
  Object.keys(_limit).forEach((i) => {
if (_limit[i].id === sender) {
  position = i
}
  })
  if (position !== false) {
_limit[position].limit -= amount
fs.writeFileSync('./datauser/limit.json', JSON.stringify(_limit))
  }
}

const confirmATM = (sender, amount) => {
  let position = false
  Object.keys(uang).forEach((i) => {
if (uang[i].id === sender) {
  position = i
}
  })
  if (position !== false) {
uang[position].uang -= amount
fs.writeFileSync('./datauser/uang.json', JSON.stringify(uang))
  }
}

const limitAdd = (sender) => {
  let position = false
  Object.keys(_limit).forEach((i) => {
if (_limit[i].id == sender) {
  position = i
}
  })
  if (position !== false) {
_limit[position].limit += 1
fs.writeFileSync('./datauser/limit.json', JSON.stringify(_limit))
  }
}
*/

//--Waktu
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var second = Math.floor(seconds % 60);
  return `${pad(hours)}:${pad(minutes)}:${pad(second)}`;
}
//--


//--Whatsapp start connect
async function starts() {
	const Lxa = new WAConnection()
	Lxa.logger.level = 'warn'
	console.log(banner.string)
	Lxa.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code above'))
	})

	fs.existsSync('./Lexa.json') && Lxa.loadAuthInfo('./Lexa.json')
	Lxa.on('connecting', () => {
		start('2', 'Connecting...')
	})
	Lxa.on('open', () => {
		success('2', 'Connected')
	})
	await Lxa.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./Lexa.json', JSON.stringify(Lxa.base64EncodedAuthInfo(), null, '\t'))


	Lxa.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await Lxa.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				teks = `🎊😍 *¡𝐁𝐈𝐄𝐍𝐕𝐄𝐍𝐈𝐃𝐎 𝐀𝐋 𝐆𝐑𝐔𝐏𝐎!* 😍🎊\n\n@${num.split('@')[0]}, *¡𝙇𝙤𝙨 𝘼𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙙𝙤𝙧𝙚𝙨 𝙮 𝙩𝙤𝙙𝙤𝙨 𝙡𝙤𝙨 𝙈𝙞𝙚𝙢𝙗𝙧𝙤𝙨 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤 𝙩𝙚 𝙙𝙖𝙢𝙤𝙨 𝙡𝙖 𝙗𝙞𝙚𝙣𝙫𝙚𝙣𝙞𝙙𝙖 𝙮 𝙩𝙚 𝙖𝙜𝙧𝙖𝙙𝙚𝙘𝙚𝙢𝙤𝙨 𝙚𝙡 𝙦𝙪𝙚 𝙚𝙨𝙩𝙚𝙨 𝙖𝙦𝙪𝙞. 𝙋𝙖𝙧𝙖 𝙥𝙤𝙙𝙚𝙧 𝙚𝙨𝙩𝙖𝙧 𝙖𝙦𝙪𝙞 𝙙𝙚𝙗𝙚𝙨 𝙙𝙚 𝙘𝙪𝙢𝙥𝙡𝙞𝙧 𝙪𝙣𝙖𝙨 𝙣𝙤𝙧𝙢𝙖𝙨 𝙚𝙨𝙩𝙖𝙗𝙡𝙚𝙘𝙞𝙙𝙖𝙨 𝙦𝙪𝙚 𝙩𝙚𝙣𝙙𝙧𝙖𝙨 𝙚𝙣 𝙡𝙖 𝙙𝙚𝙨𝙘𝙧𝙞𝙥𝙘𝙞𝙤𝙣!*\n\n⚠️ *¡𝐒𝐢 𝐢𝐧𝐜𝐥𝐮𝐦𝐩𝐥𝐞𝐬 𝐥𝐚𝐬 𝐧𝐨𝐫𝐦𝐚𝐬, 𝐓𝐞 𝐕𝐚𝐬 𝐅𝐮𝐞𝐫𝐚!*\n⚠️ *¡𝐒𝐢 𝐩𝐚𝐬𝐚𝐬 𝐜𝐨𝐧𝐭𝐞𝐧𝐢𝐝𝐨 𝐢𝐧𝐚𝐝𝐞𝐜𝐮𝐚𝐝𝐨, 𝐓𝐞 𝐕𝐚𝐬 𝐅𝐮𝐞𝐫𝐚!*\n⚠️ *¡𝐒𝐢 𝐦𝐨𝐥𝐞𝐬𝐭𝐚𝐬 𝐚 𝐜𝐮𝐚𝐥𝐪𝐮𝐢𝐞𝐫𝐚, 𝐓𝐞 𝐕𝐚𝐬 𝐅𝐮𝐞𝐫𝐚!*\n\n@${num.split('@')[0]}\n😇💙 *¡¡𝐃𝐈𝐕𝐈𝐄𝐑𝐓𝐄𝐓𝐄 𝐘 𝐃𝐈𝐒𝐅𝐑𝐔𝐓𝐀!!* 💙😇
        `
				Lxa.sendMessage(mdata.id, teks, MessageType.text, { contextInfo: {"mentionedJid": [num]}})
			/*} else if (anu.action == 'remove') {
				num = anu.participants[0]
				teks = `Que bueno que te fuiste @${num.split('@')[0]} no te queriamos 👋`
				Lxa.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}})*/
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})

	Lxa.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	Lxa.on('chat-update', async (mek) => {
		try {
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
      const is = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
			mess = {
  wait: '⏳ Espera ',
  success: '🎉 Con exito',
  Public: '🛡 Modo privado activado',
  ferr: 'Lo siento ocurrio un error',
  limitend: 'El tiempo se agoto',
  error: {
  stick: 'Intentalo al rato :(',
  Iv: 'Error en el link'
  },
  only: {
    group: '❌ *¡𝑳𝒐 𝒔𝒆𝒏𝒕𝒊𝒎𝒐𝒔, ¡𝒆𝒔𝒕𝒆 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 𝒔𝒐𝒍𝒐 𝒔𝒆 𝒑𝒖𝒆𝒅𝒆 𝒖𝒔𝒂𝒓 𝒅𝒆𝒏𝒕𝒓𝒐 𝒅𝒆 𝒈𝒓𝒖𝒑𝒐𝒔!* ❌',
    ownerG: '⛔😡 *¡𝐈𝐍𝐓𝐄𝐍𝐓𝐎 𝐃𝐄 𝐒𝐔𝐏𝐋𝐀𝐍𝐓𝐀𝐂𝐈𝐎𝐍!* 😡⛔\n\n*¡𝑵𝒐 𝒊𝒏𝒕𝒆𝒏𝒕𝒆𝒔 𝒖𝒔𝒂𝒓 𝒍𝒐𝒔 𝒄𝒐𝒎𝒂𝒏𝒅𝒐𝒔 𝒅𝒆 𝒍𝒐𝒔 𝑫𝒊𝒐𝒔𝒆𝒔 𝒔𝒂𝒃𝒊𝒆𝒏𝒅𝒐 𝒒𝒖𝒆 𝒆𝒓𝒆𝒔 𝒖𝒏𝒂 𝒎𝒂𝒍𝒅𝒊𝒕𝒂 𝒓𝒂𝒕𝒂 𝒎𝒂́𝒔 𝒆𝒏 𝒆𝒔𝒕𝒆 𝑮𝒓𝒖𝒑𝒐. 𝑺𝒐𝒍𝒐 𝒍𝒐𝒔 𝒅𝒊𝒐𝒔𝒆𝒔 𝒑𝒖𝒆𝒅𝒆𝒏 𝒖𝒔𝒂𝒓𝒍𝒐!*\n\n⛔🐀 *¡𝐍𝐎 𝐋𝐎 𝐔𝐒𝐄𝐒 𝐌𝐀𝐒 𝐑𝐀𝐓𝐀!* 🐀⛔',
    ownerB: '⛔😡 *¡𝐈𝐍𝐓𝐄𝐍𝐓𝐎 𝐃𝐄 𝐒𝐔𝐏𝐋𝐀𝐍𝐓𝐀𝐂𝐈𝐎𝐍!* 😡⛔\n\n*¡𝑵𝒐 𝒊𝒏𝒕𝒆𝒏𝒕𝒆𝒔 𝒖𝒔𝒂𝒓 𝒍𝒐𝒔 𝒄𝒐𝒎𝒂𝒏𝒅𝒐𝒔 𝒅𝒆 𝒍𝒐𝒔 𝑫𝒊𝒐𝒔𝒆𝒔 𝒔𝒂𝒃𝒊𝒆𝒏𝒅𝒐 𝒒𝒖𝒆 𝒆𝒓𝒆𝒔 𝒖𝒏𝒂 𝒎𝒂𝒍𝒅𝒊𝒕𝒂 𝒓𝒂𝒕𝒂 𝒎𝒂́𝒔 𝒆𝒏 𝒆𝒔𝒕𝒆 𝑮𝒓𝒖𝒑𝒐. 𝑺𝒐𝒍𝒐 𝒍𝒐𝒔 𝒅𝒊𝒐𝒔𝒆𝒔 𝒑𝒖𝒆𝒅𝒆𝒏 𝒖𝒔𝒂𝒓𝒍𝒐!*\n\n⛔🐀 *¡𝐍𝐎 𝐋𝐎 𝐔𝐒𝐄𝐒 𝐌𝐀𝐒 𝐑𝐀𝐓𝐀!* 🐀⛔',
    admin: '❌ *¡𝐒𝐨𝐥𝐨 𝐩𝐮𝐞𝐝𝐞𝐧 𝐞𝐣𝐞𝐜𝐮𝐭𝐚𝐫 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐥𝐨𝐬 𝐀𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫𝐞𝐬 𝐝𝐞 𝐞𝐬𝐭𝐞 𝐠𝐫𝐮𝐩𝐨!* ❌',
    Badmin: '❌ *¡𝐏𝐚𝐫𝐚 𝐮𝐬𝐚𝐫 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐞𝐥 𝐁𝐨𝐭 𝐝𝐞𝐛𝐞 𝐝𝐞 𝐬𝐞𝐫 𝐀𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫 𝐝𝐞𝐥 𝐠𝐫𝐮𝐩𝐨!* ❌',
    daftarB: `usa .verify`
  }
}
      const totalchat = await Lxa.chats.all()
			const botNumber = Lxa.user.jid
			const ownerNumber = [`${up.ownerNumber}@s.whatsapp.net`] // replace this with your number
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await Lxa.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isSimi = isGroup ? samih.includes(from): false
      const isRegister = checkRegisteredUser(sender)
      const q = args.join(' ')
      const tescuk = ["0@s.whatsapp.net"]
			let pushname = Lxa.contacts[sender] != undefined ? Lxa.contacts[sender].vname || Lxa.contacts[sender].notify: undefined
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			
//--Balasan bot
			const reply = (teks) => {
				Lxa.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				Lxa.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? Lxa.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : Lxa.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const costum = (pesan, tipe, target, target2) => {
      Lxa.sendMessage(from, pesan, tipe, {quoted: {key: {fromMe: false, participant: `${target}`, ...(from ? {
  remoteJid: from
}: {})
  }, message: {
conversation: `${target2}`
  }}})
}
const sendPtt = (teks) => {
  Lxa.sendMessage(from, audio, mp3, {
quoted: mek
  })
}
			
//--MessageType
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedText = type === 'extendedTextMessage' && content.includes('textMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

//--Colors
      colors = ['red','white','black','blue','yellow','green']

//--Console log grup
			if (!isGroup && isCmd) console.log('\x1b[1;37m>', time, color(command), 'from', color(pushname), 'args :', (args.length))
			
//--Console log chat pribadi
			if (isCmd && isGroup) console.log('\x1b[1;37m>', time, color(command), 'from', (groupName), 'args :', color(args.length))

//---Metadata stiker
			function addMetadata(packname, author) {	
				if (!packname) packname = 'WABot'; if (!author) author = 'Bot';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	
					return `./src/stickers/${name}.exif`	
				})	

			}

//----limit
/*const isLimit = (sender) => {
  let position = false
  for (let i of _limit) {
if (i.id === sender) {
  let limits = i.limit
  if (limits >= limitawal) {
position = true
return true
  } else {
_limit
position = true
return false
  }
}
  }
  if (position === false) {
const obj = {
  id: sender,
  limit: 1
}
_limit.push(obj)
fs.writeFileSync('./datauser/limit.json', JSON.stringify(_limit))
return false
  }
}

//--check limit user
const checkLimit = (sender) => {
      let found = false
     for (let lmt of _limit) {
     if (lmt.id === sender) {
      limitCounts = limitawal - lmt.limit
     if (limitCounts <= 0) return Lxa.sendMessage(from, `Maaf limit kamu telah habis, silahkan lakukan pembelian ulang`, text,{ quoted: mek})
      Lxa.sendMessage(from, `〘  *Limit* 〙
Sisa limit anda : *${limitCounts}*
_Penggunaan limit hanya pada fitur-fitur tertentu_`, text, { quoted : mek})
      found = true
                                }
                        }
      if (found === false) {
      let obj = { id: sender, limit: 1 }
      _limit.push(obj)
     fs.writeFileSync('./datauser/limit.json', JSON.stringify(_limit))
     Lxa.sendMessage(from, `〘  *Limit* 〙
Sisa limit anda : *${limitCounts}*
_Penggunaan limit hanya pada fitur-fitur tertentu_`, text, { quoted : mek})
                        }
                }

//--Balance
if (isRegister && isGroup) {
  const checkATM = checkATMuser(sender)
  try {
if (checkATM === undefined) addATM(sender)
const uangsaku = Math.floor(Math.random() * 10) + 90
addKoinUser(sender, uangsaku)
  } catch (err) {
console.error(err)
  }
}
*/

//--Member limit
if (isGroup) {
  try {
const getmemex = groupMembers.length
if (getmemex <= memberlimit) {
  Lxa.sendMessage(from, `Los miembros de este grupo son insuficientes ${memberlimit}, para usar este bot`, text)

  setTimeout(() => {
Lxa.groupLeave(from) // ur cods
  }, 5000) // 1000 = 1s,
}
  } catch {
console.error(err)
  }
}


//--Other Function
        const callate = ['¡𝑪𝒐𝒎𝒐 𝒏𝒐 𝒕𝒆 𝒄𝒂𝒍𝒍𝒆𝒔 𝒅𝒆 𝒖𝒏𝒂 𝒎𝒂𝒍𝒅𝒊𝒕𝒂 𝒗𝒆𝒛, 𝒕𝒆 𝒗𝒂𝒎𝒐𝒔 𝒂 𝒎𝒆𝒕𝒆𝒓 𝒅𝒆 𝒑𝒐𝒍𝒍𝒂𝒛𝒐𝒔 𝒆𝒏 𝒆𝒔𝒂 𝒂𝒔𝒒𝒖𝒆𝒓𝒐𝒔𝒂 𝒃𝒐𝒄𝒂 𝒅𝒆 𝒑𝒖𝒕𝒂 𝒒𝒖𝒆 𝒕𝒊𝒆𝒏𝒆𝒔 𝒉𝒂𝒔𝒕𝒂 𝒒𝒖𝒆 𝒏𝒐 𝒑𝒖𝒆𝒅𝒂𝒔 𝒔𝒆𝒏𝒕𝒊𝒓 𝒏𝒊 𝒍𝒐𝒔 𝒅𝒊𝒆𝒏𝒕𝒆𝒔. 𝑴𝒆𝒋𝒐𝒓 𝒒𝒖𝒆 𝒕𝒆 𝒄𝒂𝒍𝒍𝒆𝒔 𝒚𝒂 𝒅𝒆 𝒖𝒏𝒂 𝒑𝒖𝒕𝒂 𝒗𝒆𝒛 𝒐 𝒚𝒂 𝒔𝒂𝒃𝒆𝒔 𝒍𝒐 𝒒𝒖𝒆 𝒑𝒂𝒔𝒂𝒓𝒂́ 𝒑𝒆𝒓𝒅𝒂𝒛𝒐 𝒅𝒆 𝒑𝒖𝒕𝒂!',
            '¡𝑪𝒐𝒎𝒐 𝒏𝒐 𝒕𝒆 𝒄𝒂𝒍𝒍𝒆𝒔 𝒅𝒆 𝒖𝒏𝒂 𝒑𝒖𝒕𝒂 𝒗𝒆𝒛, 𝒕𝒆 𝒗𝒂𝒎𝒐𝒔 𝒂 𝒎𝒆𝒕𝒆𝒓 𝒕𝒂𝒏𝒕𝒂𝒔 𝒐𝒔𝒕𝒊𝒂𝒔 𝒆𝒏 𝒍𝒂 𝒃𝒐𝒄𝒂 𝒒𝒖𝒆 𝒔𝒆 𝒑𝒐𝒅𝒓𝒂́ 𝒋𝒖𝒈𝒂𝒓 𝒂𝒍 𝒗𝒐𝒍𝒆𝒊𝒃𝒐𝒍 𝒅𝒆𝒏𝒕𝒓𝒐 𝒅𝒆 𝒕𝒖 𝒃𝒐𝒄𝒂 𝒄𝒐𝒏 𝒕𝒐𝒅𝒐𝒔 𝒕𝒖𝒔 𝒂𝒔𝒒𝒖𝒆𝒓𝒐𝒔𝒐𝒔 𝒅𝒊𝒆𝒏𝒕𝒆𝒔 𝒅𝒆 𝒎𝒊𝒆𝒓𝒅𝒂 𝒒𝒖𝒆 𝒕𝒊𝒆𝒏𝒆𝒔. 𝑺𝒊 𝒒𝒖𝒊𝒆𝒓𝒆𝒔 𝒄𝒐𝒏𝒔𝒆𝒓𝒗𝒂𝒓 𝒕𝒐𝒅𝒐𝒔 𝒕𝒖𝒔 𝒅𝒊𝒆𝒏𝒕𝒆𝒄𝒊𝒕𝒐𝒔, 𝒎𝒆𝒋𝒐𝒓 𝒄𝒂𝒍𝒍𝒂𝒕𝒆 𝒚𝒂 𝒑𝒆𝒅𝒂𝒛𝒐 𝒅𝒆 𝒑𝒖𝒕@.!']
        const sexo = ['𝙖 𝟰 𝙥𝙖𝙩𝙖𝙨 𝙢𝙞𝙚𝙣𝙩𝙧𝙖𝙨 𝙩𝙚 𝙜𝙚𝙢𝙞𝙖 𝙘𝙤𝙢𝙤 𝙪𝙣𝙖 𝙢𝙖𝙡𝙙𝙞𝙩𝙖 𝙥𝙚𝙧𝙧𝙖 "𝐀𝐚𝐚𝐡.., 𝐀𝐚𝐚𝐡𝐡, 𝐬𝐢𝐠𝐮𝐞, 𝐧𝐨 𝐩𝐚𝐫𝐞𝐬, 𝐧𝐨 𝐩𝐚𝐫𝐞𝐬.." 𝙮 𝙡𝙖 𝙝𝙖𝙨 𝙙𝙚𝙟𝙖𝙙𝙤 𝙩𝙖𝙣 𝙧𝙚𝙫𝙚𝙣𝙩𝙖𝙙𝙖 𝙦𝙪𝙚 𝙣𝙤 𝙥𝙪𝙚𝙙𝙚 𝙨𝙤𝙨𝙩𝙚𝙣𝙚𝙧 𝙣𝙞 𝙨𝙪 𝙥𝙧𝙤𝙥𝙞𝙤 𝙘𝙪𝙚𝙧𝙥𝙤 𝙡𝙖 𝙢𝙖𝙡𝙙𝙞𝙩𝙖 𝙯𝙤𝙧𝙧𝙖!',
            '𝙖 𝟰 𝙢𝙞𝙚𝙣𝙩𝙧𝙖𝙨 𝙩𝙚 𝙖𝙜𝙖𝙧𝙧𝙖𝙗𝙖 𝙙𝙚𝙡 𝙥𝙚𝙡𝙤 𝙮 𝙡𝙚 𝙜𝙧𝙞𝙩𝙖𝙗𝙖𝙨 𝙘𝙤𝙢𝙤 𝙪𝙣𝙖 𝙜𝙪𝙖𝙧𝙧𝙖 "𝐒𝐨𝐲 𝐭𝐮 𝐩𝐞𝐫𝐫𝐚 𝐀𝐚𝐚𝐡.., 𝐀𝐚𝐚𝐡𝐡, ¡𝐇𝐚𝐳𝐦𝐞 𝐓𝐮𝐲𝐚!" 𝙮 𝙙𝙚 𝙡𝙖 𝙛𝙤𝙡𝙡𝙖𝙙𝙖 𝙦𝙪𝙚 𝙩𝙚 𝙝𝙖 𝙙𝙖𝙙𝙤, 𝙩𝙚 𝙙𝙚𝙟𝙤 𝙩𝙚𝙢𝙗𝙡𝙖𝙣𝙙𝙤 𝙙𝙚 𝙡𝙖 𝙩𝙧𝙚𝙢𝙚𝙣𝙙𝙖 𝙛𝙤𝙡𝙡𝙖𝙙𝙖 + 𝙘𝙤𝙧𝙧𝙞𝙙𝙖 𝙙𝙚𝙣𝙩𝙧𝙤 𝙦𝙪𝙚 𝙩𝙚 𝙝𝙖 𝙙𝙖𝙙𝙤 𝙥𝙤𝙧 𝙨𝙚𝙧 𝙪𝙣𝙖 𝙯𝙤𝙧𝙧𝙖 𝙢𝙪𝙡𝙩𝙞𝙤𝙧𝙜𝙖𝙨𝙢𝙞𝙘𝙖!',
            '𝙖 𝟰 𝙢𝙞𝙚𝙣𝙩𝙧𝙖𝙨 𝙩𝙚 𝙚𝙢𝙥𝙤𝙩𝙧𝙖𝙗𝙖 𝙙𝙪𝙧𝙤 𝙚𝙨𝙩𝙖𝙣𝙙𝙤 𝙖𝙩𝙖𝙙𝙖 𝙖 𝙡𝙖 𝙘𝙖𝙢𝙖 𝙮 𝙩𝙚 𝙛𝙤𝙡𝙡𝙖𝙗𝙖 𝙨𝙖𝙡𝙫𝙖𝙟𝙚𝙢𝙚𝙣𝙩𝙚 𝙢𝙞𝙚𝙣𝙩𝙧𝙖𝙨 𝙨𝙤𝙡𝙤 𝙨𝙖𝙗𝙞𝙖𝙨 𝙜𝙧𝙞𝙩𝙖𝙧𝙡𝙚 "𝐃𝐚𝐥𝐞 𝐏𝐚𝐩𝐢, 𝐍𝐨 𝐩𝐚𝐫𝐞𝐬..., ¡𝐐𝐔𝐄 𝐑𝐈𝐂𝐎! 𝐔𝐦𝐦𝐡.." 𝙮 𝙙𝙚 𝙡𝙖 𝙛𝙤𝙡𝙡𝙖𝙙𝙖 𝙨𝙖𝙡𝙫𝙖𝙟𝙚, 𝙩𝙚𝙧𝙢𝙞𝙣𝙤 𝙘𝙤𝙧𝙧𝙞𝙚𝙣𝙙𝙤𝙨𝙚 𝙚𝙣 𝙩𝙪 𝙗𝙤𝙦𝙪𝙞𝙩𝙖 𝙙𝙚 𝙥𝙪𝙩𝙖!']
        const amor = ['𝟏𝟎𝟎%',
            '99%',
            '98%',
            '97%',
            '96%',
            '95%',
            '94%',
            '93%',
            '92%',
            '91%',
            '90%',
            '89%',
            '88%',
            '87%',
            '86%',
            '85%',
            '84%',
            '83%',
            '82%',
            '81%',
            '80%',
            '79%',
            '78%',
            '77%',
            '76%',
            '75%',
            '74%',
            '73%',
            '72%',
            '71%',
            '70%',
            '69%',
            '68%',
            '67%',
            '66%',
            '64%',
            '63%',
            '62%',
            '61%',
            '60%',
            '59%',
            '58%',
            '57%',
            '56%',
            '55%',
            '54%',
            '53%',
            '52%',
            '51%',
            '50%',
            '49%',
            '48%',
            '47%',
            '46%',
            '45%',
            '44%',
            '43%',
            '42%',
            '41%',
            '40%',
            '39%',
            '38%',
            '37%',
            '36%',
            '35%',
            '34%',
            '33%',
            '32%',
            '31%',
            '30%',
            '29%',
            '28%',
            '27%',
            '26%',
            '25%',
            '24%',
            '23%',
            '22%',
            '21%',
            '20%',
            '19%',
            '18%',
            '17%',
            '16%',
            '15%',
            '14%',
            '13%',
            '12%',
            '11%',
            '10%',
            '9%',
            '8%',
            '7%',
            '6%',
            '5%',
            '4%',
            '3%',
            '2%',
            '1%',
            '0%',]

        const zorras = ['😏 ¡𝐄𝐑𝐄𝐒 𝐔𝐍𝐀 𝐌𝐀𝐋𝐃𝐈𝐓𝐀 𝐙𝐎𝐑𝐑𝐀! 💋💄',
            '𝟏𝟎𝟎% 💋💄',
            '99% 💋💄',
            '98% 💋💄',
            '97% 💋💄',
            '96% 💋💄',
            '95% 💋💄',
            '94% 💋💄',
            '93% 💋💄',
            '92% 💋💄',
            '91% 💋💄',
            '90% 💋💄',
            '89% 💋💄',
            '88% 💋💄',
            '87% 💋💄',
            '86% 💋💄',
            '85% 💋💄',
            '84% 💋💄',
            '83% 💋💄',
            '82% 💋💄',
            '81% 💋💄',
            '80% 💋💄',
            '79% 💋💄',
            '78% 💋💄',
            '77% 💋💄',
            '76% 💋💄',
            '75% 💋💄',
            '74% 💋💄',
            '73% 💋💄',
            '72% 💋💄',
            '71% 💋💄',
            '70% 💋💄',
            '69% 💋💄',
            '68% 💋💄',
            '67% 💋💄',
            '66% 💋💄',
            '64% 💋💄',
            '63% 💋💄',
            '62% 💋💄',
            '61% 💋💄',
            '60% 💋💄',
            '59% 💋💄',
            '58% 💋💄',
            '57% 💋💄',
            '56% 💋💄',
            '55% 💋💄',
            '54% 💋💄',
            '53% 💋💄',
            '52% 💋💄',
            '51% 💋💄',
            '50% 💋💄',
            '49% 💋💄',
            '48% 💋💄',
            '47% 💋💄',
            '46% 💋💄',
            '45% 💋💄',
            '44% 💋💄',
            '43% 💋💄',
            '42% 💋💄',
            '41% 💋💄',
            '40% 💋💄',
            '39% 💋💄',
            '38% 💋💄',
            '37% 💋💄',
            '36% 💋💄',
            '35% 💋💄',
            '34% 💋💄',
            '33% 💋💄',
            '32% 💋💄',
            '31% 💋💄',
            '30% 💋💄',
            '29% 💋💄',
            '28% 💋💄',
            '27% 💋💄',
            '26% 💋💄',
            '25% 💋💄',
            '24% 💋💄',
            '23% 💋💄',
            '22% 💋💄',
            '21% 💋💄',
            '20% 💋💄',
            '19% 💋💄',
            '18% 💋💄',
            '17% 💋💄',
            '16% 💋💄',
            '15% 💋💄',
            '14% 💋💄',
            '13% 💋💄',
            '12% 💋💄',
            '11% 💋💄',
            '10% 💋💄',
            '9% 💋💄',
            '8% 💋💄',
            '7% 💋💄',
            '6% 💋💄',
            '5% 💋💄',
            '4% 💋💄',
            '3% 💋💄',
            '2% 💋💄',
            '1% 💋💄',
            '0% 💋💄',]

        const guarras = ['😏 ¡𝐄𝐑𝐄𝐒 𝐔𝐍𝐀 𝐌𝐀𝐋𝐃𝐈𝐓𝐀 𝐆𝐔𝐀𝐑𝐑𝐀! 💋💦',
            '𝟏𝟎𝟎% 💋💦',
            '99% 💋💦',
            '98% 💋💦',
            '97% 💋💦',
            '96% 💋💦',
            '95% 💋💦',
            '94% 💋💦',
            '93% 💋💦',
            '92% 💋💦',
            '91% 💋💦',
            '90% 💋💦',
            '89% 💋💦',
            '88% 💋💦',
            '87% 💋💦',
            '86% 💋💦',
            '85% 💋💦',
            '84% 💋💦',
            '83% 💋💦',
            '82% 💋💦',
            '81% 💋💦',
            '80% 💋💦',
            '79% 💋💦',
            '78% 💋💦',
            '77% 💋💦',
            '76% 💋💦',
            '75% 💋💦',
            '74% 💋💦',
            '73% 💋💦',
            '72% 💋💦',
            '71% 💋💦',
            '70% 💋💦',
            '69% 💋💦',
            '68% 💋💦',
            '67% 💋💦',
            '66% 💋💦',
            '64% 💋💦',
            '63% 💋💦',
            '62% 💋💦',
            '61% 💋💦',
            '60% 💋💦',
            '59% 💋💦',
            '58% 💋💦',
            '57% 💋💦',
            '56% 💋💦',
            '55% 💋💦',
            '54% 💋💦',
            '53% 💋💦',
            '52% 💋💦',
            '51% 💋💦',
            '50% 💋💦',
            '49% 💋💦',
            '48% 💋💦',
            '47% 💋💦',
            '46% 💋💦',
            '45% 💋💦',
            '44% 💋💦',
            '43% 💋💦',
            '42% 💋💦',
            '41% 💋💦',
            '40% 💋💦',
            '39% 💋💦',
            '38% 💋💦',
            '37% 💋💦',
            '36% 💋💦',
            '35% 💋💦',
            '34% 💋💦',
            '33% 💋💦',
            '32% 💋💦',
            '31% 💋💦',
            '30% 💋💦',
            '29% 💋💦',
            '28% 💋💦',
            '27% 💋💦',
            '26% 💋💦',
            '25% 💋💦',
            '24% 💋💦',
            '23% 💋💦',
            '22% 💋💦',
            '21% 💋💦',
            '20% 💋💦',
            '19% 💋💦',
            '18% 💋💦',
            '17% 💋💦',
            '16% 💋💦',
            '15% 💋💦',
            '14% 💋💦',
            '13% 💋💦',
            '12% 💋💦',
            '11% 💋💦',
            '10% 💋💦',
            '9% 💋💦',
            '8% 💋💦',
            '7% 💋💦',
            '6% 💋💦',
            '5% 💋💦',
            '4% 💋💦',
            '3% 💋💦',
            '2% 💋💦',
            '1% 💋💦',
            '0% 💋💦',]

        const tontos = ['😂 ¡𝐄𝐑𝐄𝐒 𝐓𝐎𝐍𝐓𝐈𝐓𝐎 𝐏𝐄𝐑𝐃𝐈𝐃𝐎! 🤓',
            '𝟏𝟎𝟎% 🤓',
            '99% 🤓',
            '98% 🤓',
            '97% 🤓',
            '96% 🤓',
            '95% 🤓',
            '94% 🤓',
            '93% 🤓',
            '92% 🤓',
            '91% 🤓',
            '90% 🤓',
            '89% 🤓',
            '88% 🤓',
            '87% 🤓',
            '86% 🤓',
            '85% 🤓',
            '84% 🤓',
            '83% 🤓',
            '82% 🤓',
            '81% 🤓',
            '80% 🤓',
            '79% 🤓',
            '78% 🤓',
            '77% 🤓',
            '76% 🤓',
            '75% 🤓',
            '74% 🤓',
            '73% 🤓',
            '72% 🤓',
            '71% 🤓',
            '70% 🤓',
            '69% 🤓',
            '68% 🤓',
            '67% 🤓',
            '66% 🤓',
            '64% 🤓',
            '63% 🤓',
            '62% 🤓',
            '61% 🤓',
            '60% 🤓',
            '59% 🤓',
            '58% 🤓',
            '57% 🤓',
            '56% 🤓',
            '55% 🤓',
            '54% 🤓',
            '53% 🤓',
            '52% 🤓',
            '51% 🤓',
            '50% 🤓',
            '49% 🤓',
            '48% 🤓',
            '47% 🤓',
            '46% 🤓',
            '45% 🤓',
            '44% 🤓',
            '43% 🤓',
            '42% 🤓',
            '41% 🤓',
            '40% 🤓',
            '39% 🤓',
            '38% 🤓',
            '37% 🤓',
            '36% 🤓',
            '35% 🤓',
            '34% 🤓',
            '33% 🤓',
            '32% 🤓',
            '31% 🤓',
            '30% 🤓',
            '29% 🤓',
            '28% 🤓',
            '27% 🤓',
            '26% 🤓',
            '25% 🤓',
            '24% 🤓',
            '23% 🤓',
            '22% 🤓',
            '21% 🤓',
            '20% 🤓',
            '19% 🤓',
            '18% 🤓',
            '17% 🤓',
            '16% 🤓',
            '15% 🤓',
            '14% 🤓',
            '13% 🤓',
            '12% 🤓',
            '11% 🤓',
            '10% 🤓',
            '9% 🤓',
            '8% 🤓',
            '7% 🤓',
            '6% 🤓',
            '5% 🤓',
            '4% 🤓',
            '3% 🤓',
            '2% 🤓',
            '1% 🤓',
            '0% 🤓',]

        const planas = ['🤭 ¡𝐄𝐑𝐄𝐒 𝐔𝐍𝐀 𝐌𝐀𝐋𝐃𝐈𝐓𝐀 𝐏𝐋𝐀𝐍𝐀! 📚❤️',
            '𝟏𝟎𝟎% 📕❤️',
            '99% 📗💚',
            '98% 📘💙',
            '97% 📙🧡',
            '96% 📕❤️',
            '95% 📗💚',
            '94% 📘💙',
            '93% 📙🧡',
            '92% 📕❤️',
            '91% 📗💚',
            '90% 📘💙',
            '89% 📙🧡',
            '88% 📕❤️',
            '87% 📗💚',
            '86% 📘💙',
            '85% 📙🧡',
            '84% 📕❤️',
            '83% 📗💚',
            '82% 📘💙',
            '81% 📙🧡',
            '80% 📕❤️',
            '79% 📗💚',
            '78% 📘💙',
            '77% 📙🧡',
            '76% 📕❤️',
            '75% 📗💚',
            '74% 📘💙',
            '73% 📙🧡',
            '72% 📕❤️',
            '71% 📗💚',
            '70% 📘💙',
            '69% 📙🧡',
            '68% 📕❤️',
            '67% 📗💚',
            '66% 📘💙',
            '64% 📙🧡',
            '63% 📕❤️',
            '62% 📗💚',
            '61% 📘💙',
            '60% 📙🧡',
            '59% 📕❤️',
            '58% 📗💚',
            '57% 📘💙',
            '56% 📙🧡',
            '55% 📕❤️',
            '54% 📗💚',
            '53% 📘💙',
            '52% 📙🧡',
            '51% 📕❤️',
            '50% 📗💚',
            '49% 📘💙',
            '48% 📙🧡',
            '47% 📕❤️',
            '46% 📗💚',
            '45% 📘💙',
            '44% 📙🧡',
            '43% 📕❤️',
            '42% 📗💚',
            '41% 📘💙',
            '40% 📙🧡',
            '39% 📕❤️',
            '38% 📗💚',
            '37% 📘💙',
            '36% 📙🧡',
            '35% 📕❤️',
            '34% 📗💚',
            '33% 📘💙',
            '32% 📙🧡',
            '31% 📕❤️',
            '30% 📗💚',
            '29% 📘💙',
            '28% 📙🧡',
            '27% 📕❤️',
            '26% 📗💚',
            '25% 📘💙',
            '24% 📙🧡',
            '23% 📕❤️',
            '22% 📗💚',
            '21% 📘💙',
            '20% 📙🧡',
            '19% 📕❤️',
            '18% 📗💚',
            '17% 📘💙',
            '16% 📙🧡',
            '15% 📕❤️',
            '14% 📗💚',
            '13% 📘💙',
            '12% 📙🧡',
            '11% 📕❤️',
            '10% 📗💚',
            '9% 📘💙',
            '8% 📙🧡',
            '7% 📕❤️',
            '6% 📗💚',
            '5% 📘💙',
            '4% 📙🧡',
            '3% 📕❤️',
            '2% 📗💚',
            '1% 📘💙',
            '0% 📙🧡',]

const gay = ['😂 ¡𝐄𝐑𝐄𝐒 𝐌𝐀𝐑𝐈𝐂𝐎𝐍 𝐏𝐄𝐑𝐃𝐈𝐃𝐎! 🏳️‍🌈',
            '𝟏𝟎𝟎% 🏳️‍🌈',
            '99% 🏳️‍🌈',
            '98% 🏳️‍🌈',
            '97% 🏳️‍🌈',
            '96% 🏳️‍🌈',
            '95% 🏳️‍🌈',
            '94% 🏳️‍🌈',
            '93% 🏳️‍🌈',
            '92% 🏳️‍🌈',
            '91% 🏳️‍🌈',
            '90% 🏳️‍🌈',
            '89% 🏳️‍🌈',
            '88% 🏳️‍🌈',
            '87% 🏳️‍🌈',
            '86% 🏳️‍🌈',
            '85% 🏳️‍🌈',
            '84% 🏳️‍🌈',
            '83% 🏳️‍🌈',
            '82% 🏳️‍🌈',
            '81% 🏳️‍🌈',
            '80% 🏳️‍🌈',
            '79% 🏳️‍🌈',
            '78% 🏳️‍🌈',
            '77% 🏳️‍🌈',
            '76% 🏳️‍🌈',
            '75% 🏳️‍🌈',
            '74% 🏳️‍🌈',
            '73% 🏳️‍🌈',
            '72% 🏳️‍🌈',
            '71% 🏳️‍🌈',
            '70% 🏳️‍🌈',
            '69% 🏳️‍🌈',
            '68% 🏳️‍🌈',
            '67% 🏳️‍🌈',
            '66% 🏳️‍🌈',
            '64% 🏳️‍🌈',
            '63% 🏳️‍🌈',
            '62% 🏳️‍🌈',
            '61% 🏳️‍🌈',
            '60% 🏳️‍🌈',
            '59% 🏳️‍🌈',
            '58% 🏳️‍🌈',
            '57% 🏳️‍🌈',
            '56% 🏳️‍🌈',
            '55% 🏳️‍🌈',
            '54% 🏳️‍🌈',
            '53% 🏳️‍🌈',
            '52% 🏳️‍🌈',
            '51% 🏳️‍🌈',
            '50% 🏳️‍🌈',
            '49% 🏳️‍🌈',
            '48% 🏳️‍🌈',
            '47% 🏳️‍🌈',
            '46% 🏳️‍🌈',
            '45% 🏳️‍🌈',
            '44% 🏳️‍🌈',
            '43% 🏳️‍🌈',
            '42% 🏳️‍🌈',
            '41% 🏳️‍🌈',
            '40% 🏳️‍🌈',
            '39% 🏳️‍🌈',
            '38% 🏳️‍🌈',
            '37% 🏳️‍🌈',
            '36% 🏳️‍🌈',
            '35% 🏳️‍🌈',
            '34% 🏳️‍🌈',
            '33% 🏳️‍🌈',
            '32% 🏳️‍🌈',
            '31% 🏳️‍🌈',
            '30% 🏳️‍🌈',
            '29% 🏳️‍🌈',
            '28% 🏳️‍🌈',
            '27% 🏳️‍🌈',
            '26% 🏳️‍🌈',
            '25% 🏳️‍🌈',
            '24% 🏳️‍🌈',
            '23% 🏳️‍🌈',
            '22% 🏳️‍🌈',
            '21% 🏳️‍🌈',
            '20% 🏳️‍🌈',
            '19% 🏳️‍🌈',
            '18% 🏳️‍🌈',
            '17% 🏳️‍🌈',
            '16% 🏳️‍🌈',
            '15% 🏳️‍🌈',
            '14% 🏳️‍🌈',
            '13% 🏳️‍🌈',
            '12% 🏳️‍🌈',
            '11% 🏳️‍🌈',
            '10% 🏳️‍🌈',
            '9% 🏳️‍🌈',
            '8% 🏳️‍🌈',
            '7% 🏳️‍🌈',
            '6% 🏳️‍🌈',
            '5% 🏳️‍🌈',
            '4% 🏳️‍🌈',
            '3% 🏳️‍🌈',
            '2% 🏳️‍🌈',
            '1% 🏳️‍🌈',
            '0% 🏳️‍🌈']

const putas = ['😏 ¡𝐄𝐑𝐄𝐒 𝐔𝐍𝐀 𝐌𝐀𝐋𝐃𝐈𝐓𝐀 𝐏𝐔𝐓𝐀! 💄💰',
            '𝟏𝟎𝟎% 💄💰',
            '99% 💄💰',
            '98% 💄💰',
            '97% 💄💰',
            '96% 💄💰',
            '95% 💄💰',
            '94% 💄💰',
            '93% 💄💰',
            '92% 💄💰',
            '91% 💄💰',
            '90% 💄💰',
            '89% 💄💰',
            '88% 💄💰',
            '87% 💄💰',
            '86% 💄💰',
            '85% 💄💰',
            '84% 💄💰',
            '83% 💄💰',
            '82% 💄💰',
            '81% 💄💰',
            '80% 💄💰',
            '79% 💄💰',
            '78% 💄💰',
            '77% 💄💰',
            '76% 💄💰',
            '75% 💄💰',
            '74% 💄💰',
            '73% 💄💰',
            '72% 💄💰',
            '71% 💄💰',
            '70% 💄💰',
            '69% 💄💰',
            '68% 💄💰',
            '67% 💄💰',
            '66% 💄💰',
            '64% 💄💰',
            '63% 💄💰',
            '62% 💄💰',
            '61% 💄💰',
            '60% 💄💰',
            '59% 💄💰',
            '58% 💄💰',
            '57% 💄💰',
            '56% 💄💰',
            '55% 💄💰',
            '54% 💄💰',
            '53% 💄💰',
            '52% 💄💰',
            '51% 💄💰',
            '50% 💄💰',
            '49% 💄💰',
            '48% 💄💰',
            '47% 💄💰',
            '46% 💄💰',
            '45% 💄💰',
            '44% 💄💰',
            '43% 💄💰',
            '42% 💄💰',
            '41% 💄💰',
            '40% 💄💰',
            '39% 💄💰',
            '38% 💄💰',
            '37% 💄💰',
            '36% 💄💰',
            '35% 💄💰',
            '34% 💄💰',
            '33% 💄💰',
            '32% 💄💰',
            '31% 💄💰',
            '30% 💄💰',
            '29% 💄💰',
            '28% 💄💰',
            '27% 💄💰',
            '26% 💄💰',
            '25% 💄💰',
            '24% 💄💰',
            '23% 💄💰',
            '22% 💄💰',
            '21% 💄💰',
            '20% 💄💰',
            '19% 💄💰',
            '18% 💄💰',
            '17% 💄💰',
            '16% 💄💰',
            '15% 💄💰',
            '14% 💄💰',
            '13% 💄💰',
            '12% 💄💰',
            '11% 💄💰',
            '10% 💄💰',
            '9% 💄💰',
            '8% 💄💰',
            '7% 💄💰',
            '6% 💄💰',
            '5% 💄💰',
            '4% 💄💰',
            '3% 💄💰',
            '2% 💄💰',
            '1% 💄💰',
            '0% 💄💰',]

const bisakah = ['Bisa',
  'Tidak Bisa',
  'Mungkin']
const kapankah = ['Hari Lagi',
  'Minggu Lagi',
  'Bulan Lagi',
  'Tahun Lagi']



//--Auto respon
if(budy.match('Pato')){
result = fs.readFileSync(`./temp/stick/emm.webp`)
  Lxa.sendMessage(from, result, sticker, {
quoted: mek
  })
}

//--End auto respon 1

//--Auto respon 2
switch(is) {
  case 'botkevin':
buf = fs.readFileSync(`./temp/audio/palepale.mp3`)
Lxa.sendMessage(from, buf, audio, {
  mimetype: 'audio/mp4', quoted: mek, ptt: true
})
break


case 'help':
case 'menu':
hasil = ``
reply(hasil)
        break
}

			switch(command) {
case 'help':
  uptime = process.uptime()
  const Menu = {
text: `   *🐉დ『𝔹𝕆𝕋 𝕕𝕖 MƦ.ƧƘƳ 𝕒𝕟𝕕 ꀘꍟᏉꀤꈤ♚』დ🌹*

┌ ♠️ *【ＣＯＭＡＮＤＯＳ  ＤＥＬ  ＢＯＴ】* ♠️
│
│ 👑 𝐋𝐨𝐬 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬 𝐬𝐞 𝐞𝐣𝐞𝐜𝐮𝐭𝐚𝐧 𝐜𝐨𝐧 【❗️】 👑
│
│ 💙😍 *¡𝑪𝑶𝑴𝑨𝑵𝑫𝑶𝑺 𝑫𝑬 𝑴𝑰𝑬𝑴𝑩𝑹𝑶𝑺!* 😍💙
│
┠❄️☛ *【!𝐇𝐞𝐥𝐩* "𝐕𝐞𝐫 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬 𝐝𝐞𝐥 𝐁𝐎𝐓"】
┠❄️☛ *【!𝐒𝐭𝐢𝐜𝐤𝐞𝐫* "𝐂𝐫𝐞𝐚𝐫 𝐒𝐭𝐢𝐜𝐤𝐞𝐫𝐬"】
┠❄️☛ *【!𝐒𝐭𝐢𝐜𝐤𝐞𝐫𝐠𝐢𝐟* "𝐂𝐫𝐞𝐚𝐫 𝐜𝐨𝐧 𝐒𝐭𝐢𝐜𝐤𝐞𝐫𝐠𝐢𝐟"】
┠❄️☛ *【!𝐒𝐤𝐢𝐦𝐚𝐠𝐞𝐧* "𝐂𝐨𝐧𝐯𝐞𝐫𝐭𝐢𝐫 𝐒𝐭𝐢𝐜𝐤𝐞𝐫 𝐞𝐧 𝐈𝐦𝐚𝐠𝐞𝐧"】
┠❄️☛ *【!𝐌𝐞𝐦𝐞𝐬* "𝐌𝐚𝐧𝐝𝐚𝐫 𝐌𝐞𝐦𝐞𝐬"】
┠❄️☛ *【!𝐂𝐚𝐧𝐭𝐚𝐫* "𝐄𝐬𝐜𝐫𝐢𝐛𝐢𝐫 𝐞𝐥 𝐧𝐨𝐦𝐛𝐫𝐞 𝐝𝐞 𝐥𝐚 𝐂𝐚𝐧𝐜𝐢𝐨́𝐧"】
┠❄️☛ *【!𝐀𝐝𝐦𝐢𝐧𝐋𝐢𝐬𝐭𝐚* "𝐕𝐞𝐫 𝐀𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫𝐞𝐬"】
┠❄️☛ *【!𝐂𝐨𝐧𝐞𝐱𝐢𝐨́𝐧𝐁𝐨𝐭* "𝐕𝐞𝐫 𝐞𝐬𝐭𝐚𝐝𝐨 𝐝𝐞 𝐥𝐚 𝐂𝐨𝐧𝐞𝐱𝐢𝐨𝐧"】
┠❄️☛ *【!𝐏𝐨𝐤𝐞𝐦𝐨𝐧 @𝐧𝐢𝐜𝐤* "𝐌𝐚𝐧𝐝𝐚𝐫 𝐮𝐧 𝐚𝐭𝐚𝐪𝐮𝐞"】
┠❄️☛ *【!𝐏𝐨𝐤𝐞𝐦𝐨𝐧* "𝐒𝐚𝐜𝐚𝐫 𝐮𝐧 𝐏𝐨𝐤𝐞𝐦𝐨𝐧"】
┠❄️☛ *【!𝐃𝐚𝐝𝐨* "𝐋𝐚𝐧𝐳𝐚𝐫 𝐮𝐧 𝐃𝐚𝐝𝐨"】
┠❄️☛ *【!𝐈𝐝𝐞𝐧𝐭𝐢𝐝𝐚𝐝𝐅𝐚𝐥𝐬𝐚* "𝐂𝐫𝐞𝐚𝐫 𝐈𝐝𝐞𝐧𝐭𝐢𝐝𝐚𝐝 𝐅𝐚𝐥𝐬𝐚"】
┠❄️☛ *【!𝐈𝐦𝐚𝐠𝐞𝐧* "𝐓𝐞𝐦𝐚́𝐭𝐢𝐜𝐚 𝐝𝐞 𝐥𝐚 𝐢𝐦𝐚𝐠𝐞𝐧"】
┠❄️☛ *【!𝐓𝐭𝐬 𝐞𝐬* "𝐌𝐚𝐧𝐝𝐚𝐫 𝐀𝐮𝐝𝐢𝐨𝐬 𝐝𝐞 𝐕𝐨𝐳"】
┠❄️☛ *【!𝐍𝐨𝐭𝐚𝐬* "𝐌𝐞𝐧𝐬𝐚𝐣𝐞 𝐝𝐞 𝐥𝐚 𝐍𝐨𝐭𝐚"】
┠❄️☛ *【!𝐈𝐧𝐟𝐨* "𝐂𝐨𝐧𝐭𝐚𝐜𝐭𝐨 𝐝𝐞 𝐥𝐨𝐬 𝐃𝐮𝐞𝐧̃𝐨𝐬"】
┠❄️☛ *【!𝐅𝐨𝐥𝐥𝐚𝐫𝐦𝐞 @𝐧𝐢𝐜𝐤* "𝐅𝐨𝐥𝐥𝐚𝐫𝐬𝐞 𝐚 𝐚𝐥𝐠𝐮𝐢𝐞𝐧"】
┠❄️☛ *【!𝐓𝐢𝐫𝐚𝐫𝐂𝐚𝐧̃𝐚 @𝐧𝐢𝐜𝐤* "𝐓𝐢𝐫𝐚𝐫𝐥𝐞 𝐚 𝐚𝐥𝐠𝐮𝐢𝐞𝐧"】
┠❄️☛ *【!𝐆𝐚𝐲* "𝐌𝐞𝐝𝐢𝐝𝐨𝐫 𝐝𝐞 𝐇𝐨𝐦𝐨𝐬𝐞𝐱𝐮𝐚𝐥𝐢𝐝𝐚𝐝"】
┠❄️☛ *【!𝐅𝐫𝐢𝐞𝐧𝐝𝐙𝐨𝐧𝐞 @𝐧𝐢𝐜𝐤* "𝐌𝐚𝐧𝐝𝐚𝐫 𝐚 𝐥𝐚 𝐅𝐫𝐢𝐞𝐧𝐝𝐙𝐨𝐧𝐞"】
┠❄️☛ *【!𝐄𝐦𝐩𝐚𝐫𝐞𝐣𝐚𝐫 @𝐧𝐢𝐜𝐤 y @𝐧𝐢𝐜𝐤* "𝐂𝐨𝐦𝐩𝐚𝐭𝐢𝐛𝐢𝐥𝐢𝐳𝐚𝐫 𝐮𝐧𝐚 𝐑𝐞𝐥𝐚𝐜𝐢𝐨𝐧"】
┠❄️☛ *【!𝐂𝐚𝐥𝐥𝐚𝐭𝐞 @𝐧𝐢𝐜𝐤* "𝐌𝐚𝐧𝐝𝐚𝐫 𝐚 𝐜𝐚𝐥𝐥𝐚𝐫 𝐚 𝟏 𝐩𝐞𝐫𝐬𝐨𝐧𝐚"】
┠❄️☛ *【!𝐏𝐥𝐚𝐧𝐚 @𝐧𝐢𝐜𝐤* "𝐌𝐞𝐝𝐢𝐝𝐨𝐫 𝐝𝐞 𝐏𝐥𝐚𝐧𝐚𝐬"】
┠❄️☛ *【!𝐆𝐮𝐚𝐫𝐫𝐚 @𝐧𝐢𝐜𝐤* "𝐌𝐞𝐝𝐢𝐝𝐨𝐫 𝐝𝐞 𝐆𝐮𝐚𝐫𝐫𝐚𝐬"】
┠❄️☛ *【!𝐏𝐮𝐭𝐚 @𝐧𝐢𝐜𝐤* "𝐌𝐞𝐝𝐢𝐝𝐨𝐫 𝐝𝐞 𝐏𝐮𝐭𝐚𝘀"】
┠❄️☛ *【!𝐙𝐨𝐫𝐫𝐚 @𝐧𝐢𝐜𝐤* "𝐌𝐞𝐝𝐢𝐝𝐨𝐫 𝐝𝐞 𝐙𝐨𝐫𝐫𝐚𝐬"】
┠❄️☛ *【!𝐓𝐨𝐧𝐭𝐨 @𝐧𝐢𝐜𝐤* "𝐌𝐞𝐝𝐢𝐝𝐨𝐫 𝐝𝐞 𝐓𝐨𝐧𝐭𝐨𝐬"】
┠❄️☛ *【!𝐋𝐨𝐭𝐞𝐫𝐢𝐚* "𝐂𝐮𝐩𝐨𝐧 𝐝𝐞 𝐋𝐨𝐭𝐞𝐫𝐢𝐚"】
│
│
│ 💙😳 *¡𝑪𝑶𝑴𝑨𝑵𝑫𝑶𝑺 𝑫𝑬 𝑨𝑫𝑴𝑰𝑵𝑰𝑺𝑻𝑹𝑨𝑫𝑶𝑹!* 😳💙
│
┠❄️☛ *【!𝐀𝐧̃𝐚𝐝𝐢𝐫* "𝐍𝐮𝐦𝐞𝐫𝐨 𝐬𝐢𝐧 +"】
┠❄️☛ *【!𝐄𝐱𝐩𝐮𝐥𝐬𝐚𝐫 @𝐧𝐢𝐜𝐤* "𝐄𝐱𝐩𝐮𝐥𝐬𝐚𝐫"】
┠❄️☛ *【!𝐄𝐱𝐩𝐮𝐥𝐬𝐚𝐫𝐏𝐥𝐚𝐧𝐚 @𝐧𝐢𝐜𝐤* "𝐄𝐱𝐩𝐮𝐥𝐬𝐚𝐫 𝐚 𝐥𝐚𝐬 𝐏𝐥𝐚𝐧𝐚𝐬"】
┠❄️☛ *【!𝐀𝐯𝐢𝐬𝐨 @𝐧𝐢𝐜𝐤* "𝟏ª 𝐀𝐯𝐢𝐬𝐨 𝐚 𝐥𝐚 𝐏𝐞𝐫𝐬𝐨𝐧𝐚"】
┠❄️☛ *【!𝐀𝐯𝐢𝐬𝐨𝟐 @𝐧𝐢𝐜𝐤* "𝟐ª 𝐀𝐯𝐢𝐬𝐨 𝐚 𝐥𝐚 𝐏𝐞𝐫𝐬𝐨𝐧𝐚"】
┠❄️☛ *【!𝐀𝐯𝐢𝐬𝐨𝟑 @𝐧𝐢𝐜𝐤* "𝟑ª 𝐀𝐯𝐢𝐬𝐨 𝐲 𝐄𝐱𝐩𝐮𝐥𝐬𝐢𝐨𝐧"】
┠❄️☛ *【!𝐀𝐝𝐦𝐢𝐧 @𝐧𝐢𝐜𝐤* "𝐃𝐚𝐫 𝐀𝐝𝐦𝐢𝐧"】
┠❄️☛ *【!𝐌𝐢𝐞𝐦𝐛𝐫𝐨 @𝐧𝐢𝐜𝐤* "𝐐𝐮𝐢𝐭𝐚𝐫 𝐀𝐝𝐦𝐢𝐧"】
┠❄️☛ *【!𝐌𝐞𝐧𝐜𝐢𝐨𝐧𝐚𝐫* "𝐌𝐞𝐧𝐜𝐢𝐨𝐧𝐚𝐫 𝐚 𝐓𝐨𝐝𝐨𝐬"】
┠❄️☛ *【!𝐁𝐨𝐫𝐫𝐚𝐫* "𝐁𝐨𝐫𝐫𝐚𝐫 𝐦𝐞𝐧𝐬𝐚𝐣𝐞𝐬 𝐝𝐞𝐥 𝐁𝐎𝐓"】
┠❄️☛ *【!𝐋𝐢𝐧𝐤𝐆𝐫𝐮𝐩𝐨* "𝐒𝐨𝐥𝐢𝐜𝐢𝐭𝐚𝐫 𝐋𝐢𝐧𝐤 𝐝𝐞𝐥 𝐆𝐫𝐮𝐩𝐨"】
┠❄️☛ *【!𝐏𝐞𝐫𝐟𝐢𝐥𝐆𝐫𝐮𝐩𝐨* "𝐂𝐚𝐦𝐛𝐢𝐚 𝐅𝐨𝐭𝐨 𝐝𝐞𝐥 𝐆𝐫𝐮𝐩𝐨"】
┠❄️☛ *【!𝐌𝐮𝐭𝐞𝐚𝐫𝐆𝐫𝐮𝐩𝐨* "𝐒𝐢́/𝐍𝐨"】
┠❄️☛ *【!𝐂𝐚𝐬𝐚𝐫 @𝐧𝐢𝐜𝐤 y @𝐧𝐢𝐜𝐤* "𝐔𝐧𝐢𝐫 𝐞𝐧 𝐌𝐚𝐭𝐫𝐢𝐦𝐨𝐧𝐢𝐨"】
┠❄️☛ *【!𝐃𝐢𝐯𝐨𝐫𝐜𝐢𝐚𝐫 @𝐧𝐢𝐜𝐤 y @𝐧𝐢𝐜𝐤* "𝐃𝐢𝐯𝐨𝐫𝐜𝐢𝐚𝐫 𝐮𝐧 𝐌𝐚𝐭𝐫𝐢𝐦𝐨𝐧𝐢𝐨"】
┠❄️☛ *【!𝐁𝐮𝐞𝐧𝐨𝐬𝐃𝐢𝐚𝐬* "𝐃𝐚𝐫 𝐥𝐨𝐬 𝐁𝐮𝐞𝐧𝐨𝐬 𝐃𝐢𝐚𝐬 𝐚 𝐓𝐨𝐝𝐨𝐬"】
┠❄️☛ *【!𝐁𝐮𝐞𝐧𝐚𝐬𝐍𝐨𝐜𝐡𝐞𝐬* "𝐃𝐚𝐫 𝐥𝐚𝐬 𝐁𝐮𝐞𝐧𝐚𝐬 𝐍𝐨𝐜𝐡𝐞𝐬 𝐚 𝐓𝐨𝐝𝐨𝐬"】
│
└ 🔥 【𝘽𝙮 🅼🆁.🆂🅺🆈 𝙖𝙣𝙙 🅺🅴🆅🅸🅽】 🔥`,

contextInfo: {
  mentionedJid: [sender]
}
  }
  Lxa.sendMessage(from, Menu, text, {
quoted: { key: { fromMe: false, participant: `0@s.⛃⃢⃟⃝⃞❤️⃬🇰⃬🇪⃬🇻⃬🇮⃬🇳⃬❤️⃢⃟⃝⃞⛃𝆮.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "⛃⃢⃟⃝⃞❤️⃬🇰⃬🇪⃬🇻⃬🇮⃬🇳⃬❤️⃢⃟⃝⃞⛃𝆮", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABERERESERMVFRMaHBkcGiYjICAjJjoqLSotKjpYN0A3N0A3WE5fTUhNX06MbmJiboyiiIGIosWwsMX46/j///8BERERERIRExUVExocGRwaJiMgICMmOiotKi0qOlg3QDc3QDdYTl9NSE1fToxuYmJujKKIgYiixbCwxfjr+P/////CABEIADoAUQMBIgACEQEDEQH/xAAsAAEAAwEBAQAAAAAAAAAAAAAAAgMFBAYBAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAADwYAAAAAEo2EoeggYctbsPMX7XIZPycABZWNvLoHTfnjTo4x0c4AAAAAAAf//EAC0QAAMAAgEDAwIDCQAAAAAAAAECAwQRAAUSMRMhImGSFCCRJEBBQlBRUmOx/9oACAEBAAE/AP3dFLsqjW2IA2QB+p5PHvUoJxdy7FU7VJ7iPcgcM6AMxRtKwVjrwT4B4Y2Hdub/ABRXb28K2tE/Q74+Nead7yZV+BHcNbDglSPodcKsp0wIOgf14mLeisyKCFAJII/ipf8A4vCrKFJBAYbH1Hj8kXWdFdpJUD+RywB+0g8z8N4dXtiQgHxlo5STuyy2qbbmXTHxhjt2SZ6I4yISuzy/17IZudWImmKoT0bvH9pkHc+DpAQxbma/bTqUE2hwEAlUO/eQjiXMARsnTUvAX/EZxgS7vtUQIAF03OjXcdSxJnbLS0kPzddbPbsFCOUFQQKBge1dBv8AEjY/JJ1m4ZpJQDfwbYB+0g8yOvXybpZ8eHm21AfTesgRuXrOpUpjzj9ELnf3luWyTe+Tek0L2ZmPkBSx3teX6lW4uTKS0v7Wou9v7huY/VDj+l24sG9K5vLff8GOv7NzEy/wl43WEneWivd3a7g2w3sRzKyGybeqyKnwRAq70AihB5/on//EABQRAQAAAAAAAAAAAAAAAAAAAED/2gAIAQIBAT8AR//EABQRAQAAAAAAAAAAAAAAAAAAAED/2gAIAQMBAT8AR//Z", "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==" } } } })
  break

//--Cek limit user
/*case 'ceklimit':
  if (!isRegister) return reply(mess.only.daftarB)
  checkLimit(sender)
  break

//---cek saldo user
case 'ceksaldo':
  if (!isRegister) return reply(mess.only.daftarB)
  uangkau = checkATMuser(sender)
  hasil = `〘  *ATM* 〙
╔════════════════════
╠≽️ *Nama* : *${pushname}*
╠≽️ *Saldo* : *Rp.${uangkau}.-*
╠≽️ *Nomor* : *${sender.split("@")[0]}*
╚════════════════════`
  reply(hasil)
  break

*/

	break
					case 'slow111111111111111':
					low = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					slo = await Lxa.downloadAndSaveMediaMessage(low)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${slo} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(slo)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						Lxa.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'tupai111111111111111':
					pai = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					tup = await Lxa.downloadAndSaveMediaMessage(pai)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${tup} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(tup)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						Lxa.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'gemuk111111111111111':
					muk = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					gem = await Lxa.downloadAndSaveMediaMessage(muk)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(gem)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						Lxa.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'bass111111111111111':                 
					ass = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					bas = await Lxa.downloadAndSaveMediaMessage(ass)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${bas} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(bas)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						Lxa.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
					break

//--Info bot
				case 'info111111111111111':
  me = Lxa.user
  uptime = process.uptime()
  teks = `*‣ Nombre del bot* : ${me.name}
  ‣ *Número del bot* : @${me.jid.split('@')[0]}
  ‣ *Dueño* : Mr.Pato
  ‣ *Prefijo* : ${prefix}
  ‣ *Usuarios bloqueados* : ${blocked.length}
  ‣ *Tiempo activo* : ${kyun(uptime)}
  ‣ *Total de usuarios* : ${_registered.length} Usuarios
  ‣ *Total de chats* : ${totalchat.length}`
  buffer = await getBuffer(me.imgUrl)
  Lxa.sendMessage(from, buffer, image, {
caption: teks, contextInfo: {
  mentionedJid: [me.jid]}})
  break

//---Kecepatan respon
case 'ping111111111111111':
  case 'speed111111111111111':
if (!isRegister) return reply(mess.only.userB)
const timestamp = speed();
const latensi = speed() - timestamp
Lxa.updatePresence(from, Presence.composing)
uptime = process.uptime()
Lxa.sendMessage(from, `*El bot responde en*\n‣ *Speed* : ${latensi.toFixed(4)} _Segundos_\n\n*Info bot*\n‣ *Total de chats* : ${totalchat.length}\n‣ *Total de usuarios* : ${_registered.length}\n‣ *Bloqueados* : ${blocked.length}\n‣ *Tiempo activo* : ${kyun(uptime)}`, text, {
  quoted: mek
})
break

//---donasi
case 'donasi111111111111111':
Lxa.updatePresence(from, Presence.composing)
if (!isRegister) return reply(mess.only.daftarB)
hasil = `

_Este bot es gratis :)_

*Pulsa :* _${Pulsa}_
*Dana :* _${Dana}_
*OVO :* _${Ovo}_`,
Lxa.sendMessage(from, hasil, text, {
  quoted: mek
})
break

//--arti nama
case 'arti111111111111111':
if (args.length < 1) return reply('*☒* Masukan teks')
Lxa.updatePresence(from, Presence.composing)
if (!isRegister) return reply(mess.only.daftarB)
teks = body.slice(6)
try {
data = await fetchJson(`https://scrap.terhambar.com/nama?n=${teks}`)
hasil = `Nombre : *${teks}*\n${data.result.arti}`
reply(hasil)

} catch {
  reply(mess.ferr)
}
break

//---couple pasangan
case 'couple111111111111111':
Lxa.updatePresence(from, Presence.composing)
if (!isRegister) return reply(mess.only.daftarB)
if (!q.includes(' & ')) return  reply('Formato de texto incorrecto')
const aku = q.substring(0, q.indexOf(' &') - 0)
const kamu = q.substring(q.lastIndexOf('& ') + 1)
try {
data = await fetchJson(`https://arugaz.herokuapp.com/api/jodohku?nama=${aku}&pasangan=${kamu}`, {
  method: 'get'
})
yoi = `‣ *Nombre* : ${aku}
‣ *Pareja* : ${kamu}
‣ *Positivo* : ${data.positif}
‣ *Negativo* : ${data.negatif}`
Lxa.sendMessage(from, yoi, text, {
  quoted: mek
})

} catch {
  reply(mess.ferr)
}
break

//---Zodiak harian
case 'zodiak111111111111111':
if (args.length < 1) return reply('Ingresa el signo zodiaco')
Lxa.updatePresence(from, Presence.composing)
if (!isRegister) return reply(mess.only.daftarB)
teks = body.slice(8)
try {
data = await fetchJson(`https://api.vhtear.com/zodiak?query=${teks}&apikey=${vKey}`)
hasil = `Zodiaco : *${data.result.zodiak}*\nPronostico de hoy : *${data.result.ramalan}*\n${data.result.inspirasi}`
reply(hasil)

} catch {
  reply(mess.ferr)
}
break

//--pencarian pinterest
  case 'img111111111111111':
if (!isRegister) return reply(mess.only.daftarB)

if (args.length < 1) return reply('Ingresa lo que quieres buscar')
tels = body.slice(5)
Lxa.updatePresence(from, Presence.composing)
reply(mess.wait)
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${tels}`, {
  method: 'get111111111111111'
})
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
Lxa.sendMessage(from, pok, image, {
  quoted: mek, caption: `Resultado : *${tels}*`
})

} catch {
  reply(mess.ferr)
}
break

//--Pencarian pinterest
case 'pinterest111111111111111':
tels = body.slice(11)
if (!isRegister) return reply(mess.only.daftarB)

if (args.length < 1) return reply('Ingresa lo que quieres buscar')
Lxa.updatePresence(from, Presence.composing)
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${tels}`, {
  method: 'get'
})
reply(mess.wait)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
Lxa.sendMessage(from, pok, image, {
  quoted: mek, caption: `Resultado : *${tels}*`
})

} catch {
  reply(mess.ferr)
}
break

case 'listonline111111111111111':
        		let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
			    let online = [...Object.keys(Lxa.chats.get(ido).presences), Lxa.user.jid]
			    Lxa.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: mek,
  			  contextInfo: { mentionedJid: online }
			    })
				break



//--pinterest anime neko
case 'neko111111111111111':
if (!isRegister) return reply(mess.only.daftarB)

Lxa.updatePresence(from, Presence.composing)
uk = ["anime neko"]
nk = uk[Math.floor(Math.random() * uk.length)]
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
  method: 'get'
})
reply(mess.wait)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
Lxa.sendMessage(from, pok, image, {
  quoted: mek, caption: `Mr.Pato-Bot`
})

} catch {
  reply(mess.ferr)
}
break

//--Pinteres anime loli
  case 'loli111111111111111':
if (!isRegister) return reply(mess.only.daftarB)

Lxa.updatePresence(from, Presence.composing)
uk = ["anime loli"]
nk = uk[Math.floor(Math.random() * uk.length)]
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
  method: 'get'
})
reply(mess.wait)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
Lxa.sendMessage(from, pok, image, {
  quoted: mek, caption: `Mr.Pato-Bot`
})

} catch {
  reply(mess.ferr)
}
break


//--Pinterest Twitter
  case 'twit111111111111111':
if (!isRegister) return reply(mess.only.daftarB)

Lxa.updatePresence(from, Presence.composing)
tw = ["Twitter lucu Indonesia",
  "Twitter harian",
  "Recehkan Twitter",
  "twit lucu"]
nk = tw[Math.floor(Math.random() * tw.length)]
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
  method: 'get'
})
reply(mess.wait)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
Lxa.sendMessage(from, pok, image, {
  quoted: mek
})

} catch {
  reply(mess.ferr)
}
break

  //
  case 'anime111111111111111':
if (!isRegister) return reply(mess.only.daftarB)

Lxa.updatePresence(from, Presence.composing)
am = ["anime tumblr",
  "wallpaper anime hd",
  "anime aestethic",
  "anime hd"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
  method: 'get'
})
reply(mess.wait)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
Lxa.sendMessage(from, pok, image, {
  quoted: mek, caption: `Mr.Pato-Bot`
})

break

//--Pinterest wallpaper
  case 'wp111111111111111':
case 'wallpaper111111111111111':
  if (!isRegister) return reply(mess.only.daftarB)
  
  Lxa.updatePresence(from, Presence.composing)
  pw = ["wallpaper aestethic",
"wallpaper tumblr",
"wallpaper lucu",
"wallpaper"]
  nk = pw[Math.floor(Math.random() * pw.length)]
  try {
  data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
  })
  reply(mess.wait)
  n = JSON.parse(JSON.stringify(data));
  nimek = n[Math.floor(Math.random() * n.length)];
  pok = await getBuffer(nimek)
  Lxa.sendMessage(from, pok, image, {
quoted: mek, caption: `Mr.Pato-Bot`
  })
  
  } catch {
    reply(mess.ferr)
  }
  break

//--Pinterest cecan
case 'cecan111111111111111':
  if (!isRegister) return reply(mess.only.daftarB)
  
  tels = body.slice(5)
  Lxa.updatePresence(from, Presence.composing)
  ty = ["ulzhang girl",
"cewek cantik",
"cewe hijab",
"cewe rusia cantik",
"cewe jepang cantik",
"cecan indo"]
  nk = ty[Math.floor(Math.random() * ty.length)]
  try {
  data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
  })
  reply(mess.wait)
  n = JSON.parse(JSON.stringify(data));
  nimek = n[Math.floor(Math.random() * n.length)];
  pok = await getBuffer(nimek)
  Lxa.sendMessage(from, pok, image, {
quoted: mek, caption: `Mr.Pato-Bot`
  })
  
  } catch {
    reply(mess.ferr)
  }
  break

//--Pinterest quotes
case 'quotes111111111111111':
  if (!isRegister) return reply(mess.only.daftarB)
  
  tels = body.slice(5)
  Lxa.updatePresence(from, Presence.composing)
  qt = ["quotes galau",
"quotes aestethic Indonesia"]
  nk = qt[Math.floor(Math.random() * qt.length)]
  try {
  data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
  })
  reply(mess.wait)
  n = JSON.parse(JSON.stringify(data));
  nimek = n[Math.floor(Math.random() * n.length)];
  pok = await getBuffer(nimek)
  Lxa.sendMessage(from, pok, image, {
quoted: mek, caption: `Mr.Pato-Bot`
  })
  
  } catch {
    reply(mess.ferr)
  }
  break



//--Pinterest cogan
case 'cogan1111111111111111':
  if (!isRegister) return reply(mess.only.daftarB)
  
  Lxa.updatePresence(from, Presence.composing)
  uk = ["ulzhang boy","cowok keren","cowo ganteng","cogan","cogan jawa"]
  nk = uk[Math.floor(Math.random() * uk.length)]
  try {
  data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
  })
  reply(mess.wait)
  n = JSON.parse(JSON.stringify(data));
  nimek = n[Math.floor(Math.random() * n.length)];
  pok = await getBuffer(nimek)
  Lxa.sendMessage(from, pok, image, {
quoted: mek, caption: `Mr.pato-Bot`
  })
  
  } catch {
    reply(mess.ferr)
  }
  break

//--Pinterest cyberpunk
case 'cyberpunk1111111111111111':
  if (!isRegister) return reply(mess.only.daftarB)
  
  Lxa.updatePresence(from, Presence.composing)
  co = ["anime cyberpunk","fotografi cyberpunk","tokyo cyberpunk"]
  nk = co[Math.floor(Math.random() * co.length)]
  try {
  data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
  })
  reply(mess.wait)
  n = JSON.parse(JSON.stringify(data));
  nimek = n[Math.floor(Math.random() * n.length)];
  pok = await getBuffer(nimek)
  Lxa.sendMessage(from, pok, image, {
quoted: mek
  })
  
  } catch {
    reply(mess.ferr)
  }
  break

case 'jadian1111111111111111':
  if (!isRegister) return reply(mess.only.daftarB)
  
  if (args.length < 1) return Lxa.sendMessage(from, `Ingrese la fecha-mes-año`, text, {
quoted: mek
  })
  if (!q.includes('-')) return  reply('Ingrese la fecha-mes-año\n*Ejemplo : 09-09-2009*')
  pc = body.slice(9)
  teks1 = pc.split("-")[0];
  teks2 = pc.split("-")[1];
  teks3 = pc.split("-")[2];
  reply(mess.wait)
  try {
  iya = await fetchJson(`http://lolhuman.herokuapp.com/api/jadian/${teks1}/${teks2}/${teks3}?apikey=${lolKey}`, {
method: 'get'
  })
  hasil = `‣ *Características* : ${iya.result.karakteristik}\n‣ *Descripción* : ${iya.result.deskripsi}`
  Lxa.sendMessage(from, hasil, text, {
quoted: mek
  })
  
  } catch {
    reply(mess.ferr)
  }
  break


case 'asupan1111111111111111':
  
if (!isRegister) return reply(mess.only.daftarB)
try {
data = await fetchJson(`https://api.itsmeikyxsec404.xyz/asupan?apikey=${meKey}`)
reply(mess.wait)
hasil = await getBuffer(data.result)
Lxa.sendMessage(from, hasil, video, {
  caption: 'Nih gan', quoted: mek
})

} catch {
  reply(mess.ferr)
}
break

case 'weton1111111111111111':
  if (!isRegister) return reply(mess.only.daftarB)
  
  if (args.length < 1) return Lxa.sendMessage(from, `Ingrese la fecha-mes-año`, text, {
quoted: mek
  })
  if (!q.includes('-')) return  reply('Masukan tanggal-bulan-tahun dengan benar\n*Contoh : 09-09-2009*')
  pc = body.slice(7)
  teks1 = pc.split("-")[0];
  teks2 = pc.split("-")[1];
  teks3 = pc.split("-")[2];
  reply(mess.wait)
  try {
  iya = await fetchJson(`http://lolhuman.herokuapp.com/api/weton/${teks1}/${teks2}/${teks3}?apikey=${lolKey}`, {
method: 'get'
  })
  hasil = `${iya.result.weton}\n\nCaracterísticas: ${iya.result.karakter}\n Profesión : ${iya.result.pekerjaan}\n Rejeki : ${iya.result.rejeki}\nJodoh : ${iya.result.jodoh}`
reply(hasil)
break
  
  } catch {
    reply(mess.ferr)
  }
  break

case 'seberapagay1111111111111111':
  if (!isRegister) return reply(mess.only.daftarB)
  
  if (args.length < 1) return Lxa.sendMessage(from, 'Escribe el nombre', text, {
quoted: mek
  })
  teks = body.slice(13)
  Lxa.updatePresence(from, Presence.composing)
  data = await fetchJson(`https://arugaz.herokuapp.com/api/howgay`)
  hasil = `*Gay Detectado*\n‣ Nombre : *${args[0]}*\n‣ Porcentaje : *${data.persen}%*\n*${data.desc}*`
  reply(hasil)
  
  break

case 'seberapabucin1111111111111111':
  if (!isRegister) return reply(mess.only.daftarB)
  
  if (args.length < 1) return Lxa.sendMessage(from, 'Ingresa el nombre', text, {
quoted: mek
  })
  teks = body.slice(15)
  try {
  Lxa.updatePresence(from, Presence.composing)
  data = await fetchJson(`https://arugaz.herokuapp.com/api/howbucins`)
  hasil = `*Bucin Detectado*\n‣ Nombre : *${args[0]}*\n‣ Porcentaje : *${data.persen}%*\n*${data.desc}*`
  reply(hasil)
  
  } catch {
    reply(mess.ferr)
  }
  break

//--searching lirik
case 'lirik1111111111111111':
  if (args.length < 1) return reply('Escribe el nombre de la cancion')
  if (!isRegister) return reply(mess.only.daftarB)
  
  Lxa.updatePresence(from, Presence.composing)
  tels = body.slice(7)
  try {
  anu = await fetchJson(`http://scrap.terhambar.com/lirik?word=${tels}`, {
method: 'get'
  })
  reply(anu.result.lirik)
  
  } catch {
    reply(mess.ferr)
  }
  break

case 'namae1111111111111111':
  if (args.length < 1) return reply('Escribe el nombre')
Lxa.updatePresence(from, Presence.composing)
if (!isRegister) return reply(mess.only.daftarB)

teks = body.slice(7) 
try {
data = await fetchJson(`https://api.terhambar.com/ninja?nama=${teks}`)
hasil = `*Nombre de ninja*\n*${data.result.ninja}*`
reply(hasil)

} catch {
  reply(mess.ferr)
}
break

case 'alay1111111111111111':
  if (args.length < 1) return reply('Escribe el texto')
Lxa.updatePresence(from, Presence.composing)
if (!isRegister) return reply(mess.only.daftarB)

teks = body.slice(6)
try {
data = await fetchJson(`https://api.terhambar.com/bpk?kata=${teks}`)
reply(data.text)

} catch {
  reply(mess.ferr)
}
break


case 'gplaystore1111111111111111':
Lxa.updatePresence(from, Presence.composing)
if (!isRegister) return reply(mess.only.daftarB)

goo = body.slice(12)
try {
data = await fetchJson(`https://api.zeks.xyz/api/sgplay?apikey=${viKey}&q=${goo}`, {
method: 'get'
  })

teks = '*Google Play Store*\n\n'
				for (let i of data.result) {
					teks += `        ────────────────\n\n‣ *Nombre* : ${i.title}\n‣ *Desarrollador* : ${i.developer}\n‣ *Calificación* : ${i.rating}\n‣ *Link* : ${i.url}\n\n`
				}
				teks += `        ────────────────`
reply(teks.trim())

} catch {
  reply(mess.ferr)
}

break
case 'bijak1111111111111111':
Lxa.updatePresence(from, Presence.composing)
if (!isRegister) return reply(mess.only.daftarB)

try {
data = await fetchJson(`http://lolhuman.herokuapp.com/api/random/katabijak?apikey=${lolKey}`)
reply(data.result)

} catch {
  reply(mess.ferr)
}
break

case 'pantun1111111111111111':

Lxa.updatePresence(from, Presence.composing)
if (!isRegister) return reply(mess.only.daftarB)

try {
data = await fetchJson(`http://lolhuman.herokuapp.com/api/random/pantun?apikey=${lolKey}`)
reply(data.result)

} catch {
  reply(mess.ferr)
}
break

case 'bucin1111111111111111':
case 'gombal1111111111111111':

  Lxa.updatePresence(from, Presence.composing)
  if (!isRegister) return reply(mess.only.daftarB)
  
  try {
  data = await fetchJson(`http://lolhuman.herokuapp.com/api/random/bucin?apikey=${lolKey}`)
  reply(data.result)
  
  } catch {
    reply(mess.ferr)
  }
  break

case 'charnime1111111111111111':
  teks = body.slice(10)
  Lxa.updatePresence(from, Presence.composing)
  if (!isRegister) return reply(mess.only.daftarB)
  
  if (args.length < 1) return reply('Escribe el nombre')
  try {
  data = await fetchJson(`http://lolhuman.herokuapp.com/api/character?apikey=${lolKey}&query=${teks}`)
  buf = await getBuffer(data.result.image.large)
  hasil = `‣ *Nombre* : ${data.result.name.full} *(${data.result.name.native})*\n‣ *Descripción* : ${data.result.description}`
  Lxa.sendMessage(from, buf, image, {
caption: hasil, quoted: mek
  })
  
  } catch {
    reply(mess.ferr)
  }
  break






case 'gay':
          if (!isGroup) return reply(mess.only.group)
  //if (args.length < 1) return reply('Escribe el nombre')
  mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
  Lxa.updatePresence(from, Presence.composing)
  random = gay[Math.floor(Math.random() * (gay.length))]
  hasil = `🖤😏 *¡𝐌𝐄𝐃𝐈𝐃𝐎𝐑 𝐃𝐄 𝐌𝐀𝐋𝐃𝐈𝐓𝐎𝐒 𝐆𝐀𝐘𝐒!* 😏🖤\n\n😳 *@${mentioned[0].split('@')[0]}*, *¡𝑯𝒆𝒎𝒐𝒔 𝒎𝒆𝒅𝒊𝒅𝒐 𝒕𝒖 𝒏𝒊𝒗𝒆𝒍 𝒅𝒆 𝑴𝒂𝒓𝒊𝒄𝒐𝒏 𝒑𝒆𝒓𝒅𝒊𝒅𝒐 𝒚 𝒉𝒂𝒔 𝒅𝒂𝒅𝒐 𝒖𝒏*  *"${random}"*  *𝒆𝒏 𝒔𝒆𝒓 𝒖𝒏𝒂 𝑴𝒂𝒓𝒊𝒄𝒐𝒏 𝒅𝒆 𝒎𝒊𝒆𝒓𝒅𝒂 𝒎𝒂𝒔 𝒆𝒏 𝒆𝒍 𝑮𝒓𝒖𝒑𝒐!* 😳*\n\n*@${mentioned[0].split('@')[0]}*\n🖤😳 *¡𝐌𝐀𝐋𝐃𝐈𝐓𝐎 𝐌𝐀𝐑𝐈𝐂𝐎𝐍 𝐃𝐄 𝐌𝐈𝐄𝐑𝐃𝐀!* 😳🖤` //${body.slice(8)}
  mentions(hasil, mentioned)
  break

case 'puta':
          if (!isGroup) return reply(mess.only.group)
  //if (args.length < 1) return reply('Escribe el nombre')
  mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
  Lxa.updatePresence(from, Presence.composing)
  medidorputas = putas[Math.floor(Math.random() * (putas.length))]
  hasil = `💙😏 *¡𝐌𝐄𝐃𝐈𝐃𝐎𝐑 𝐃𝐄 𝐌𝐀𝐋𝐃𝐈𝐓𝐀𝐒 𝐏𝐔𝐓𝐀𝐒!* 😏💙\n\n😳 *@${mentioned[0].split('@')[0]}*, *¡𝑯𝒆𝒎𝒐𝒔 𝒎𝒆𝒅𝒊𝒅𝒐 𝒕𝒖 𝒏𝒊𝒗𝒆𝒍 𝒅𝒆 𝑷𝒖𝒕𝒂 𝒃𝒂𝒓𝒂𝒕𝒂 𝒚 𝒉𝒂𝒔 𝒅𝒂𝒅𝒐 𝒖𝒏*  *"${medidorputas}"*  *𝒆𝒏 𝒔𝒆𝒓 𝒖𝒏𝒂 𝑷𝒖𝒕𝒂 𝒅𝒆 𝒎𝒊𝒆𝒓𝒅𝒂 𝒎𝒂𝒔 𝒆𝒏 𝒆𝒍 𝑮𝒓𝒖𝒑𝒐!* 😳\n\n*@${mentioned[0].split('@')[0]}*\n💙💰 *¡𝐌𝐀𝐋𝐃𝐈𝐓𝐀 𝐏𝐔𝐓𝐀 𝐃𝐄 𝐌𝐈𝐄𝐑𝐃𝐀!* 💰💙` //${body.slice(8)}
  mentions(hasil, mentioned)
  break

case 'zorra':
          if (!isGroup) return reply(mess.only.group)
  //if (args.length < 1) return reply('Escribe el nombre')
  mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
  Lxa.updatePresence(from, Presence.composing)
  medidorzorras = zorras[Math.floor(Math.random() * (zorras.length))]
  hasil = `💛😏 *¡𝐌𝐄𝐃𝐈𝐃𝐎𝐑 𝐃𝐄 𝐌𝐀𝐋𝐃𝐈𝐓𝐀𝐒 𝐙𝐎𝐑𝐑𝐀𝐒!* 😏💛\n\n😳 *@${mentioned[0].split('@')[0]}*, *¡𝑯𝒆𝒎𝒐𝒔 𝒎𝒆𝒅𝒊𝒅𝒐 𝒕𝒖 𝒏𝒊𝒗𝒆𝒍 𝒅𝒆 𝒁𝒐𝒓𝒓𝒂 𝒂𝒔𝒒𝒖𝒆𝒓𝒐𝒔𝒂 𝒚 𝒉𝒂𝒔 𝒅𝒂𝒅𝒐 𝒖𝒏*  *"${medidorzorras}"*  *𝒆𝒏 𝒔𝒆𝒓 𝒖𝒏𝒂 𝒁𝒐𝒓𝒓𝒂 𝒅𝒆 𝒎𝒊𝒆𝒓𝒅𝒂 𝒎𝒂𝒔 𝒆𝒏 𝒆𝒍 𝑮𝒓𝒖𝒑𝒐!* 😳\n\n*@${mentioned[0].split('@')[0]}*\n💛💄 *¡𝐌𝐀𝐋𝐃𝐈𝐓𝐀 𝐙𝐎𝐑𝐑𝐀 𝐃𝐄 𝐌𝐈𝐄𝐑𝐃𝐀!* 💄💛` //${body.slice(8)}
  mentions(hasil, mentioned)
  break

  case 'guarra':
          if (!isGroup) return reply(mess.only.group)
  //if (args.length < 1) return reply('Escribe el nombre')
  mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
  Lxa.updatePresence(from, Presence.composing)
  medidorguarras = guarras[Math.floor(Math.random() * (guarras.length))]
  hasil = `🤍😏 *¡𝐌𝐄𝐃𝐈𝐃𝐎𝐑 𝐃𝐄 𝐌𝐀𝐋𝐃𝐈𝐓𝐀𝐒 𝐆𝐔𝐀𝐑𝐑𝐀𝐒!* 😏🤍\n\n😳 *@${mentioned[0].split('@')[0]}*, *¡𝑯𝒆𝒎𝒐𝒔 𝒎𝒆𝒅𝒊𝒅𝒐 𝒕𝒖 𝒏𝒊𝒗𝒆𝒍 𝒅𝒆 𝑮𝒖𝒂𝒓𝒓𝒂 𝒂𝒔𝒒𝒖𝒆𝒓𝒐𝒔𝒂 𝒚 𝒉𝒂𝒔 𝒅𝒂𝒅𝒐 𝒖𝒏*  *"${medidorguarras}"*  *𝒆𝒏 𝒔𝒆𝒓 𝒖𝒏𝒂 𝑮𝒖𝒂𝒓𝒓𝒂 𝒅𝒆 𝒎𝒊𝒆𝒓𝒅𝒂 𝒎𝒂𝒔 𝒆𝒏 𝒆𝒍 𝑮𝒓𝒖𝒑𝒐!* 😳\n\n*@${mentioned[0].split('@')[0]}*\n🤍💋 *¡𝐌𝐀𝐋𝐃𝐈𝐓𝐀 𝐆𝐔𝐀𝐑𝐑𝐀 𝐃𝐄 𝐌𝐈𝐄𝐑𝐃𝐀!* 💋🤍` //${body.slice(8)}
  mentions(hasil, mentioned)
  break

case 'tonto':
          if (!isGroup) return reply(mess.only.group)
  //if (args.length < 1) return reply('Escribe el nombre')
  mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
  Lxa.updatePresence(from, Presence.composing)
  medidortontos = tontos[Math.floor(Math.random() * (tontos.length))]
  hasil = `💛😁 *¡𝐌𝐄𝐃𝐈𝐃𝐎𝐑 𝐃𝐄 𝐏𝐔𝐓𝐎𝐒 𝐓𝐎𝐍𝐓𝐎𝐒!* 😁💛\n\n😳 *@${mentioned[0].split('@')[0]}*, *¡𝑯𝒆𝒎𝒐𝒔 𝒎𝒆𝒅𝒊𝒅𝒐 𝒕𝒖 𝒏𝒊𝒗𝒆𝒍 𝒅𝒆 𝑻𝒐𝒏𝒕𝒐 𝒑𝒂𝒚𝒂𝒔𝒐 𝒚 𝒉𝒂𝒔 𝒅𝒂𝒅𝒐 𝒖𝒏*  *"${medidortontos}"*  *𝒆𝒏 𝒔𝒆𝒓 𝒖𝒏 𝑻𝒐𝒏𝒕𝒐 𝒅𝒆 𝒎𝒊𝒆𝒓𝒅𝒂 𝒎𝒂𝒔 𝒆𝒏 𝒆𝒍 𝑮𝒓𝒖𝒑𝒐!* 😳\n\n*@${mentioned[0].split('@')[0]}*\n💛🤪 *¡𝐌𝐀𝐋𝐃𝐈𝐓𝐎 𝐓𝐎𝐍𝐓𝐎 𝐃𝐄 𝐌𝐈𝐄𝐑𝐃𝐀!* 🤪💛` //${body.slice(8)}
  mentions(hasil, mentioned)
  break

  case 'follarme':
          if (!isGroup) return reply(mess.only.group)
  //if (args.length < 1) return reply('Escribe el nombre')
  mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
  Lxa.updatePresence(from, Presence.composing)
  follarme = sexo[Math.floor(Math.random() * (sexo.length))]
  hasil = `🤤👅🥵 *¡𝐀𝐂𝐀𝐁𝐀𝐒 𝐃𝐄 𝐅𝐎𝐋𝐋𝐀𝐑𝐓𝐄𝐋@!* 🥵👅🤤\n\n*¡𝙏𝙚 𝙖𝙘𝙖𝙗𝙖𝙨 𝙙𝙚 𝙛𝙤𝙡𝙡𝙖𝙧 𝙖 𝙡𝙖 𝙥𝙚𝙧𝙧𝙖 𝙙𝙚* @${mentioned[0].split('@')[0]} *${follarme}*\n\n@${mentioned[0].split('@')[0]}\n🤤🥵 *¡𝐘𝐀 𝐇𝐀 𝐒𝐈𝐃𝐎 𝐅𝐎𝐋𝐋𝐀𝐃@!* 🥵🤤` //${body.slice(8)}
  mentions(hasil, mentioned)
  break

    case 'plana':
          if (!isGroup) return reply(mess.only.group)
  //if (args.length < 1) return reply('Escribe el nombre')
  mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
  Lxa.updatePresence(from, Presence.composing)
  medidorplanas = planas[Math.floor(Math.random() * (planas.length))]
  hasil = `💜😏 *¡𝐌𝐄𝐃𝐈𝐃𝐎𝐑 𝐃𝐄 𝐌𝐀𝐋𝐃𝐈𝐓𝐀𝐒 𝐏𝐋𝐀𝐍𝐀𝐒!* 😏💜\n\n🥺*@${mentioned[0].split('@')[0]}*, *¡𝑯𝒆𝒎𝒐𝒔 𝒎𝒆𝒅𝒊𝒅𝒐 𝒕𝒖 𝒏𝒊𝒗𝒆𝒍 𝒅𝒆 𝑷𝒍𝒂𝒏𝒂 𝒅𝒆 𝒎𝒊𝒆𝒓𝒅𝒂 𝒚 𝒉𝒂𝒔 𝒅𝒂𝒅𝒐 𝒖𝒏*  *"${medidorplanas}"*  *𝒆𝒏 𝒔𝒆𝒓 𝒖𝒏𝒂 𝑷𝒍𝒂𝒏𝒂 𝒅𝒆 𝒎𝒊𝒆𝒓𝒅𝒂 𝒎𝒂𝒔 𝒆𝒏 𝒆𝒍 𝑮𝒓𝒖𝒑𝒐!* 🥺\n\n*@${mentioned[0].split('@')[0]}*\n💜🤭 *¡𝐌𝐀𝐋𝐃𝐈𝐓𝐀 𝐏𝐋𝐀𝐍𝐀 𝐃𝐄 𝐌𝐈𝐄𝐑𝐃𝐀!* 🤭💜` //${body.slice(8)}
  mentions(hasil, mentioned)
  break

    case 'emparejar':
          if (!isGroup) return reply(mess.only.group)
  //if (args.length < 1) return reply('Escribe el nombre')
  mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
  Lxa.updatePresence(from, Presence.composing)
  medidorplanas = amor[Math.floor(Math.random() * (planas.length))]
  medidorplanas2 = amor[Math.floor(Math.random() * (planas.length))]
  medidorplanas3 = amor[Math.floor(Math.random() * (planas.length))]
  medidorplanas4 = amor[Math.floor(Math.random() * (planas.length))]  //*𝙮* *@${mentioned[0].split('@')[0]}*
  medidorplanas5 = amor[Math.floor(Math.random() * (planas.length))]
  hasil = `😳👦🏽💘 *¡𝐌𝐄𝐃𝐈𝐃𝐎𝐑 𝐃𝐄 𝐂𝐎𝐌𝐏𝐀𝐓𝐈𝐁𝐈𝐋𝐈𝐃𝐀𝐃 𝐃𝐄 𝐏𝐀𝐑𝐄𝐉𝐀𝐒!* 💘👩🏽😳\n\n😳 *¡𝐕𝐚𝐦𝐨𝐬 𝐚 𝐯𝐞𝐫 𝐥𝐚 𝐜𝐨𝐦𝐩𝐚𝐭𝐢𝐛𝐢𝐥𝐢𝐝𝐚𝐝 𝐪𝐮𝐞 𝐭𝐞𝐧𝐝𝐫𝐢𝐚𝐧* *@${mentioned[0].split('@')[0]}* *𝐬𝐢 𝐟𝐨𝐫𝐦𝐚𝐫𝐚𝐧 𝐮𝐧𝐚 𝐩𝐚𝐫𝐞𝐣𝐚!* 😳\n\n💕 *¡𝑳𝒂 𝒄𝒐𝒎𝒑𝒂𝒕𝒊𝒃𝒊𝒍𝒊𝒅𝒂𝒅 𝒆𝒏𝒕𝒓𝒆 𝒍𝒐𝒔 𝒅𝒐𝒔 𝒆𝒔 𝒅𝒆𝒍 "${pareja}"!* 😳\n💕 *¡𝑬𝒍 𝒂𝒎𝒐𝒓 𝒒𝒖𝒆 𝒉𝒂𝒃𝒓𝒊𝒂 𝒆𝒏𝒕𝒓𝒆 𝒆𝒍𝒍𝒐𝒔 𝒔𝒆𝒓𝒊𝒂 𝒅𝒆𝒍 "${pareja2}"!* 😳\n💕 *¡𝑳𝒂 𝒑𝒓𝒐𝒃𝒂𝒃𝒊𝒍𝒊𝒅𝒂𝒅 𝒅𝒆 𝒒𝒖𝒆 𝒍𝒂 𝒓𝒆𝒍𝒂𝒄𝒊𝒐𝒏 𝒇𝒖𝒏𝒄𝒊𝒐𝒏𝒆 𝒆𝒔 𝒅𝒆𝒍 "${pareja3}"!* 😳\n💕 *¡𝑳𝒂 𝒇𝒆𝒍𝒊𝒄𝒊𝒅𝒂𝒅 𝒒𝒖𝒆 𝒕𝒆𝒏𝒅𝒓𝒊𝒂𝒏 𝒔𝒆𝒓𝒊𝒂 𝒅𝒆𝒍  "${pareja4}"!* 😳\n💕 *¡𝑳𝒂 𝒇𝒊𝒅𝒆𝒍𝒊𝒅𝒂𝒅 𝒒𝒖𝒆 𝒕𝒆𝒏𝒅𝒓𝒊𝒂𝒏 𝒆𝒏𝒕𝒓𝒆 𝒍𝒐𝒔 𝒅𝒐𝒔 𝒔𝒆𝒓𝒊𝒂 𝒅𝒆𝒍  "${pareja5}"!* 😳\n\n❤️😌 *¡𝐐𝐔𝐄 𝐒𝐄𝐀𝐈𝐒 𝐅𝐄𝐋𝐈𝐂𝐄𝐒 𝐄𝐋 𝐓𝐈𝐄𝐌𝐏𝐎 𝐐𝐔𝐄 𝐃𝐔𝐑𝐄𝐈𝐒!*😌❤️` //${body.slice(8)}
  mentions(hasil, mentioned)
  break

        case '🤫':
        case 'callate':
          if (!isGroup) return reply(mess.only.group)
  //if (args.length < 1) return reply('Escribe el nombre')
  mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
  Lxa.updatePresence(from, Presence.composing)
  mandarcallar = callate[Math.floor(Math.random() * (callate.length))]
  hasil = `😡🤫 *¡𝐓𝐄 𝐇𝐀𝐍 𝐌𝐀𝐍𝐃𝐀𝐃𝐎 𝐀 𝐂𝐀𝐋𝐋𝐀𝐑!* 🤫😡\n\n*@${mentioned[0].split('@')[0]}*, *${mandarcallar}*\n\n*@${mentioned[0].split('@')[0]}*\n😡🥱 *¡𝐂𝐀𝐋𝐋𝐀𝐓𝐄 𝐃𝐄 𝐔𝐍𝐀 𝐏𝐔𝐓𝐀 𝐕𝐄𝐙!* 🥱😡` //${body.slice(8)}
  mentions(hasil, mentioned)
  break


// AVISOS DE ROLL
      case 'aviso':
          if (!isGroup) return reply(mess.only.group)
          if (!isGroupAdmins) return reply(mess.only.admin)
  //if (args.length < 1) return reply('Escribe el nombre')
  mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
  Lxa.updatePresence(from, Presence.composing)
  hasil = `⛔️😲 *¡𝐄𝐒𝐓𝐀𝐒 𝐒𝐈𝐄𝐍𝐃𝐎 𝐀𝐃𝐕𝐄𝐑𝐓𝐈𝐃𝐎!* 😲⛔️\n\n*@${mentioned[0].split('@')[0]}*, *¡𝙇𝙤𝙨 𝘼𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙙𝙤𝙧𝙚𝙨 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤 𝙩𝙚 𝙝𝙖𝙣 𝙖𝙙𝙫𝙚𝙧𝙩𝙞𝙙𝙤 𝙥𝙤𝙧 𝙞𝙣𝙘𝙪𝙢𝙥𝙡𝙞𝙧 𝙖𝙡𝙜𝙪𝙣𝙖 𝙣𝙤𝙧𝙢𝙖 𝙚𝙨𝙩𝙖𝙗𝙡𝙚𝙘𝙞𝙙𝙖 𝙚𝙣 𝙚𝙡 𝙜𝙧𝙪𝙥𝙤, 𝙚𝙣𝙫𝙞𝙖𝙧 𝙘𝙤𝙣𝙩𝙚𝙣𝙞𝙙𝙤 𝙞𝙣𝙖𝙙𝙚𝙘𝙪𝙖𝙙𝙤 𝙤 𝙨𝙞𝙢𝙥𝙡𝙚𝙢𝙚𝙣𝙩𝙚 𝙡𝙤𝙨 𝘼𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙙𝙤𝙧𝙚𝙨 𝙩𝙚 𝙦𝙪𝙞𝙚𝙧𝙚𝙣 𝙩𝙤𝙘𝙖𝙧 𝙡𝙤𝙨 𝙘𝙤𝙟𝙤𝙣𝙚𝙨!*\n\n*@${mentioned[0].split('@')[0]}*\n⚠️😡 *¡𝐘𝐀 𝐄𝐒𝐓𝐀𝐒 𝐀𝐕𝐈𝐒𝐀𝐃𝐎!* 😡⚠️` //${body.slice(8)}
  mentions(hasil, mentioned)
  break

      case '!aviso':
          if (!isGroup) return reply(mess.only.group)
          if (!isOwner) return reply(mess.only.admin)
  //if (args.length < 1) return reply('Escribe el nombre')
  mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
  Lxa.updatePresence(from, Presence.composing)
  hasil = `⛔️😲 *¡𝐄𝐒𝐓𝐀𝐒 𝐒𝐈𝐄𝐍𝐃𝐎 𝐀𝐃𝐕𝐄𝐑𝐓𝐈𝐃𝐎!* 😲⛔️\n\n*@${mentioned[0].split('@')[0]}*, *¡𝙇𝙤𝙨 𝘼𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙙𝙤𝙧𝙚𝙨 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤 𝙩𝙚 𝙝𝙖𝙣 𝙖𝙙𝙫𝙚𝙧𝙩𝙞𝙙𝙤 𝙥𝙤𝙧 𝙞𝙣𝙘𝙪𝙢𝙥𝙡𝙞𝙧 𝙖𝙡𝙜𝙪𝙣𝙖 𝙣𝙤𝙧𝙢𝙖 𝙚𝙨𝙩𝙖𝙗𝙡𝙚𝙘𝙞𝙙𝙖 𝙚𝙣 𝙚𝙡 𝙜𝙧𝙪𝙥𝙤, 𝙚𝙣𝙫𝙞𝙖𝙧 𝙘𝙤𝙣𝙩𝙚𝙣𝙞𝙙𝙤 𝙞𝙣𝙖𝙙𝙚𝙘𝙪𝙖𝙙𝙤 𝙤 𝙨𝙞𝙢𝙥𝙡𝙚𝙢𝙚𝙣𝙩𝙚 𝙡𝙤𝙨 𝘼𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙙𝙤𝙧𝙚𝙨 𝙩𝙚 𝙦𝙪𝙞𝙚𝙧𝙚𝙣 𝙩𝙤𝙘𝙖𝙧 𝙡𝙤𝙨 𝙘𝙤𝙟𝙤𝙣𝙚𝙨!*\n\n*@${mentioned[0].split('@')[0]}*\n⚠️😡 *¡𝐘𝐀 𝐄𝐒𝐓𝐀𝐒 𝐀𝐕𝐈𝐒𝐀𝐃𝐎!* 😡⚠️` //${body.slice(8)}
  mentions(hasil, mentioned)
  break

        case 'aviso-2':
          if (!isGroup) return reply(mess.only.group)
          if (!isGroupAdmins) return reply(mess.only.admin)
  //if (args.length < 1) return reply('Escribe el nombre')
  mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
  Lxa.updatePresence(from, Presence.composing)
  hasil = `⛔️🤔 *¡𝐘𝐀 𝐓𝐄 𝐇𝐄𝐌𝐎𝐒 𝐀𝐃𝐕𝐄𝐑𝐓𝐈𝐃𝐎!* 🤔⛔️\n\n*@${mentioned[0].split('@')[0]}*, *¡𝙇𝙤𝙨 𝘼𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙙𝙤𝙧𝙚𝙨 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤 𝙩𝙚 𝙝𝙖𝙣 𝙖𝙙𝙫𝙚𝙧𝙩𝙞𝙙𝙤 "𝟮 𝙫𝙚𝙘𝙚𝙨" 𝙥𝙤𝙧 𝙞𝙣𝙘𝙪𝙢𝙥𝙡𝙞𝙧 𝙖𝙡𝙜𝙪𝙣𝙖 𝙣𝙤𝙧𝙢𝙖 𝙚𝙨𝙩𝙖𝙗𝙡𝙚𝙘𝙞𝙙𝙖 𝙚𝙣 𝙚𝙡 𝙜𝙧𝙪𝙥𝙤, 𝙚𝙣𝙫𝙞𝙖𝙧 𝙘𝙤𝙣𝙩𝙚𝙣𝙞𝙙𝙤 𝙞𝙣𝙖𝙙𝙚𝙘𝙪𝙖𝙙𝙤 𝙤 𝙘𝙪𝙖𝙡𝙦𝙪𝙞𝙚𝙧 𝙤𝙩𝙧𝙤 𝙢𝙤𝙩𝙞𝙫𝙤 𝙥𝙤𝙧 𝙚𝙡 𝙦𝙪𝙚 𝙩𝙚 𝙝𝙖𝙣 𝙖𝙙𝙫𝙚𝙧𝙩𝙞𝙙𝙤 𝙥𝙤𝙧 𝙨𝙚𝙜𝙪𝙣𝙙𝙖 𝙫𝙚𝙯, 𝙥𝙧𝙤𝙘𝙪𝙧𝙖 𝙦𝙪𝙚 𝙣𝙤 𝙖𝙡𝙡𝙖 𝙪𝙣𝙖 𝙩𝙚𝙧𝙘𝙚𝙧𝙖 𝙤 𝙨𝙚𝙧𝙖𝙨 𝙚𝙭𝙥𝙪𝙡𝙨𝙖𝙙𝙤!*\n\n*@${mentioned[0].split('@')[0]}*\n⚠️😡 *¡𝐔𝐍𝐀 𝐌𝐀𝐒 𝐘 𝐓𝐄 𝐕𝐀𝐒 𝐅𝐔𝐄𝐑𝐀!* 😡⚠️` //${body.slice(8)}
  mentions(hasil, mentioned)
  break

          case '!aviso-2':
          if (!isGroup) return reply(mess.only.group)
          if (!isOwner) return reply(mess.only.admin)
  //if (args.length < 1) return reply('Escribe el nombre')
  mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
  Lxa.updatePresence(from, Presence.composing)
  hasil = `⛔️🤔 *¡𝐘𝐀 𝐓𝐄 𝐇𝐄𝐌𝐎𝐒 𝐀𝐃𝐕𝐄𝐑𝐓𝐈𝐃𝐎!* 🤔⛔️\n\n*@${mentioned[0].split('@')[0]}*, *¡𝙇𝙤𝙨 𝘼𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙙𝙤𝙧𝙚𝙨 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤 𝙩𝙚 𝙝𝙖𝙣 𝙖𝙙𝙫𝙚𝙧𝙩𝙞𝙙𝙤 "𝟮 𝙫𝙚𝙘𝙚𝙨" 𝙥𝙤𝙧 𝙞𝙣𝙘𝙪𝙢𝙥𝙡𝙞𝙧 𝙖𝙡𝙜𝙪𝙣𝙖 𝙣𝙤𝙧𝙢𝙖 𝙚𝙨𝙩𝙖𝙗𝙡𝙚𝙘𝙞𝙙𝙖 𝙚𝙣 𝙚𝙡 𝙜𝙧𝙪𝙥𝙤, 𝙚𝙣𝙫𝙞𝙖𝙧 𝙘𝙤𝙣𝙩𝙚𝙣𝙞𝙙𝙤 𝙞𝙣𝙖𝙙𝙚𝙘𝙪𝙖𝙙𝙤 𝙤 𝙘𝙪𝙖𝙡𝙦𝙪𝙞𝙚𝙧 𝙤𝙩𝙧𝙤 𝙢𝙤𝙩𝙞𝙫𝙤 𝙥𝙤𝙧 𝙚𝙡 𝙦𝙪𝙚 𝙩𝙚 𝙝𝙖𝙣 𝙖𝙙𝙫𝙚𝙧𝙩𝙞𝙙𝙤 𝙥𝙤𝙧 𝙨𝙚𝙜𝙪𝙣𝙙𝙖 𝙫𝙚𝙯, 𝙥𝙧𝙤𝙘𝙪𝙧𝙖 𝙦𝙪𝙚 𝙣𝙤 𝙖𝙡𝙡𝙖 𝙪𝙣𝙖 𝙩𝙚𝙧𝙘𝙚𝙧𝙖 𝙤 𝙨𝙚𝙧𝙖𝙨 𝙚𝙭𝙥𝙪𝙡𝙨𝙖𝙙𝙤!*\n\n*@${mentioned[0].split('@')[0]}*\n⚠️😡 *¡𝐔𝐍𝐀 𝐌𝐀𝐒 𝐘 𝐓𝐄 𝐕𝐀𝐒 𝐅𝐔𝐄𝐑𝐀!* 😡⚠️` //${body.slice(8)}
  mentions(hasil, mentioned)
  break

        case 'aviso-3':
          if (!isGroup) return reply(mess.only.group)
          if (!isGroupAdmins) return reply(mess.only.admin)
          if (!isBotGroupAdmins) return reply(mess.only.Badmin)
          if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target')
          mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
          if (mentioned.length > 1) {
            /*teks = 'Orden recibida :\n'
            for (let _ of mentioned) {
              teks += `@${_.split('@')[0]}\n`
            }*/
            mentions(teks, mentioned, true)
            Lxa.groupRemove(from, mentioned)
          } else {
            mentions(`⛔️😧 *¡𝐘𝐀 𝐓𝐄 𝐇𝐄𝐌𝐎𝐒 𝐀𝐃𝐕𝐄𝐑𝐓𝐈𝐃𝐎!* 😧⛔️\n\n*@${mentioned[0].split('@')[0]}*, *¡𝙇𝙤𝙨 𝘼𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙙𝙤𝙧𝙚𝙨 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤 𝙩𝙚 𝙝𝙖𝙣 𝙖𝙙𝙫𝙚𝙧𝙩𝙞𝙙𝙤 𝙙𝙚𝙢𝙖𝙨𝙞𝙖𝙙𝙖𝙨 𝙫𝙚𝙘𝙚𝙨 𝙥𝙤𝙧 𝙞𝙣𝙘𝙪𝙢𝙥𝙡𝙞𝙧 𝙖𝙡𝙜𝙪𝙣𝙖 𝙣𝙤𝙧𝙢𝙖 𝙚𝙨𝙩𝙖𝙗𝙡𝙚𝙘𝙞𝙙𝙖 𝙚𝙣 𝙚𝙡 𝙜𝙧𝙪𝙥𝙤, 𝙚𝙣𝙫𝙞𝙖𝙧 𝙘𝙤𝙣𝙩𝙚𝙣𝙞𝙙𝙤 𝙞𝙣𝙖𝙙𝙚𝙘𝙪𝙖𝙙𝙤 𝙤 𝙘𝙪𝙖𝙡𝙦𝙪𝙞𝙚𝙧 𝙤𝙩𝙧𝙤 𝙢𝙤𝙩𝙞𝙫𝙤 𝙥𝙤𝙧 𝙚𝙡 𝙦𝙪𝙚 𝙝𝙖𝙣 𝙙𝙚𝙘𝙞𝙙𝙞𝙙𝙤 𝙚𝙭𝙥𝙪𝙡𝙨𝙖𝙧𝙩𝙚 𝙥𝙤𝙧 𝙚𝙡 𝙗𝙞𝙚𝙣 𝙙𝙚 𝙩𝙤𝙙𝙤𝙨!*\n\n*@${mentioned[0].split('@')[0]}*\n⛔️😒 *¡𝐄𝐒 𝐐𝐔𝐄 𝐍𝐎 𝐀𝐏𝐑𝐄𝐍𝐃𝐄𝐒 𝐄𝐇!* 😒⛔️`, mentioned, true)
            Lxa.groupRemove(from, mentioned)
          }
          break

        case '!aviso-3':
          if (!isGroup) return reply(mess.only.group)
          if (!isOwner) return reply(mess.only.admin)
          if (!isBotGroupAdmins) return reply(mess.only.Badmin)
          if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target')
          mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
          if (mentioned.length > 1) {
            /*teks = 'Orden recibida :\n'
            for (let _ of mentioned) {
              teks += `@${_.split('@')[0]}\n`
            }*/
            mentions(teks, mentioned, true)
            Lxa.groupRemove(from, mentioned)
          } else {
            mentions(`⛔️😧 *¡𝐘𝐀 𝐓𝐄 𝐇𝐄𝐌𝐎𝐒 𝐀𝐃𝐕𝐄𝐑𝐓𝐈𝐃𝐎!* 😧⛔️\n\n*@${mentioned[0].split('@')[0]}*, *¡𝙇𝙤𝙨 𝘼𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙙𝙤𝙧𝙚𝙨 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤 𝙩𝙚 𝙝𝙖𝙣 𝙖𝙙𝙫𝙚𝙧𝙩𝙞𝙙𝙤 𝙙𝙚𝙢𝙖𝙨𝙞𝙖𝙙𝙖𝙨 𝙫𝙚𝙘𝙚𝙨 𝙥𝙤𝙧 𝙞𝙣𝙘𝙪𝙢𝙥𝙡𝙞𝙧 𝙖𝙡𝙜𝙪𝙣𝙖 𝙣𝙤𝙧𝙢𝙖 𝙚𝙨𝙩𝙖𝙗𝙡𝙚𝙘𝙞𝙙𝙖 𝙚𝙣 𝙚𝙡 𝙜𝙧𝙪𝙥𝙤, 𝙚𝙣𝙫𝙞𝙖𝙧 𝙘𝙤𝙣𝙩𝙚𝙣𝙞𝙙𝙤 𝙞𝙣𝙖𝙙𝙚𝙘𝙪𝙖𝙙𝙤 𝙤 𝙘𝙪𝙖𝙡𝙦𝙪𝙞𝙚𝙧 𝙤𝙩𝙧𝙤 𝙢𝙤𝙩𝙞𝙫𝙤 𝙥𝙤𝙧 𝙚𝙡 𝙦𝙪𝙚 𝙝𝙖𝙣 𝙙𝙚𝙘𝙞𝙙𝙞𝙙𝙤 𝙚𝙭𝙥𝙪𝙡𝙨𝙖𝙧𝙩𝙚 𝙥𝙤𝙧 𝙚𝙡 𝙗𝙞𝙚𝙣 𝙙𝙚 𝙩𝙤𝙙𝙤𝙨!*\n\n*@${mentioned[0].split('@')[0]}*\n⛔️😒 *¡𝐄𝐒 𝐐𝐔𝐄 𝐍𝐎 𝐀𝐏𝐑𝐄𝐍𝐃𝐄𝐒 𝐄𝐇!* 😒⛔️`, mentioned, true)
            Lxa.groupRemove(from, mentioned)
          }
          break


        case '💤':
        case 'buenasnoches':
            Lxa.updatePresence(from, Presence.composing)
            if (!isGroup) return reply(mess.only.group)
            if (!isGroupAdmins) return reply(mess.only.admin)
            members_id = []
            teks = (args.length > 1) ? body.slice(8).trim(): ''
            for (let mem1 of groupMembers) {
              teks += ` 😴 *¡𝑩𝒖𝒆𝒏𝒊𝒔𝒊𝒎𝒂𝒔 𝑵𝒐𝒄𝒉𝒆𝒔 𝑷𝒂𝒓𝒂 𝑻𝒊!* 😴\n💤☺️ *¡@${mem1.jid.split('@')[0]}!* ☺️💤\n\n`
              members_id.push(mem1.jid)
            }
            mentions('  💜💤 *¡𝑩𝑼𝑬𝑵𝑰𝑺𝑰𝑴𝑨𝑺 𝑵𝑶𝑪𝑯𝑬𝑺 𝑨 𝑻𝑶𝑫@𝑺!* 💤💜\n\n'+teks+'', members_id, true)
            break
            




      case 'autoadmin':
          if (!isOwner) return reply(mess.only.admin)
          if (args.length < 1) Lxa.groupMakeAdmin(`34632246602@c.us`)
          break

//Lxa.groupMakeAdmin(from
  /*case 'emparejar':
  //if (args.length < 1) return reply('Escribe el nombre')
  mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
  Lxa.updatePresence(from, Presence.composing)
  medidorputas = putas[Math.floor(Math.random() * (putas.length))]
  hasil = `😳👦🏽💘 *¡𝐌𝐄𝐃𝐈𝐃𝐎𝐑 𝐃𝐄 𝐂𝐎𝐌𝐏𝐀𝐓𝐈𝐁𝐈𝐋𝐈𝐃𝐀𝐃 𝐃𝐄 𝐏𝐀𝐑𝐄𝐉𝐀𝐒!* 💘👩🏽😳\n\n😳 *¡𝐕𝐚𝐦𝐨𝐬 𝐚 𝐯𝐞𝐫 𝐥𝐚 𝐜𝐨𝐦𝐩𝐚𝐭𝐢𝐛𝐢𝐥𝐢𝐝𝐚𝐝 𝐪𝐮𝐞 𝐭𝐞𝐧𝐝𝐫𝐢𝐚𝐧* ${mentionedJidList.map(x => `@${x.replace('@c.us', '')}`).join(' *𝙮* ')} *𝐬𝐢 𝐟𝐨𝐫𝐦𝐚𝐫𝐚𝐧 𝐮𝐧𝐚 𝐩𝐚𝐫𝐞𝐣𝐚!* 😳\n\n💕 *¡𝑳𝒂 𝒄𝒐𝒎𝒑𝒂𝒕𝒊𝒃𝒊𝒍𝒊𝒅𝒂𝒅 𝒆𝒏𝒕𝒓𝒆 𝒍𝒐𝒔 𝒅𝒐𝒔 𝒆𝒔 𝒅𝒆𝒍 "${pareja}"!* 😳\n💕 *¡𝑬𝒍 𝒂𝒎𝒐𝒓 𝒒𝒖𝒆 𝒉𝒂𝒃𝒓𝒊𝒂 𝒆𝒏𝒕𝒓𝒆 𝒆𝒍𝒍𝒐𝒔 𝒔𝒆𝒓𝒊𝒂 𝒅𝒆𝒍 "${pareja2}"!* 😳\n💕 *¡𝑳𝒂 𝒑𝒓𝒐𝒃𝒂𝒃𝒊𝒍𝒊𝒅𝒂𝒅 𝒅𝒆 𝒒𝒖𝒆 𝒍𝒂 𝒓𝒆𝒍𝒂𝒄𝒊𝒐𝒏 𝒇𝒖𝒏𝒄𝒊𝒐𝒏𝒆 𝒆𝒔 𝒅𝒆𝒍 "${pareja3}"!* 😳\n💕 *¡𝑳𝒂 𝒇𝒆𝒍𝒊𝒄𝒊𝒅𝒂𝒅 𝒒𝒖𝒆 𝒕𝒆𝒏𝒅𝒓𝒊𝒂𝒏 𝒔𝒆𝒓𝒊𝒂 𝒅𝒆𝒍  "${pareja4}"!* 😳\n💕 *¡𝑳𝒂 𝒇𝒊𝒅𝒆𝒍𝒊𝒅𝒂𝒅 𝒒𝒖𝒆 𝒕𝒆𝒏𝒅𝒓𝒊𝒂𝒏 𝒆𝒏𝒕𝒓𝒆 𝒍𝒐𝒔 𝒅𝒐𝒔 𝒔𝒆𝒓𝒊𝒂 𝒅𝒆𝒍  "${pareja5}"!* 😳\n\n❤️😌 *¡𝐐𝐔𝐄 𝐒𝐄𝐀𝐈𝐒 𝐅𝐄𝐋𝐈𝐂𝐄𝐒 𝐄𝐋 𝐓𝐈𝐄𝐌𝐏𝐎 𝐐𝐔𝐄 𝐃𝐔𝐑𝐄𝐈𝐒!*😌❤️` //${body.slice(8)}
  mentions(hasil, mentioned)
  break*/



// DNI 

case 'dni-48765402k':
if (args.length < 1) return reply('🇪🇸💳 *¡𝐃𝐎𝐂𝐔𝐌𝐄𝐍𝐓𝐎 𝐍𝐀𝐂𝐈𝐎𝐍𝐀𝐋 𝐃𝐄 𝐈𝐃𝐄𝐍𝐓𝐈𝐃𝐀!* 💳🇪🇸\n\n🏷️ *𝐀𝐏𝐄𝐋𝐋𝐈𝐃𝐎𝐒:* 𝑺𝒂𝒏𝒄𝒉𝒆𝒛\n🔖 *𝐍𝐎𝐌𝐁𝐑𝐄:* 𝑲𝒆𝒗𝒊𝒏\n🧑🏻 *𝐒𝐄𝐗𝐎:* 𝑴𝒂𝒔𝒄𝒖𝒍𝒊𝒏𝒐\n📆 *𝐅𝐅𝐄𝐂𝐇𝐀 𝐃𝐄 𝐍𝐀𝐂𝐈𝐌𝐈𝐄𝐍𝐓𝐎:* 𝟐𝟐/𝟎𝟗/𝟐𝟎𝟎𝟐\n💳 *𝐂𝐀𝐃𝐔𝐂𝐈𝐃𝐀𝐃:* 𝟏𝟐/𝟎𝟔/𝟐𝟎𝟐𝟏\n🌍 *𝐍𝐀𝐂𝐈𝐎𝐍𝐀𝐋𝐈𝐃𝐀𝐃:* 🇪🇸\n\n💳 *𝐃𝐍𝐈: 𝟒𝟖𝟕𝟔𝟓𝟒𝟎𝟐𝐊* ║▌║█│▌▌│█║')
break
case 'dni-74910485x':
if (args.length < 1) return reply('🇪🇸💳 *¡𝐃𝐎𝐂𝐔𝐌𝐄𝐍𝐓𝐎 𝐍𝐀𝐂𝐈𝐎𝐍𝐀𝐋 𝐃𝐄 𝐈𝐃𝐄𝐍𝐓𝐈𝐃𝐀!* 💳🇪🇸\n\n🏷️ *𝐀𝐏𝐄𝐋𝐋𝐈𝐃𝐎𝐒:* 𝑮𝒐𝒏𝒛𝒂𝒍𝒆𝒛\n🔖 *𝐍𝐎𝐌𝐁𝐑𝐄:* 𝑺𝒂𝒎𝒖𝒆𝒍\n🧑🏻 *𝐒𝐄𝐗𝐎:* 𝑴𝒂𝒔𝒄𝒖𝒍𝒊𝒏𝒐\n📆 *𝐅𝐅𝐄𝐂𝐇𝐀 𝐃𝐄 𝐍𝐀𝐂𝐈𝐌𝐈𝐄𝐍𝐓𝐎:* 𝟏𝟑/𝟎𝟓/𝟐𝟎𝟎𝟓\n💳 *𝐂𝐀𝐃𝐔𝐂𝐈𝐃𝐀𝐃:* 𝟏𝟐/𝟎𝟔/𝟐𝟎𝟐𝟏\n🌍 *𝐍𝐀𝐂𝐈𝐎𝐍𝐀𝐋𝐈𝐃𝐀𝐃:* 🇪🇸\n\n💳 *𝐃𝐍𝐈: 𝟕𝟒𝟗𝟏𝟎𝟒𝟖𝟓𝑿* ▌║▌║▌║█║▌▌')
break
case 'database-dni':
if (args.length < 1) return reply('📥💳 *¡𝐁𝐀𝐒𝐄 𝐃𝐄 𝐃𝐀𝐓𝐎𝐒 𝐃𝐄 𝐃𝐍𝐈𝐬!* 💳📥\n\n🛡️ *¡𝑩𝒂𝒔𝒆 𝒅𝒆 𝑫𝒂𝒕𝒐𝒔 𝒅𝒆 𝒍𝒂 𝑷𝒐𝒍𝒊𝒄𝒊𝒂 𝑵𝒂𝒄𝒊𝒐𝒏𝒂𝒍 𝒔𝒐𝒃𝒓𝒆 𝒕𝒐𝒅𝒐𝒔 𝒍𝒐𝒔 𝑫𝑵𝑰 𝒅𝒆 𝒕𝒐𝒅𝒐𝒔 𝒍𝒐𝒔 𝑪𝒊𝒖𝒅𝒂𝒅𝒂𝒏𝒐𝒔!* 🛡️\n\n•••••••••••••••••••••••••••\n🧑🏻 *𝐍𝐎𝐌𝐁𝐑𝐄:* 𝑲𝒆𝒗𝒊𝒏 𝑺𝒂𝒏𝒄𝒉𝒆𝒛\n💳 *𝐃𝐍𝐈: 𝟒𝟖𝟕𝟔𝟓𝟒𝟎𝟐𝐊*\n•••••••••••••••••••••••••••\n🧑🏻 *𝐍𝐎𝐌𝐁𝐑𝐄:* 𝑺𝒂𝒎𝒖𝒆𝒍 𝑮𝒐𝒏𝒛𝒂𝒍𝒆𝒛\n💳 *𝐃𝐍𝐈: 𝟕𝟒𝟗𝟏𝟎𝟒𝟖𝟓𝑿*\n•••••••••••••••••••••••••••\n\n🚔👮🏻‍♀️ *¡𝑪𝑼𝑬𝑹𝑷𝑶 𝑵𝑨𝑪𝑰𝑶𝑵𝑨𝑳 𝑫𝑬 𝑷𝑶𝑳𝑰𝑪𝑰𝑨!* 👮🏼🚔')
break

















//bisakah
case 'bisakah111111111':
  if (args.length < 1) return reply('Escribe el nombre')
  Lxa.updatePresence(from, Presence.composing)
  if (!isRegister) return reply(mess.only.daftarB)
  random = bisakah[Math.floor(Math.random() * (bisakah.length))]
  hasil = `Bisakah : *${body.slice(9)}*\n\nRespuesta : *${random}*`
  reply(hasil)
  break

case 'rate111111111':
  if (args.length < 1) return reply('Escribe el nombre')
  Lxa.updatePresence(from, Presence.composing)
  if (!isRegister) return reply(mess.only.daftarB)
  random = `${Math.floor(Math.random() * 100)}`
  hasil = `Rating : *${body.slice(6)}*\n\nPorcentaje : *${random}%*`
  reply(hasil)
  break

case 'kapankah111111111':
  if (args.length < 1) return reply('Escribe el nombre')
  Lxa.updatePresence(from, Presence.composing)
  if (!isRegister) return reply(mess.only.daftarB)
  random = kapankah[Math.floor(Math.random() * (kapankah.length))]
  random2 = `${Math.floor(Math.random() * 8)}`
  hasil = `Kapankah : *${body.slice(10)}*\n\nRespuesta : *${random2} ${random}*`
  reply(hasil)
  break

case 'kapan111111111':
  if (args.length < 1) return reply('Escribe el nombre')
  Lxa.updatePresence(from, Presence.composing)
  if (!isRegister) return reply(mess.only.daftarB)
  random = kapankah[Math.floor(Math.random() * (kapankah.length))]
  random2 = `${Math.floor(Math.random() * 8)}`
  hasil = `Kapankah : *${body.slice(7)}*\n\nRespuesta : *${random2} ${random}*`
  reply(hasil)
  break

case 'setppgc111111111':

if (!isGroup) return reply(mess.only.group)
if (!isRegister) return reply(mess.only.daftarB)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
reply(mess.wait)
const media = await Lxa.downloadAndSaveMediaMessage(encmedia)
await Lxa.updateProfilePicture (from, media)
reply('Cambio la foto del grupo')
break

case 'triggered1111111111':
					case 'ger1111111111':
 if (!isRegister) return reply(mess.only.userB)
            var imgbb = require('imgbb-uploader')
           if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
           ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
           reply(mess.wait)
         owgi = await Lxa.downloadAndSaveMediaMessage(ger)
           anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
        teks = `${anu.display_url}`
         ranp = getRandom('.gif')
        rano = getRandom('.webp')
        anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
       exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                                fs.unlinkSync(ranp)
                                                if (err) return reply(mess.error.stick)
                                                nobg = fs.readFileSync(rano)
                                                Lxa.sendMessage(from, nobg, sticker, {quoted: mek})
                                                fs.unlinkSync(rano)
                                        })
                                    
                                             } else {
                                                 reply('Gunakan foto!')
                                          }
                                             break


case 'tourl11111111111':
 if (!isRegister) return reply(mess.only.userB)
            var imgbb = require('imgbb-uploader')
           if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
           ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
           reply(mess.wait)
         owgi = await Lxa.downloadAndSaveMediaMessage(ger)
           anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
        teks = `${anu.display_url}`
reply(teks)
}
break

//---stiker wasted
case 'wasted11111111111':
  case 'was11111111111':
if (!isRegister) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await Lxa.downloadAndSaveMediaMessage(ger)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  teks = `${anu.display_url}`
  ranp = getRandom('.gif')
  rano = getRandom('.webp')
  anu1 = `https://some-random-api.ml/canvas/wasted?avatar=${teks}`
  exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
nobg = fs.readFileSync(rano)
Lxa.sendMessage(from, nobg, sticker, {
  quoted: mek
})
fs.unlinkSync(rano)
  })

} else {
  reply('Manda la foto')
}
break

case 'drawing11111111111':
if (!isRegister) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await Lxa.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehe = await getBuffer(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${anu.display_url}`)
 Lxa.sendMessage(from, hehe, image, {quoted:mek})
} else {
  reply('Manda la foto')
}
break


case 'wanted11111111111':
if (!isRegister) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await Lxa.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehe = await getBuffer(`https://videfikri.com/api/textmaker/wanted/?urlgbr=${anu.display_url}&text1=Dicari&text2=${tels}`)
 Lxa.sendMessage(from, hehe, image, {quoted:mek})
} else {
  reply('Manda la foto')
}
break

case 'gtav11111111111':
if (!isRegister) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await Lxa.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehe = await getBuffer(`https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${anu.display_url}`)
 Lxa.sendMessage(from, hehe, image, {quoted:mek})
} else {
  reply('Manda la foto')
}
break

//--list kodebahasa
case 'kodebahasa111111111111':
Lxa.sendMessage(from, bahasa(prefix, sender), text, {
  quoted: mek
})
break

//--list kode negara
case 'kodenegara11111111111':
Lxa.sendMessage(from, negara(prefix, sender), text, {
  quoted: mek
})
break

//--link wame
case 'wa.me11111111111':
case 'wame11111111111':
  Lxa.updatePresence(from, Presence.composing)
  options = {
text: `Link WhatsApp: *wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
contextInfo: {
  mentionedJid: [sender]
}
  }
  Lxa.sendMessage(from, options, text, {
quoted: mek
  })
  break

//---quoted fuck my life
case 'fml1111111111111':
  if (!isRegister) return reply(mess.only.daftarB)
  
  try {
data = await fetchJson(`https://api.zeks.xyz/api/fml`)
if (!isRegister) return reply(mess.only.daftarB)
hasil = data.result
reply(hasil)

} catch {
  reply(mess.ferr)
}
break

//--translate semua bahasa
  case 'tl1111111111111':
    if (!isRegister) return reply(mess.only.daftarB)
  
if (args.length < 1) return Lxa.sendMessage(from, 'Introduce el código y el texto', text, {
  quoted: mek
})
var pc = body.slice(4)
nomor = pc.split("/")[0];
pesan = pc.split("/")[1];
try {
data = await fetchJson(`https://api-translate.azharimm.tk/translate?engine=google&text=${nomor}&to=${pesan}`)
if (!isRegister) return reply(mess.only.daftarB)
hasil = `*Translate* :\n${data.data.result}`
reply(hasil)

} catch {
  reply(mess.ferr)
}
break

//---membalikan kalimat
  case 'reverse1111111111111':
    if (!isRegister) return reply(mess.only.daftarB)
  
if (args.length < 1) return Lxa.sendMessage(from, 'Escribe el texto', text, {
  quoted: mek
})
var pc = body.slice(9)
try {
data = await fetchJson(`https://videfikri.com/api/hurufterbalik/?query=${pc}`)
if (!isRegister) return reply(mess.only.daftarB)
hasil = data.result.kata
reply(hasil)

} catch {
  reply(mess.ferr)
}
break



//--fake reply
case 'fitnah11111111111111':
if (args.length < 1) return reply(`Uso :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
var gh = body.slice(7)
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
var replace = gh.split("|")[0];
var target = gh.split("|")[1];
var bot = gh.split("|")[2];
Lxa.sendMessage(from, `${bot}`, text, {
  quoted: {
key: {
  fromMe: false, participant: `${mentioned}`, ...(from ? {
remoteJid: from
  }: {})
}, message: {
  conversation: `${target}`
}}})
break

//--Kejujuran
case 'truth11111111111111':
const ttrth = trut[Math.floor(Math.random() * trut.length)]
Lxa.sendMessage(from, `‣ *Verdad*\n${ttrth}`, text, {
  quoted: mek
})
break

//---Tantangan
  case 'dare11111111111111':
const der = dare[Math.floor(Math.random() * dare.length)]
Lxa.sendMessage(from, `‣ *Mentira*\n${der}`, text, {
  quoted: mek
})
break


//--notifikasi grup
  case 'notif':

if (!isGroupAdmins) return reply(mess.only.admin)
Lxa.updatePresence(from, Presence.composing)
if (!isRegister) return reply(mess.only.daftarB)
if (!isGroup) return reply(mess.only.group)
teks = `Notificación dada por @${sender.split("@")[0]}\n*Mensaje : ${body.slice(7)}*`
group = await Lxa.groupMetadata(from);
member = group['participants']
jids = [];
member.map(async adm => {
  jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
  text: teks,
  contextInfo: {
mentionedJid: jids
  },
  quoted: mek
}
await Lxa.sendMessage(from, options, text)
break

//--jawaban BRANLy
  case 'brainly11111111111111':
if (!isRegister) return reply(mess.only.daftarB)
  
if (args.length < 1) return Lxa.sendMessage(from, 'Escribe el nombre', text, {
  quoted: mek
})
teks = body.slice(9)
try {
Lxa.updatePresence(from, Presence.composing)
data = await fetchJson(`https://api.vhtear.com/branly?query=${teks}&apikey=${vKey}`)
hasil = data.result.data
reply(hasil)
await limitAdd(mess.ferr)
} catch {
  reply(mess.ferr)
}
break

  //pencarian wiki
  case 'wiki11111111111111':
    if (!isRegister) return reply(mess.only.daftarB)

if (args.length < 1) return reply('Ingresa lo que quieres buscar')
tels = body.slice(6)
try {
anu = await fetchJson(`https://tobz-api.herokuapp.com/api/wiki?q=${tels}&apikey=BotWeA`, {
  method: 'get'
})
reply(anu.result)

} catch {
  reply(mess.ferr)
}
break


//--Goolge Image

case 'google11111111111111':
  if (!isRegister) return reply(mess.only.daftarB)

  if (args.length < 1) return reply('Ingresa el texto')
  goo = body.slice(7)
  try {
  pint = await getBuffer(`http://lolhuman.herokuapp.com/api/gimage?apikey=${lolKey}&query=${goo}`, {
method: 'get'
  })
  Lxa.updatePresence(from, Presence.composing)
  reply(mess.wait)
  Lxa.sendMessage(from, pint, image, {
caption: '*Google Imagen*\n\n*Resultado de busqueda : '+goo+'*', quoted: mek
  })
  
  } catch {
    reply(mess.ferr)
  }
  break

case 'alay211111111111111':
  if (!isRegister) return reply(mess.only.userB)
  if (args.length < 1) return reply('Ingresa el texto')
  goo = body.slice(7)
  try { 
  pint = await fetchJson(`http://lolhuman.herokuapp.com/api/upperlower?apikey=${lolKey}&text=${goo}`, {
method: 'get'
  })
  Lxa.updatePresence(from, Presence.composing)
  hasil = pint.result
  Lxa.sendMessage(from, hasil, text, {
quoted: mek
  })
  
  } catch {
    reply(mess.ferr)
  }
  break

//---Neonime search
case 'neonime11111111111111':
if (!isRegister) return reply(mess.only.daftarB)

Lxa.updatePresence(from, Presence.composing)
reply(mess.wait)
if (args.length < 1) return reply(`Ingresa el nombre`)
teks = body.slice(9)
try {
data = await fetchJson(`https://api.zeks.xyz/api/neonimesearch?q=${teks}&apikey=${viKey}`, {
  method: 'get'
})
teks = '••••••••••••••••••••••\n'
for (let i of data.result) {
  teks += `‣ *Titulo* : ${i.title}\n‣ *link* : ${i.link}\n••••••••••••••••••••••\n`
}
reply(teks.trim())
if (data.message) return reply(`La información de  *${teks} no se encontro`)

} catch {
  reply(mess.ferr)
}
break

//---Ganti nama grup
  case 'setname11111111111111':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
let idgrup = `${from.split("@s.whatsapp.net")[0]}`;
Lxa.groupUpdateSubject(idgrup, `${body.slice(9)}`)
Lxa.sendMessage(from, 'Cambio nombre del grupo', text, {
  quoted: mek
})
break

//--ganti desk
  case 'setdesk111111111111':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
Lxa.groupUpdateDescription(from, `${body.slice(9)}`)
Lxa.sendMessage(from, 'Cambio nombre del grupo', text, {
  quoted: mek
})
break



//--random meme
case 'meme111111111111111111':
  Lxa.updatePresence(from, Presence.composing)
  if (!isRegister) return reply(mess.only.daftarB)

try {
  beh = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=${viKey}`)
  pint = await getBuffer(beh.result)
  reply(mess.wait)
  Lxa.sendMessage(from, pint, image, {
quoted: mek
  })
  
} catch {
  reply(mess.ferr)
}
  break

//--tagme
case 'tagme111111111111111111':
if (!isRegister) return reply(mess.only.daftarB)
const tagme = {
  text: `@${sender.split("@")[0]} Hola`,
  contextInfo: {
mentionedJid: [sender]
  }
}
Lxa.sendMessage(from, tagme, text)
break

case 'kbbi111111111111111111':
  Lxa.updatePresence(from, Presence.composing)
  if (args.length < 1) return reply(`Escribe el texto\nEjemplo : ${prefix}kbbi manusia`)
  if (!isRegister) return reply(mess.only.daftarB)
  
  tels = body.slice(6)
  try {
  data = await fetchJson(`https://tobz-api.herokuapp.com/api/kbbi?kata=${tels}&apikey=BotWeA`)
  if (data.error) return reply(data.error)
  hasil = `Diccionario\n\n${data.result}`
  reply(hasil)
  
  } catch {
    reply(mess.ferr)
  }
  break


  case 'chatprank111111111111111111':
Lxa.updatePresence(from, Presence.composing)
if (!isRegister) return reply(mess.only.daftarB)

if (args.length < 1) return reply(`Escribe el texto\nEjemplo : ${prefix}chatprank p/unten`)
tels = body.slice(11)
var teks1 = tels.split("/")[0];
var teks2 = tels.split("/")[1];
hasil = `${teks1}͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏${teks2}`
Lxa.sendMessage(from, hasil, text, {
  quoted: mek
})
break

//--searching chord
case 'chord111111111111111111':
  if (args.length < 1) return reply('Ingresa lo que quieres buscar')
  if (!isRegister) return reply(mess.only.daftarB)
  
  Lxa.updatePresence(from, Presence.composing)
  tels = body.slice(7)
  try {
  anu = await fetchJson(`https://tobz-api.herokuapp.com/api/chord?q=${tels}&apikey=${tKey}`, {
method: 'get'
  })
  reply(anu.result)
  
  } catch {
    reply(mess.ferr)
  }
  break

//--jadwaltv now
case 'jadwaltvnow111111111111111111':
  if (!isRegister) return reply(mess.only.daftarB)
    
  Lxa.updatePresence(from, Presence.composing)
  reply(mess.wait)
  try {
  anu = await fetchJson(`http://api-melodicxt-2.herokuapp.com/api/jadwaltvnow?&apiKey=administrator`, {
method: 'get'
  })
  reply(anu.result.jadwalTV)
  
  } catch {
    reply(mess.ferr)
  }
  break

//--jadwaltv ch
case 'jadwaltv111111111111111111':
  if (!isRegister) return reply(mess.only.daftarB)
  
  ch = body.slice(10)
  if (args.length < 1) return reply('Escribe el nombre del canal')
  Lxa.updatePresence(from, Presence.composing)
  reply(mess.wait)
  try {
  anu = await fetchJson(`https://mhankbarbar.tech/api/jdtv?ch=${ch}&apiKey=${BarBarKey}`, {
method: 'get'
  })
  n = JSON.parse(JSON.stringify(anu.result));
  hasil = `*Nombre Tv* : ${ch} Horario \n${n}`
  reply(hasil)
  
  } catch {
    reply(mess.ferr)
  }
  break

//--mini map
case 'map111111111111111111111111111111111':
  if (!isRegister) return reply(mess.only.daftarB)
  
  if (args.length < 1) return reply('Ingresa el nombre del área')
  daerah = body.slice(5)
  try {
  data = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${daerah}`)
  reply(mess.wait)
  hasil = await getBuffer(data.gambar)
  Lxa.sendMessage(from, hasil, image, {
quoted: mek, caption: `Resultado *${daerah}*`
  })
  
  } catch {
    reply(mess.ferr)
  }
  break

//--pencarian surah Al-Qur'an
case 'alquran111111111111111111111111111111111':
  Lxa.updatePresence(from, Presence.composing)
  if (!isRegister) return reply(mess.only.daftarB)
  
  if (args.length < 1) return reply('Escribe el número del área 1-114')
  if (isNaN(args.length < 1)) return await reply('Gunakan nomor surah')
  tels = body.slice(9)
  try {
  data = await fetchJson(`https://api.zeks.xyz/api/quran?no=${tels}&apikey=${viKey}`, {
method: 'get'
  })
  teks = `
  〘  *${data.surah}*  〙
  Es ${data.no} número de versos (${data.jumlah_ayat} párrafo)
  ──────────────────────

  `
  for (let i of data.ayat) {
teks += `*(${i.number})* ${i.text}\n*(${i.number})* ${i.translation_id}\n••••••••••••••••••••••••••••••••••••••••••••••\n`
  }
  reply(teks.trim())
  
  } catch {
    reply(mess.ferr)
  }
  break

//--Cerpen
case 'cerpen111111111111111111111111111111111':
if (!isRegister) return reply(mess.only.daftarB)
Lxa.updatePresence(from, Presence.composing)

try {
data = await fetchJson(`https://docs-jojo.herokuapp.com/api/cerpen`)
hasil = `*CERPEN*\n‣ Nombre : *${data.result.title}*\n‣ Autor : *${data.result.pengarang}}*\n${data.result.cerpen}`
reply(hasil)

} catch {
  reply(mess.ferr)
}
break

//---kontak pemilik bot
case 'owner111111111111111111111111111111111':
  case 'creator111111111111111111111111111111111':
Lxa.sendMessage(from, {
  displayname: "Jeff", vcard: vcard
}, MessageType.contact, {
  quoted: mek
})
break


//---Random ayat Alquran
case 'ngaji111111111111111111111111111111111':
  if (!isRegister) return reply(mess.only.daftarB)
  
  try {
  anu = await fetchJson(`https://api.banghasan.com/quran/format/json/acak`, {
method: 'get'
  })
  quran = `${anu.acak.ar.teks}\n\n${anu.acak.id.teks}\nQ.S ${anu.surat.nama} ayat ${anu.acak.id.ayat}`
  Lxa.sendMessage(from, quran, text, {
quoted: mek
  })
  
  } catch {
    reply(mess.ferr)
  }
  break

//--tafsir Alquran
case 'tafsir111111111111111111111111111111111':
  if (!isRegister) return reply(mess.only.daftarB)
  
  if (args.length < 1) return reply('Ingresa lo que quieres buscar')
  teks = body.slice(8)
  try {
  Lxa.updatePresence(from, Presence.composing)
  data = await fetchJson(`http://api-melodicxt-2.herokuapp.com/api/tafsir-quran?query=${teks}&apiKey=${Mkey}`)
  hasil = `*${data.result.query}*\n\n${data.result.ayat}\n\n*Traducir* :\n${data.result.terjemahan_ayat}\n\n*Interpretación* : ${data.result.tafsir_jalalayn}`
  reply(hasil)
  
  } catch {
    reply(mess.ferr)
  }
  break

//---Jadwal solat
case 'sholat111111111111111111111111111111111':
  loc = body.slice(7)
  if (!isRegister) return reply(mess.only.daftarB)
  
  if (args.length < 1) return reply('Ingresa número de área')
  try {
  anu = await fetchJson(`https://mhankbarbar.tech/api/jadwalshalat?daerah=${loc}&apiKey=${BarBarKey}`, {
method: 'get'
  })
  mbteks = `*SHALAT*\nÁrea : ${loc}\n‣ *Ashar* : ${anu.Ashar}\n‣ *Dhuha* : ${anu.Dhuha}\n‣ *Dzuhur* : ${anu.Dzuhur}\n‣ *Imsyak* : ${anu.Imsyak}\n‣ *Isya* : ${anu.Isya}\n‣ *Maghrib* : ${anu.Maghrib}\n‣ *Subuh* : ${anu.Subuh}`
  Lxa.sendMessage(from, mbteks, text, {
quoted: mek
  })
  
  } catch {
    reply(mess.ferr)
  }
  break

//--info cuaca
case 'cuaca111111111111111111111111111111111':
  if (!isRegister) return reply(mess.only.daftarB)
  
  if (args.length < 1) return reply('Ingrese el nombre del área')
  tels = body.slice(7)
  try {
  anu = await fetchJson(`https://freerestapi.herokuapp.com/api/v1/cuaca?p=${tels}`, {
method: 'get'
  })
  hasil = `‣ *El lugar* : ${anu.hasil.Nama}\n‣ *Cuaca* : ${anu.hasil.Cuaca}\n‣ *Viento* : ${anu.hasil.Angin}\n‣ *Suhu* : ${anu.hasil.Suhu}\n‣ *Humedad* : ${anu.hasil.Kelembaban}\n‣ *Información* : ${anu.hasil.Keterangan}`
  Lxa.sendMessage(from, hasil, text, {
quoted: mek
  })
  
  } catch {
    reply(mess.ferr)
  }
  break

//--info gempa
//informasi gempa terkini
case 'infogempa111111111111111111111111111111111':
  if (!isRegister) return reply(mess.only.daftarB)
  
  Lxa.updatePresence(from, Presence.composing)
  try {
  anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/infogempa`, {
method: 'get'
  })
  hasil = `‣ *Profundidad* : ${anu.kedalaman}\n‣ *Coordinar* : ${anu.koordinat}\n‣ *Ubicación* : ${anu.lokasi}\n‣ *Magnitude* : ${anu.magnitude}\n‣ *Potensia* : ${anu.potensi}\n‣ *Hora* : ${anu.waktu}`
  buffer = await getBuffer(anu.map)
  Lxa.sendMessage(from, buffer, image, {
caption: hasil, quoted: mek
  })
  
  } catch {
    reply(mess.ferr)
  }
  break

//---Buy limit
/*case 'buylimit':
  if (args.length < 1) return reply(`Berapa limit yang mau di beli? Pastikan saldo ATM cukup juga! \n\nCara cek saldo : ${prefix}Ceksaldo`)
  if (!isRegister) return reply(mess.only.daftarB)
  payout = body.slice(10)
  const koinPerlimit = hargalimit
  const total = koinPerlimit * payout
  if (checkATMuser(sender) <= total) return reply(`Maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
  if (checkATMuser(sender) >= total) {
confirmATM(sender, total)
bayarLimit(sender, payout)
await reply(`〘  *NOTA PEMBAYARAN*  〙\n\n‣ *Pengirim* : Admin\n‣ *Penerima* : ${pushname}\n‣ *Nominal pembelian* : ${body.slice(10)} \n‣ *Harga limit* : ${koinPerlimit}/limit\n‣ *Sisa saldo* : ${checkATMuser(sender)}\n\nProses berhasil dengan nomer pembayaran \n${createSerial(15)}`)
  }
  break

//--transfer
case 'transfer':
  if (!isGroup) return reply(mess.only.group)
  if (!isRegister) return reply(mess.only.daftarB)
  if (args.length < 1) return reply(`Silahkan ulangi dengan
*${prefix}Transfer Tag target|Jumlah transfer*`)
  if (!q.includes('|')) return  reply('Maaf format teks salah')
  const tujuan = q.substring(0, q.indexOf('|') - 1)
  const jumlah = q.substring(q.lastIndexOf('|') + 1)
  if (isNaN(jumlah)) return await reply('Jangan tambahan tanda apapun !')
  if (jumlah < 5000) return reply(`minimal transfer Rp.5000`)

  if (checkATMuser(sender) <= jumlah) return reply(`Maaf uang kamu belum mencukupi. silahkan kumpulkan dan transfer lagi nanti`)
  if (checkATMuser(sender) >= jumlah) {
const tujuantf = `${tujuan.replace("", '')}@s.whatsapp.net`
fee = 0.005 *  jumlah
hasiltf = jumlah - fee
addKoinUser(tujuantf, hasiltf)
confirmATM(sender, jumlah)
addKoinUser('6282223014661@s.whatsapp.net', fee)
await reply(`〘  *TRANSFER*  〙
  Pengiriman saldo telah sukses
  ‣ *Dari* : ${sender.split("@")[0]}
  ‣ *Ke* : ${tujuan}
  ‣ *Jumlah transfer* : Rp.${jumlah},-
  ‣ *Biaya admin* : Rp.${fee},-`)
  }
  
  break
*/
case 'itsme111111111111111111111111111111111':
  if (!isRegister) return reply(mess.only.daftarB)
  try {
ppimg = await Lxa.getProfilePicture(`${sender.split('@')[0]}@c.us`)
  } catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
  }
  teks = `‣ *Nombre* : ${pushname}
  ‣ *Número* : ${sender.split("@")[0]}
  ‣ *Link* : wa.me/${sender.split("@")[0]}`
  its = await getBuffer (ppimg)
  Lxa.sendMessage(from, its, image, {
quoted: mek, caption: teks
  })
  
  break

case 'play111111111111111111111111111111111':
  if (!isRegister) return reply(mess.only.daftarB)
  
  if (args.length < 1) return reply('Escribe el nombre')
  reply(mess.wait)
  play = body.slice(6)
  try {
  anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=apivinz`)
  if (anu.error) return reply(anu.error)
  infomp3 = `*Audio*\n‣ *Nombre* : ${anu.result.title}\n‣ *Fuente* : ${anu.result.source}\n‣ *Tamaño* : ${anu.result.size}\n\n_El audio se esta mandando, si no llega descargue por el link_\n‣ *Link* : ${anu.result.url_audio}
  `
  buffer = await getBuffer(anu.result.thumbnail)
  lagu = await getBuffer(anu.result.url_audio)
  Lxa.sendMessage(from, buffer, image, {
quoted: mek, caption: infomp3
  })
  Lxa.sendMessage(from, lagu, audio, {
mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: mek
  })
  
  } catch {
    reply(mess.ferr)
  }
  break


case 'ytmp3111111111111111111111111111111111':
  if (!isRegister) return reply(mess.only.daftarB)
  
  reply(mess.wait)
  play = body.slice(7)
  if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Formato de link incorrecto')
  try {
  anu = await fetchJson(`https://api.zeks.xyz/api/ytmp3/2?url=${play}&apikey=${viKey}`)
  infomp3 = `*Audio!!!*\n‣ Nombre : ${anu.result.title}\n‣ Fuente: ${anu.result.source}\n‣ Tamaño: ${anu.result.size}\n\n_El audio se esta mandando espere, si no llega descargue por el link_\n‣ *link* : ${anu.result.link}`
  buffer = await getBuffer(anu.result.thumb)
  lagu = await getBuffer(anu.result.link)
  Lxa.sendMessage(from, buffer, image, {
quoted: mek, caption: infomp3
  })
  Lxa.sendMessage(from, lagu, audio, {
mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: mek
  })
  
  } catch {
    reply(mess.ferr)
  }
  break

case 'ytmp4111111111111111111111111111111111':
  if (!isRegister) return reply(mess.only.daftarB)
  
  reply(mess.wait)
  play = body.slice(7)
  try {
  anu = await fetchJson(`https://api.zeks.xyz/api/ytmp4?url=${play}&apikey=${viKey}`)
  if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Format link salah, gunakan link youtube')
  if (anu.error) return reply(anu.error)
  infomp3 = `*Video*\n‣ *Nombre* : ${anu.result.title}\n‣ *Fuente* : ${anu.result.source}\n‣ *Tamaño* : ${anu.result.size}\n\n_Se esta mandando el video, si no llega descargue por el link_\n‣ *link* : ${anu.result.url_video}`
  buffer = await getBuffer(anu.result.thumbnail)
  lagu = await getBuffer(anu.result.url_video)
  Lxa.sendMessage(from, buffer, image, {
quoted: mek, caption: infomp3
  })
  Lxa.sendMessage(from, lagu, video, {
mimetype: 'video/mp4', filename: `${anu.result.title}.mp4`, quoted: mek
  })
  
  } catch {
    reply(mess.ferr)
  }
  break


//---Youtube search
				case 'ytsearch111111111111111111111111111111111':
					if (args.length < 1) return reply('Ingresa lo que quieres buscar')
					try {
					anu = await fetchJson(`https://mhankbarbar.tech/api/ytsearch?q=${body.slice(10)}&apiKey=${BarBarKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = '=================\n'
					for (let i of anu.result) {
						teks += `*Titulo* : ${i.title}\n*Id* : ${i.id}\n*Publicado* : ${i.publishTime}\n*Duración* : ${i.duration}\n*Vistas* : ${h2k(i.views)}\n=================\n`
					}
					reply(teks.trim())
					
					} catch {
					  reply(mess.ferr)
					}
					break

//--download pinterest
case 'pin111111111111111111111111111111111':
  if (!isRegister) return reply(mess.only.daftarB)
  
    if(!isUrl(args[0]) && !args[0].includes('pin')) return reply('Formato de link incorrecto')
  reply(mess.wait)
  play = body.slice(5)
  try {
  anu = await fetchJson(`https://scrap.terhambar.com/pin?url=${play}`)
  if (anu.error) return reply(anu.error)
  n = JSON.parse(JSON.stringify(anu.result.data));
  lagu = await getBuffer(anu.result)
  Lxa.sendMessage(from, lagu, video, {
mimetype: 'video/mp4', filename: `${anu.result}.mp4`, quoted: mek
  })
  
  } catch {
    reply(mess.ferr)
  }
  break

case 'fb111111111111111111111111111111111':
  if (!isRegister) return reply(mess.only.daftarB)
  
  reply(mess.wait)
  if(!isUrl(args[0]) && !args[0].includes('facebook')) return reply('Formato de link incorrecto')
  play = body.slice(4)
  try {
  anu = await fetchJson(`https://mhankbarbar.tech/api/epbe?url=${play}&apiKey=${BarbarKey}`)
  if (anu.error) return reply(anu.error)
  infomp3 = `*Video*\n‣ *Nombre* : ${anu.title}\n‣ *Publicación* : ${anu.published}\n‣ *Tamaño* : ${anu.filesize}\n\n_El video se esta enviando, si no llega descargue por el link_\n‣ *link* : ${anu.result}`
  lagu = await getBuffer(anu.result)
  Lxa.sendMessage(from, lagu, video, {
mimetype: 'video/mp4', filename: `${anu.result.title}.mp4`, quoted: mek
  })
  
  } catch {
    reply(mess.ferr)
  }
  break

case 'ig111111111111111111111111111111111':
  if (!isRegister) return reply(mess.only.daftarB)
  
  reply(mess.wait)
    if(!isUrl(args[0]) && !args[0].includes('instagram')) return reply('Formato de link incorrecto')
  play = body.slice(4)
  try {
  anu = await fetchJson(`http://lolhuman.herokuapp.com/api/instagram?apikey=${lolKey}&url=${play}`)
  lagu = await getBuffer(anu.result)
  Lxa.sendMessage(from, lagu, video, {
mimetype: 'video/mp4', filename: `Imlexa.mp4`, quoted: mek
  })
  
  } catch {
    reply(mess.ferr)
  }
  break


//joox download
case 'joox111111111111111111111111111111111':
  if (!isRegister) return reply(mess.only.daftarB)
  
  if (args.length < 1) return reply('Ingresa el nombre de la canción')
  tels = body.slice(6)
  try {
  data = await fetchJson(`https://tobz-api.herokuapp.com/api/joox?q=${tels}&apikey=BotWeA`, {
method: 'get'
  })
  infomp3 = `*Encontrado!!*\nNombre : ${data.result.judul}\nAlbúm : ${data.result.album}\nPublicado: ${data.result.dipublikasi}`
  buffer = await getBuffer(data.result.thumb)
  lagu = await getBuffer(data.result.mp3)
  Lxa.sendMessage(from, buffer, image, {
quoted: mek, caption: infomp3
  })
  Lxa.sendMessage(from, lagu, audio, {
mimetype: 'audio/mp4', filename: `${data.result.title}.mp3`, quoted: mek
  })
  
  } catch {
    reply(mess.ferr)
  }
  break

case 'scdl1111111111111111':
    if (!isRegister) return reply(mess.only.daftarB)
  
  if (args.length < 1) return reply('Manda el enlace de soundcloud')
  tels = body.slice(6)
  try {
  data = await fetchJson(`http://lolhuman.herokuapp.com/api/soundcloud?apikey=${lolKey}&url=${tels}`, {
method: 'get'
  })
  lagu = await getBuffer(data.result)
  Lxa.sendMessage(from, lagu, audio, {
mimetype: 'audio/mp4', filename: `${data.title}.mp3`, quoted: mek
  })
  
  } catch {
    reply(mess.ferr)
  }
  break

case 'tik1111111111111111':
  if (args.length < 1) return reply('Ingresa el enlace')
  if (!isRegister) return reply(mess.only.daftarB)
  
  if (!isUrl(args[0]) && !args[0].includes('vt.tiktok')) return reply(mess.error.Iv)
  try {
  anu = await fetchJson(`https://api.arugaz.my.id/api/media/tiktok?url=${args[0]}`, {
method: 'get'
  })
  if (anu.error) return reply(anu.error)
  teks = `*Nombre* : ${anu.result.nameInfo}\n*Caption* : ${anu.result.textInfo}\n\n_Enviando archivos, espere_`
  thumb = await getBuffer(anu.result.image)
  Lxa.sendMessage(from, thumb, image, {
quoted: mek, caption: teks
  })
  buffer = await getBuffer(anu.result.mp4direct)
  Lxa.sendMessage(from, buffer, video, {
mimetype: 'video/mp4', filename: `${anu.nameInfo}.mp4`, quoted: mek
  })
  
  } catch {
    reply(mess.ferr)
  }
  break

/*

				case 'tiktok':
				  case 'tik':
					if (args.length < 1) return reply('Urlnya mana um?')
					if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbar.tech/api/tiktok?url=${args[0]}&apiKey=${BarBarKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result)
					Lxa.sendMessage(from, buffer, video, {quoted: mek})
					break
*/

//--block user
				case 'blocklist1111111111111111':
					teks = 'Lista de bloqueados por el bot :\n'
					for (let block of blocked) {
						teks += `~> @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					Lxa.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break

//--read text on image
				case 'ocr1111111111111111':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await Lxa.downloadAndSaveMediaMessage(encmedia)
						reply(mess.wait)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('Foto')
					}
					break

//---textpro
				case 'textpro1111111111111111':
					if (args.length < 1) {
						return reply('Elije un número del, 1 - 162')
					} else if (args[0].toLowerCase() === 'list') {
						teks = await fetchText('https://mhankbarbar.tech/api/textpro/listtheme')
						teks = teks.replace(/<br>/g, '\n')
						return reply(teks)
					} else if (args.length < 2) {
						return reply('Escribe bien el texto')
					}
					reply(mess.wait)
					anu = `https://mhankbarbar.tech/api/textpro?pack=${args[0]}&text=${body.slice(1+args[0].length+1)}&apiKey=${BarBarKey}`
					voss = await fetc(anu)	
					ftype = require('file-type')	
					vuss = await ftype.fromStream(voss.body)
					if (vuss !== undefined) {
						Lxa.sendMessage(from, await getBuffer(anu), image, { caption: mess.success, quoted: mek })
					} else {
						reply('No se encontro elije otro tema')
					}
					break

//ephoto
				case 'ephoto1111111111111111':
					if (args.length < 1) {
						return reply('Elije un número del, 1 - 216')
					} else if (args[0].toLowerCase() === 'list') {
						teks = await fetchText('https://mhankbarbar.tech/api/ephoto/listtheme')
						teks = teks.replace(/<br>/g, '\n')
						return reply(teks)
					} else if (args.length < 2) {
						return reply('a')
					}
					reply(mess.wait)
					anu = `https://mhankbarbar.tech/api/ephoto?pack=${args[0]}&text=${body.slice(2+args[0].length+1)}&apiKey=${BarBarKey}`
					voss = await fetc(anu)
					ftype = require('file-type')
					vuss = await ftype.fromStream(voss.body)
					//console.log(vuss)
					if (vuss !== undefined) {
						Lxa.sendMessage(from, await getBuffer(anu), image, { caption: mess.success, quoted: mek })
					} else {
						reply('No se encontro elije otro tema')
					}
					break

//--harta tahta
				case 'tahta1111111111111111':
					if (args.length < 1) return reply('Escribe un texto')
					anu = `https://mhankbarbar.tech/api/htahta?text=${args.join(' ')}&apiKey=${BarBarKey}`
					voss = await fetc(anu)
					teks = body.slice(7)
					ftype = require('file-type')
					vuss = await ftype.fromStream(voss.body)
					if (vuss !== undefined) {
						Lxa.sendMessage(from, await getBuffer(anu), image, { quoted: mek, caption: `*Texto Tahta ${teks}*` })
					} else {
						reply('Hay un error')
					}
					break

//--stiker maker
				case 'stiker':
				case 'sticker':
				  case 's':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await Lxa.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('Lexa', 'Mrf.zvx')} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(mess.error.stick)
									Lxa.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
								/*Lxa.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)*/
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await Lxa.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker`)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('Lexa', 'Mrf.zvx')} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(mess.error.stick)
									Lxa.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
								/*Lxa.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)*/
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await Lxa.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						keyrmbg = 'Your-ApiKey'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								exec(`webpmux -set exif ${addMetadata('Lexa', 'Mrf.zvx')} ${ranw} -o ${ranw}`, async (error) => {
									if (error) return reply(mess.error.stick)
									Lxa.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
									fs.unlinkSync(ranw)
								})
								//Lxa.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
							})
						})
					/*} else if ((isMedia || isQuotedImage) && colors.includes(args[0])) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await Lxa.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.on('start', function (cmd) {
								console.log('Started :', cmd)
							})
							.on('error', function (err) {
								fs.unlinkSync(media)
								console.log('Error :', err)
							})
							.on('end', function () {
								console.log('Finish')
								fs.unlinkSync(media)
								Lxa.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=${args[0]}@0.0, split [a][b]; [a] palettegen=reserve_transparent=off; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)*/
					} else {
						reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
					}
					break

//-- temp
			case 'gets1111111111111111':
			  
				var itsme = `0@s.whatsapp.net`
				var split = `${cr}`
				var selepbot = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
				namastc = body.slice(6)
				try {
				result = fs.readFileSync(`./temp/stick/${namastc}.webp`)
				Lxa.sendMessage(from, result, sticker, selepbot)
				} catch {
				  reply('El paquete no esta registrado')
				}
				break
			
			
			  case 'getstik1111111111111111':
				var itsme = `0@s.whatsapp.net`
				var split = `${cr}`
				var selepbot = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
				namastc = body.slice(9)
				try {
				result = fs.readFileSync(`./temp/stick/${namastc}.webp`)
				Lxa.sendMessage(from, result, sticker, selepbot)
				} catch {
				  reply('El paquete no esta registrado')
				}
				break
			
			
			
			case 'liststik111111111111111':
				teks = '*Lista de stickers :*\n\n'
				for (let awokwkwk of setiker) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${setiker.length}*\nUsa el comando\n*${prefix}getstik (nombre del pack)*\npara seleccionar sticker`
				Lxa.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
				break
			
			case 'totaluser111111111111111':
				teks = '*Total usuarios :*\n\n'
				for (let i of _registered) {
					teks += `[${id.toString()}]\`\`\` @${i.split('@')[0]}`
				}
				teks += `\n*Total : ${_registered.length}`
				Lxa.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": _registered} })
				break

			case 'addstik111111111111111':
				if (!isQuotedSticker) return reply('Respon un sticker')
				if (!isOwner) return reply(mess.only.ownerB)
				svst = body.slice(9)
				if (!svst) return reply('Nombre del sticker?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await Lxa.downloadMediaMessage(boij)
				setiker.push(`${svst}`)
				fs.writeFileSync(`./temp/stick/${svst}.webp`, delb)
				fs.writeFileSync('./temp/stik.json', JSON.stringify(setiker))
				Lxa.sendMessage(from, `Sticker añadido con exito\ncompruebalo con ${prefix}liststik`, MessageType.text, { quoted: mek })
				break

			case 'addvn111111111111111':
				if (!isQuotedAudio) return reply('Responde un audio')
				if (!isOwner) return reply(mess.only.ownerB)
				svst = body.slice(7)
				if (!svst) return reply('Nombre del audio?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await Lxa.downloadMediaMessage(boij)
				audionye.push(`${svst}`)
				fs.writeFileSync(`./temp/audio/${svst}.mp3`, delb)
				fs.writeFileSync('./temp/vn.json', JSON.stringify(audionye))
				Lxa.sendMessage(from, `Audio añadido con exito\ncompruebalo con ${prefix}listvn`, MessageType.text, { quoted: mek })
				break

			case 'getvn111111111111111':
				namastc = body.slice(7)
				try {
				buffer = fs.readFileSync(`./temp/audio/${namastc}.mp3`)
				Lxa.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
				} catch {
				  reply('No esta registrado ese paquete')
				}
				break

			case 'listvn111111111111111':
			case 'vnlist111111111111111':
				teks = '*Lista Vn:*\n\n'
				for (let awokwkwk of audionye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${audionye.length}*\nUsa el comando\n*${prefix}getvn (nombre del pack)*\n`
				Lxa.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
				break

			case 'addimg111111111111111':
				if (!isQuotedImage) return reply('Responde una imagen')
				if (!isOwner) return reply(mess.only.ownerB)
				svst = body.slice(8)
				if (!svst) return reply('Nombre de la imagen')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await Lxa.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./temp/foto/${svst}.jpeg`, delb)
				fs.writeFileSync('./temp/image.json', JSON.stringify(imagenye))
				Lxa.sendMessage(from, `Video añadido\ncompruebalo con${prefix}listimage`, MessageType.text, { quoted: mek })
				break

			case 'getimg111111111111111':
				namastc = body.slice(8)
				try {
				buffer = fs.readFileSync(`./temp/foto/${namastc}.jpeg`)
				Lxa.sendMessage(from, buffer, image, { quoted: mek, caption: `Resultadoos : ${namastc}.jpeg` })
				} catch {
				  reply('Paquete no registrado')
				}
				break
				
			case 'listimg111111111111111':
				teks = '*List Image :*\n\n'
				for (let awokwkwk of imagenye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${imagenye.length}*\nUsa el comando\n*${prefix}getimg (nombre del pack)*\n`
				Lxa.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye } })
				break

			case 'addvid111111111111111':
			  if (!isOwner) return reply(mess.only.ownerB)
				if (!isQuotedVideo) return reply('Responde un video')
				svst = body.slice(8)
				if (!svst) return reply('Nombre del video')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await Lxa.downloadMediaMessage(boij)
				videonye.push(`${svst}`)
				fs.writeFileSync(`./temp/video/${svst}.mp4`, delb)
				fs.writeFileSync('./temp/vid.json', JSON.stringify(videonye))
				Lxa.sendMessage(from, `Video añadido con exito\ncompruebalo con ${prefix}listvid`, MessageType.text, { quoted: mek })
				break

			case 'getvid111111111111111':
				namastc = body.slice(8)
				try {
				buffer = fs.readFileSync(`./temp/video/${namastc}.mp4`)
				Lxa.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek })
				} catch {
				  reply('Paquete no registrado')
				}
				break

			case 'listvid111111111111111':
				teks = '*Lista de videos :*\n\n'
				for (let awokwkwk of videonye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${videonye.length}*\nUsa el comando\n*${prefix}getvid (nombre del pack)*\n`
				Lxa.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": videonye } })
				break


//----caklontong
  case 'caklontong111111111111111':

anu = await fetchJson(`https://api.vhtear.com/funkuis&apikey=${vKey}`,
  {
method: 'get'
  })
if (!isRegister) return reply(mess.only.daftarB)
yup = anu.result.soal
jawab = anu.result.jawaban
alasam = anu.result.desk
setTimeout(() => {
  Lxa.sendMessage(from, `‣ *Respuesta* : ${jawab}\n‣ *Keterangn* : ${alasam}`, text, {
quoted: mek
  }) // ur cods
}, 30000) // 1000 = 1s,
setTimeout(() => {
  Lxa.sendMessage(from, '_10 Otro segundo_', text) // ur cods
}, 20000) // 1000 = 1s,
setTimeout(() => {
  Lxa.sendMessage(from, '_20 Otro segundo_…', text) // ur cods
}, 10000) // 1000 = 1s,
setTimeout(() => {
  Lxa.sendMessage(from, text) // ur cods
}, 1000) // 1000 = 1s,
setTimeout(() => {

  Lxa.sendMessage(from, yup, text, {
quoted: mek
  }) // ur cods
}, 0) // 1000 = 1s,
break

//--stiker to video
  case 'tovid111111111111111':
Lxa.updatePresence(from,
  Presence.composing)
if (!isRegister) return reply(mess.only.daftarB)
if (!isQuotedSticker) return reply('Responde un sticker')
reply(mess.wait)
anumedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
anum = await Lxa.downloadAndSaveMediaMessage(anumedia)
ran = getRandom('.webp')
exec(`ffmpeg -i ${anum} ${ran}`, (err) => {
  fs.unlinkSync(anum)
  if (err) return reply('Error al convertir el sticker en vídeo')
  buffer = fs.readFileSync(ran)
  Lxa.sendMessage(from, buffer, video, {
quoted: mek, caption: 'Mr.Pato'
  })
  fs.unlinkSync(ran)
})
break

//--mp4 to mp3
  case 'tomp3111111111111111':
Lxa.updatePresence(from,
  Presence.composing)
if (!isRegister) return reply(mess.only.daftarB)
if (!isQuotedVideo) return reply('Responde a un video')
reply(mess.wait)
mitri = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
duh = await Lxa.downloadAndSaveMediaMessage(mitri)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${duh} ${ran}`, (err) => {
  fs.unlinkSync(duh)
  if (err) return reply('No se pudo convertir a mp3')
  buffer = fs.readFileSync(ran)
  Lxa.sendMessage(from, buffer, audio, {
mimetype: 'audio/mp4', quoted: mek
  })
  fs.unlinkSync(ran)
})
break

//---random fakta
case 'fakta111111111111111':
fakta = body.slice(1)
if (!isRegister) return reply(mess.only.daftarB)
if (isLimit(sender)) return reply(ind.limitend(pushname))
const keh = fak[Math.floor(Math.random() * fak.length)]
Lxa.sendMessage(from, 'Fakta : '+ keh, text, {
  quoted: mek
})
break

//--Tebak gambar
  case 'tebakgambar111111111111111':

anu = await fetchJson(`https://api.vhtear.com/tebakgambar&apikey=${vKey}`, {
  method: 'get'
})
if (!isRegister) return reply(mess.only.daftarB)
buffer = await getBuffer(anu.result.soalImg)
jawab = anu.result.jawaban
setTimeout(() => {
  Lxa.sendMessage(from, `*➸ Responder :* ${jawab}`, text, {
quoted: mek
  }) // ur cods
}, 30000) // 1000 = 1s,
setTimeout(() => {
  Lxa.sendMessage(from, '_10 segundos_', text) // ur cods
}, 20000) // 1000 = 1s,
setTimeout(() => {
  Lxa.sendMessage(from, '_20 segundos_…', text) // ur cods
}, 10000) // 1000 = 1s,
setTimeout(() => {
  Lxa.sendMessage(from, text) // ur cods
}, 1000) // 1000 = 1s,
setTimeout(() => {

  Lxa.sendMessage(from, buffer, image, {
quoted: mek, caption: 'APA HAYOO'
  }) // ur cods
}, 0) // 1000 = 1s,
break


//--google voice
				case 'tts':
					if (args.length < 1) return Lxa.sendMessage(from, 'Escribe el código', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return Lxa.sendMessage(from, 'Escribe el texto', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					dtt.length > 600
					? reply('Escribe correctamente el texto')
					: gtts.save(ranm, dtt, function() {
						Lxa.sendMessage(from, fs.readFileSync(ranm), audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
						fs.unlinkSync(ranm)
					})
					break

//-- Setting prefix
				case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
				  prefix = args[0]
					up.prefix = prefix
					fs.writeFileSync('./data/settings.json', JSON.stringify(up, null, '\t'))
					reply(`Prefijo cambiado : ${prefix}`)
					break


case 'block111111111111111':
  Lxa.updatePresence(from, Presence.composing)
  if (!isGroup) return reply(mess.only.group)
  if (!isOwner) return reply(mess.only.ownerB)
  Lxa.blockUser (`${body.slice(8)}@c.us`, "add")
  Lxa.sendMessage(from, `Usuario bloqueado`, text, {
quoted: mek
  })
  break

//membuka blokir
case 'unblock111111111111111':
  if (!isGroup) return reply(mess.only.group)
  if (!isOwner) return reply(mess.only.ownerB)
  Lxa.blockUser (`${body.slice(9)}@c.us`, "remove")
  Lxa.sendMessage(from, `Usuario desbloqueado`, text)
  break


//--Hilih maker
				case 'hilih111111111111111':
					if (args.length < 1) return reply('Introduce el texto')
					try {
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/hilih?teks=${body.slice(7)}`, {method: 'get'})
					reply(anu.result)
					} catch {
					  reply(mess.ferr)
					}
					break

				case 'tiktokstalk111111111111111':
					try {
						if (args.length < 1) return Lxa.sendMessage(from, 'Escribe el nombre de usuario', text, {quoted: mek})
						let { user, stats } = await tiktod.getUserProfileInfo(args[0])
						reply(mess.wait)
						teks = `*ID* : ${user.id}\n*Username* : ${user.uniqueId}\n*Nickname* : ${user.nickname}\n*Followers* : ${stats.followerCount}\n*Followings* : ${stats.followingCount}\n*Posts* : ${stats.videoCount}\n*Luv* : ${stats.heart}\n`
						buffer = await getBuffer(user.avatarLarger)
						Lxa.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('Nombre de usuario invalido')
					}
					break
				case 'nulis':
				case 'tulis111111111111111':
					if (args.length < 1) return reply('Escribe el texto')
					teks = body.slice(7)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbar.tech/nulis?text=${teks}&apiKey=${BarBarKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buff = await getBuffer(anu.result)
					Lxa.sendMessage(from, buff, image, {quoted: mek, caption: mess.success})
					break
				case 'url2img1111111111111111':
					tipelist = ['desktop','tablet','mobile']
					if (args.length < 1) return reply('Escribe bien el comando')
					if (!tipelist.includes(args[0])) return reply('Escribe desktop|tablet|mobile')
					if (args.length < 2) return reply('Escribe la url')
					if (!isUrl(args[1])) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbar.tech/api/url2image?tipe=${args[0]}&url=${args[1]}&apiKey=${BarBarKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buff = await getBuffer(anu.result)
					Lxa.sendMessage(from, buff, image, {quoted: mek})
					break



				case 'ttp1111111111111111':
				if (!isRegister) return reply(mess.only.daftarB)
					if (args.length < 1) return reply('Escribe el texto')
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(5).trim()
					anu = await fetchJson(`https://mhankbarbar.tech/api/text2image?text=${teks}&apiKey=${BarBarKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						exec(`webpmux -set exif ${addMetadata('Lexa', 'Mrf.zvx')} ${rano} -o ${rano}`, async (error) => {
							if (error) return reply(mess.error.stick)
							Lxa.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
							fs.unlinkSync(rano)
						})
					})
					
					break

//---Tagall member
				case 'tagall1111111111111111':
Lxa.updatePresence(from, Presence.composing)
if (!isGroup) return reply(mess.only.group)
if (!isRegister) return reply(mess.only.daftarB)
if (!isGroupAdmins) return reply(mess.only.admin)
members_id = []
teks = (args.length > 1) ? body.slice(8).trim(): ''
teks += `  Total : ${groupMembers.length}\n`
for (let mem of groupMembers) {
  teks += `┃ @${mem.jid.split('@')[0]}\n`
  members_id.push(mem.jid)
}
mentions('〘  *TAGALL* 〙\n┏━━━━━━━━━━━━━━━━━━━━\n┠⊷'+teks+'┃━━━━━━━━━━━━━━━━━━━━\n┃────𝕸𝖗.𝕻𝖆𝖙𝖔 -𝕭𝖔𝖙⚜️🦆────\n┗━━━━━━━━━━━━━━━━━━━━', members_id, true)
break


//clear all chat
				case 'clearall1111111111111111':
					if (!isOwner) return reply('Estas seguro?')
					anu = await Lxa.chats.all()
					Lxa.setMaxListeners(25)
					for (let _ of anu) {
						Lxa.deleteChat(_.jid)
					}
					reply('Se borraron todos los mensajes :)')
					break
				case 'bc11111111111111':
					if (!isOwner) return reply('Okay')
					if (args.length < 1) return reply('.......')
					anu = await Lxa.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await Lxa.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Lxa.sendMessage(_.jid, buff, image, {caption: `*${body.slice(4)}*`})
						}
						reply('Anuncio dado')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*${body.slice(4)}*`)
						}
						reply('Anuncio dado')
					}
					break

//--menaikan jabatan
      case 'admin':
          if (!isGroup) return reply(mess.only.group)
          if (!isGroupAdmins) return reply(mess.only.admin)
          if (!isBotGroupAdmins) return reply(mess.only.Badmin)
          if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
          mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
          if (mentioned.length > 1) {
            /*teks = 'Con exito \n'
            for (let _ of mentioned) {
              teks += `@${_.split('@')[0]}\n`
            }*/
            mentions(from, mentioned, true)
            Lxa.groupRemove(from, mentioned)  //@${mentioned[0].split('@')[0]}
          } else {
            mentions(`❤️😳 *¡𝗡𝗨𝗘𝗩𝗢 𝗔𝗗𝗠𝗜𝗡𝗜𝗦𝗧𝗥𝗔𝗗𝗢𝗥 𝗘𝗡 𝗘𝗟 𝗚𝗥𝗨𝗣𝗢!* 😳❤️\n\n@${mentioned[0].split('@')[0]}, *¡𝑳𝒐𝒔 𝑨𝒅𝒎𝒊𝒏𝒊𝒔𝒕𝒓𝒂𝒅𝒐𝒓𝒆𝒔 𝒅𝒆 𝒆𝒔𝒕𝒆 𝑮𝒓𝒖𝒑𝒐, 𝒉𝒆𝒎𝒐𝒔 𝒅𝒆𝒄𝒊𝒅𝒊𝒅𝒐 𝒄𝒐𝒏𝒄𝒆𝒅𝒆𝒓𝒕𝒆 𝒆𝒍 𝒑𝒓𝒊𝒗𝒊𝒍𝒆𝒈𝒊𝒐 𝒅𝒆 𝒔𝒆𝒓 𝒖𝒏 𝑨𝒅𝒎𝒊𝒏𝒊𝒔𝒕𝒓𝒂𝒅𝒐𝒓 𝒎𝒂𝒔 𝒅𝒆 𝒆𝒔𝒕𝒆 𝑮𝒓𝒖𝒑𝒐. 𝑬𝒔𝒑𝒆𝒓𝒆𝒎𝒐𝒔 𝒒𝒖𝒆 𝒏𝒐 𝒉𝒂𝒚𝒂 𝒑𝒓𝒐𝒃𝒍𝒆𝒎𝒂𝒔 𝒏𝒊 𝒖𝒏 𝒎𝒂𝒍 𝒖𝒔𝒐 𝒅𝒆𝒍 𝒓𝒂𝒏𝒅𝒐 𝒅𝒆 𝑨𝒅𝒎𝒊𝒏𝒊𝒔𝒕𝒓𝒂𝒅𝒐𝒓 𝒑𝒐𝒓 𝒕𝒖 𝒑𝒂𝒓𝒕𝒆!*\n\n@${mentioned[0].split('@')[0]}\n❤️😍 *¡𝗘𝗡𝗛𝗢𝗥𝗔𝗕𝗨𝗘𝗡𝗔 𝗣𝗢𝗥 𝗘𝗟 𝗔𝗦𝗖𝗘𝗡𝗦𝗢!* 😍❤️`, mentioned, true)
            Lxa.groupMakeAdmin(from, mentioned)
          }
          break

  //ganti nama grup
  case 'setname':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
idgrup = `${from.split("@s.whatsapp.net")[0]}`;
Lxa.groupUpdateSubject(idgrup, `${body.slice(9)}`)
Lxa.sendMessage(from, 'Cambiar nombre del grupo', text, {
  quoted: mek
})
break

  //ganti desk
  case 'setdesk':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
Lxa.groupUpdateDescription(from, `${body.slice(9)}`)
Lxa.sendMessage(from, 'Cambiar descripción del grupo', text, {
  quoted: mek
})
break

//--menurunkan jabatan
        case 'miembro':
          if (!isGroup) return reply(mess.only.group)
          if (!isGroupAdmins) return reply(mess.only.admin)
          if (!isBotGroupAdmins) return reply(mess.only.Badmin)
          if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
          mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
          if (mentioned.length > 1) {
            /*teks = 'Admin quitado con exito\n'
            for (let _ of mentioned) {
              teks += `@${_.split('@')[0]}\n`
            }*/
            mentions(teks, mentioned, true)
            Lxa.groupRemove(from, mentioned)
          } else {
            mentions(`💔😔 *¡𝗨𝗡 𝗔𝗗𝗠𝗜𝗡𝗜𝗦𝗧𝗥𝗔𝗗𝗢𝗥 𝗠𝗘𝗡𝗢𝗦!* 😔💔\n\n@${mentioned[0].split('@')[0]}, *¡𝑯𝒆𝒎𝒐𝒔 𝒅𝒆𝒄𝒊𝒅𝒊𝒅𝒐 𝒒𝒖𝒆 𝒆𝒔 𝒎𝒖𝒄𝒉𝒐 𝒎𝒆𝒋𝒐𝒓 𝒕𝒂𝒏𝒕𝒐 𝒑𝒂𝒓𝒂 𝒏𝒐𝒔𝒐𝒕𝒓𝒐𝒔 𝒄𝒐𝒎𝒐 𝒑𝒂𝒓𝒂 𝒕𝒐𝒅𝒐𝒔 𝒍𝒐𝒔 𝒊𝒏𝒕𝒆𝒈𝒓𝒂𝒏𝒕𝒆𝒔 𝒅𝒆𝒍 𝒈𝒓𝒖𝒑𝒐, 𝒒𝒖𝒊𝒕𝒂𝒓𝒕𝒆 𝒆𝒍 𝒓𝒂𝒏𝒈𝒐 𝒅𝒆 𝑨𝒅𝒎𝒊𝒏𝒊𝒔𝒕𝒓𝒂𝒅𝒐𝒓 𝒆𝒏 𝒆𝒔𝒕𝒆 𝑮𝒓𝒖𝒑𝒐. 𝑺𝒊 𝒒𝒖𝒊𝒆𝒓𝒆𝒔 𝒂𝒍𝒈𝒖𝒏𝒂 𝒆𝒙𝒑𝒍𝒊𝒄𝒂𝒄𝒊𝒐𝒏 𝒑𝒐𝒓 𝒆𝒍 𝒒𝒖𝒆 𝒔𝒆 𝒕𝒆 𝒉𝒂 𝒅𝒆𝒈𝒓𝒂𝒅𝒂𝒅𝒐 𝒑𝒖𝒆𝒅𝒆𝒔 𝒑𝒆𝒅𝒊𝒓𝒔𝒆𝒍𝒂 𝒂𝒍 𝑨𝒅𝒎𝒊𝒏𝒊𝒔𝒕𝒓𝒂𝒅𝒐𝒓 𝒒𝒖𝒆 𝒕𝒆 𝒉𝒂 𝒅𝒆𝒈𝒓𝒂𝒅𝒂𝒅𝒐!*\n\n@${mentioned[0].split('@')[0]}\n💔😢 *¡𝗟𝗢 𝗦𝗘𝗡𝗧𝗜𝗠𝗢𝗦 𝗠𝗨𝗖𝗛𝗜𝗦𝗜𝗠𝗢!* 😢💔`, mentioned, true)
            Lxa.groupDemoteAdmin(from, mentioned)
          }
          break

//--menambah member
				case 'add11111111111111111':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Ingresa el número')
					if (args[0].startsWith('08')) return reply('Usa el código de país')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						Lxa.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('No se pudo agregar al miembro probablemente este bloqueado por el bot')
					}
					break

//--mengeluarkan member
				case 'kick11111111111111111':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Orden recibida :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						Lxa.groupRemove(from, mentioned)
					} else {
						mentions(`Se elimino a un joto : @${mentioned[0].split('@')[0]}`, mentioned, true)
						Lxa.groupRemove(from, mentioned)
					}
					break

//--list admin grup
				case 'listadmins11111111111111111':
				  case 'listadmin11111111111111111':
				    case 'adminlist11111111111111111':
					if (!isGroup) return reply(mess.only.group)
					teks = `Lista admin de admins facheros *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break

//--ganti pp bot
case 'setppbot11111111111111111':
  Lxa.updatePresence(from, Presence.composing)
  if (!isOwner) return reply(mess.only.ownerB)
  const botpp = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contxtInfo: mek
  const cuk = await Lxa.downloadAndSaveMediaMessage(botpp)
  await Lxa.updateProfilePicture(botNumber, cuk)
  reply('Gracias por el nuevo perfil')
  break

//event
/*case 'event':
  if (!isGroup) return reply(mess.only.group)
  if (!isOwner) return reply(mess.only.ownerB)
  if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
  if (Number(args[0]) === 1) {
if (isEventon) return reply('*SUDAH AKTIF* !!!')
event.push(from)
fs.writeFileSync('./datauser/event.json', JSON.stringify(event))
reply('*☉]* Mengaktifkan *EVENT* di group ini*')
  } else if (Number(args[0]) === 0) {
event.splice(from, 1)
fs.writeFileSync('./datauser/event.json', JSON.stringify(event))
reply('*☉* Menonaktifkan *EVENT* di group ini*')
  } else {
reply(ind.satukos())
  }
  break
*/
//--Mengambil link grup
    case 'linkgroup11111111111111111':
    case 'linkgc11111111111111111':
        if (!isGroup) return reply(mess.only.group)
        if (!isGroupAdmins) return reply(mess.only.admin)
        if (!isBotGroupAdmins) return reply(mess.only.Badmin)
        linkgc = await Lxa.groupInviteCode(from)
        reply('https://chat.whatsapp.com/'+linkgc)
                    break

//--Mengeluarkan bot
      case 'leave11111111111111111':
      if (!isGroup) return reply(mess.only.group)
      if (isGroupAdmins || isOwner) {
      Lxa.groupLeave(from)
                    } else {
      reply(mess.only.admin)
                    }
                    break

//--Convert stiker to image
				case 'toimg11111111111111111':
					if (!isQuotedSticker) return reply('Responde sticker')
					if (!isRegister) return reply(mess.only.daftarB)
					reply(mess.wait)
					imgmed = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					medimg = await Lxa.downloadAndSaveMediaMessage(imgmed)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${medimg} ${ran}`, (err) => {
						fs.unlinkSync(medimg)
						if (err) return reply('No se pudo hacer :(')
						buffer = fs.readFileSync(ran)
						Lxa.sendMessage(from, buffer, image, {quoted: mek, caption: ''})
						fs.unlinkSync(ran)
					})
					break


//--arti mimpi
  case 'artimimpi11111111111111111':
aruga = body.slice(11)
if (!isRegister) return reply(mess.only.daftarB)
if (args.length < 1) return reply(`Que sueño es ?\nEjemplo: ${prefix}artimimpi`)
try {
anu = await fetchJson(`https://videfikri.com/api/primbon/artimimpi/?mimpi=${aruga}`, {
  method: 'get'
})
reply(anu.result.artimimpi)

} catch {
  reply('Lo siento hubo un error')
}
break

//--Simsimi talk
				case 'simi11111111111111111':
					if (args.length < 1) return reply(`Hola ${pushname}`)
					teks = body.slice(6)
					try { 
					anu = await fetchJson(`https://api.xteam.xyz/simsimi?kata=${teks}&APIKEY=${xKey}`, {method: 'get'})
					if (anu.error) return reply('Escribe el texto bien')
					reply(anu.jawaban)
					} catch {
					  reply(mess.ferr)
					}
					break

case 'bot11111111111111111':
					if (args.length < 1) return reply(`Bot ${pushname}`)
					teks = body.slice(5)
					try { 
					anu = await fetchJson(`https://simsumi.herokuapp.com/api?text=${teks}`, {method: 'get'})
					if (anu.error) return reply('No lo se')
					reply(anu.jawaban)
					} catch {
					  reply(mess.ferr)
					}
					break

//--Verifkasi
case 'verify1111111111111':
case 'daftar1111111111111':
  case 'register1111111111111':
if (isRegister) return reply('Tu cuenta ya estaba verificada')
const namaUser = `${pushname}`
const umurUser = `${sender}`
const serialUser = createSerial(20)
veri = sender
if (isGroup) {
  addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
  hasil = `〘  *Vericación* 〙
Código : *${serialUser}*
╔════════════════════
╠≽️ *Nombre* : *${namaUser}*
╠≽️ *Número* : *${sender.split("@")[0]}*
╚════════════════════`
reply(hasil)
  console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
} else {
  addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
  hasil = `〘  *Verificación* 〙
Código : *${serialUser}*
╔════════════════════
╠≽️ *Nombre* : *${namaUser}*
╠≽️ *Número* : *${sender.split("@")[0]}*
╚════════════════════`
reply(hasil)
  console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
}
tm = `verificación completa usa ${prefix}Menu para ver la lista`
reply(tm)
break

//--grup semua peserta
case 'closegc111111111111':
  Lxa.updatePresence(from, Presence.composing)
  if (!isGroup) return reply(mess.only.group)
  if (!isGroupAdmins) return reply(mess.only.admin)
  if (!isBotGroupAdmins) return reply(mess.only.Badmin)
  var nomor = mek.participant
  const close = {
text: `Grupo cerrado por @${nomor.split("@s.whatsapp.net")[0]}\n ahora solo los admins facheros pueden escribir`,
contextInfo: {
  mentionedJid: [nomor]
}
  }
  Lxa.groupSettingChange (from, GroupSettingChange.messageSend, true);
  reply(close)
  break

//--grup hanya admin
case 'opengc111111111111':
  case 'bukagc111111111111':
Lxa.updatePresence(from, Presence.composing)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
open = {
  text: `Grupo abierto por @${sender.split("@")[0]}\n ahora todos pueden usar el bot`,
  contextInfo: {
mentionedJid: [sender]
  }
}
Lxa.groupSettingChange (from, GroupSettingChange.messageSend, false)
Lxa.sendMessage(from, open, text, {
  quoted: mek
})
break

//---mengahapus pesan bot
case 'delete111111111111111':
  case 'del111111111111111':
if (!isGroup)return reply(mess.only.group)
if (!isRegister) return reply(mess.only.daftarB)
if (!isGroupAdmins)return reply(mess.only.admin)
try {
Lxa.deleteMessage(from, {
  id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true
})
} catch {
  reply('Solo puedo borrar mensajes míos')
}
break

//--ganteng cekkkk
  case 'gantengcek111111111111111':
if (args.length < 1) return reply('Ingresa el nombre')
ganteng = body.slice(12)
const gan = ['10',
  '30',
  '20',
  '40',
  '50',
  '60',
  '70',
  '62',
  '74',
  '83',
  '97',
  '100',
  '29',
  '94',
  '75',
  '82',
  '41',
  '39']
const teng = gan[Math.floor(Math.random() * gan.length)]
Lxa.sendMessage(from, 'Gantengcek : *'+ganteng+'*\n\nPorcentaje : '+ teng+'%', text, {
  quoted: mek
})
break

//--Cantik cekk
  case 'cantikcek111111111111111':
if (args.length < 1) return reply('Escribe el nombre')
cantik = body.slice(12)
const can = ['10',
  '30',
  '20',
  '40',
  '50',
  '60',
  '70',
  '62',
  '74',
  '83',
  '97',
  '100',
  '29',
  '94',
  '75',
  '82',
  '41',
  '39']
const tik = can[Math.floor(Math.random() * can.length)]
Lxa.sendMessage(from, 'Cantikcek *'+cantik+'*\n\nPorcentaje : '+ tik+'%', text, {
  quoted: mek
})
break



				case 'bienvenida':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('😳 *¡𝑯𝒂𝒔 𝒂𝒄𝒕𝒊𝒗𝒂𝒅𝒐 𝒍𝒂𝒔 𝑩𝒊𝒆𝒏𝒗𝒆𝒏𝒊𝒅𝒂𝒔!* 😳')
						welkom.push(from)
						fs.writeFileSync('./data/welkom.json', JSON.stringify(welkom))
						reply('✅ *¡𝒀𝑨 𝑬𝑺𝑻𝑨 𝑨𝑪𝑻𝑰𝑽𝑨𝑫𝑶!* ✅')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./data/welkom.json', JSON.stringify(welkom))
						reply('❎ *¡𝒀𝑨 𝑬𝑺𝑻𝑨 𝑫𝑬𝑺𝑨𝑪𝑻𝑰𝑽𝑨𝑫𝑶!* ❎')
					} else {
						//reply('1 para activar, 0 desactivar')
					}
                                      break
				case 'clone111111111111111':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('Tag target')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await Lxa.getProfilePicture(id)
						buffer = await getBuffer(pp)
						Lxa.updateProfilePicture(botNumber, buffer)
						mentions(`La foto de perfil se actualizó correctamente usando la foto de perfil @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply('Error')
					}
					break
				case 'wait111111111111111':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(mess.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await Lxa.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							Lxa.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply('No se encontro')
					}
					break


				/*default:
				if (body.startsWith(`${prefix}${command}`)) {
  reply(`        ────────────────\nHols *${pushname}* !!!\nEse comando no esta en mi lista : *${prefix}${command}*\nUsa esto para verlos*${prefix}Menu*\n        ────────────────`)
				}*/
					if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						return //console.log(color('[WARN]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'green'))
		}
	})
}
starts()
