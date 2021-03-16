import Link from "next/link";

const PagesButtons = () => {
  return (
    <div className="flex flex-row items-center">
      <Link href="/auksjon" class="font-bold">
        <button class="mb-2 mt-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          Gå til stilleauksjon
        </button>
      </Link>
      <Link href="/rulesheet" class="font-bold">
        <button class="mb-2 mt-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          Gå til regelark
        </button>
      </Link>
    </div>
  );
};

export default PagesButtons;
