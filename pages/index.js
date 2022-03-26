import useSWR from "swr";
import StretchGoals from "../components/StretchGoals";
import SilentAuctionSlider from "../components/SilentAuctionSlider";
import PagesButtons from "../components/PagesButtons";
import Vipps from "../components/Vipps";
import styles from "../frontpage.module.css";
import Stream from "../components/Stream";
import Chat from "../components/Chat";
import ProgressBar from "../components/ProgressBar";
//import logo from "../Images/Online_bla.png";
import Reaact, { useEffect } from "react";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index() {
  const { data, error } = useSWR("/api/state", fetcher, {
    refreshInterval: 5000,
  });

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <div className={"flex h-screen flex-wrap justify-center"}>
        <div
          className={
            " w-screen sm:w-3/4 p-5 flex text-5xl bg-emerald-400 flex-wrap"
          }
        >
          Veldedighetsfest 2022 <PagesButtons />
          <hr />
        </div>
        <div className={"w-screen"}>
          <ProgressBar
            stretchGoals={data.stretchGoals}
            totalAmount={data.totalAmount}
            auctions={data.auctions}
          />
        </div>

        <div className="flex max-w-full w-screen flex-grow justify-center flex-wrap">
          <div className={"text-lg"}>
            <Stream link={data.streamLink} />
          </div>
          <div className={"flex-grow max-w-lg"}>
            <Chat link={data.streamLink} />
          </div>
        </div>

        <div className="flex max-w-full flex-grow justify-evenly flex-wrap mt-10 text-beige">
          <div className={""}>
            <StretchGoals
              stretchGoals={data.stretchGoals}
              totalAmount={data.totalAmount}
            />
          </div>
          <div
            className={
              "flex-grow max-w-lg bg-regalblue rounded-md p-5 text-beige"
            }
          >
            <Vipps items={data.vipps} topDonor={data.topDonor} />
          </div>
        </div>

        <div className={"w-screen"}>
          <SilentAuctionSlider items={data.auctions} />
        </div>
        <div className={"m-10"}>
          <p className={"m-10"}> </p>
        </div>
      </div>
    </>
  );
}
