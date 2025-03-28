import React, { useEffect, useState } from "react";

export default function LoadMore({ url }) {
  const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState("");
  const [count, setCount] = useState(0); 
  const [total, setTotal] = useState(0); 

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${count*20}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData((prevData) => [...prevData, ...result.products]);
        setTotal(result.total);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [count, url]);

  return (
    <>
      {loading && <p>Loading data...</p>}
      {error && <p>Error: {error}</p>}

      {data.length > 0 ? (
        data.map((product) => (
          <div key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <p>{product.title}</p>
          </div>
        ))
      ) : (
        !loading && <p>No data available</p>
      )}

      <button
        onClick={() => setCount(count + 1)}
        disabled={loading || data.length >= total}
      >
        {loading ? "Loading..." : "Load more"}
      </button>
    </>
  );
}
