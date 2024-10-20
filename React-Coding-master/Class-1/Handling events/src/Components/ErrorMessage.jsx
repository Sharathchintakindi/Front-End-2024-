function ErrorMessage({ items }) {
  return <center>{items.length === 0 && <h2>No Fruits Added</h2>}</center>;
}
export default ErrorMessage;
