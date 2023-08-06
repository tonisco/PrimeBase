import { BsChevronLeft, BsChevronRight } from "react-icons/bs"
import ReactPaginate from "react-paginate"

type Props = {
  pageCount: number
  changePage: (page: number) => void
}

const Pagination = ({ pageCount, changePage }: Props) => {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel={<BsChevronRight className="h-3 w-3" />}
      onPageChange={(e) => changePage(e.selected)}
      pageRangeDisplayed={4}
      marginPagesDisplayed={1}
      pageCount={pageCount}
      previousLabel={<BsChevronLeft className="h-3 w-3" />}
      renderOnZeroPageCount={null}
      containerClassName="flex justify-center gap-1 text-xs font-medium"
      pageLinkClassName="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
      activeLinkClassName="block h-8 w-8 rounded border-blue-600 !bg-blue-600 text-center leading-8 text-white cursor-default"
      previousLinkClassName="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900"
      nextLinkClassName="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900"
      breakLinkClassName="mx-2 "
    />
  )
}

export default Pagination
