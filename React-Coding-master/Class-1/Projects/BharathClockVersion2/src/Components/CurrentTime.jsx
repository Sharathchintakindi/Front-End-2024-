import { useEffect, useState } from "react";

function CurrentTime() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
      console.log("Terminated");
    };
  }, []);
  return (
    <p className="lead">
      This is the current Time:
      {time.toLocaleDateString()} - {time.toLocaleTimeString()}
    </p>
  );
}

export default CurrentTime;
