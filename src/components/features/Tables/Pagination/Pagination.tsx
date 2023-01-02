import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import styles from "./Pagination.module.css";

interface PaginationProps {
  setPageSize: (pageSize: number) => void;
  gotoPage: (updater: number | ((pageIndex: number) => number)) => void;
  previousPage: () => void;
  nextPage: () => void;
  pageIndex: number;
  pageSize: number;
  pageOptions: number[];
  pageCount: number;
  canPreviousPage: boolean;
  canNextPage: boolean;
}

export const Pagination = (props: PaginationProps) => {
  const {
    setPageSize,
    gotoPage,
    previousPage,
    nextPage,
    pageIndex,
    pageSize,
    pageOptions,
    pageCount,
    canPreviousPage,
    canNextPage,
  } = props;

  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <div className={styles.prevNextButtons}>
        <button
          className={styles.arrowButton}
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        >
          <AiFillLeftCircle />
        </button>
        <button
          className={styles.textButton}
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          {t("pagination.previous")}
        </button>
        <button
          className={styles.textButton}
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          {t("pagination.next")}
        </button>
        <button
          className={styles.arrowButton}
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        >
          <AiFillRightCircle />
        </button>
      </div>
      <span>
        {t("pagination.page")}
        <strong>
          {pageIndex + 1} of {pageOptions.length}
        </strong>
      </span>
      <span>
        {t("pagination.goToPage")}
        <input
          type="number"
          min={1}
          className={classNames(styles.input, styles.numberInput)}
          defaultValue={pageIndex + 1}
          onChange={(e) => {
            const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0;
            gotoPage(pageNumber);
          }}
        />
      </span>
      <select
        value={pageSize}
        onChange={(e) => setPageSize(Number(e.target.value))}
        className={styles.input}
      >
        {[10, 25, 50].map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            {t("pagination.show")} {pageSize}
          </option>
        ))}
      </select>
    </div>
  );
};
