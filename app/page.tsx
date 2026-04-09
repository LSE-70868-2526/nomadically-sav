"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useRef, useState, CSSProperties } from "react";

const portfolioPhotos = [
  { src: "/images/portfolio/01_santorni_hotel.jpg", alt: "Santorini hotel" },
  { src: "/images/portfolio/02_australian_coast.jpg", alt: "Australian coast" },
  { src: "/images/portfolio/02_resort_pool.jpg", alt: "Resort pool" },
  { src: "/images/portfolio/ayia.jpg", alt: "Ayia Napa cliff" },
  { src: "/images/portfolio/04_resort_bedroom.jpg", alt: "Resort bedroom" },
  { src: "/images/portfolio/05_airbnb_bathroom.jpg", alt: "Airbnb bathroom" },
  { src: "/images/portfolio/06_dining_room.jpg", alt: "Dining room" },
  { src: "/images/portfolio/07_nusa_penida.jpg", alt: "Nusa Penida" },
  { src: "/images/portfolio/08_red_beach_restaurant.jpg", alt: "Red beach restaurant" },
  { src: "/images/portfolio/09_red_beach_rocks.jpg", alt: "Red beach rocks" },
  { src: "/images/portfolio/10_bali_resort_pool.jpg", alt: "Bali resort pool" },
  { src: "/images/portfolio/11_beach_chairs.jpg", alt: "Beach chairs" },
  { src: "/images/portfolio/12_hotel_reflection_pool.jpg", alt: "Hotel reflection pool" },
  { src: "/images/portfolio/13_airbnb_riverside.jpg", alt: "Airbnb riverside" },
  { src: "/images/portfolio/14_hotel_breakfast.jpg", alt: "Hotel breakfast" },
  { src: "/images/portfolio/15_lisbon_pink_street.jpg", alt: "Lisbon pink street" },
  { src: "/images/portfolio/16_lifestyle_beach.jpg", alt: "Lifestyle beach" },
  { src: "/images/portfolio/17_lifeguard.jpg", alt: "Lifeguard" },
  { src: "/images/portfolio/18_whitsundays.jpg", alt: "Whitsundays" },
];

const reels = [
  {
    thumbnail: "/images/reels/reel1.png",
    href: "https://www.instagram.com/nomadicallysav/reel/DW37MKRiE6s/",
    alt: "Instagram reel 1",
  },
  {
    thumbnail: "/images/reels/reel2.png",
    href: "https://www.instagram.com/reel/DNUnACDz46c/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "Instagram reel 2",
  },
  {
    thumbnail: "/images/reels/reel3.png",
    href: "https://www.instagram.com/reel/C4TZ2I0rGnv/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "Instagram reel 3",
  },
  {
    thumbnail: "/images/reels/reel4.png",
    href: "https://www.instagram.com/p/DW34p0KiGAO/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "Instagram reel 4",
  },
  {
    thumbnail: "/images/reels/reel5.png",
    href: "https://www.instagram.com/p/DW348FkiEFX/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "Instagram reel 5",
  },
];

