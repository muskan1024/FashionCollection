import { LockOpen } from '@mui/icons-material'
import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import toast,{Toaster} from "react-hot-toast";

const BuyNow = () => {
    const [selectedMethod, setSelectedMethod] = useState("Cash on Delivery");
    const [paymentEnabled, setPaymentEnabled] = useState(false);
    const [placeOrderEnabled, setPlaceOrderEnabled] = useState(false);

    const handlePaymentMethodSelect = (method) => {
        setSelectedMethod(method);
        setPaymentEnabled(true);
      };

      const handlePayment = () => {
        if (selectedMethod === "Cash on Delivery") {
          setPlaceOrderEnabled(true);
        } else {
          toast.error("Please choose other payments method.");
        }
      };

  return (
    <>
    <div className='fixed z-10 top-0 w-full bg-white '>
      <div className='grid grid-cols-2 md:grid-cols-3 justify-items-center md:justify-around px-2 py-3 shadow-lg'>
        <Link to='/' className='flex justify-self-center gap-2 font-bold  md:w-fit items-center text-xl'>
        <img src="/images/fc-logo.png" alt="" className="w-5 " />
        <span className="text-red-600 ">FASHION</span>
            <span>COLLECTION</span>
        </Link>
    <h1 className='text-2xl  font-semi-bold tracking-widest'>CheckOut</h1>
    <LockOpen/>
  </div>

  <div className='border-2  border-slate-500 mt-10 p-5  w-[600px] m-auto '>
    <div>
    <h1 className='border-b-2 font-semibold text-xl'>Your Delivary Address -</h1>
    <Link to='/address'> 
    <button className='mt-4  border-2 p-2 rounded-2xl border-red-200 '>Add Address</button>
    </Link>
    </div>
    <div className='mt-10'>
        <h1 className='text-xl font-semibold border-b-2'>Select a Payment method -</h1>
        <input className='mt-5' type="radio" value="Card" checked={selectedMethod === "Card"}
                  onChange={() => handlePaymentMethodSelect("Card")}/> <span>Credit or Debit Card</span>
        <img src="/images/payment-card-options.png" alt="" />
        <input className='mt-7' type="radio" value="UPI"
                  checked={selectedMethod === "UPI"}
                  onChange={() => handlePaymentMethodSelect("UPI")} /> <span>Other UPI Apps</span>
        <br />
        <input className='mt-7' type="radio" value="Cash on Delivery"
                  checked={selectedMethod === "Cash on Delivery"}
                  onChange={() => handlePaymentMethodSelect("Cash on Delivery")} /> <span>Cash on Delivery</span>
                  <br />
                  <button
                className={` p-1 pl-4 pr-4 mt-5 rounded-lg font-semibold bg-amber-300 hover:bg-amber-400 text-lg ${
                  paymentEnabled ? "" : "opacity-50 cursor-not-allowed"
                }`}
                onClick={handlePayment}
              >
                   Use this payment method
              </button>   
               </div>   
          </div>
      </div>
    </>
  )
}

export default BuyNow