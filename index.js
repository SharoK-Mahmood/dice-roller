function rollDice() {
    const numDice = document.getElementById("numDice").value;
    const result = document.getElementById("result");
    const diceImage = document.getElementById("dice-image");

    const images = [];
    const values = [];

    for (let i = 0; i < numDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="pic/dice${value}.png" alt="${value}">`);
    }

    result.textContent = `dice: ${values.join(", ")}`;
    diceImage.innerHTML = images.join("");

}

