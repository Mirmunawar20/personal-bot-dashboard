# personal-bot-dashboard
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Personal Bot Dashboard</title>
    <link rel="stylesheet" href="style.css"> <!-- Link to CSS -->
</head>
<body>
    <div class="container">
        <h2>Personal Bot Dashboard</h2>
        <h4>Welcome, @exampleUser</h4>
        <p>Watched Ads: <span id="ads-watched">2815</span></p>
        <p>Earned Points: <span id="earned-points">310.30</span></p>
        <p>Online Active Members: <span id="active-members">100</span></p>
        <div class="progress-circle" id="progress">0%</div>
        <button class="button" id="watch-ad-btn">Watch Ad</button>
        <button class="button" id="start-auto-ads">Auto Show Ads</button>
        <button class="button" id="stop-auto-ads">Stop Auto Ads</button>
        
        <div class="payment-section">
            <h3>Withdraw Funds</h3>
            <label for="method">Payment Method:</label>
            <select id="method">
                <option value="Bkash">Bkash</option>
                <option value="Nagad">Nagad</option>
                <option value="TRC-20">TRC-20</option>
                <option value="User Fino">User Fino</option>
            </select>
            
            <label for="phone">Account Number:</label>
            <input type="text" id="phone" placeholder="Enter account number">
            
            <label for="amount">Withdraw Amount:</label>
            <input type="number" id="amount" placeholder="Enter amount">
            
            <button class="button" id="withdraw-btn">Withdraw</button>
        </div>

        <div class="payment-section">
            <h3>Withdrawal History</h3>
            <table>
                <thead>
                    <tr>
                        <th>Method</th>
                        <th>Account</th>
                        <th>Amount</th>
                        <th>Date & Time</th>
                    </tr>
                </thead>
                <tbody id="withdrawal-history">
                    <!-- History will be added dynamically -->
                </tbody>
            </table>
        </div>
    </div>

    <script src="script.js"></script> <!-- Link to JavaScript -->
</body>
</html>
