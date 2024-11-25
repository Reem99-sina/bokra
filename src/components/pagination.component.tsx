"use client";

import clsx from "clsx";
import ReactPaginate from "react-paginate";
import { Arrow } from "@/icon";
import { memo } from "react";

const itemContainerClassName = clsx(
  "mx-1 flex h-9 w-9 items-center justify-center",
  "rounded border border-border bg-bg text-text",
  "hover:bg-secondary"
);

const itemClassName = clsx(
  "w-full text-center flex items-center justify-center"
);

interface Props {
  onPageChange: (page: number) => void;
  pageCount: number;
  initialPage?: number;
  className?: string;
}

const Pagination: React.FC<Props> = memo(
  ({ onPageChange, pageCount, initialPage = 1 }) => {
    return (
      <ReactPaginate
        initialPage={initialPage - 1}
        nextLabel={
          <div className="flex flex-row items-center justify-center gap-1">
            <p>التالي</p>
            <Arrow rotate={360} className="rotate-180" />
          </div>
        }
        previousLabel={
          <div className="flex flex-row items-center justify-center gap-1">
            <Arrow />
            <p>السابق</p>
          </div>
        }
        onPageChange={(selectedItem) => onPageChange(selectedItem.selected + 1)}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        className="flex flex-row items-center justify-center text-[#7B8494]"
        breakClassName="mb-2 text-pastel2 mx-1"
        pageClassName={clsx(
          itemContainerClassName,
          "border-[#DCDFE4] hover:bg-[#153E7E] hover:bg-opacity-30"
        )}
        pageLinkClassName={itemClassName}
        nextClassName={clsx(
          itemContainerClassName,
          "bg-[#F4F6F9] w-[80px] h-[30px] border-0 "
        )}
        nextLinkClassName={clsx(itemClassName, "text-bg")}
        previousClassName={clsx(
          itemContainerClassName,
          "bg-[#F4F6F9] w-[80px] h-[30px] border-0 "
        )}
        previousLinkClassName={clsx(itemClassName, "text-bg")}
        activeClassName="bg-[#153E7E]  border-0"
        activeLinkClassName="text-white"
        disabledLinkClassName={"cursor-not-allowed"}
        disabledClassName="opacity-30 "
      />
    );
  }
);
Pagination.displayName = "Pagination";
export default Pagination;
