const MenuItem = ({ item }) => {
  return (
    <article>
      <div>
        <img 
          src={ item.image } 
          alt={ item.name } 
        />
        <div>
          <p>{ item.name }</p>
          <p><span>{ item.price }</span></p>
        </div>
      </div>
    </article>
  );
};

export default MenuItem;