import { useDispatch, useSelector } from "react-redux";
import css from "./LoadeMoreButton.module.css";
import {
  selectCurrentPage,
  selectHasNextPage,
  selectLinks,
} from "../../redux/links/selectors.js";
import { setPage } from "../../redux/links/slice.js";
import { fetchLinks } from "../../redux/links/operations.js";

export default function LoadeMoreButton() {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);
  const hasNextPage = useSelector(selectHasNextPage);
  const links = useSelector(selectLinks);

  const handleLoadeMore = () => {
    const nextPage = currentPage + 1;
    dispatch(setPage(nextPage));
    dispatch(fetchLinks({ page: nextPage, limit: 10 }));
  };

  return (
    hasNextPage &&
    links.length > 0 && (
      <button className={css.btn} onClick={handleLoadeMore}>
        Loade More
      </button>
    )
  );
}
