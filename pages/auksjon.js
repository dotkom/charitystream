import Link from "next/link";
import AuctionItems from "../components/AuctionItems";
import { getAuctions } from "./hooks/auction";

const NavBar = () => (
  <div className="w-full p-10">
    <Link href="/">
      <button className="mb-2 mt-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
        Tilbake til hovedsiden
      </button>
    </Link>
  </div>
);

export default function AuctionItemsPage() {
  const { auctions, isLoading, isError } = getAuctions();

  if (isError) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <NavBar />
      <AuctionItems items={auctions} />
    </div>
  );
}
