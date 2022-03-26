import Link from "next/link";
import useSWR from "swr";
import AuctionItems from "../components/AuctionItems";
import React, { useEffect } from "react";
const fetcher = (url) => fetch(url).then((res) => res.json());

const NavBar = () => (
  <div className="w-full p-10">
    <Link href="/">
      <button className="mb-2 mt-2 bg-yellow hover:bg-regalblue hover:text-beige text-gray-800 font-semibold py-2 px-10  rounded shadow text-2xl">
        Tilbake til hovedsiden
      </button>
    </Link>
  </div>
);

export default function AuctionItemsPage() {
  const { data, error } = useSWR("/api/state", fetcher, {
    refreshInterval: 10000,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("/api/updateAuction", { method: "POST" });
    }, 10000);
  }, []);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <NavBar />
      <AuctionItems items={data.auctions} />
    </div>
  );
}
