import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  selectFilter,
  selectLinks,
  selectLoadingAllLinks,
} from "../../redux/links/selectors.js";
import LinkItem from "../LinkItem/LinkItem.jsx";
import DiscussLoading from "../DiscussLoading/DiscussLoading.jsx";
import { fetchLinks } from "../../redux/links/operations.js";
import { setPage } from "../../redux/links/slice.js";
import FilterLink from "../FilterLink/FilterLink.jsx";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton.jsx";
import css from "./LinksList.module.css";

export default function LinksList() {
  const dispatch = useDispatch();
  const links = useSelector(selectLinks);
  const loadingAllLinks = useSelector(selectLoadingAllLinks);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(setPage(1));
    dispatch(fetchLinks({ page: 1, limit: 10, filter }));
  }, [dispatch, filter]);

  return (
    <div>
      {loadingAllLinks && <DiscussLoading />}
      <FilterLink />
      <ul className={css.list}>
        {links.map((link) => (
          <li key={link._id}>
            <LinkItem link={link} />
          </li>
        ))}
      </ul>
      <ScrollToTopButton />
    </div>
  );
}
