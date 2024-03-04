import React, { FC } from 'react';
import ReactPaginate from 'react-paginate';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setCurrentPage } from '../../redux/slices/filterSlice';
import './styles.scss';

const Pagination: FC = () => {
  const { page } = useAppSelector((state) => state.filter);
  const { productsCount } = useAppSelector((state) => state.product);
  const pageCount = Math.ceil(productsCount / 6);
  const dispatch = useAppDispatch();

  function onChangePage(id: number) {
    dispatch(setCurrentPage(id));
  }

  return productsCount > 6 ? (
    <ReactPaginate
      className="pagination"
      forcePage={page - 1}
      breakLabel="..."
      nextLabel="Next"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={6}
      pageCount={pageCount}
      previousLabel="Previous"
      renderOnZeroPageCount={null}
    />
  ) : null;
};

export default Pagination;
