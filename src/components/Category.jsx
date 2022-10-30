// Component:
import CategoryItem from "./CategoryItem";
// Data:
import { categories } from "../data";

const Category = () => {
  return (
    <section>
      <h2>Our Food Categories</h2>
      <div>
        { categories.map(category => (<CategoryItem key={category.id} category={category} />)) }
      </div>
    </section>
  );
};

export default Category;