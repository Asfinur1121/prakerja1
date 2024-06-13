function convertToC() {
    const fahrenheit = document.getElementById('fahrenheit').value;
    const celsius = (fahrenheit - 32) * 5 / 9;
    document.getElementById('celsius-result').textContent = `${celsius.toFixed(2)} °C`;
}
// Mengubah warna background elemen
const header = document.querySelector('header');
header.style.backgroundColor = '#333';
header.style.color = '#fff';

// Menambahkan elemen baru
const newDiv = document.createElement('div');
newDiv.textContent = 'Ini adalah elemen baru!';
document.body.appendChild(newDiv);

// Mengubah teks pada halaman
const footerText = document.querySelector('footer p');
footerText.textContent = 'Portofolio Asfi Nur Aizah &copy; 2024';
// Validasi Email
const emailInput = document.getElementById('email');
emailInput.addEventListener('input', validateEmail);

function validateEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        emailInput.setCustomValidity('Format email tidak valid.');
    } else {
        emailInput.setCustomValidity('');
    }
}

// Validasi Nomor Telepon
const phoneInput = document.getElementById('phone');
phoneInput.addEventListener('input', validatePhone);

function validatePhone() {
    const phoneRegex = /^\d{12}$/;
    if (!phoneRegex.test(phoneInput.value)) {
        phoneInput.setCustomValidity('Nomor telepon harus terdiri dari 12 angka.');
    } else {
        phoneInput.setCustomValidity('');
    }
}
const form = document.querySelector('form');
form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault(); // Mencegah form untuk di-submit secara default

    const formData = new FormData(form);
    const formValues = Object.fromEntries(formData);

    // Lakukan apa yang diinginkan dengan data form di sini
    console.log(formValues);

    // Menampilkan pesan "Berhasil Dikirim"
    const successMessage = document.createElement('p');
    successMessage.textContent = 'Berhasil Dikirim!';
    form.appendChild(successMessage);

    // Reset form setelah 3 detik
    setTimeout(() => {
        form.reset();
        successMessage.remove();
    }, 3000);
}
function updateTime() {
    const now = new Date();
    const options = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    const formattedTime = now.toLocaleString('id-ID', options);

    const timeElement = document.createElement('p');
    timeElement.textContent = formattedTime;

    const mainContent = document.querySelector('main');
    mainContent.appendChild(timeElement);
}

// Memperbarui jam setiap detik
setInterval(updateTime, 1000);