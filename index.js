let inputNilai = prompt(`Silahkan masukkan nilai anda : `);

if (!inputNilai) {
  alert (`Silahkan masukkan nilai anda terlebih dahulu`);
} else if (inputNilai > 100 || typeof 'string') {
  alert (`Silahkan masukkan nilai yang benar`);
} else if (inputNilai >= 80 && inputNilai <= 100) {
  alert(`Selamat! Nilai anda A`);
} else if (inputNilai >= 60 && inputNilai < 80) {
  alert(`Selamat! Nilai anda B`);
} else if (inputNilai >= 40 && inputNilai < 60) {
  alert(`Selamat! Nilai anda C`);
} else if (inputNilai >= 20 && inputNilai < 60) {
  alert(`Selamat! Nilai anda D`);
} else {
  alert(`Selamat! Nilai anda E`);
}