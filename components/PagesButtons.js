import Link from "next/link";

const PagesButtons = () => {
  return (
    <div className="flex flex-row items-center">
      <Link href="/auksjon" class="font-bold">
        <button class="mb-2 mt-2 mr-2 bg-purple-400 hover:bg-gray-100 text-gray-800 font-semibold py-5 px-10  rounded shadow text-2xl">
          Gå til stilleauksjon
        </button>
      </Link>
      <Link href="/rulesheet" class="font-bold">
        <button class="mb-2 mt-2 bg-purple-400 hover:bg-gray-100 text-gray-800 font-semibold py-5 px-10  rounded shadow text-2xl">
          Gå til regelark
        </button>
      </Link>
    </div>
  );
};

export default PagesButtons;
