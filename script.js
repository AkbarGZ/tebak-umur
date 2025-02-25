const emojis = ["🎈", "👑", "🏆", "🎭", "✋", "😊", "⚽", "❤️", "🐾"];

function generateAge(name) {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return Math.abs(hash % 40) + 10; // Umur antara 10 - 50 tahun
}

function getRandomEmoji() {
    return emojis[Math.floor(Math.random() * emojis.length)];
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        let nameInput = document.getElementById("nameInput");
        let resultTable = document.getElementById("resultTable");
        let name = nameInput.value.trim();

        if (name !== "") {
            let age = generateAge(name);
            let emoji = getRandomEmoji();

            // Buat baris baru untuk tabel
            let row = document.createElement("tr");
            row.innerHTML = `<td>${name.toUpperCase()}</td><td>${age} tahun ${emoji}</td>`;

            // Sisipkan sebelum baris input
            resultTable.insertBefore(row, resultTable.lastElementChild);

            // Kosongkan input untuk input berikutnya
            nameInput.value = "";
        }
    }
}