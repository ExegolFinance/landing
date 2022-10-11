import React from "react";

const IndexPage = () => {
  return (
    <div className="w-full h-screen bg-landing img-size">
      <nav className="flex fixed left-0 mt-2 pr-4 w-full">
        <div className="flex text-white space-x-4 text-xl ml-auto">
          <a href="https://docs.exegol.fi/">DOCS</a>
          <a href="https://twitter.com/ExegolFinance/">TWITTER</a>
          <a href="https://discord.gg/pm55DyZrzz">DISCORD</a>
        </div>
      </nav>
      <main className="flex flex-col fixed top-1/7 lg:top-1/3 lg:left-1/7 glass py-4 px-4 lg:px-8 ml-2 lg:ml-0">
        <span className="text-4xl lg:text-8xl text-white font-logo">
          Exegol Finance
        </span>
        <span className="ml-1 lg:ml-2 mt-1 text-2xl lg:text-4xl text-egg-white">
          A decentralised hedge fund
        </span>

        <div className="ml-1 lg:ml-2 mt-4 text-2xl lg:text-4xl text-egg-white hover:text-white transition underline cursor-pointer w-fit">
          Go to app
        </div>
      </main>

      <span className="fixed bottom-0 right-0 text-white mx-4">
        Photo by{" "}
        <a href="https://unsplash.com/@pawel_czerwinski?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Pawel Czerwinski
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/s/photos/abstract?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Unsplash
        </a>
      </span>
    </div>
  );
};

export default IndexPage;

export function Head() {
  return (
    <>
      <title>Exegol Finance</title>
      <meta name="description" content="A decentralised hedge fund." />
    </>
  );
}
