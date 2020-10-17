import { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#__next");

const Item = (props) => {
  return (
    <div
      className="w-40 rounded overflow-hidden shadow-lg m-5 text-center px-3 py-2 cursor-pointer hover:bg-gray-600 bg-gray-800"
      onClick={props.onClick}
    >
      <div className="font-bold text-xl mb-2">{props.price},-</div>
      <hr />
      <p className="text-white text-base mb-8">{props.description}</p>
    </div>
  );
};

const AuctionItems = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [formData, setFormData] = useState({});
  const [success, setSuccess] = useState("");
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);

  const closeModal = () => setModalOpen(false);

  const openModal = (item) => {
    setActiveItem(item);
    setModalOpen(true);
  };

  const bid = async (e) => {
    e.preventDefault();
    setName(formData.name);
    setEmail(formData.email);
    const res = await fetch("/api/bid", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({
        ...formData,
        item: activeItem.id,
        description: activeItem.description,
      }),
    });

    setActiveItem(null);

    if (res.status == 200) {
      setSuccess(
        `Ditt bud på ${formData.amount} til ${activeItem.description} ble registrert!`
      );
    } else {
      setSuccess(
        `Budet ditt gikk ikke gjennom :(\n FeilKode: ${res.statusText}`
      );
    }
  };

  const modalStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "none",
    },
  };

  return (
    <div>
      <div className="text-4xl text-center p-5 ">
        Trykk på et auksjonsobjekt for å by!
      </div>
      <div className="flex flex-row flex-wrap justify-evenly">
        {props.items.map((item) => (
          <Item
            key={item.description}
            description={item.description}
            onClick={() => openModal(item)}
            price={item.price}
          />
        ))}
        <Modal
          isOpen={modalOpen}
          shouldCloseOnOverlayClick={true}
          onRequestClose={closeModal}
          style={modalStyles}
          onAfterOpen={activeItem ? undefined : closeModal}
        >
          <div class="w-full max-w-xs bg-gray-800 rounded">
            {activeItem ? (
              <form
                class="bg-gray-600 shadow-md rounded px-8 pt-6 pb-8 mb-4"
                onSubmit={bid}
              >
                <div className="text-2xl">By på</div>
                <div className="text-2xl text-white font-bold italic">
                  {activeItem.description}
                </div>
                <p>Nåværende bud: {activeItem.price},-</p>
                <div class="mb-4">
                  <label
                    class="block text-white text-lg font-bold mb-2"
                    htmlFor="name"
                  >
                    Navn
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Ola Nordmann"
                    value={name || ""}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div class="mb-6">
                  <label
                    class="block text-white text-lg font-bold mb-2"
                    htmlFor="email"
                  >
                    E-post
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    value={email || ""}
                    placeholder="ola@nordmann.no"
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div class="mb-6">
                  <label
                    class="block text-white text-lg font-bold mb-2"
                    htmlFor="price"
                  >
                    Pris
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="amount"
                    type="number"
                    placeholder={activeItem.price * 1.1}
                    onChange={(e) =>
                      setFormData({ ...formData, amount: e.target.value })
                    }
                  />
                </div>
                <div class="flex items-center justify-between">
                  <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Send bud
                  </button>
                  <button
                    class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={closeModal}
                  >
                    Avbryt
                  </button>
                </div>
              </form>
            ) : (
              <div class="bg-gray-600 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                {success ? (
                  <div class="w-full max-w-xs bg-gray-800 rounded">
                    {success}
                    <button
                      class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="button"
                      onClick={closeModal}
                    ></button>
                  </div>
                ) : (
                  <div class="w-full max-w-xs bg-gray-800 rounded">
                    Noe gikk galt.
                    {success}
                    <button
                      class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="button"
                      onClick={closeModal}
                    ></button>
                  </div>
                )}
              </div>
            )}
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default AuctionItems;
