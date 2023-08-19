import React from 'react';
import carsData from '@/data/carsData';
import CardsPage from '@/component/templates/cardsPage/CardsPage';
import Categories from '@/component/module/catgories/Categories';
import SearchBar from '@/component/module/searchBar/SearchBar';
const Details = () => {
    return (
        <div>
          <SearchBar/>
          <Categories/>
          <CardsPage data={carsData}/>
        </div>
    );
}

export default Details;
