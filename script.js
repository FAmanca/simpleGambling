function getRandomNumber() {
    const weightedNumbers = [0, 1, 2, 3, 4, 5, 6, 7,7,7, 8, 9]; 
    const randomIndex = Math.floor(Math.random() * weightedNumbers.length);
    return weightedNumbers[randomIndex];
  }
  

var token = 50000;
document.getElementById("token").textContent = token;

function spin() {
  if (token < 500) {
    alert("Token Kurang");
  } else {
    token -= 500; // Kurangi token
    document.getElementById("token").textContent = token;

    const slot1 = document.getElementById("slot1");
    const slot2 = document.getElementById("slot2");
    const slot3 = document.getElementById("slot3");

    // Mengubah angka di tiap slot
    slot1.textContent = getRandomNumber();
    slot2.textContent = getRandomNumber();
    slot3.textContent = getRandomNumber();

    // Cek apakah semua slot bernilai 7
    if (
      slot1.textContent === "7" &&
      slot2.textContent === "7" &&
      slot3.textContent === "7"
    ) {
      alert("Anda Menang!");
      token += 50000;
    }
  }
}
