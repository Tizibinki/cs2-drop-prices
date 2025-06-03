async function getPrice() {
  const item = document.getElementById("itemInput").value;
  const url = `https://steamcommunity.com/market/priceoverview/?appid=730&market_hash_name=${encodeURIComponent(item)}&currency=1`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    document.getElementById("priceDisplay").innerText =
      data.success ? `Price: ${data.lowest_price}` : "Item not found.";
  } catch (e) {
    document.getElementById("priceDisplay").innerText = "Error fetching data.";
  }
}
