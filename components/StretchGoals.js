export default function StretchGoals(props)  {
  const {stretchGoals, saldo} = props;
  const maxSaldo = stretchGoals[stretchGoals.length - 1].goal;
  const meterLen = Math.floor((saldo / maxSaldo) * 100 );
  const nextGoal = stretchGoals.find(stretchGoal => stretchGoal.goal > saldo)
  return (
    <div className="p-2">
      <div className="absolute italic flex justify-center w-3/4 ">
        <p className="text-3xl font-medium w-">Totalt innsamlet</p>
      </div>
      <div style={{minHeight: "150px"}} className="flex flex-col justify-center h-full">
        <div className="flex flex-row w-full items-center">
          <div className="w-3/4 m-1 overflow-hidden h-10 mb-4 text-xs flex rounded-3xl bg-green-200 relative">
            <div
              style={{ width: `${meterLen}%`, transition: "width 2s" }}
              className="shadow-none bg-green-500"
            >
            </div>
            <p className="absolute w-full flex justify-center items-center text-xl text-black h-full">{`${saldo}kr av ${maxSaldo}kr`}</p>
          </div>
          <div className="text-center w-1/4 flex flex-col justify-evenly text-xl">
            <p>Neste stretch goal:</p>
            <p>{nextGoal ? `${nextGoal.description} på ${nextGoal.goal}kr` : "Tomt for stretchGoals :("} </p>
          </div>
        </div>
      </div>
    </div>
  );
}
