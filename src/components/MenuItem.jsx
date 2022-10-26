const MenuItem = ({ item }) => {
  return (
    <article>
      <div className="border rounded-lg shadow-lg cursor-pointer hover:scale-105 duration-300">
        <img 
          src={ item.image } 
          className="h-[200px] w-full object-cover rounded-t-lg"
          alt={ item.name } 
        />
        <div className="flex justify-between p-2">
          <p className="font-bold">{ item.name }</p>
          <p><span className="bg-orange-500 text-white rounded-lg px-2 py-1">{ item.price }</span></p>
        </div>
      </div>
    </article>
  );
};

export default MenuItem;
