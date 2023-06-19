document.getElementById("surveyForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var date = document.getElementById("date").value;
    var audioQuality = document.getElementById("audioQuality").value;
    var videoQuality = document.getElementById("videoQuality").value;
    var audioVolume = document.querySelector('input[name="audioVolume"]:checked').value;
    var videoVolume = document.querySelector('input[name="videoVolume"]:checked').value;
    var feedback = document.getElementById("feedback").value;
  
    // Menampilkan hasil survey menggunakan alert, bisa disesuaikan dengan kebutuhan
    alert("Nama: " + name +
          "\nTanggal Pengisian: " + date +
          "\nKualitas Audio: " + audioQuality +
          "\nKualitas Video: " + videoQuality +
          "\nVolume Audio: " + audioVolume +
          "\nVolume Video: " + videoVolume +
          "\nSaran dan Kritik: " + feedback);
  });