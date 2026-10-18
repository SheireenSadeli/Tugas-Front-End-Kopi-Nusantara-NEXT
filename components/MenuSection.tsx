"use client";

import Image from "next/image";
import { menuItems } from "@/data/menu";
import { formatRupiah } from "@/lib/format";
import { useShop } from "./ShopProvider";

export default function MenuSection() {
  const { searchQuery, addToCart } = useShop();

  const kataKunci = searchQuery.toLowerCase();
  const hasil = menuItems.filter((item) =>
    item.nama.toLowerCase().includes(kataKunci),
  );

  return (
    <section id="menu">
      <h2>Menu Kami</h2>
      <div className="menu-container">
        {hasil.map((item) => (
          <div className="menu-card" key={item.id}>
            <Image
              src={item.gambar}
              alt={item.alt}
              width={1400}
              height={1080}
              sizes="(min-width: 992px) 18vw, (min-width: 576px) 35vw, 70vw"
            />
            <h3>{item.nama}</h3>
            <p>{item.deskripsi}</p>
            <button
              type="button"
              className="menu-price"
              onClick={() => addToCart(item.nama, item.harga)}
            >
              {formatRupiah(item.harga)}
            </button>
          </div>
        ))}
      </div>
      {hasil.length === 0 && (
        <p id="pesan-kosong">Kopi yang kamu cari tidak ditemukan.</p>
      )}
    </section>
  );
}
