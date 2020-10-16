const Vip = (props) => {
  return (
    <div
      class="flex items-center overflow-hidden m-2 rounded-full"
      style={{ background: "#ff5b24" }}
    >
      <img
        src="https://lh3.googleusercontent.com/0PbbTOfd4p_kT2iumjByeiQoj4AkK5aHFFeAe61BeW9saYtpY0z4S0CPBjJUN188fpg"
        width="50px"
      />
      <span class="p-2">
        {props.name} donerte {props.amount}kr!!
      </span>
    </div>
  );
};

const Vips = (props) => {
  const vips = props.items.map((item) => (
    <Vip name={item.name} amount={item.amount} />
  ));

  return <div class="flex flex-wrap w-full">{vips}</div>;
};

export default Vips;
