import { useEffect, useState } from "react";

export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const abortMsg = "cleanup";

    (async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products", {
          signal: controller.signal,
        });
        if (response.status >= 400) throw new Error("Bad request");
        const data = await response.json();
        setProducts(data);
        setIsLoading(false);
      } catch (error) {
        if (error === abortMsg) return;
        setError(error);
        setIsLoading(false);
      }
    })();

    return () => controller.abort(abortMsg);
  }, []);

  return { products, isLoading, error };
}
