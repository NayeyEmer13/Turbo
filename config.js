import { watchFile, unwatchFile } from 'fs' 
 import chalk from 'chalk' 
 import fs from 'fs' 
 import cheerio from 'cheerio' 
 import fetch from 'node-fetch' 
 import axios from 'axios' 
 import path, { join } from 'path' 
 import { fileURLToPath, pathToFileURL } from 'url' 
 import moment from 'moment-timezone'  
 import { platform } from 'process' 
 global.__filename = function filename(pathURL = import.meta.url, rmPrefix = platform !== 'win32') { return rmPrefix ? /file:\/\/\//.test(pathURL) ? fileURLToPath(pathURL) : pathURL : pathToFileURL(pathURL).toString() }; global.__dirname = function dirname(pathURL) { return path.dirname(global.__filename(pathURL, true)) }; global.__require = function require(dir = import.meta.url) { return createRequire(dir) } 
 const __dirname = global.__dirname(import.meta.url) 
  
 global.owner =
[['51929972576', '🍇𝙹𝚡𝚝𝚡𝚗 𝚃𝙱🍇', true],
['51971959440', '🍧𝙹𝚇𝚃𝚇𝙽 𝚃𝙱🍧', true],
['50558124470', '💖𝙴𝙽𝙳𝙴𝚁 𝙻𝙱💖', true], ['5217294888993', '🍓𝙰𝚉𝙰𝙼𝙸🍓', true],
['573106040746', '𝙴𝙳𝙴𝚁', true],
['524531287294'],['524437863111'],['584129799955']],

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces: 
 //Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos) 
 global.botNumberCode = '' //Ejemplo: +59309090909 
 global.confirmCode = ''

 global.animxscans = ['51929972576'] 
 global.suittag = ['51929972576'] 
 global.mods = [] 
 global.prems = []

global.packname = 'ᥫ᭡𝙏𝙪𝙧𝙗𝙤𝘽𝙤𝙩-𝙈𝘿ꨄ'
global.author = ' T\n U\n R\n  B\n O\n '
global.wm = '𓆩𝐓𝐮𝐫𝐛𝐨𝐁𝐨𝐭-𝐌𝐃𓆪'
global.wm2 = '✦𝗧𝘂𝗿𝗯𝗼-𝗯𝗼𝘁-𝗠𝗗✦'
global.jxtxn = 'Jxtxn'
global.cb = '⏤͟͟͞͞ＴｕｒｂｏＢｏｔ-ＭＤ'

global.vs = '1.0.2'
global.library = 'Baileys'
global.baileys = '@whiskeysockets/baileys'
global.lenguaje = 'Español'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = '51929972576'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})
