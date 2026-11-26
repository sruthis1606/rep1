function BookCard(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>Author: {props.author}</p>
      <p>Category: {props.category}</p>
    </div>
  );
}

export default BookCard;