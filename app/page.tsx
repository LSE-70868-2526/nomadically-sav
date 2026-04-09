"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";

export default function Home() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

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
    console.log("API response:", data);

    if (!res.ok) {
      throw new Error(data.error || "Failed to send");
    }

    setStatus("success");
    form.reset();
  } catch (error) {
    console.error("Form submit error:", error);
    setStatus("error");
  }
}

  return (
    <main
      style={{
        backgroundColor: "#fcfdfc",
        color: "#18313a",
        minHeight: "100vh",
      }}
    >
      <section
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "32px 24px 90px",
        }}
      >
        <header
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            marginBottom: "42px",
          }}
        >
          <Link href="/" style={{ textDecoration: "none" }}>
            <Image
              src="/images/logo.png"
              alt="Nomadically Sav logo"
              width={480}
              height={150}
              style={{ objectFit: "contain" }}
              priority
            />
          </Link>

          <nav
            style={{
              display: "flex",
              gap: "22px",
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
            <a href="#contact" style={navLink}>
              Contact
            </a>
          </nav>
        </header>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "1.02fr 0.98fr",
            gap: "34px",
            alignItems: "center",
          }}
        >
          <div>
            <p style={eyebrow}>Travel Photographer • Visual Storytelling</p>

            <h1
              style={{
                fontSize: "clamp(2.6rem, 6vw, 5.1rem)",
                lineHeight: 1,
                margin: "0 0 20px 0",
                fontWeight: 600,
              }}
            >
              Visual storytelling
              <br />
              for hotels and
              <br />
              travel brands.
            </h1>

            <p
              style={{
                maxWidth: "560px",
                fontSize: "1.03rem",
                lineHeight: 1.9,
                color: "#5b6f77",
                marginBottom: "28px",
              }}
            >
              I’m Savannah, a travel photographer creating clean, thoughtful imagery
              for boutique hotels, destinations, and travel-focused brands. My work
              blends natural light, place-driven storytelling, and a minimalist coastal aesthetic.
            </p>

            <div
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
              }}
            >
              <Link href="/portfolio" style={primaryButton}>
                View Portfolio
              </Link>
              <a href="#contact" style={secondaryButton}>
                Get in Touch
              </a>
            </div>
          </div>

          <div
            style={{
              position: "relative",
              width: "100%",
              height: "720px",
              borderRadius: "6px",
              overflow: "hidden",
            }}
          >
            <Image
              src="/Users/savannahdiggett/nomadically-sav/public/images/sailboat.jpg"
              alt="Savannah travel photography"
              fill
              priority
              style={{ objectFit: "cover", objectPosition: "center center" }}
            />
          </div>
        </section>
      </section>

      <section
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "0 24px 90px",
        }}
      >
        <div
          style={{
            borderTop: "1px solid #dbe7e5",
            paddingTop: "55px",
            display: "grid",
            gridTemplateColumns: "0.9fr 1.1fr",
            gap: "40px",
          }}
        >
          <p style={sectionLabel}>About</p>

          <div>
            <p
              style={{
                margin: "0 0 18px 0",
                fontSize: "1.35rem",
                lineHeight: 1.75,
                color: "#1f3a43",
                fontWeight: 400,
              }}
            >
              My work focuses on hotels, destinations, and travel experiences that want
              imagery to feel elevated, calm, and genuine.
            </p>

            <p
              style={{
                margin: 0,
                color: "#5b6f77",
                lineHeight: 1.95,
                fontSize: "1rem",
                maxWidth: "680px",
              }}
            >
              I’m drawn to coastal settings, boutique stays, thoughtful interiors, and the
              small visual details that make a place feel memorable. My goal is to create content
              that not only looks beautiful, but also helps brands connect with the kind of traveler
              they want to reach.
            </p>
          </div>
        </div>
      </section>

      <section
        id="contact"
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "0 24px 110px",
        }}
      >
        <div
          style={{
            borderTop: "1px solid #dbe7e5",
            paddingTop: "55px",
            display: "grid",
            gridTemplateColumns: "0.9fr 1.1fr",
            gap: "40px",
          }}
        >
          <p style={sectionLabel}>Contact</p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "40px",
              alignItems: "start",
            }}
          >
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >
              <input name="name" type="text" placeholder="Name" required style={inputStyle} />
              <input name="email" type="email" placeholder="Email" required style={inputStyle} />
              <textarea
                name="message"
                placeholder="Ask me anything!"
                rows={6}
                required
                style={inputStyle}
              />

              <button type="submit" style={primaryButton} disabled={status === "sending"}>
                {status === "sending" ? "Sending..." : "Send Inquiry"}
              </button>

              {status === "success" && (
                <p style={{ margin: 0, color: "#2f6f76", fontSize: "0.92rem" }}>
                  Your message was sent successfully.
                </p>
              )}

              {status === "error" && (
                <p style={{ margin: 0, color: "#9b3d3d", fontSize: "0.92rem" }}>
                  Something went wrong. Please try again.
                </p>
              )}
            </form>

            <div>
              <h2
                style={{
                  margin: "0 0 14px 0",
                  fontSize: "2rem",
                  fontWeight: 600,
                }}
              >
                Let’s work together
              </h2>

              <p
                style={{
                  color: "#5b6f77",
                  lineHeight: 1.9,
                  marginBottom: "20px",
                  maxWidth: "420px",
                }}
              >
                Available for boutique hotel collaborations, destination campaigns,
                and travel content partnerships.
              </p>

              <a href="mailto:sav@nomadicallysav.com" style={emailLink}>
                sav@nomadicallysav.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const eyebrow = {
  margin: "0 0 18px 0",
  color: "#5b8f91",
  fontSize: "0.82rem",
  letterSpacing: "0.16em",
  textTransform: "uppercase" as const,
  fontWeight: 600,
};

const sectionLabel = {
  color: "#5b8f91",
  fontSize: "0.82rem",
  letterSpacing: "0.16em",
  textTransform: "uppercase" as const,
  margin: 0,
  fontWeight: 600,
};

const navLink = {
  textDecoration: "none",
  color: "#48636d",
  letterSpacing: "0.12em",
  textTransform: "uppercase" as const,
  fontSize: "0.78rem",
  fontWeight: 600,
};

const primaryButton = {
  display: "inline-block",
  textDecoration: "none",
  color: "#ffffff",
  backgroundColor: "#2f6f76",
  padding: "14px 22px",
  borderRadius: "0px",
  border: "1px solid #2f6f76",
  fontWeight: 600,
  letterSpacing: "0.12em",
  textTransform: "uppercase" as const,
  fontSize: "0.76rem",
  cursor: "pointer",
};

const secondaryButton = {
  display: "inline-block",
  textDecoration: "none",
  color: "#2f6f76",
  backgroundColor: "transparent",
  border: "1px solid #b9d3d0",
  padding: "14px 22px",
  borderRadius: "0px",
  fontWeight: 600,
  letterSpacing: "0.12em",
  textTransform: "uppercase" as const,
  fontSize: "0.76rem",
};

const inputStyle = {
  padding: "14px 16px",
  border: "1px solid #dbe7e5",
  borderRadius: "0px",
  fontSize: "0.95rem",
  outline: "none",
  fontFamily: "inherit",
  color: "#18313a",
  backgroundColor: "#ffffff",
};

const emailLink = {
  textDecoration: "none",
  color: "#2f6f76",
  fontWeight: 600,
  fontSize: "1rem",
};