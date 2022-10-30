// Hook:
import { useState } from "react";
// Component:
import MenuItem from "./MenuItem";
// Data:
import { data } from "../data";

const Menu = () => {
  const [displayedFood, setDisplayedFood] = useState(data);

  const displayAll = () => setDisplayedFood(data);

  const filterItemsByType = type => {
    setDisplayedFood(data.filter(item => {
      return item.category === type;
    }));
  };

  const filterItemsByPrice = price => {
    setDisplayedFood(data.filter(item => {
      return item.price === price;
    }));
  };

  return (
    <section className="max-w-[1440px] mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-orange-500 text-center">Top Rated Menu Items</h2>
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="mt-6">
          <p className="font-bold text-gray-700 ml-1">Filter By Type</p>
          <div className="flex justify-between flex-wrap">
            <button className="border-orange-500 text-orange-500 hover:text-white hover:bg-orange-500 m-1" onClick={displayAll}>All</button>
            <button className="border-orange-500 text-orange-500 hover:text-white hover:bg-orange-500 m-1" onClick={() => filterItemsByType('burger')}>Burgers</button>
            <button className="border-orange-500 text-orange-500 hover:text-white hover:bg-orange-500 m-1" onClick={() => filterItemsByType('pizza')}>Pizza</button>
            <button className="border-orange-500 text-orange-500 hover:text-white hover:bg-orange-500 m-1" onClick={() => filterItemsByType('salad')}>Salad</button>
            <button className="border-orange-500 text-orange-500 hover:text-white hover:bg-orange-500 m-1" onClick={() => filterItemsByType('chicken')}>Chicken</button>
          </div>
        </div>
        <div className="mt-6">
          <p className="font-bold text-gray-700 ml-1">Filter By Price</p>
          <div className="w-full max-w-[390px] flex">
            <button className="border-orange-500 text-orange-500 hover:text-white hover:bg-orange-500 m-1" onClick={() => filterItemsByPrice('$')}>$</button>
            <button className="border-orange-500 text-orange-500 hover:text-white hover:bg-orange-500 m-1" onClick={() => filterItemsByPrice('$$')}>$$</button>
            <button className="border-orange-500 text-orange-500 hover:text-white hover:bg-orange-500 m-1" onClick={() => filterItemsByPrice('$$$')}>$$$</button>
            <button className="border-orange-500 text-orange-500 hover:text-white hover:bg-orange-500 m-1" onClick={() => filterItemsByPrice('$$$$')}>$$$$</button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        { displayedFood.map(item => (
          <MenuItem key={item.id} item={item} />
        )) }
      </div>
    </section>
  );
};

export default Menu;
