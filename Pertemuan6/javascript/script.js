var x = 10;
x = 15;
console.log(x);

const y = 20;
console.log(y);


let z = 30;
z = 60;;
console.log(z);


// variable nama dan npm

var nama = "Eldy Firmansyah";
var npm = "233040031";
console.log(nama,npm);

// buat alat deteksi bilangan
const angka = 10;

if (angka % 2 === 0) {
    console.log ("ini bilangan genap");

} else {
    console.log ("ini bilangan ganjil");

}


// buatkan if else, jika variable lulus, tampilkan ucapan selamat, 

// JIKA TIDAK LULUS, UCAPKAN "SEMANGAT", 
// JIKA TIDAK NGULANG UCAPKAN "SEMOGA BERUNTUNG"
// JIKA BUKAN TIGA TIGANYA, UCAPAKAN "FORMAT SALAH
const status = 'lulus';

if (status === "lulus") {
    console.log("SELAMAT");
} else if (status === "tidak lulus") {
    console.log("SEMANGAT");
} else if (status === "ngulang") {
    console.log("SEMOGA BERUNTUNG");
} else {
    console.log("FORMAT SALAH");
}

// Function
function tambah(a,b) {
    console.log(a + b);
}

tambah (10, 10);

// Fungsi tambah
function pengurangan(a,b) {
    console.log(a - b);
}

pengurangan (10, 10);

const hari = ["senin", "selasa", "rabu", "eldy"];
console.log(hari[3]);

const array = ["Eldy FG", "233040031", ["PW", "Pa caca", "Pa dika"]];
console.log(array[0][0])

// key: value
const object = {
    nama : "eldy"
    npm : "233040031"
    email : "eldy@gmail.com"
    sapa function () {
        retrun "halo nama saya" + nama
    }
}
console.log(object.sapa());

 // coba buatkan object mahasiswa,, yang dimana didalamya terdapat fungsi lulus yang praramaternya  adalah nilai index (a,b,c,d,e) jika nilainya e mala tidak lulus

 // Fungsi untuk mengecek kelulusan
  cekKelulusan: function(nilai) {
    // Mengubah input ke huruf kecil agar pengecekan tidak sensitif (A/a)
    const index = nilai.toLowerCase();

    if (index === 'e') {
      return `Mahasiswa atas nama ${this.nama} dinyatakan: TIDAK LULUS.`;
    } else if (['a', 'b', 'c', 'd'].includes(index)) {
      return `Mahasiswa atas nama ${this.nama} dinyatakan: LULUS.`;
    } else {
      return "Index nilai tidak valid. Gunakan (A, B, C, D, atau E).";
    }
  }
};

// Cara Menggunakan:
console.log(mahasiswa.cekKelulusan("A")); // Output: LULUS
console.log(mahasiswa.cekKelulusan("e")); // Output: TIDAK LULUS