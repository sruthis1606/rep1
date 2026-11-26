function BookCard(props) {
  return (
    <div className="book-card">
      <h2>{props.title}</h2>
      <p><b>Author:</b> {props.author}</p>
      <p><b>Category:</b> {props.category}</p>
    </div>
  );
}

export default BookCard;