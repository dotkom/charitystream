import { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#__next");

const Item = (props) => {
  return (
    <div
      className="w-40 rounded overflow-hidden shadow-lg m-2 text-center px-3 py-2 cursor-pointer hover:bg-gray-600 bg-gray-800"
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

  const closeModal = () => setModalOpen(false);

  const openModal = (item) => {
    setActiveItem(item);
    setModalOpen(true);
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
    <div className="grid grid-flow-row grid-cols-4 gap-3">
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
          <form class="bg-gray-600 shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="text-2xl">By på</div>
            <div className="text-2xl text-white font-bold italic">
              {activeItem && activeItem.description}
            </div>
            <div class="mb-4">
              <label class="block text-white text-lg font-bold mb-2" for="name">
                Navn
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Ola Nordmann"
              />
            </div>
            <div class="mb-6">
              <label
                class="block text-white text-lg font-bold mb-2"
                for="password"
              >
                E-post
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="emain"
                type="email"
                placeholder="ola@nordmann.no"
              />
            </div>
            <div class="flex items-center justify-between">
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                By!
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
        </div>
      </Modal>
    </div>
  );
};

export default AuctionItems;
