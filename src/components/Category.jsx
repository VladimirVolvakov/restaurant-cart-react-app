// Component:
import CategoryItem from "./CategoryItem";
// Data:
import { categories } from "../data";

const Category = () => {
  return (
    <section className="max-w-[1440px] px-4 py-12 mx-auto">
      <h2 className="text-orange-500 text-4xl font-bold text-center">Our Food Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
        { categories.map(category => (
          <CategoryItem key={category.id} category={category} />
        )) }
      </div>
    </section>
  );
};

export default Category;