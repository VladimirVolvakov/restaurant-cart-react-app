const Menu = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-4 py-12">
      <h2 className="text-4xl text-bold text-orange-500 text-center">Top Rated Menu Items</h2>
      <div className="flex flex-col lg:flex-row justify-between">
        <div>
          <p className="font-bold text-gray-700 ml-1">Filter Type</p>
          <div className="flex justify-between flex-wrap">
            <button className="border-orange-500 text-orange-500 hover:text-white hover:bg-orange-500 m-1">All</button>
            <button className="border-orange-500 text-orange-500 hover:text-white hover:bg-orange-500 m-1">Burgers</button>
            <button className="border-orange-500 text-orange-500 hover:text-white hover:bg-orange-500 m-1">Pizza</button>
            <button className="border-orange-500 text-orange-500 hover:text-white hover:bg-orange-500 m-1">Salad</button>
            <button className="border-orange-500 text-orange-500 hover:text-white hover:bg-orange-500 m-1">Chicken</button>
          </div>
        </div>
        <div>
          <p className="font-bold text-gray-700 ml-1">Filter Price</p>
          <div className="w-full max-w-[390px] flex">
            <button className="border-orange-500 text-orange-500 hover:text-white hover:bg-orange-500 m-1">$</button>
            <button className="border-orange-500 text-orange-500 hover:text-white hover:bg-orange-500 m-1">$$</button>
            <button className="border-orange-500 text-orange-500 hover:text-white hover:bg-orange-500 m-1">$$$</button>
            <button className="border-orange-500 text-orange-500 hover:text-white hover:bg-orange-500 m-1">$$$$</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
