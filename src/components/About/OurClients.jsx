import React from "react";
import SectionHeader from "../Home/HeaderComponent";

const logosPerRow = [
  // Row 1
  [
    { name: "aramsei", src: "/Home ScrollAnimation/1/aramsei.png" },
    { name: "asianpaint", src: "/Home ScrollAnimation/1/asianpaint.png" },
    { name: "billing-wale", src: "/Home ScrollAnimation/1/billing wale.png" },
    { name: "chaabi", src: "/Home ScrollAnimation/1/chaabi.png" },
    { name: "chandrasekars-solar", src: "/Home ScrollAnimation/1/Chandrasekars solar energy_Cropp.png" },
    { name: "ednue-logo", src: "/Home ScrollAnimation/1/ednue-logo.png" },
    { name: "edunnx", src: "/Home ScrollAnimation/1/edunnx.png" },
    { name: "eesha", src: "/Home ScrollAnimation/1/eesha.png" },
  ],
  // Row 2
  [
    { name: "fit-for-tooth", src: "/Home ScrollAnimation/2/Fit_For_Tooth_Logo.png" },
    { name: "health-decoded", src: "/Home ScrollAnimation/2/HealthDecodedLogo.png" },
    { name: "joshimasala", src: "/Home ScrollAnimation/2/joshimasala.png" },
    { name: "make-your-toon", src: "/Home ScrollAnimation/2/make your toon.png" },
    { name: "meetcupid", src: "/Home ScrollAnimation/2/Meetcupid.png" },
    { name: "meg-sun-organics", src: "/Home ScrollAnimation/2/Meg-_-Sun-Organics.png" },
    { name: "mrf", src: "/Home ScrollAnimation/2/mrf.png" },
    { name: "nmc-logo1", src: "/Home ScrollAnimation/2/nmc_logo1.png" },
  ],
    // Row 3
  [
    { name: "oilo", src: "/Home ScrollAnimation/3/oilo.png" },
    { name: "padma", src: "/Home ScrollAnimation/3/padma.png" },
    { name: "paradime", src: "/Home ScrollAnimation/3/paradime.png" },
    { name: "proodle", src: "/Home ScrollAnimation/3/proodle.png" },
    { name: "saicatering", src: "/Home ScrollAnimation/3/saicatering.png" },
    { name: "skilledu", src: "/Home ScrollAnimation/3/skilledu.png" },
    { name: "socratech-logo", src: "/Home ScrollAnimation/3/Socratech logo.png" },
  ],
  // Row 4
  [
    { name: "authentic", src: "/Home ScrollAnimation/4/authentic.png" },
    { name: "opulence-forever", src: "/Home ScrollAnimation/4/opulence_forever.png" },
    { name: "tatasky", src: "/Home ScrollAnimation/4/tatasky.png" },
    { name: "tofutrips", src: "/Home ScrollAnimation/4/tofutrips.png" },
    { name: "tradegig", src: "/Home ScrollAnimation/4/TradeGig.png" },
    { name: "vss", src: "/Home ScrollAnimation/4/vss.png" },
    { name: "zollabo", src: "/Home ScrollAnimation/4/Zollabo-.png" },
  ],
];

export default function ScrollingTechStackMultipleRows() {
  return (
    <div className="w-full overflow-hidden bg-transparent my-8 md:mb-12 md:mt-16">
      <SectionHeader
        subTitle="Our clients"
        titleWords={["Trusted", "by", "Leading", "Brands"]}
        description=""
      />

      <div className="space-y-4">
        {logosPerRow.map((row, rowIndex) => {
          const logos = [...row, ...row, ...row, ...row, ...row];
          const animationClass =
            rowIndex % 2 !== 0 ? "animate-marquee-reverse" : "animate-marquee"; // first row reverse, alternate

          return (
            <div
              key={rowIndex}
              className={`flex whitespace-nowrap ${animationClass}`}
            >
              {logos.map((logo, i) => (
                <div
                  key={`${rowIndex}-${i}`}
                  className="flex items-center py-0 min-w-max mx-2"
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    title={logo.name}
                    className="w-40 mx-6 p-1"
                  />
                </div>
              ))}
            </div>
          );
        })}
      </div>

      {/* Animation styles */}
      <style>{`
        .animate-marquee {
          display: inline-flex;
          animation: marquee 50s linear infinite;
        }
        .animate-marquee-reverse {
          display: inline-flex;
          animation: marquee-reverse 50s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
