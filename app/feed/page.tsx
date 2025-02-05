"use client";

import YouTube from "react-youtube";
import "./page.scss";
import { useRouter } from "next/navigation";
import videos from "../../data/videos.json";
import { useEffect, useState } from "react";
//import Loader from "@/components/Loader/Loader"; TODO: Enable Loading State
import Title from "@/components/Title/Title";

interface Item {
  name: string;
  description: string;
  "yt-id": string;
}

const Feed = () => {
  const [playbackItem, setPlaybackItem] = useState<Item>();
  //const [isLoading, setIsLoading] = useState<boolean>(); TODO: Enable Loading State

  const router = useRouter();

  const videoOptions = {
    height: "600",
    width: "1000",
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
    router.push("/");
  };

  const handleNextClick = () => {
    getRandomItem(videos);
  };

  function getRandomItem(items: Item[]) {
    setPlaybackItem(items[Math.floor(Math.random() * items.length)]);
  }

  useEffect(() => {
    getRandomItem(videos);
  }, []);

  return (
    <div className="passe__feed">
      <div className="passe__feed__logo" onClick={handleClick}>
        <Title delay={false} />
      </div>
      <div className="passe__feed__subtitle">
        <p>A Journey to the Past.</p>
      </div>
      <div className="passe__feed__media__container">
        <div className="passe__feed__media">
          <YouTube
            videoId={playbackItem?.["yt-id"]}
            opts={videoOptions}
            id="video"
          />
        </div>
        <div className="passe__feed__media">
          <h3>{playbackItem?.name}</h3>
          <p>{playbackItem?.description}</p>
          <div className="passe__feed__button__container">
            <div className="passe__feed__button" onClick={handleNextClick}>
              Next Memory
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
