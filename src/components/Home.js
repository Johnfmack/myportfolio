import React from "react";
import image from "../images/denali_view.jpg";

const Home = () => {
  return (
    <main>
      <img
        src={image}
        alt="description"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-grey-100 font-bold cursive leading-none lg:leading-snug home-name">
          Hello, I'm John.
        </h1>
      </section>
      home
    </main>
  );
};

export default Home;
