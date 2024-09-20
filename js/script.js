window.onload = function() {
    document.getElementById('content').style.display = "none";
    Alert();
}

function Alert() {
    namaPengguna = prompt("Hai! Silakan masukkan nama Anda:");
    
    document.getElementById('nama').innerHTML = namaPengguna;
    document.getElementById('content').style.display = "block";
}
