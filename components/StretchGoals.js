export default function StretchGoals(props) {
  const { stretchGoals, totalAmount } = props;
  const maxAmount = stretchGoals[stretchGoals.length - 1].goal;
  const meterLen = Math.floor((totalAmount / maxAmount) * 100);
  const nextGoal = stretchGoals.find(
    (stretchGoal) => stretchGoal.goal > totalAmount
  );

  const nextGoals = stretchGoals
    .filter((stretchGoal) => stretchGoal.goal > totalAmount)
    .slice(1, 4);
  console.log(nextGoals);
  const goalItems = nextGoals.map((stretchGoal, index) => (
    <div
      key={index}
    >{`${stretchGoal.description} på ${stretchGoal.goal}kr`}</div>
  ));

  return (
    <div className="p-2 h-full flex">
      <div className="absolute italic flex justify-center w-3/4 ">
        <p className="text-3xl font-medium w-">Totalt innsamlet</p>
      </div>
      <div
        style={{ minHeight: "150px" }}
        className="flex justify-center h-full w-3/4"
      >
        <div className="flex flex-col w-full items-center justify-center">
          <div className="w-3/4 m-1 overflow-hidden h-10 text-xs flex rounded-3xl bg-green-200 relative">
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
      <div className="text-center w-1/4 ">
        <div className="text-2xl">Kommende mål:</div>
        <div className="flex flex-col justify-evenly items-center">
          {goalItems}
        </div>
      </div>
    </div>
  );
}
