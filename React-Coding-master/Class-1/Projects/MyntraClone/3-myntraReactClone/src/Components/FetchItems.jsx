import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then((items) => {
        console.log("Items Fetched",items);
      });

    return () => {
      console.log("Cleaning up UseEffect.");
      controller.abort();
    };
  }, []);

  return (
    <>
      <div>
        Fetch Done : {fetchStatus.fetchDone}
        Curently Fecthing : {fetchStatus.currentlyFetching}
      </div>
    </>
  );
};

export default FetchItems;
