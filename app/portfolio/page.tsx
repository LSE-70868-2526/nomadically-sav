import Image from "next/image";
import Link from "next/link";

const photos = [
  { src: "/images/portfolio/01_santorni_hotel.jpg", alt: "Portfolio image 1" },
  { src: "/images/portfolio/02_australian_coast.jpg", alt: "Portfolio image 2" },
  { src: "/images/portfolio/02_resort_pool.jpg", alt: "Portfolio image 3" },
  { src: "/images/portfolio/ayia.jpg", alt: "Portfolio image 4" },
  { src: "/images/portfolio/04_resort_bedroom.jpg", alt: "Portfolio image 5" },
  { src: "/images/portfolio/05_airbnb_bathroom.jpg", alt: "Portfolio image 6" },
  { src: "/images/portfolio/06_dining_room.jpg", alt: "Portfolio image 7" },
  { src: "/images/portfolio/07_nusa_penida.jpg", alt: "Portfolio image 8" },
  { src: "/images/portfolio/08_red_beach_restaurant.jpg", alt: "Portfolio image 9" },
  { src: "/images/portfolio/09_red_beach_rocks.jpg", alt: "Portfolio image 10" },
  { src: "/images/portfolio/10_bali_resort_pool.jpg", alt: "Portfolio image 11" },
  { src: "/images/portfolio/11_beach_chairs.jpg", alt: "Portfolio image 12" },
  { src: "/images/portfolio/12_hotel_reflection_pool.jpg", alt: "Portfolio image 13" },
  { src: "/images/portfolio/13_airbnb_riverside.jpg", alt: "Portfolio image 14" },
  { src: "/images/portfolio/14_hotel_breakfast.jpg", alt: "Portfolio image 15" },
  { src: "/images/portfolio/15_lisbon_pink_street.jpg", alt: "Portfolio image 16" },
  { src: "/images/portfolio/17_lifeguard.jpg", alt: "Portfolio image 18" },
  { src: "/images/portfolio/18_whitsundays.jpg", alt: "Portfolio image 19" },
];

export default function PortfolioPage() {
  return (
    <main
      style={{
        backgroundColor: "#fcfdfc",
        color: "#18313a",
        fontFamily: "Arial, Helvetica, sans-serif",
        minHeight: "100vh",
      }}
    >
      <section style={{ padding: "60px 24px" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div style={{ marginBottom: "32px" }}>
            <Link
              href="/"
              style={{
                textDecoration: "none",
                color: "#18313a",
                fontSize: "14px",
                letterSpacing: "0.08em",
              }}
            >
              ← Back Home
            </Link>
          </div>

          <h1
            style={{
              fontSize: "42px",
              fontWeight: 400,
              marginBottom: "12px",
            }}
          >
            Portfolio
          </h1>

          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.7,
              maxWidth: "700px",
              marginBottom: "40px",
            }}
          >
            A collection of travel, hospitality, and lifestyle imagery.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            {photos.map((photo, index) => (
              <div
                key={index}
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "4 / 5",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}