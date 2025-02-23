import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectLinks } from "../../redux/links/selectors.js";
import LinkItem from "../LinkItem/LinkItem.jsx";
import DiscussLoading from "../DiscussLoading/DiscussLoading.jsx";
import { fetchLinks } from "../../redux/links/operations.js";
import css from "./LinksList.module.css";

export default function LinksList() {
  const dispatch = useDispatch();
  const links = useSelector(selectLinks);
  const loading = useSelector((state) => state.links.loading);

  useEffect(() => {
    dispatch(fetchLinks({ page: 1, limit: 10 }));
  }, [dispatch]);

  return (
    <div>
      {loading && <DiscussLoading />}
      <ul className={css.list}>
        {links.map((link) => (
          <li key={link._id}>
            <LinkItem link={link} />
          </li>
        ))}
      </ul>
    </div>
  );
}
