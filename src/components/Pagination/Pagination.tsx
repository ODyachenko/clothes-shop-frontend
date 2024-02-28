import React, { FC } from 'react';
import ReactPaginate from 'react-paginate';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setCurrentPage } from '../../redux/slices/filterSlice';
import './styles.scss';

const Pagination: FC = () => {
  const { currentPage } = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();

  function onChangePage(id: number) {
    dispatch(setCurrentPage(id));
  }

  return (
    <ReactPaginate
      className="pagination"
      forcePage={currentPage - 1}
      breakLabel="..."
      nextLabel="Next"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={8}
      pageCount={3}
      previousLabel="Previous"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
