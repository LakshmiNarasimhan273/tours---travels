// import axios from "axios";
// import React, { useRef } from "react";
// import useAuth from "./../../../hooks/useAuth";

// const BookPlan = (props) => {
//   const { plan } = props;
//   const { user } = useAuth();
//   const nameRef = useRef();
//   const emailRef = useRef();
//   const childRef = useRef();
//   const adultRef = useRef();
//   const addressRef = useRef();
//   const phoneRef = useRef();
//   const handleBookPlan = (e) => {
//     const name = nameRef.current.value;
//     const email = emailRef.current.value;
//     const child = childRef.current.value;
//     const adult = adultRef.current.value;
//     const phone = phoneRef.current.value;
//     const address = addressRef.current.value;
//     const bookedPlace = plan._id;
//     const status = "";

//     const bookedPlan = {
//       name,
//       email,
//       phone,
//       address,
//       adult,
//       child,
//       bookedPlace,
//       status,
//     };
//     axios.post("http://localhost:3001/details", bookedPlan).then((res) => {
//       if (res.data.insertedId) {
//         alert("added");
//       }
//     });
//     e.preventDefault();
//   };
//   return (
//     <div id="#bookplan" className="lg:my-12">
//       <section className="lg:my-20 bg-pink-100 bg-opacity-50">
//         <form
//           onSubmit={handleBookPlan}
//           className="container max-w-2xl mx-auto shadow-md md:w-3/4"
//         >
//           <div className="p-4 bg-gray-500 border-t-2 border-indigo-400 rounded-lg bg-opacity-5">
//             <div className="max-w-sm mx-auto md:w-full md:mx-0">
//               <div className="inline-flex items-center space-x-4">
//                 <a href="/home" className="block relative">
//                   <img
//                     alt="profil"
//                     src={user.photoURL}
//                     className="mx-auto object-cover rounded-full h-16 w-16 "
//                   />
//                 </a>
//                 <h1 className="text-gray-600">{user.displayName}</h1>
//               </div>
//             </div>
//           </div>
//           <div className="space-y-6 bg-white">
//             <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
//               <h2 className="max-w-sm mx-auto md:w-1/3">Account</h2>
//               <div className="max-w-sm mx-auto md:w-2/3">
//                 <div className=" relative ">
//                   <input
//                     value={user.email}
//                     type="email"
//                     ref={emailRef}
//                     className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
//                     placeholder="Email"
//                   />
//                 </div>
//               </div>
//             </div>
//             <hr />
//             <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
//               <h2 className="max-w-sm mx-auto md:w-1/3">Contact info</h2>
//               <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
//                 <div>
//                   <div className=" relative ">
//                     <input
//                       value={user.displayName}
//                       type="text"
//                       ref={nameRef}
//                       className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
//                       placeholder="Name"
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <div className=" relative ">
//                     <input
//                       type="number"
//                       ref={phoneRef}
//                       className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
//                       placeholder="Phone number"
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <div className=" relative ">
//                     <input
//                       type="text"
//                       ref={addressRef}
//                       className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
//                       placeholder="Address"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <hr />
//             <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
//               <h2 className="max-w-sm mx-auto md:w-1/3">
//                 Additional information
//               </h2>
//               <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
//                 <div className="relative">
//                   <label className="text-gray-700" for="adults">
//                     Adults
//                     <select
//                       ref={adultRef}
//                       className="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
//                     >
//                       <option value="">Select an option</option>
//                       <option value="1">1</option>
//                       <option value="2">2</option>
//                       <option value="3">3</option>
//                       <option value="4">4</option>
//                       <option value="5">5</option>
//                       <option value="6">6</option>
//                     </select>
//                   </label>
//                 </div>
//                 <div className="relative">
//                   <label className="text-gray-700" for="child">
//                     Child
//                     <select
//                       ref={childRef}
//                       className="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
//                     >
//                       <option value="">Select an option</option>
//                       <option value="0">0</option>
//                       <option value="1">1</option>
//                       <option value="2">2</option>
//                       <option value="3">3</option>
//                       <option value="4">4</option>
//                       <option value="5">5</option>
//                       <option value="6">6</option>
//                     </select>
//                   </label>
//                 </div>
//               </div>
//             </div>
//             <hr />
//             <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3 relative">
//               <button
//                 type="submit"
//                 className="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
//               >
//                 Confirm
//               </button>
//             </div>
//           </div>
//         </form>
//       </section>
//     </div>
//   );
// };

