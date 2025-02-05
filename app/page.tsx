"use client";

import { useRouter } from "next/navigation";
import "./page.scss";
import Title from "@/components/Title/Title";

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
          <div className="passe__landing-page__title">
            {/* <Image width={150} height={60} src={logo} alt="Passe Logo" /> */}
            <Title delay={true}/>
          </div>
          <div className="focus-in-expand passe__landing-page__subtitle">
            <p>A Journey to the Past.</p>
          </div>
          <div className="passe__landing-page__button__container">
          <div className="passe__landing-page__button fade-in-bottom" onClick={handleClick}>
            Start
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
