function ErrorMessage({ items }) {
  return <>{items.length === 0 && <h2> No Stocks</h2>}</>;
}

export default ErrorMessage;
