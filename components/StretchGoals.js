export default function(){
  return (
    <div className="h-full">
      <div className="absolute italic flex justify-center w-3/4 "><p className="text-3xl font-medium w-">Stretch Goals </p></div>
      <div className="flex flex-col justify-center h-full">
        <div className="flex flex-row w-full items-center">
          <div className="w-3/4 m-1 overflow-hidden h-10 mb-4 text-xs flex rounded-3xl bg-red-200">
            <div style={{ width: "30%" }} className="shadow-none bg-red-500 rounded text-center text-xl"> 30000</div>
          </div>
          <div className="text-center w-1/4 flex flex-col justify-evenly text-xl">
            <p>
              Neste mål
            </p>
            <p>
              Fredrik Bjørnland tatoverer leppa
            </p>
          </div>
        </div>
    </div>
    </div>
  )
}
