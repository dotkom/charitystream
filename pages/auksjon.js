import Link from "next/link";
import useSWR from "swr";
import AuctionItems from "../components/AuctionItems";

const fetcher = (url) => fetch(url).then((res) => res.json());

const NavBar = () => (
  <div className="w-full p-10">
    <Link href="/">
      <a class="inline-block border border-blue-500 rounded text-xl py-1 px-3 bg-blue-500 text-white">
        Tilbake til hovedsiden
      </a>
    </Link>
  </div>
);

export default function AuctionItemsPage() {
  const { data, error } = useSWR("/api/state", fetcher, {
    refreshInterval: 5000,
  });

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  console.log(data);

  return (
    <div>
      <NavBar />
      <AuctionItems items={data.auctions} />
    </div>
  );
}
