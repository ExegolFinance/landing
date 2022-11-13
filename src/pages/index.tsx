import React from "react";

const IndexPage = () => {
  return (
    <div className="w-full h-screen bg-white img-size">
      <nav className="flex fixed left-0 mt-2 pr-4 w-full">
        <div className="flex text-black space-x-4 text-xl ml-auto">
          <a href="https://docs.exegol.fi/">DOCS</a>
          <a href="https://twitter.com/ExegolFinance/">TWITTER</a>
          <a href="https://discord.gg/pm55DyZrzz">DISCORD</a>
        </div>
      </nav>
      <main className="flex flex-col fixed top-1/7 lg:top-1/3 lg:left-1/7 glass py-4 px-4 lg:px-8 ml-2 lg:ml-0">
        <span className="text-4xl lg:text-8xl text-black font-logo">
          Exegol Finance
        </span>
        <span className="ml-1 lg:ml-2 mt-1 text-2xl lg:text-4xl text-black">
          A decentralised hedge fund
        </span>

        <a href="https://app.exegol.fi/">
          <div className="ml-1 lg:ml-2 mt-4 text-2xl lg:text-4xl text-black transition underline cursor-pointer w-fit">
            Go to app
          </div>
        </a>
      </main>
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
