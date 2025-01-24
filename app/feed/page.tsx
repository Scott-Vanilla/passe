"use client"

import logo from "../assets/passe-logo.png";
import YouTube from "react-youtube";
import Image from "next/image";
import './page.scss'
import { useRouter } from "next/navigation";

const Feed = () => {
    const router = useRouter();
  const videoOptions = {
    height: '600',
    width: '1000',
    playerVars: {
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0,
      mute: 0,
      loop: 1,
    },
  };

  const handleClick = () => {
    router.push("/")
  }

  return (
    <div className="passe__feed">
      <div className="passe__feed__logo" onClick={handleClick}>
        <Image width={150} height={60} src={logo} alt="Passe Logo" />
      </div>
      <div className="passe__feed__subtitle">
            <p>A Journey to the Past.</p>
          </div>
      <div className="passe__feed__media__container">
      <div className="passe__feed__media">
      <YouTube videoId="Q-Q3gd6S1as" opts={videoOptions} id="video" />
      </div>
      </div>
    </div>
  );
};

export default Feed;
