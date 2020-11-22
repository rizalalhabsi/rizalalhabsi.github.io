$(document).ready(function () {
    var d = new Date();
    var month = new Array();
    month[0] = "Januari";
    month[1] = "Februari";
    month[2] = "Maret";
    month[3] = "April";
    month[4] = "Mei";
    month[5] = "Juni";
    month[6] = "Juli";
    month[7] = "Agustus";
    month[8] = "September";
    month[9] = "Oktober";
    month[10] = "November";
    month[11] = "Desember";

    //GLOBAL DATA
    $("#date1").html(d.getDate() + " " + month[d.getMonth()] + " " + d.getFullYear());
    $.ajax({
        url: "https://api.kawalcorona.com/positif",
        success: function (result) {
            console.log(result);
        }
    });

});
