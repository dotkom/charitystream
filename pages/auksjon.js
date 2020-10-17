import useSWR from "swr";
import AuctionItems from "../components/AuctionItems";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function AuctionItemsPage() {
  const { data, error } = useSWR("/api/state", fetcher, {
    refreshInterval: 2500,
  });

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  console.log(data);

  return <AuctionItems items={data.auctions} />;
}
