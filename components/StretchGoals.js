export default function StretchGoals(props) {
  const { stretchGoals, totalAmount } = props;
  const maxAmount = stretchGoals[stretchGoals.length - 1].goal;
  const meterLen = Math.floor((totalAmount / maxAmount) * 100);
  const nextGoal = stretchGoals.find(
    (stretchGoal) => stretchGoal.goal > totalAmount
  );

  const nextGoals = stretchGoals
    .filter((stretchGoal) => stretchGoal.goal > totalAmount)
    .slice(1, 4)
    .reverse();
  const goalItems = nextGoals.map((stretchGoal, index) => (
    <div
      key={index}
    >{`${stretchGoal.description} på ${stretchGoal.goal}kr`}</div>
  ));

  return (
    <div className="p-2 h-full flex flex-wrap overflow-hidden items-center justify-evenly">
      <div
        style={{ minHeight: "150px", minWidth: "300px", maxWidth: "75%" }}
        className="flex flex-col justify-center flex-grow"
      >
        <div className="italic text-center">
          <p className="text-3xl font-medium w-">Totalt innsamlet</p>
        </div>
        <div className="flex flex-col w-full items-center justify-center">
          <div className="w-full m-1 overflow-hidden h-10 text-xs flex rounded-3xl bg-green-200 relative">
            <div
              style={{ width: `${meterLen}%`, transition: "width 2s" }}
              className="shadow-none bg-green-500"
            ></div>
            <p className="absolute w-full flex justify-center items-center text-xl text-black h-full">{`${totalAmount}kr av ${maxAmount}kr`}</p>
          </div>
          <div className="text-center flex flex justify-evenly text-xl">
            <p>
              Neste stretch goal:{" "}
              {nextGoal
                ? `${nextGoal.description} på ${nextGoal.goal}kr`
                : "Tomt for stretchGoals :("}{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <div className="text-2xl">Kommende mål:</div>
        <hr />
        <div className="flex flex-col justify-evenly items-center">
          {goalItems}
        </div>
      </div>
    </div>
  );
}
