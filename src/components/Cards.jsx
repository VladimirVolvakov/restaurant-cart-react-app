// Component:
import CardItem from "./CardItem";

const Cards = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-4 py-12 grid md:grid-cols-3 gap-6">
      <CardItem />
      <CardItem />
      <CardItem />
    </section>
  );
};

export default Cards;