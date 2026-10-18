import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero-banner">
      <div className="background-banner">
        <Image
          src="/img/background-banner.png"
          alt="Banner"
          fill
          sizes="100vw"
          preload
        />
        <h1>Welcome To Our Company Profile</h1>
        <h2>CITA RASA ASLI INDONESIA</h2>
      </div>
    </section>
  );
}
