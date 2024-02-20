import React, { FC } from 'react';
import { Wrapper } from '../Wrapper/Wrapper';
import BrowseList from './BrowseList';
import './styles.scss';

const Browse: FC = () => {
  return (
    <Wrapper className="browse">
      <div className="browse__inner bg-search-bg py-10 px-6 rounded-3xl lg:py-16 lg:px-14">
        <h2 className="browse__title title text-center mb-7 lg:mb-16">
          BROWSE BY dress STYLE
        </h2>
        <BrowseList />
      </div>
    </Wrapper>
  );
};

export default Browse;