// export default BookPlan;

import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import useAuth from "./../../../hooks/useAuth";

const BookPlan = (props) => {
  const { plan } = props;
  const { user } = useAuth();
  const nameRef = useRef();
  const emailRef = useRef();
  const childRef = useRef();
  const adultRef = useRef();
  const addressRef = useRef();
  const phoneRef = useRef();
  const history = useHistory();

  const handleBookPlan = (e) => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const child = childRef.current.value;
    const adult = adultRef.current.value;
    const phone = phoneRef.current.value;
    const address = addressRef.current.value;
    const bookedPlace = plan._id;
    const status = "";

    const bookedPlan = {
      name,
      email,
      phone,
      address,
      adult,
      child,
      bookedPlace,
      status,
    };

    // Redirect to MyOrders page with selected location data
    history.push({
      pathname: "/myorders",
      state: { selectedLocation: bookedPlan }, // pass the selected location data as state
    });

    e.preventDefault();
  };

  return (
    <div id="#bookplan" className="lg:my-12">
      <section className="lg:my-20 bg-pink-100 bg-opacity-50">
        <form
          onSubmit={handleBookPlan}
          className="container max-w-2xl mx-auto shadow-md md:w-3/4"
        >
          <div className="p-4 bg-gray-500 border-t-2 border-indigo-400 rounded-lg bg-opacity-5">
            <div className="max-w-sm mx-auto md:w-full md:mx-0">
              <div className="inline-flex items-center space-x-4">
                <a href="/home" className="block relative">
                  <img
                    alt="profil"
                    src={user.photoURL}
                    className="mx-auto object-cover rounded-full h-16 w-16 "
                  />
                </a>
                <h1 className="text-gray-600">{user.displayName}</h1>
              </div>
            </div>
          </div>
          <div className="space-y-6 bg-white">
            <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
              <h2 className="max-w-sm mx-auto md:w-1/3">Account</h2>
              <div className="max-w-sm mx-auto md:w-2/3">
                <div className=" relative ">
                  <input
                    value={user.email}
                    type="email"
                    ref={emailRef}
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Email"
                  />
                </div>
              </div>
            </div>
            <hr />
            <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
              <h2 className="max-w-sm mx-auto md:w-1/3">Contact info</h2>
              <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
                <div>
                  <div className=" relative ">
                    <input
                      value={user.displayName}
                      type="text"
                      ref={nameRef}
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div>
                  <div className=" relative ">
                    <input
                      type="number"
                      ref={phoneRef}
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Phone number"
                    />
                  </div>
                </div>
                <div>
                  <div className=" relative ">
                    <input
                      type="text"
                      ref={addressRef}
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Address"
                    />
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
              <h2 className="max-w-sm mx-auto md:w-1/3">
                Additional information
              </h2>
              <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
                <div className="relative">
                  <label className="text-gray-700" for="adults">
                    Adults
                    <select
                      ref={adultRef}
                      className="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="">Select an option</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                    </select>
                  </label>
                </div>
                <div className="relative">
                  <label className="text-gray-700" for="child">
                    Child
                    <select
                      ref={childRef}
                      className="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="">Select an option</option>
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                    </select>
                  </label>
                </div>
              </div>
            </div>
            <hr />
            <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3 relative">
              <button
                type="submit"
                className="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Confirm
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default BookPlan;
