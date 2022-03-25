import animations from "../styles/animations.module.css";
import QRCode from "../components/QRCode";

const Vipp = (props) => {
  return (
    <div>
      <div
        className={`bg-regalblue flex items-center  overflow-hidden m-3 rounded-tl-lg rounded-tr-lg rounded-br-lg shadow-md ${animations.wiggle}`}
        style={{ background: "#ff5b24" }}
      >
        <img src="https://i.imgur.com/RVgB3E6.png" width="50px" />
        <span className="flex justify-between w-full">
          <span className="p-3">{props.name} donerte</span>
          <span className="p-3 font-bold">{props.amount}kr!!</span>
        </span>
      </div>
    </div>
  );
};

const TopVipp = ({ vipp }) => {
  return (
    <div>
      <div className="m-1 text-4xl mb-2 text-center">Største donasjon</div>
      {vipp && (
        <div
          className={`flex items-center overflow-hidden m-3 rounded-tl-lg rounded-tr-lg rounded-br-lg shadow-md ${animations.wiggle}`}
          style={{ background: "#39AC37" }}
        >
          <img src="https://i.imgur.com/RVgB3E6.png" width="50px" />
          <span class="flex justify-between w-full">
            <span class="p-3">{vipp.name} donerte</span>
            <span class="p-3 font-bold">{vipp.amount}kr!!</span>
          </span>
        </div>
      )}
    </div>
  );
};

const Vipps = (props) => {
  const vipps = props.items.map((item) => (
    <Vipp name={item.name} amount={item.amount} />
  ));

  return (
    <div class="flex flex-col justify-center">
      <TopVipp vipp={props.topDonor} />
      <hr />
      <div className="m-1 text-4xl mb-2 text-center">Siste donasjoner</div>
      {vipps}
      <QRCode style="margin: auto" />
    </div>
  );
};

export default Vipps;
