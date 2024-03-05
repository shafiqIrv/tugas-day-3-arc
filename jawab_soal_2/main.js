const readline = require('readline');

// Fungsi untuk menambahkan angka
function addNumber(num1, num2, callback) {
    setTimeout(() => {
        const result = num1 + num2;
        callback(result);
    }, 1000);
}

// Fungsi utama untuk menjalankan program
async function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // Menggunakan list untuk menyimpan hasil penjumlahan
    const results = [];

    while (true) {
        const num1 = await askQuestion(rl, "Masukkan angka pertama (atau ketik 'q' untuk keluar): ");
        if (num1.toLowerCase() === 'q') break;

        const num2 = await askQuestion(rl, "Masukkan angka kedua: ");

        // Menggunakan async await untuk menunggu hasil penjumlahan
        const sum = await addAsync(num1, num2);
        results.push(sum);

        console.log(`Hasil penjumlahan: ${sum}\n`);
    }

    console.log("Daftar hasil penjumlahan:");
    console.log(results);

    rl.close();
}

// Fungsi untuk meminta input dari pengguna
function askQuestion(rl, question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}

// Fungsi async untuk melakukan penjumlahan
function addAsync(num1, num2) {
    return new Promise((resolve) => {
        addNumber(parseInt(num1), parseInt(num2), (result) => {
            resolve(result);
        });
    });
}

// Menjalankan program
main().catch((error) => console.error(error));
