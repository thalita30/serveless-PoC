alert("JS SUDAH TERHUBUNG");

document.addEventListener("DOMContentLoaded", function () {

  const form = document.querySelector("form");

  if (!form) {
    alert("FORM TIDAK DITEMUKAN");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById('username').value;
    const feedback = document.getElementById('feedback').value;
    const file = document.getElementById('file').files[0];
    const responseDiv = document.getElementById('response');

    if (!name || !feedback || !file) {
      responseDiv.innerHTML = "Harap isi semua data!";
      responseDiv.style.color = "red";
      return;
    }

    // 🔥 Dummy sukses
    responseDiv.innerHTML = "Feedback berhasil dikirim!";
    responseDiv.style.color = "green";

    // reset form
    form.reset();
  });

});
