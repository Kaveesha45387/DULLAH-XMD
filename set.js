const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'DULLAH-MD;;;H4sIAAAAAAAAA5VVW5KiSBTdSkX+SrU8VNCIihhEVMQHAqI43TGRQIrJu0hAscI9zI5mK7OUCSwryo/pnhr4uXCTkyfvOffyBpIUE6SiGgzeQJbjChaoCYs6Q2AAhuXhgHJAAQ8WEAzAWltcevGc0QVlU4xUtrLmkmaFXpqU3sqWa9LbVofKZkRaeQFXCmSlE2H3F4BQ1itySRS+uPROulJkFr9s2Xg0Vs/x5ujqnC6ZTox7fX3xAq4NIsQ5Tnw5O6IY5TBSUa1BnH+N/kIyFW/NnDscuxId4sghHS89G1k9KYgEqeW/+rPKOoXT2P8a/eE55cJsLHRT1SgvWEsX88zRtarvr+zy4HmhcD6mNOuwSeedPsF+gjzFQ0mBi/rLdUcqFIg12x8M1dZStGuvZa+/0fzgkHJhyW6nqdy5LMrsGJ2+Rrzf19rQhcyxtUhJe+L4eYLiUCQng+nX/kwwT+zIYTtmHWweiWv5h1fC/1P33oIbb4zwstu2rP3Mmu3QRu4EeO/s7NflTN/kJwVZs5mujumv0WdnnjtSW8sqXxhe7M1sydeFgFNs/qzWdCDww1OxhltXZMVP+rAo81+xnO3zNcr7Hdg5m3pszAkcSbpkzdI5PYlMRZq0/Hag84yDziQgLM1yXAlFNUQjWe3Qq8rcHOUeOXo6F+RrTDDscZ7kv9xOFKJa8cCAuVIgRz4mRQ4LnCbNu65AAehVBnJzVNyqC+AFLjfBkhvLUIAzfZOMo2xcr/GK0NEZLkIe65aeqAaTCy+AAlmeuogQ5E0xKdK8XiBCoI8IGPz+gwIJOhfvujW7cQwFDjgnxSYpsyiF3oeoH0noummZFEaduFIToBwM6M/XqChw4pOmjGUCc/eIKyQdYUHA4AAjgq4U8FCFXdTggdOzUG6ee6WuGwyXn//Q7OWpPDWUj2nyvoRz6K7j9bvPDs1zz52eC58F6LrPrIO6kHF5lxMYQAF8b5nmm58qWKxpLRBNPNtjzpqzw+WiPkqT+Uk6yzcV3kuPcuSBQZGXiAIOdMMyM9MQJb/Are3hShnznUnViiqeyeRjYAhbRarL9QPuu6Rg8PY5pqTUa/AMXZqNhKUKKBDfHIibk/c7PN/j+x2hyw+6/d/It1NTR5hl3xJUAAoksFkM1O/J0/fk/RYfYusW3x/lh4T8mDAeEtOH+KmBemrWPf3915/NIe4KN/Q8VEAcETAAkjKaBytflleHXZl3JhPR9kXJF8GnIz466926NOL33UVfZ7Rurfuu52hQb0/C3WTqrPbRuV6pZHzS09e16b78CwgYAG2/yaeteUCcibK79Ms2q0x8Qcak112JeeIU2DcrYvg7uFvZgVXqZqGs2RaDJ2KZpcm50i3eSAyrnrShserVJHtlRk0bfjjzcbOWho25aa1Fbkt3T10BV7E/d61Nghwtk9m5eIyGfbqCzkGVwnDo2mGbcGo5Wutj7hIZW9jjPeUytslk+hry6wXOaHN07/nbzInusx7f2vHt7uMDRrfReZf4v5zw2VH0lXqAuM/in/2cvGnJIlPbeGbLDe3pdHthw8M5G5+P7CXeu26A86ErQzWUOXC9/qBAFsHikOYxGAASOxBQIIKkED8ngoljRAoYZ2DA8B2m2+d7AkeBuBazzChg8TFIgNhcs0kBrv8AcgFZI2MIAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "ᴅᴜʟʟᴀʜ-xᴍᴅ v²",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "ᴅᴜʟʟᴀʜ-xᴍᴅ v²",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'ᴅᴜʟʟᴀʜ-xᴍᴅ v²',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/533oqh.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "no",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'yes',
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
                 ANTIDELETE3 : process.env.ANTIDELETE2 || 'yes',
                  DULLAH_CHATBOT : process.env.DULLAH_CHATBOT || 'yes',
                
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
                  AUTO_TAG_STATUS : process.env.AUTO_TAG_STATUS || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
