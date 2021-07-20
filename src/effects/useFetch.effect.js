import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch(url);
      const responseData = await response.json();
      setData(responseData[0]);
    })();
  }, [url]);

  return data;
};

export default useFetch;
