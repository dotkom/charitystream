export default function StretchGoals(props) {
  const { stretchGoals, totalAmount } = props;
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
