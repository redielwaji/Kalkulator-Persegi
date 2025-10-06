// Ambil elemen-elemen DOM
const sisiInput = document.getElementById("sisi");
const hitungLuasBtn = document.getElementById("hitungLuas");
const hitungKelilingBtn = document.getElementById("hitungKeliling");
const resetBtn = document.getElementById("reset");
const luasResult = document.getElementById("luasResult");
const kelilingResult = document.getElementById("kelilingResult");

// Fungsi untuk menghitung luas persegi
function hitungLuasPersegi(s) {
  const luas = s * s;
  return luas;
}

// Fungsi untuk menghitung keliling persegi
function hitungKelilingPersegi(s) {
  const keliling = 4 * s;
  return keliling;
}

// Format angka dengan pemisah ribuan
function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// Event listener untuk tombol hitung luas
hitungLuasBtn.addEventListener("click", function () {
  const sisi = parseFloat(sisiInput.value);

  if (isNaN(sisi) || sisi <= 0) {
    alert("Masukkan panjang sisi yang valid (bilangan positif)");
    return;
  }

  const luas = hitungLuasPersegi(sisi);
  luasResult.querySelector(".result-value").innerHTML =
    `${formatNumber(luas.toFixed(2))}<span class="result-unit">cm²</span>`;
  luasResult.classList.add("active");

  // Hapus kelas active dari hasil keliling
  kelilingResult.classList.remove("active");
});

// Event listener untuk tombol hitung keliling
hitungKelilingBtn.addEventListener("click", function () {
  const sisi = parseFloat(sisiInput.value);

  if (isNaN(sisi) || sisi <= 0) {
    alert("Masukkan panjang sisi yang valid (bilangan positif)");
    return;
  }

  const keliling = hitungKelilingPersegi(sisi);
  kelilingResult.querySelector(".result-value").innerHTML =
    `${formatNumber(keliling.toFixed(2))}<span class="result-unit">cm</span>`;
  kelilingResult.classList.add("active");

  // Hapus kelas active dari hasil luas
  luasResult.classList.remove("active");
});

// Event listener untuk tombol reset
resetBtn.addEventListener("click", function () {
  sisiInput.value = "";
  luasResult.querySelector(".result-value").innerHTML =
    `-<span class="result-unit">cm²</span>`;
  kelilingResult.querySelector(".result-value").innerHTML =
    `-<span class="result-unit">cm</span>`;
  luasResult.classList.remove("active");
  kelilingResult.classList.remove("active");
  sisiInput.focus();
});

// Event listener untuk input sisi (agar bisa langsung enter)
sisiInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    hitungLuasBtn.click();
  }
});
