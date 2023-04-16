import Link from "next/link";

const PagesButtons = () => {
  return (
    <div className="flex flex-row flex-grow justify-end">
      <Link href="/auksjon" className="font-bold">
        <button className="mb-2 mt-2 mr-2 bg-yellow hover:bg-regalblue hover:text-beige text-gray-800 font-semibold py-2 px-10  rounded shadow text-lg sm:text-2xl">
          Gå til stilleauksjon
        </button>
      </Link>
      <Link href="/rulesheet" className="font-bold">
        <button className="mb-2 mt-2 bg-yellow hover:bg-regalblue hover:text-beige text-gray-800 font-semibold py-2 px-10  rounded shadow text-lg sm:text-2xl">
          Gå til regelark
        </button>
      </Link>
    </div>
  );
};

export default PagesButtons;
