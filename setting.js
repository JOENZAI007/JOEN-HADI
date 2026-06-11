const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
// Add Your Session Id Start With JOEN-HADI Hear
SESSION_ID: process.env.SESSION_ID || "JOEN-HADI~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUpQaWplNFkxZ2hBd1NTb0UrOEFMZVlQcGlSSlc1aW5XSXNMNlVJZmwzND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOHpkSHNFSm1qUExQTG9UYXNMamlURkEzUmk1WmIzV1pIOERPWFhpWEp3OD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVTll3RGNNRXBXR1N1RG5BdXQ3MlBtOGFGV252MWNreFJOSWR5THcwWG4wPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLcEZQYVYwODdWTkVOOEtEaEhMcnZKVlhHNkdPQnVMdEcwb0xMZDJZRGdJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVJSDAwdENYREhZRVNXSnRsakJEa09pSHJuU3VnNzhpd091clVmcVBxM0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJrVU5MVE9XSkVzVnVLV1RaYmNWY25Fb0lRMGxZR29QZVRSS1RTZExkV0U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUlkcGEyTmNKcEZ4Qm5UdE9wc01TQXFjRGVHemFTeGRRMHVNaWgrYTNuWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEZSYmNkZEh2ZjhqYTRvcHJxTlhpeVJUOStwS0pnMUdsRWtESW1DQmhYWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFIMm5wamZpUmRqNHJ3M0JjZWlJQXBlRjNzQURqYkE3azIzME56UmpJSkFFeXhaTmlQTThPMHAvK1Z2ZHNXT1FQVWhUb1NnWGMzMzlaeTZkaWhMZWhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMyLCJhZHZTZWNyZXRLZXkiOiI2WWxYT2FSNVFsTkhvZXBEZmx6K2hmYi96ajdFVFEwS2NLd2gvUzZEQ1c0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6ODEzLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6ODEzLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IllENjY4Q1dQIiwibWUiOnsiaWQiOiI5MjM0MzA5MjE3MTM6NTJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiam9lbiBIYWRpIiwibGlkIjoiMTY4ODg3NDQyMjE5MDM4OjUyQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTE9hNWZZRUVJanNxOUVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZC9DUFVhdjZkN2JQdFJleWFEZXFpNjFJL3BjY0hHZ2k1ZU90K1gza3RVST0iLCJhY2NvdW50U2lnbmF0dXJlIjoiY0QrdVJuMzFNNUE5eHcvYnNHVlk1Qm5BSTByRWZIaUwzQkdGeEluS1JYQUMvT3NiVnh0eC84RFE5UTlWZ2puQXgzbHNIb1V2dVM2WmhEV3cvbkJSQnc9PSIsImRldmljZVNpZ25hdHVyZSI6IlpXNTdxNDR4Rk1NRlpWeVgwa25LbnlZSlFlUmNza1V1MGhQT0Iwdlh2NVoxVko5SUErZmQwdTZuN092Y21BVzZabmk3ZXEwMThpM3ZGRWU3M1A3K2l3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMTY4ODg3NDQyMjE5MDM4OjUyQGxpZCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYZndqMUdyK25lMno3VVhzbWczcW91dFNQNlhIQnhvSXVYanJmbDk1TFZDIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWtJQ0FnQyJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3ODEyMDAzOTgsImxhc3RQcm9wSGFzaCI6IjNZbk5sZiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSVFLIn0=",
// JOEN-HADI Api Site Url
API_BASE: process.env.API_BASE || "https://arslan-apis.vercel.app/",
// JOEN-HADI Api Key -- Add This To Your Api Key Form Api Site
API_KEY: process.env.API_KEY || "arslanmdofficialadmin",
// Auto Status Seen
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY JOEN-HADI 🤍*",

AUTO_BIO: process.env.AUTO_BIO || "true",
// true if want welcome msg in groups
GOODBYE: process.env.GOODBYE || "false",
// true if want goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "JOEN-HADI",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "JOEN-HADI",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "92343 0921713",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "JOEN-HADI Official",

SEND_WELCOME: process.env.SEND_WELCOME || "true",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "true",
// make true for auto read message
READ_CMD_ONLY: process.env.READ_CMD_ONLY || "true",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "true",
// false or true for anti Calls
ANTI_CALL: process.env.ANTI_CALL || "true",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "true",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "true",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
 //Bot olways offline
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",

ANTI_BOT: process.env.ANTI_BOT || "true",
// true for anti once view 

ANTI_DELETE: process.env.ANTI_DELETE || "true",
// true for anti delete 
ANTI_DELETE_TYPE: process.env.ANTI_DELETE_TYPE || "same", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "true",
// make it true for auto recoding 
AUTO_BLOCK: process.env.AUTO_BLOCK || "false"
// make it true for auto block
};







