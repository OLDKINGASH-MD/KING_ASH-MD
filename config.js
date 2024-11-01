const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "QvN2UJYS#ZLFXBlBUEcQhB8x2ZI2y6YtnPJO6-gDb4CmEePhSARQ",
ALIVE_IMG: process.env.ALIVE_IMG || "https://avatars.githubusercontent.com/u/106251140?v=4",
ALIVE_MSG: process.env.ALIVE_MSG || "Hello, I ᴀᴍ Aʟɪᴠᴇ ɴᴏᴡ I ᴀᴍ ᴋɪɴɢ ᴀꜱʜ ᴍᴅ 😼✅",
};
