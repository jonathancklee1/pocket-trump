import { useQuery } from "@tanstack/react-query";
function useApi(url: string) {
  async function getData() {
    const res = await fetch(url);
    return res.json();
  }
  // Queries
  const { data, error, isLoading } = useQuery({
    queryKey: ["api"],
    queryFn: getData,
  });
  return { data, error, isLoading };
}

export default useApi;
