import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import kite from "../../assets/images/kite.png";
import RightSection from "./RightSection";
import coin from "../../assets/images/coin.png";
import varsity from "../../assets/images/varsity.png";
import console from "../../assets/images/console.png";
import kiteConnect from "../../assets/images/kiteConnect.png";
import Universe from "./Universe";

function Product() {
  return (
    <div>
      <Hero />
      <LeftSection
        imageSrc={kite}
        title="Kite"
        description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, and an elegant UI. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        trydemo="#"
        learnmore="#"
      />

      <RightSection
        imageSrc={console}
        title="Console"
        description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        trydemo="#"
      />

      <LeftSection
        imageSrc={coin}
        title="Coin"
        description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        trydemo="Coin →"
        learnmore="#"
      />

      <RightSection
        imageSrc={kiteConnect}
        title="Kite Connect API"
        description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        trydemo="#"
      />

      <LeftSection
        imageSrc={varsity}
        title="Varsity"
        description="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        trydemo="#"
        learnmore="#"
      />

  <p className="text-center">
    Want to know more about our technology stack? Check out the Zerodha.tech blog.
  </p>

  <Universe />
    
    </div>
  );
}

export default Product;
