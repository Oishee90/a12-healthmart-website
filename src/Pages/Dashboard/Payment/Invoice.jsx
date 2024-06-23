

import  { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import ReactToPrint from 'react-to-print';

const Invoice = () => {
  const location = useLocation();
  const { transactionId, user, cart, totalPrice } = location.state || {};
  const componentRef = useRef();

  return (
    <div className="container mx-auto mt-20 mb-20">
      <div className="bg-white p-6 rounded-lg shadow-lg" ref={componentRef}>
        <div className="flex justify-between items-center mb-4">
          <img src="/path/to/logo.png" alt="Website Logo" className="w-32" />
          <h1 className="text-3xl font-oswald font-extrabold">Invoice</h1>
        </div>
        <div className="border-b-2 border-gray-200 mb-4"></div>
        <div className="mb-6">
          <h2 className="text-lg font-semibold">Customer Information</h2>
          <p><strong>Name:</strong> {user?.displayName || 'Anonymous'}</p>
          <p><strong>Email:</strong> {user?.email || 'Anonymous'}</p>
          <p><strong>Transaction ID:</strong> {transactionId}</p>
        </div>
        <div className="mb-6">
          <h2 className="text-lg font-semibold">Purchase Information</h2>
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr>
                <th className="px-4 py-2 border">Item</th>
                <th className="px-4 py-2 border">Quantity</th>
                <th className="px-4 py-2 border">Price</th>
                <th className="px-4 py-2 border">Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(item => (
                <tr key={item.id}>
                  <td className="px-4 py-2 border">{item.name}</td>
                  <td className="px-4 py-2 border text-center">{item.quantity}</td>
                  <td className="px-4 py-2 border text-right">${item.pricePerUnit.toFixed(2)}</td>
                  <td className="px-4 py-2 border text-right">${(item.pricePerUnit * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
              <tr>
                <td colSpan="3" className="px-4 py-2 border text-right font-bold">Total</td>
                <td className="px-4 py-2 border text-right font-bold">${totalPrice.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <ReactToPrint
          trigger={() => <button className="btn btn-primary mt-4">Print/Download Invoice</button>}
          content={() => componentRef.current}
        />
      </div>
    </div>
  );
};

export default Invoice;
