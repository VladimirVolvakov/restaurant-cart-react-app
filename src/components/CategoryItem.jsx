const CategoryItem = ({ category }) => {
  return (
    <article>
      <h2>{ category.name }</h2>
      <img src={ category.image } alt={ category.name } />
    </article>
  );
};

export default CategoryItem;