export default function StretchGoals(props) {
  const { stretchGoals, totalAmount } = props;
  const maxAmount = stretchGoals[stretchGoals.length - 1].goal;
  const meterLen = Math.floor((totalAmount / maxAmount) * 100);
  const nextGoal = stretchGoals.find(
    (stretchGoal) => stretchGoal.goal > totalAmount
  );

  const nextGoals = stretchGoals
    .filter((stretchGoal) => stretchGoal.goal > totalAmount)
    .reverse();
  const reachedGoals = stretchGoals
    .filter((goal) => goal.goal < totalAmount)
    .reverse();
  return (
    <div className="flex flex-wrap items-center h-full p-2 overflow-hidden justify-evenly">
      <div
        style={{ minHeight: "150px", minWidth: "300px", maxWidth: "75%" }}
        className="flex flex-col justify-center flex-grow"
      >
        <div className="italic text-center">
          <p className="text-3xl font-medium w-">Totalt innsamlet</p>
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <div className="relative flex w-full h-10 m-1 overflow-hidden text-xs bg-green-200 rounded-3xl">
            <div
              style={{ width: `${meterLen}%`, transition: "width 2s" }}
              className="bg-green-500 shadow-none"
            ></div>
            <p className="absolute flex items-center justify-center w-full h-full text-xl text-black">{`${totalAmount}kr av ${maxAmount}kr`}</p>
          </div>
          <div className="flex text-xl font-semibold text-center justify-evenly">
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
        <div className="text-2xl">Mål:</div>
        <hr />
        <table class="table-auto">
          <tbody>
            {nextGoals.map((item, i) => {
              const color =
                i == nextGoals.length - 1
                  ? "text-indigo-400 animate-pulse"
                  : "";
              return (
                <tr key={item.description}>
                  <td class={`px-4 text-left text-lg ${color}`}>
                    {item.description}
                  </td>
                  <td class={`px-4 ${color}`}>{item.goal} ,-</td>
                </tr>
              );
            })}
            {reachedGoals.map((item) => (
              <tr key={item.description}>
                <td class="px-4 line-through text-green-400 text-left text-lg">
                  {item.description}
                </td>
                <td class="px-4 text-green-400 line-through">{item.goal} ,-</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
