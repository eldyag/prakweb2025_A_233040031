<?php
class Produk {
    // Properti umum
    public $judul,
           $penulis,
           $penerbit,
           $harga;

    // Constructor milik Parent
    public function __construct( $judul = "judul", $penulis = "penulis", $penerbit = "penerbit", $harga = 0 ) {
        $this->judul = $judul;
        $this->penulis = $penulis;
        $this->penerbit = $penerbit;
        $this->harga = $harga;
    }

    // Method milik Parent
    public function getLabel() {
        return "$this->penulis, $this->penerbit";
    }

    class komik extends Produk 
    {
        public $jmhalaman;

        public function __construct($judul, $penulis, $penerbit, $harga, $jmhalaman )
        {
            parent::class__construct($judul, $penulis, $penerbit, $harga, $jmhalaman)
            
        }
    }
}