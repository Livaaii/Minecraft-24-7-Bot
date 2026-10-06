const mineflayer = require('mineflayer');

function createBot() {
    const bot = mineflayer.createBot({
        host: 'virgogalacticosmod.aternos.me',
        port: 54943,
        username: 'Bot_NPC_247',
        version: 1.20.1
    });

    bot.on('login', () => {
        console.log('[NPC] Conexión establecida con el servidor de Minecraft.');
    });

    bot.on('spawn', () => {
        console.log('[NPC] El bot ha aparecido correctamente en el mapa.');
    });

    bot.on('end', (reason) => {
        console.log(`[NPC] Conexión finalizada: ${reason}. Reintentando en 25 segundos...`);
        setTimeout(createBot, 25000);
    });

    bot.on('error', (err) => {
        console.log(`[NPC] Error de red: ${err.message}`);
    });
}

createBot();
