const CardItem = ({ image, title, subtitle }) => {
  return (
    <article className="relative rounded-xl">
      <div className="absolute h-full w-full bg-black/40 text-white rounded-xl">
        <p className="text-2xl font-bold pt-4 px-2">{ title }</p>
        <p className="px-2">{ subtitle }</p>
        <button className="absolute bottom-4 bg-white text-black border-white mx-2">
          Order Now
        </button>
      </div>
      <img 
        src={image} 
        className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
        alt="Headline Card" 
      />
    </article>
  );
};

export default CardItem;