import Image from "next/image";
import Link from "next/link";

const photos = [
  { src: "/images/portfolio/01_santorni_hotel.jpg", alt: "Portfolio image 1" },
  { src: "/images/portfolio/02_australian_coast.jpg", alt: "Portfolio image 2" },
  { src: "/images/portfolio/02_resort_pool.jpg", alt: "Portfolio image 3" },
  { src: "/images/portfolio/03_ayia_napa_cliff.JPG", alt: "Portfolio image 4" },
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
  { src: "/images/portfolio/16_lifestyle_beach.JPG", alt: "Portfolio image 17" },
  { src: "/images/portfolio/17_beach_hike.jpg", alt: "Portfolio image 18" },
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
      <section
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "40px 24px 90px",
        }}
      >
        <header
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "18px",
            marginBottom: "60px",
          }}
        >
          <Link href="/" style={{ textDecoration: "none" }}>
            <Image
              src="/images/logo.png"
              alt="Nomadically Sav logo"
              width={320}
              height={100}
              style={{ objectFit: "contain" }}
              priority
            />
          </Link>

          <nav
            style={{
              display: "flex",
              gap: "28px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link href="/" style={navLink}>
              About
            </Link>
            <Link href="/portfolio" style={navLink}>
              Portfolio
            </Link>
            <Link href="/#contact" style={navLink}>
              Contact
            </Link>
          </nav>
        </header>

        <div
          style={{
            textAlign: "center",
            marginBottom: "42px",
          }}
        >
          <p
            style={{
              color: "#5b8f91",
              fontSize: "0.82rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              margin: "0 0 12px 0",
            }}
          >
            Portfolio
          </p>

          <h1
            style={{
              margin: "0 0 16px 0",
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              fontWeight: 500,
            }}
          >
            Selected Work
          </h1>

          <p
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              color: "#5b6f77",
              lineHeight: 1.8,
            }}
          >
            A collection of travel, hospitality, and destination imagery with a
            focus on natural light, atmosphere, and visual storytelling.
          </p>
        </div>

        <div
          style={{
            columnCount: 3,
            columnGap: "20px",
          }}
        >
          {photos.map((photo, index) => (
            <div
              key={index}
              style={{
                breakInside: "avoid",
                marginBottom: "20px",
                borderRadius: "22px",
                overflow: "hidden",
                backgroundColor: "#eef4f3",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: index === 1 || index === 7 ? "3 / 2" : "4 / 5",
                }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

const navLink = {
  textDecoration: "none",
  color: "#48636d",
  letterSpacing: "0.08em",
  textTransform: "uppercase" as const,
  fontSize: "0.8rem",
};