import React from "react";
import Image from "next/image"; // Import Image from Next.js

// Import your local image
import banner from "@/assets/art/newbanner.png";

const Home = () => {
  return (
    <>
      <div style={{ height: "440px", width: "100%" }}>
        <div style={{ height: "440px", width: "100%", position: "relative" }}>
          <Image
            src={banner}
            alt="Placeholder"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <h1>hello</h1>
    </>
  );
};

export default Home;
