import { Poiret_One } from "next/font/google";
import "./title.scss";

type TitlePropsTypes = {
  delay: boolean;
};

const PoiretOne = Poiret_One({
  subsets: ["latin"],
  weight: "400",
});

const Title = ({ delay }: TitlePropsTypes) => {
  return (
    <div
      className={`${PoiretOne.className} passe-main-title ${
        delay ? "focus-in-expand" : "focus-in-expand-no-delay"
      }`}
    >
      <h1>Passé</h1>
    </div>
  );
};

export default Title;
