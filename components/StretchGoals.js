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
      <div className="text-center bg-regalblue rounded-md p-5 ">
        <div className="text-4xl p-1">Mål</div>
        <hr />
        <table class="table-auto">
          <tbody>
            {nextGoals.map((item, i) => {
              if (i == nextGoals.length - 1) {
                return (
                  <tr key={item.description}>
                    <td
                      class={`px-4 text-left text-3xl text-orange animate-pulse`}
                    >
                      {item.description}
                    </td>
                    <td class={`text-3xl px-4 text-orange animate-pulse }`}>
                      {item.goal} ,-
                    </td>
                  </tr>
                );
              } else {
                return (
                  <tr key={item.description}>
                    <td class={`px-4 text-left text-3xl p-2`}>????</td>
                    <td class={`px-4 text-3xl`}>{item.goal} ,-</td>
                  </tr>
                );
              }
            })}
            {reachedGoals.map((item) => (
              <tr key={item.description}>
                <td class="px-4 line-through text-green-600 text-left text-3xl">
                  {item.description}
                </td>
                <td class="px-4 text-green-400 text-3xl line-through">
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
