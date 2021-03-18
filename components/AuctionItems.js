import { useState } from "react";
import Modal from "react-modal";
import styles from "./AuctionItems.module.css";

import AuctionItem from "./AuctionItem";

Modal.setAppElement("#__next");

const AuctionItems = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [formData, setFormData] = useState({});
  const [success, setSuccess] = useState("");

  const closeModal = () => setModalOpen(false);

  const openModal = (item) => {
    setActiveItem(item);
    setModalOpen(true);
  };

  const clearError = () => {
    setFormData({ ...formData, error: undefined });
  };

  const validate = (formData) => {
    clearError();
    if (formData.amount < activeItem.price) {
      setFormData({
        ...formData,
        error: {
          ...formData.error,
          amount: `Budet ditt kan ikke være mindre enn ${activeItem.price},- kr!`,
        },
      });
      return false;
    }
    if (!formData.name || !formData.name.length || formData.name.length < 3) {
      setFormData({
        ...formData,
        error: {
          ...formData.error,
          name: "Navnet må være lenger enn to bokstaver",
        },
      });
      return false;
    }
    return true;
  };

  const bid = async (e) => {
    e.preventDefault();
    const valid = validate(formData);
    if (valid) {
      const res = await fetch("/api/bid", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify({
          ...formData,
          item: activeItem._id,
          description: activeItem.description,
        }),
      });

      if (res.status == 200) {
        setSuccess(
          `Ditt bud på ${formData.amount} til ${activeItem.description} ble registrert! Det vil dukke opp etter at Arrkom har verifisert det.`
        );
      } else {
        setSuccess(
          `Budet ditt gikk ikke gjennom :(\n FeilKode: ${res.statusText}`
        );
      }
      setActiveItem(null);
      clearError();
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
      border: "none",
    },
    overlay: {
      backgroundColor: "rgba(100,100,100, 0.5)",
    },
  };

  return (
    <div>
      <div className="text-4xl text-center p-5 ">
        Trykk på et auksjonsobjekt for å by!
      </div>
      <div className="flex flex-row flex-wrap justify-evenly">
        {Object(props.items).map((key) => (
          <AuctionItem
            key={key}
            description={props.items[Number(key)].description}
            onClick={() => openModal(key)}
            price={props.items[Number(key)].price}
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
                    value={formData.name || ""}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                    }}
                  />
                  {formData.error && formData.error.name && (
                    <div
                      class="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3"
                      role="alert"
                    >
                      <svg
                        class="fill-current w-4 h-4 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
                      </svg>
                      <p>{formData.error.name}</p>
                    </div>
                  )}
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
                    value={formData.email || ""}
                    placeholder="ola@nordmann.no"
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
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
                  {formData.error && formData.error.amount && (
                    <div
                      class="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3"
                      role="alert"
                    >
                      <svg
                        class="fill-current w-4 h-4 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
                      </svg>
                      <p>{formData.error.amount}</p>
                    </div>
                  )}
                </div>
                <div class="flex items-center justify-between">
                  <button
                    class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={closeModal}
                  >
                    Avbryt
                  </button>
                  <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Send bud
                  </button>
                </div>
              </form>
            ) : (
              <div class="flex flex-col justify-evenly items-center text-center w-full max-w-xs bg-gray-600 p-4 shadow-md">
                <p className="mb-4 text-xl text-white font-bold italic">
                  {success}
                </p>
                <button
                  class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={closeModal}
                >
                  Lukk
                </button>
              </div>
            )}
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default AuctionItems;
