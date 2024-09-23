function getRandomNumber() {
  const weightedNumbers = [0, 1, 2, 3,3,3, 4, 5, 6, 7, 7, 8,8, 9];
  const randomIndex = Math.floor(Math.random() * weightedNumbers.length);
  return weightedNumbers[randomIndex];
}

var token = 500000;
document.getElementById("token").textContent = token;

function spin() {
  var select = document.getElementById("bid");
  var bid = select.value;
  if (token < 500) {
    alert("Token Kurang");
  } else {
    token -= bid; 
    document.getElementById("token").textContent = token;

    const slot1 = document.getElementById("slot1");
    const slot2 = document.getElementById("slot2");
    const slot3 = document.getElementById("slot3");

    slot1.textContent = getRandomNumber();
    slot2.textContent = getRandomNumber();
    slot3.textContent = getRandomNumber();

    if (
      slot1.textContent === "7" &&
      slot2.textContent === "7" &&
      slot3.textContent === "7"
    ) {
        bonus = bid * 77
        token += bonus;
        alert("Anda Menang! Token Bonus : "+bonus);
    }
    else if (
        slot1.textContent === "8" &&
      slot2.textContent === "8" &&
      slot3.textContent === "8"
    ) {
        bonus = bid * 40
        token += bonus;
        alert("Anda Menang! Token Bonus : "+bonus);
    }
    else if (
        slot1.textContent === "3" &&
      slot2.textContent === "3" &&
      slot3.textContent === "3"
    ) {
        bonus = bid * 15
        token += bonus;
        alert("Anda Menang! Token Bonus : "+bonus);
    }
  }
}
