let adsWatched = 2815;
let earnedPoints = 310.30;
let progress = 0;
let autoAdsInterval = null;
let withdrawalHistory = [];

document.getElementById('watch-ad-btn').addEventListener('click', watchAd);
document.getElementById('start-auto-ads').addEventListener('click', startAutoAds);
document.getElementById('stop-auto-ads').addEventListener('click', stopAutoAds);
document.getElementById('withdraw-btn').addEventListener('click', withdrawFunds);

function updateUI() {
    document.getElementById('ads-watched').innerText = adsWatched;
    document.getElementById('earned-points').innerText = earnedPoints.toFixed(2);
    document.getElementById('progress').innerText = progress + "%";
    updateHistory();
}

function watchAd() {
    let watchButton = document.getElementById('watch-ad-btn');
    watchButton.disabled = true; // Disable button for 20 seconds

    adsWatched++;
    earnedPoints += 0.10;
    progress = Math.min(100, progress + 5);
    updateUI();

    setTimeout(() => {
        watchButton.disabled = false; // Re-enable after 20 seconds
    }, 20000); // 20 seconds
}

function startAutoAds() {
    if (!autoAdsInterval) {
        autoAdsInterval = setInterval(watchAd, 20000); // Auto increments every 20 seconds
    }
}

function stopAutoAds() {
    clearInterval(autoAdsInterval);
    autoAdsInterval = null;
}

function withdrawFunds() {
    let method = document.getElementById('method').value;
    let phone = document.getElementById('phone').value;
    let amount = parseFloat(document.getElementById('amount').value);

    if (!phone || isNaN(amount) || amount <= 0) {
        alert("Please enter a valid account number and amount.");
        return;
    }

    if (amount > earnedPoints) {
        alert("Insufficient balance!");
        return;
    }

    earnedPoints -= amount; // Deduct points

    let now = new Date();
    let dateTime = now.toLocaleString(); // Get current date and time

    // Store withdrawal in history
    withdrawalHistory.push({ method, phone, amount, dateTime });

    updateUI();

    alert(`Withdrawal request sent for ${amount} points via ${method} to ${phone}.`);
}

function updateHistory() {
    let historyTable = document.getElementById('withdrawal-history');
    historyTable.innerHTML = ""; // Clear previous history

    withdrawalHistory.forEach((withdraw) => {
        let row = `<tr>
            <td>${withdraw.method}</td>
            <td>${withdraw.phone}</td>
            <td>${withdraw.amount}</td>
            <td>${withdraw.dateTime}</td>
        </tr>`;
        historyTable.innerHTML += row;
    });
}

updateUI();
