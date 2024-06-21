
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa"; // Icon for close button

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    maxWidth: "600px", // Adjust max width as per your design
    width: "90%", // Responsive width
    padding: "20px",
    maxHeight: "80vh", // Ensure the modal is scrollable if content exceeds viewport height
    overflowY: "auto", // Enable vertical scrolling
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};

const MedicineModal = ({ isOpen, onClose, item }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <div className="bg-blue-50">
        <div className="modal-header flex justify-between items-center p-2">
          <h2 className="text-xl md:text-2xl font-bold"> <span className="text-blue-700">{item.categoryName}</span></h2>
          <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>
            <FaTimes />
          </button>
        </div>
        <div className="modal-body mt-4 p-2">
          <div className="flex justify-center mb-4">
            <img
              src={item.image}
              alt={item.itemName}
              className="max-h-80 max-w-full rounded-lg object-cover"
            />
          </div>
          <h2 className="text-base font-bold md:text-xl font-raleway text-blue-700">{item.itemName}</h2>
          <div className='justify-start  border-b-2 h-px w-[90px] mb-5 border-[#2d9496a2]'></div>
          <p className="text-base font-bold md:text-xl font-raleway text-black mb-2">
            {item.description}
          </p>
          <div className="ml-4">
            <li className="text-base md:text-lg font-bold font-raleway text-black mb-2">
              <span className="font-bold text-green-500">Generic Name:</span> {item.itemGenericName}
            </li>
            <li className="text-base md:text-lg font-bold  font-raleway text-black mb-2">
              <span className="font-bold text-green-500">Company:</span> {item.company}
            </li>
            <li className="text-base md:text-lg font-bold font-raleway text-black mb-2">
              <span className="font-bold text-green-500">Mass Unit:</span> {item.massUnit}
            </li>
            <li className="text-base md:text-lg font-bold font-raleway text-black">
              <span className="font-bold text-green-500">Price Per Unit:</span> $ {item.pricePerUnit}
            </li>
            <li className="text-base md:text-lg font-bold font-raleway text-black mb-2">
              <span className="font-bold text-green-500">Discountt:</span> {item.discount}
            </li>
          </div>
          {/* Add more details as needed */}
        </div>
      </div>
    </Modal>
  );
};

export default MedicineModal;
