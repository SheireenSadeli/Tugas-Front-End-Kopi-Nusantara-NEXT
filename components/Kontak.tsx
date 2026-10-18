import KontakForm from "./KontakForm";

export default function Kontak() {
  return (
    <section id="kontak">
      <div className="kontak-img">
        <KontakForm />
      </div>

      <div className="kontak-info">
        <h2>Hubungi Kami</h2>
        <h4>Untuk setiap pertanyaan, pemesanan, maupun kerja sama.</h4>
        <p><strong>WhatsApp:</strong><a href="#"> 0812-3456-7890</a></p>
        <p><strong>Email:</strong><a href="#"> kopi_nusantara@gmail.com</a></p>
        <p><strong>Alamat:</strong><a href="#"> Jl. Letjen S. Parman, Jakarta Barat</a></p>
      </div>
    </section>
  );
}
