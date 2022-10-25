const Menu = () => {
  return (
    <section>
      <h2>Top Rated Menu Items</h2>
      <div>
        <div>
          <p>Filter Type</p>
          <div>
            <button>All</button>
            <button>Burgers</button>
            <button>Pizza</button>
            <button>Salad</button>
            <button>Chicken</button>
          </div>
        </div>
        <div>
          <p>Filter Price</p>
          <div>
            <button>$</button>
            <button>$$</button>
            <button>$$$</button>
            <button>$$$$</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
