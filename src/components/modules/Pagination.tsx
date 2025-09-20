import { useState } from 'react';
import ReactPaginate from 'react-paginate';

// Example items, to simulate fetching from another resources.
const items = new Array(30).fill(0);

function Items({ currentItems }: { currentItems: number[]}) {
  return (
    <>
      {currentItems &&
        currentItems.map((item, index) => (
          <div>
            <h3>Item #{index + 1}</h3>
          </div>
        ))}
    </>
  );
}

export default function PaginatedItems({ itemsPerPage }: { itemsPerPage: number }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;

    setItemOffset(newOffset);
  };

  return (
    <>
      {/* <Items currentItems={currentItems} /> */}
      <ReactPaginate
        breakLabel=".."
        nextLabel="next >"
        previousClassName="hidden"
        breakClassName="p-[10px] w-[30px] h-[30px] border border-[#D5D5D5] text-[#333333] rounded-[1px]  flex items-center justify-center"
        nextClassName="hidden"
        pageClassName=' p-[10px] w-[30px] h-[30px]  flex cursor-pointer relative items-center justify-center border border-[#D5D5D5] text-[#333333] rounded-[1px]'
        pageLinkClassName="inline-block w-full border-[#FFFFFF] top-[.2rem] absolute h-full left-0 right-0"
        activeClassName="bg-orange text-white"
        className='container text-center pb-[5rem] mx-auto flex px-2 sm:px-0 gap-y-[24px] flex-wrap sm:flex-nowrap items-center justify-center gap-x-[24px]'
        onPageChange={handlePageClick}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}