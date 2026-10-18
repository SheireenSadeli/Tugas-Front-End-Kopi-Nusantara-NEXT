"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { useShop } from "./ShopProvider";

const MAX_KEPERLUAN = 999;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Field = "nama" | "email" | "keperluan";

export default function KontakForm() {
  const { showNotif } = useShop();
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [keperluan, setKeperluan] = useState("");
  const [error, setError] = useState<{ field: Field; message: string } | null>(
    null,
  );

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (nama.trim() === "") {
      setError({ field: "nama", message: "Nama tidak boleh kosong." });
      return;
    }
    if (!EMAIL_REGEX.test(email.trim())) {
      setError({ field: "email", message: "Format email tidak valid." });
      return;
    }
    if (keperluan.trim() === "") {
      setError({ field: "keperluan", message: "Keperluan tidak boleh kosong." });
      return;
    }

    setError(null);
    setNama("");
    setEmail("");
    setKeperluan("");
    showNotif("Pesan berhasil dikirim!");
  }

  function clearError(field: Field) {
    if (error?.field === field) setError(null);
  }

  return (
    <form className="kontak-form" id="kontakform" onSubmit={handleSubmit}>
      <h3 className="kontak-form-title">Kirim Pertanyaan</h3>

      <div className="kontak-input">
        <label htmlFor="nama">Nama</label>
        <input
          type="text"
          id="nama"
          name="nama"
          maxLength={99}
          placeholder="Masukkan Nama Anda . . ."
          value={nama}
          aria-invalid={error?.field === "nama"}
          onChange={(e) => {
            setNama(e.target.value);
            clearError("nama");
          }}
        />
      </div>

      <div className="kontak-input">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          maxLength={99}
          placeholder="Masukkan Email Anda . . ."
          value={email}
          aria-invalid={error?.field === "email"}
          onChange={(e) => {
            setEmail(e.target.value);
            clearError("email");
          }}
        />
      </div>

      <div className="kontak-input">
        <label htmlFor="keperluan">Keperluan</label>
        <div className="pembungkus">
          <textarea
            id="keperluan"
            name="keperluan"
            maxLength={MAX_KEPERLUAN}
            placeholder="Masukkan Keperluan Anda . . ."
            value={keperluan}
            aria-invalid={error?.field === "keperluan"}
            onChange={(e) => {
              setKeperluan(e.target.value);
              clearError("keperluan");
            }}
          ></textarea>
          <span id="char_count">
            {keperluan.length}/{MAX_KEPERLUAN}
          </span>
        </div>
      </div>

      <p id="pesan-error" aria-live="polite">
        {error?.message}
      </p>

      <button type="submit" className="kontak_submit">
        Submit
      </button>
    </form>
  );
}
