function Alert() {
    namaPengguna = prompt("Hai! Silakan masukkan nama Anda:");

    document.getElementById('nama').innerHTML = namaPengguna;
    document.getElementById('content').style.display = "block";
}