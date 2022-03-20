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
              if (i == nextGoals.length - 1) {
                return (
                  <tr key={item.description}>
                    <td
                      class={`px-4 text-left text-lg text-indigo-400 animate-pulse`}
                    >
                      {item.description}
                    </td>
                    <td class={`px-4 text-indigo-400 animate-pulse}`}>
                      {item.goal} ,-
                    </td>
                  </tr>
                );
              } else {
                return (
                  <tr key={item.description}>
                    <td class={`px-4 text-left text-lg`}>????</td>
                    <td class={`px-4`}>{item.goal} ,-</td>
                  </tr>
                );
              }
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
