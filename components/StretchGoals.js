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
    <div className="flex flex-wrap h-full p-2 overflow-hidden justify-evenly">
      <div className="text-center bg-teal-500 rounded-md p-5 ">
        <div className="text-4xl">Mål:</div>
        <hr />
        <table class="table-auto">
          <tbody>
            {nextGoals.map((item, i) => {
              const color =
                i == nextGoals.length - 1
                  ? "text-indigo-700 animate-pulse"
                  : "";
              return (
                <tr key={item.description}>
                  <td class={`px-4 text-left text-2xl ${color}`}>
                    {item.description}
                  </td>
                  <td class={`px-4 text-2xl ${color}`}>{item.goal} ,-</td>
                </tr>
              );
            })}
            {reachedGoals.map((item) => (
              <tr key={item.description}>
                <td class="px-4 line-through text-green-600 text-left text-2xl">
                  {item.description}
                </td>
                <td class="px-4 text-green-400 text-2xl line-through">
                  {item.goal} ,-
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
