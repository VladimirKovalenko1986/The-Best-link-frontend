import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectLinks } from "../../redux/links/selectors.js";
import LinkItem from "../LinkItem/LinkItem.jsx";
import { fetchLinks } from "../../redux/links/operations.js";
import css from "./LinksList.module.css";

export default function LinksList() {
  const dispatch = useDispatch();
  const links = useSelector(selectLinks);
  console.log(links);

  useEffect(() => {
    dispatch(fetchLinks());
  }, [dispatch]);

  return (
    <ul className={css.list}>
      {links.map((link) => (
        <li key={link._id}>
          <LinkItem link={link} />
        </li>
      ))}
    </ul>
  );
}
