import LinksList from "../../components/LinksList/LinksList.jsx";
import LinkEditor from "../../components/LinkEditor/LinkEditor.jsx";
import LoadeMoreButton from "../../components/LoadeMoreButton/LoadeMoreButton.jsx";
import { useSelector } from "react-redux";
import { selectLoadingLogout } from "../../redux/auth/selector.js";
import InfinitySpinLoading from "../../components/InfinitySpinLoading/InfinitySpinLoading.jsx";
import css from "./LinksPage.module.css";

export default function LinksPage() {
  const loadingLogout = useSelector(selectLoadingLogout);
  return (
    <div className={css.conteiner}>
      {loadingLogout && <InfinitySpinLoading />}
      <LinkEditor />
      <LinksList />
      <LoadeMoreButton />
    </div>
  );
}
