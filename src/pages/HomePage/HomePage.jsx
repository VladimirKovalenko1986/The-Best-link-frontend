import { useSelector } from "react-redux";
import { selectLoadingLogout } from "../../redux/auth/selector.js";
import InfinitySpinLoading from "../../components/InfinitySpinLoading/InfinitySpinLoading.jsx";
import TitleLink from "../../components/TitleLink/TitleLink.jsx";
import css from "./HomePage.module.css";

export default function HomePage() {
  const loadingLogout = useSelector(selectLoadingLogout);
  return (
    <div>
      {loadingLogout && <InfinitySpinLoading />}
      <TitleLink text="The Best Links" />
      <p className={css.text}>
        The Best Links – a collection of my most amazing programming resources!
        🚀 Here, you`ll find the most useful links to help you level up your
        skills in JavaScript, React, Node.js, MongoDB, CSS, and much more. 🔥
      </p>
      <ul>
        <li>🔹 Articles and guides 📖</li>
        <li>🔹 Useful tools 🛠 </li>
        <li>🔹 Courses and video tutorials 🎥</li>
        <li>🔹 Cheat sheets and documentation 📜</li>
      </ul>
      <p>
        This collection is designed to make it easier to find the best materials
        and help you grow as a developer. Bookmark it and make the most of it!
        💡
      </p>
    </div>
  );
}
