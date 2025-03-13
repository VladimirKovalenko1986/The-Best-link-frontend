import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentPage,
  selectFilter,
  selectHasNextPage,
  selectLinks,
  selectLoadingAllLinks,
} from "../../redux/links/selectors.js";
import { setPage } from "../../redux/links/slice.js";
import { fetchLinks } from "../../redux/links/operations.js";
import DiscussLoading from "../DiscussLoading/DiscussLoading.jsx";
import { useRef, useEffect } from "react";
import css from "./LoadeMoreButton.module.css";

export default function LoadeMoreButton() {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);
  const hasNextPage = useSelector(selectHasNextPage);
  const filter = useSelector(selectFilter);
  const links = useSelector(selectLinks);
  const loadeAllLinks = useSelector(selectLoadingAllLinks);
  const buttonRef = useRef(null);

  const handleLoadeMore = () => {
    const nextPage = currentPage + 1;
    dispatch(setPage(nextPage));
    dispatch(fetchLinks({ page: nextPage, limit: 10, filter }));
  };

  useEffect(() => {
    if (!loadeAllLinks && buttonRef.current) {
      buttonRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [links, loadeAllLinks]);

  return (
    hasNextPage &&
    links.length > 0 && (
      <div className={css.buttonWrapper} ref={buttonRef}>
        <button className={css.btn} onClick={handleLoadeMore}>
          Load More
          {loadeAllLinks && (
            <span className={css.spinnerWrapper}>
              <DiscussLoading />
            </span>
          )}
        </button>
      </div>
    )
  );
}
