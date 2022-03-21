import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const getAuctions = () => {
  const { data, error } = useSWR(`http://localhost:3000/api/auction`, fetcher);

  return {
    auctions: data,
    isLoading: !error && !data,
    isError: error,
  };
};
