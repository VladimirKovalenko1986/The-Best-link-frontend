import LinksList from "../../components/LinksList/LinksList.jsx";
import LinkEditor from "../../components/LinkEditor/LinkEditor.jsx";
import css from "./LinksPage.module.css";

export default function LinksPage() {
  return (
    <div className={css.conteiner}>
      <LinkEditor />
      <LinksList />
    </div>
  );
}
