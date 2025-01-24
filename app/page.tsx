"use client";

import Image from "next/image";
import logo from "./assets/passe-logo.png";
import { useRouter } from "next/navigation";
import "./page.scss";

const Landing = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/feed");
  };
  return (
    <div className="passe__landing-page">
      <div className="passe__landing-page__content slide-in-left">
        <div className="passe__landing-page__header"></div>
        <div className="passe__landing-page__container">
          <div className="passe__landing-page__logo">
            <Image width={150} height={60} src={logo} alt="Passe Logo" />
          </div>
          <div className="passe__landing-page__subtitle">
            <p>A Journey to the Past.</p>
          </div>
          <div className="passe__landing-page__button__container">
          <div className="passe__landing-page__button" onClick={handleClick}>
            Start
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
