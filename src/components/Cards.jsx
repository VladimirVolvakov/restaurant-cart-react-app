// Component:
import CardItem from "./CardItem";
// Images:
import Card1 from "../assets/card1.jpg";
import Card2 from "../assets/card2.jpg";
import Card3 from "../assets/card3.jpg";

const Cards = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-4 py-12 grid md:grid-cols-3 gap-6">
      <CardItem 
        image={Card1}
        title="Sun's Out, BOGO's Out"
        subtitle="Through 8/26"
      />
      <CardItem 
        image={Card2} 
        title="New Restaurants"
        subtitle="Added Daily"
      />
      <CardItem 
        image={Card3}
        title="We Deliver Desserts"
        subtitle="Tasty Treats" 
      />
    </section>
  );
};

export default Cards;