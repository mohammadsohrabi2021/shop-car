import AllButton from "@/component/module/allButton/AllButton";
import Categories from "@/component/module/catgories/Categories";
import SearchBar from "@/component/module/searchBar/SearchBar";
import CardsPage from "@/component/templates/cardsPage/CardsPage";
import carsData from "@/data/carsData";

export default function Home() {
  const dataCar = carsData.slice(0, 3);
  return (
    <>
      <SearchBar />
      <Categories />
      <AllButton/>
      <CardsPage data={dataCar} />
    </>
  );
}
