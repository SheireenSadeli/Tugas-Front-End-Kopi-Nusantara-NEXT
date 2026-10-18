export type MenuItem = {
  id: number;
  nama: string;
  alt: string;
  gambar: string;
  deskripsi: string;
  harga: number;
};

export const menuItems: MenuItem[] = [
  {
    id: 1,
    nama: "Kopi Tubruk Jawa",
    alt: "Kopi Tubruk Jawa",
    gambar: "/img/kopi/tubrukjawa.png",
    deskripsi:
      "Kopi hitam ala tradisional, diseduh kasar dengan gula batu secukupnya.",
    harga: 15000,
  },
  {
    id: 2,
    nama: "Robusta Lampung",
    alt: "Kopi Lampung Robusta",
    gambar: "/img/kopi/lampungrobusta.png",
    deskripsi:
      "Karakter kuat dan pahit tegas, favorit yang butuh dorongan energi ekstra.",
    harga: 18000,
  },
  {
    id: 3,
    nama: "Flores Bajawa",
    alt: "Kopi Flores Bajawa",
    gambar: "/img/kopi/floresbajawa.png",
    deskripsi:
      "Manis alami dengan sentuhan cokelat, tumbuh di lereng Gunung Inerie.",
    harga: 23000,
  },
  {
    id: 4,
    nama: "Kopi Susu Gula Aren",
    alt: "Kopi Susu Gula Aren",
    gambar: "/img/kopi/susugulaaren.png",
    deskripsi: "Espresso lokal, susu segar, dan gula aren asli. manis pas.",
    harga: 19000,
  },
  {
    id: 5,
    nama: "Kalosi Sulawesi",
    alt: "Kopi Kalosi Sulawesi",
    gambar: "/img/kopi/sulawesi.png",
    deskripsi:
      "Full body dengan after taste rempah, cocok diseduh French press.",
    harga: 24000,
  },
  {
    id: 6,
    nama: "Vietnam Drip",
    alt: "Kopi Vietnam Drip",
    gambar: "/img/kopi/vietnamdrip.png",
    deskripsi:
      "Kopi pekat menetes pelan, disajikan dengan susu kental manis dingin.",
    harga: 20000,
  },
  {
    id: 7,
    nama: "Americano Dingin",
    alt: "Kopi Americano Dingin",
    gambar: "/img/kopi/americanodingin.png",
    deskripsi:
      "Espresso ganda diseduh dengan air dingin, ringan tapi tetap nendang.",
    harga: 18000,
  },
  {
    id: 8,
    nama: "Latte Pandan",
    alt: "Kopi Latte Pandan",
    gambar: "/img/kopi/lattepandan.png",
    deskripsi:
      "Sentuhan pandan lokal berpadu dengan susu creamy dan espresso lembut.",
    harga: 21000,
  },
];
