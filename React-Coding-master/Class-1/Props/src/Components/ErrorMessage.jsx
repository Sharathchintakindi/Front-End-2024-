function ErrorMessage({ items }) {
  return <>{items.length === 0 && <h2> No New Models</h2>}</>;
}

export default ErrorMessage;
