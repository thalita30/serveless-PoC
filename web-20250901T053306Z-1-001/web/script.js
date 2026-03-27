const API_GATEWAY_URL = 'DUMMY'; // sementara dummy dulu

// 🔥 TAMBAHAN: biar tombol "Kirim" berfungsi
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  submitFeedback();
});

async function submitFeedback() {
  const name = document.getElementById('username').value.trim();
  const feedback = document.getElementById('feedback').value.trim();
  const fileInput = document.getElementById('file');
  const responseDiv = document.getElementById('response');

  if (!name || !feedback || fileInput.files.length === 0) {
    responseDiv.style.color = 'red';
    responseDiv.innerHTML = 'Please fill in all fields and choose a file.';
    return;
  }

  // 🔥 DUMMY RESPONSE (biar keliatan jalan)
  responseDiv.style.color = 'green';
  responseDiv.innerHTML = 'Feedback submitted successfully! (Dummy)';

  // reset form
  document.getElementById('username').value = '';
  document.getElementById('feedback').value = '';
  document.getElementById('file').value = '';
}

async function loadFeedbacks() {
  const container = document.getElementById('feedback-container');

  try {
    // 🔥 dummy data biar tabel muncul
    const data = [
      {
        name: "Thalita",
        feedback: "Contoh feedback",
        filename: "image.jpg",
        imageUrl: ""
      }
    ];

    if (!Array.isArray(data) || data.length === 0) {
      container.innerHTML = 'No feedback submitted yet.';
      return;
    }

    const table = document.createElement('table');
    table.innerHTML = `
      <tr>
        <th>Name</th>
        <th>Feedback</th>
        <th>Filename</th>
        <th>Image</th>
      </tr>
    `;

    data.forEach((item) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${item.name}</td>
        <td>${item.feedback}</td>
        <td>${item.filename}</td>
        <td></td>
      `;
      table.appendChild(row);
    });

    container.innerHTML = '';
    container.appendChild(table);
  } catch (err) {
    container.innerHTML = 'Error: ' + err.message;
  }
}

loadFeedbacks();
