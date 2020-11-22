function jam() {

    var months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

    var myDays = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum&#39;at', 'Sabtu'];

    var time = new Date(),
        hari = time.getDay(),
        tanggal = time.getDate(),
        bulan = time.getMonth(),
        tahun = time.getFullYear(),
        hours = time.getHours(),
        minutes = time.getMinutes(),
        seconds = time.getSeconds();
    document.querySelectorAll('.jam')[0].innerHTML = harold(hours) + ":" + harold(minutes) + ":" + harold(seconds);
    document.querySelectorAll('.tanggal')[0].innerHTML = myDays[hari] + ", " + tanggal + " " + months[bulan] + " " + tahun;

    function harold(standIn) {
        if (standIn < 10) {
            standIn = '0' + standIn
        }
        return standIn;
    }
}
setInterval(jam, 1000);