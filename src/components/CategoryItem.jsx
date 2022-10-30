const CategoryItem = ({ category }) => {
  return (
    <article className="bg-gray-100 p-4 rounded-lg shadow-lg cursor-pointer hover:scale-105 duration-300 flex justify-between items-center">
      <h2 className="sm:text-xl font-bold">{ category.name }</h2>
      <img className="w-20" src={ category.image } alt={ category.name } />
    </article>
  );
};

export default CategoryItem;