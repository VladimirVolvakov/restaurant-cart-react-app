// Images:
import Card1 from "../assets/card1.jpg";

const CardItem = () => {
  return (
    <article className="relative rounded-xl">
      <div className="absolute h-full w-full bg-black/40 text-white rounded-xl">
        <p className="text-2xl font-bold pt-4 px-2">Sun's Out, BOGO's Out</p>
        <p className="px-2">Through 8/26</p>
        <button className="absolute bottom-4 bg-white text-black border-white mx-2">Order Now</button>
      </div>
      <img 
        src={Card1} 
        className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
        alt="Headline Card" 
      />
    </article>
  );
};

export default CardItem;