export default function Home() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const introRef = useRef<HTMLElement | null>(null);

  function scrollToIntro() {
    introRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

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
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px 24px 56px",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "980px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src="/images/logo.png"
            alt="Nomadically Sav"
            width={1100}
            height={260}
            priority
            style={{
              width: "min(92vw, 760px)",
              height: "auto",
              display: "block",
              objectFit: "contain",
            }}
          />
        </div>

        <button
          onClick={scrollToIntro}
          aria-label="Scroll down"
          style={{
            position: "absolute",
            bottom: "42px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
            color: "#18313a",
            padding: 0,
          }}
        >
          <span
            style={{
              fontSize: "12px",
              letterSpacing: "0.22em",
              opacity: 0.7,
            }}
          >
            ENTER
          </span>

          <span
            style={{
              display: "inline-block",
              fontSize: "42px",
              lineHeight: 1,
              animation: "floatDown 1.8s ease-in-out infinite",
            }}
          >
            ↓
          </span>
        </button>
      </section>

      <section
        ref={introRef}
        style={{
          padding: "56px 70px 40px",
          borderTop: "1px solid #d7dfdd",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
            flexWrap: "wrap",
          }}
        >
          <Link href="/" style={{ textDecoration: "none", display: "inline-block" }}>
            <Image
              src="/images/logo.png"
              alt="Nomadically Sav"
              width={500}
              height={95}
              style={{
                width: "auto",
                height: "58px",
                display: "block",
                objectFit: "contain",
              }}
            />
          </Link>

          <nav
            style={{
              display: "flex",
              gap: "24px",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <a href="#about" style={navLinkStyle}>
              ABOUT
            </a>
            <a href="#portfolio-preview" style={navLinkStyle}>
              PORTFOLIO
            </a>
            <a href="#reels" style={navLinkStyle}>
              REELS
            </a>
            <a href="#contact" style={navLinkStyle}>
              CONTACT
            </a>
            <Link
              href="/portfolio"
              style={{
                ...navLinkStyle,
                border: "1px solid #18313a",
                padding: "12px 18px",
              }}
            >
              VIEW FULL PORTFOLIO
            </Link>
          </nav>
        </div>
      </section>

      <section
        style={{
          padding: "30px 70px 90px",
        }}
      >
        <div
          style={{
            maxWidth: "1180px",
          }}
        >
          <p
            style={{
              fontSize: "14px",
              letterSpacing: "0.18em",
              color: "#5e8b90",
              marginBottom: "22px",
              fontWeight: 700,
            }}
          >
            TRAVEL PHOTOGRAPHY + CONTENT CREATION
          </p>

          <h1
            style={{
              fontSize: "clamp(28px, 5vw, 56px)",
              lineHeight: 1.06,
              fontWeight: 400,
              letterSpacing: "-0.03em",
              maxWidth: "980px",
              margin: "0 0 10px 0",
            }}
          >
            Hi, I’m Savannah.
          </h1>

          <p
            style={{
              fontSize: "12px",
              lineHeight: 1.4,
              fontStyle: "italic",
              letterSpacing: "0.04em",
              margin: "0 0 22px 2px",
              opacity: 0.75,
            }}
          >
            you can call me Sav
          </p>

          <p
            style={{
              fontSize: "22px",
              lineHeight: 1.7,
              color: "#667b82",
              maxWidth: "760px",
              margin: 0,
            }}
          >
            I’ve spent the past five years traveling across 5 continents and 30+ countries,
            creating imagery that makes places feel aspirational, immersive, and real.
          </p>
        </div>
      </section>

      <section
        id="portfolio-preview"
        style={{
          padding: "0 70px 100px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: "18px",
          }}
        >
          {portfolioPhotos.slice(0, 4).map((photo, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "4 / 5",
                overflow: "hidden",
                backgroundColor: "#e9efed",
              }}
            >
              <Image src={photo.src} alt={photo.alt} fill style={{ objectFit: "cover" }} />
            </div>
          ))}
        </div>
      </section>

      <section
        id="about"
        style={{
          padding: "95px 70px 90px",
          borderTop: "1px solid #d7dfdd",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(300px, 420px) minmax(420px, 1fr)",
            gap: "64px",
            alignItems: "start",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "14px",
                letterSpacing: "0.18em",
                color: "#5e8b90",
                marginBottom: "28px",
                fontWeight: 700,
              }}
            >
              ABOUT
            </p>

            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "4 / 5",
                overflow: "hidden",
                backgroundColor: "#e8efed",
              }}
            >
              <Image
                src="/images/about-portrait.jpg"
                alt="Portrait of Savannah"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          <div style={{ maxWidth: "760px" }}>
            <h2
              style={{
                fontSize: "clamp(34px, 4vw, 56px)",
                lineHeight: 1.18,
                fontWeight: 400,
                margin: "42px 0 28px 0",
                color: "#18313a",
              }}
            >
              My content focuses on hotels, destinations, and genuine travel experiences
            </h2>

            <p
              style={{
                fontSize: "20px",
                lineHeight: 1.9,
                color: "#667b82",
                margin: 0,
              }}
            >
              I have 5 years of content creation experience in 30 countries. I have collaborated
              with large organizations such as Worldpackers and smaller hotels such as Harus Damai
              in Palua Nias, Indonesia. Most of my content is focused on coastal settings, boutique
              stays, thoughtful interiors, and the people that make a place feel like home, despite
              being so far from it. My goal is to create content that not only looks beautiful, but
              also helps brands connect with the kind of traveler they want to reach.
            </p>
          </div>
        </div>
      </section>

      <section
        id="contact"
        style={{
          padding: "90px 70px 100px",
          borderTop: "1px solid #d7dfdd",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "180px minmax(520px, 1fr) minmax(260px, 360px)",
            gap: "48px",
            alignItems: "start",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "14px",
                letterSpacing: "0.18em",
                color: "#5e8b90",
                fontWeight: 700,
                margin: 0,
              }}
            >
              CONTACT
            </p>
          </div>

          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "18px",
                marginBottom: "18px",
              }}
            >
              <input name="name" type="text" placeholder="Name" required style={inputStyle} />
              <input name="email" type="email" placeholder="Email" required style={inputStyle} />
            </div>

            <textarea
              name="message"
              placeholder="Ask me anything!"
              required
              style={{
                ...inputStyle,
                minHeight: "220px",
                resize: "vertical",
                marginBottom: "18px",
              }}
            />

            <button
              type="submit"
              disabled={status === "sending"}
              style={{
                backgroundColor: "#337c82",
                color: "#ffffff",
                border: "none",
                padding: "20px 28px",
                fontSize: "14px",
                letterSpacing: "0.16em",
                cursor: "pointer",
                width: "100%",
                fontWeight: 700,
              }}
            >
              {status === "sending" ? "SENDING..." : "SEND INQUIRY"}
            </button>

            {status === "success" && (
              <p
                style={{
                  marginTop: "16px",
                  color: "#337c82",
                  fontSize: "15px",
                  letterSpacing: "0.03em",
                }}
              >
                Your message was sent to Savannah!
              </p>
            )}

            {status === "error" && (
              <p
                style={{
                  marginTop: "16px",
                  color: "#a04d4d",
                  fontSize: "15px",
                  letterSpacing: "0.03em",
                }}
              >
                Something went wrong. Please try again.
              </p>
            )}
          </form>

          <div style={{ paddingTop: "8px" }}>
            <h3
              style={{
                fontSize: "clamp(34px, 4vw, 58px)",
                lineHeight: 1.08,
                margin: "0 0 24px 0",
                fontWeight: 600,
              }}
            >
              Let’s work together!
            </h3>

            <p
              style={{
                fontSize: "18px",
                lineHeight: 1.9,
                color: "#667b82",
                margin: "0 0 28px 0",
              }}
            >
              Available for collaborations, destination campaigns, and travel content
              partnerships!
            </p>

            <a
              href="mailto:sav@nomadicallysav.com"
              style={{
                color: "#337c82",
                textDecoration: "none",
                fontSize: "18px",
                fontWeight: 700,
              }}
            >
              sav@nomadicallysav.com
            </a>
          </div>
        </div>
      </section>

      <section
        id="reels"
        style={{
          padding: "0 70px 100px",
        }}
      >
        <div
          style={{
            border: "1px solid #d9d9d9",
            padding: "18px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
              gap: "0",
            }}
          >
            {reels.map((reel, index) => (
              <a
                key={index}
                href={reel.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  position: "relative",
                  display: "block",
                  aspectRatio: "9 / 16",
                  overflow: "hidden",
                  backgroundColor: "#e8efed",
                  textDecoration: "none",
                }}
              >
                <Image src={reel.thumbnail} alt={reel.alt} fill style={{ objectFit: "cover" }} />

                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.08), rgba(0,0,0,0.03))",
                  }}
                >
                  <div
                    style={{
                      width: "78px",
                      height: "78px",
                      borderRadius: "999px",
                      backgroundColor: "rgba(255,255,255,0.88)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
                    }}
                  >
                    <div
                      style={{
                        width: 0,
                        height: 0,
                        borderTop: "15px solid transparent",
                        borderBottom: "15px solid transparent",
                        borderLeft: "22px solid #18313a",
                        marginLeft: "6px",
                      }}
                    />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "0 70px 90px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr 1fr",
            gap: "0",
            borderTop: "1px solid #d7dfdd",
            borderBottom: "1px solid #d7dfdd",
          }}
        >
          <div
            style={{
              padding: "38px 28px",
              borderRight: "1px solid #d7dfdd",
            }}
          >
            <p
              style={{
                fontSize: "13px",
                letterSpacing: "0.18em",
                color: "#9aa8ac",
                marginBottom: "18px",
                fontWeight: 700,
              }}
            >
              EMAIL
            </p>
            <a
              href="mailto:sav@nomadicallysav.com"
              style={{
                color: "#18313a",
                textDecoration: "none",
                fontSize: "28px",
                lineHeight: 1.4,
              }}
            >
              sav@nomadicallysav.com
            </a>
          </div>

          <div
            style={{
              padding: "38px 28px",
              borderRight: "1px solid #d7dfdd",
            }}
          >
            <p
              style={{
                fontSize: "13px",
                letterSpacing: "0.18em",
                color: "#9aa8ac",
                marginBottom: "18px",
                fontWeight: 700,
              }}
            >
              INSTAGRAM
            </p>
            <a
              href="https://www.instagram.com/nomadicallysav/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#18313a",
                textDecoration: "none",
                fontSize: "28px",
                lineHeight: 1.4,
              }}
            >
              @nomadicallysav
            </a>
          </div>

          <div
            style={{
              padding: "38px 28px",
            }}
          >
            <p
              style={{
                fontSize: "13px",
                letterSpacing: "0.18em",
                color: "#9aa8ac",
                marginBottom: "18px",
                fontWeight: 700,
              }}
            >
              INQUIRIES
            </p>
            <p
              style={{
                color: "#667b82",
                fontSize: "18px",
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              Boutique hotel stays, destination campaigns, brand partnerships, and travel content
              creation.
            </p>
          </div>
        </div>
      </section>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        @keyframes floatDown {
          0%,
          100% {
            transform: translateY(0);
            opacity: 0.8;
          }
          50% {
            transform: translateY(8px);
            opacity: 1;
          }
        }
      `}</style>
    </main>
  );
}

const navLinkStyle: CSSProperties = {
  textDecoration: "none",
  color: "#18313a",
  letterSpacing: "0.1em",
  fontSize: "13px",
};

const inputStyle: CSSProperties = {
  width: "100%",
  padding: "22px 20px",
  fontSize: "16px",
  border: "1px solid #d6dddd",
  backgroundColor: "#fcfdfc",
  color: "#18313a",
  outline: "none",
  boxSizing: "border-box",
};