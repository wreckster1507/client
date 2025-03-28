// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import Modal from "./utils/Modal";
// import UserEULA from "../EULA/UserEULA ";
// import axiosInstance from "../../api/axiosInstance";

// const EventRegistration = () => {
//   const navigate = useNavigate();
//   const { eventId } = useParams();
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [data, setdata] = useState(null);
//   const [name, setName] = useState("");
//   const [college, setcollege] = useState("");
//   const [email, setEmail] = useState("");
//   const [rollNumber, setRollNumber] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [isAgreed, setIsAgreed] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [spinner, setSpinner] = useState(false);
//   const [year, setYear] = useState("");
//   const [educationBackground, setEducationBackground] = useState("");
//   const [heardFrom, setHeardFrom] = useState("");
//   const [specificTopics, setSpecificTopics] = useState("");
//   const [specialAllergies, setSpecialAllergies] = useState("");
//   const [communityAnswer, setCommunityAnswer] = useState("");
//   const [couponCode, setCouponCode] = useState("");

//   const extraQuestions = {
//     year,
//     educationBackground,
//     heardFrom,
//     specificTopics,
//     specialAllergies,
//     communityAnswer,
//   };

//   useEffect(() => {
//     const fetchApi = async () => {
//       try {
//         // const response = await axios.get(
//         //   `https://eventaura-server-api.onrender.com/event/${eventId}`
//         // );
//         const response = await axiosInstance.get(`/event/${eventId}`);

//         setdata(response.data.data);
//         setLoading(false);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchApi();
//   }, []);
//   const onSubmitHandler = async (e) => {
//     console.log(extraQuestions);
//     e.preventDefault();
//     setSpinner(true);
//     const Userdata = {
//       name,
//       college,
//       email,
//       rollNumber,
//       phoneNumber,
//       extraQuestions,
//     };

//     if ((data && data.eventPrice) == "0") {
//       try {
//         // const response = await axios.post(
//         //   `https://eventaura-server-api.onrender.com/registration/${eventId}`,

//         //   Userdata
//         // );
//         const response = await axiosInstance.post(
//           `/registration/${eventId}`,
//           Userdata
//         );
//         console.log(response.data);
//         if (response && response.data.message === true) {
//           navigate(`/event/${response.data.id}/success`);
//           return;
//         }
//       } catch (error) {
//         console.log(error);
//         navigate(`/event/failure`);
//       }

//       return;
//     }

//     try {
//       // const response = await axios.post(
//       //   `https://eventaura-server-api.onrender.com/api/phone-pay/registration/user/${eventId}`,
//       //   Userdata
//       // );
//       const response = await axiosInstance.post(
//         `api/phone-pay/registration/user/${eventId}`,
//         Userdata
//       );
//       window.open(response.data, "_self");
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   const handleModalOpen = () => {
//     setIsModalOpen(true);
//   };

//   const handleModalClose = () => {
//     setIsModalOpen(false);
//   };
//   if (loading) {
//     return (
//       <>
//         <div
//           role="status"
//           class="w-full min-h-screen flex flex-col items-center justify-center px-2 py-16 sm:px-6 sm:py-24 animate-pulse"
//         >
//           <div class="w-full max-w-md md:max-w-2xl lg:max-w-4xl space-y-8 bg-gray-900 p-8 rounded-3xl shadow-lg border border-gray-600 flex flex-col md:flex-row md:space-y-0 md:space-x-8">
//             <div class="md:w-1/2 space-y-6">
//               <div class="h-2.5 bg-gray-700 rounded-full w-48 mb-4"></div>
//               <div class="h-2 bg-gray-700 rounded-full max-w-[360px] mb-2.5"></div>
//               <div class="h-2 bg-gray-700 rounded-full mb-2.5"></div>
//               <div class="h-2 bg-gray-700 rounded-full max-w-[330px] mb-2.5"></div>
//               <div class="h-2 bg-gray-700 rounded-full max-w-[300px] mb-2.5"></div>
//               <div class="h-2 bg-gray-700 rounded-full max-w-[360px]"></div>
//               <div class="h-2.5 bg-gray-700 rounded-full w-48 mb-4"></div>
//               <div class="h-2 bg-gray-700 rounded-full max-w-[360px] mb-2.5"></div>
//               <div class="h-2 bg-gray-700 rounded-full mb-2.5"></div>
//               <div class="h-2 bg-gray-700 rounded-full max-w-[330px] mb-2.5"></div>
//               <div class="h-2 bg-gray-700 rounded-full max-w-[300px] mb-2.5"></div>
//               <div class="h-2 bg-gray-700 rounded-full max-w-[360px]"></div>
//               <div class="h-2.5 bg-gray-700 rounded-full w-48 mb-4"></div>
//               <div class="h-2 bg-gray-700 rounded-full max-w-[360px] mb-2.5"></div>
//               <div class="h-2 bg-gray-700 rounded-full mb-2.5"></div>
//               <div class="h-2 bg-gray-700 rounded-full max-w-[330px] mb-2.5"></div>
//               <div class="h-2 bg-gray-700 rounded-full max-w-[300px] mb-2.5"></div>
//               <div class="h-2 bg-gray-700 rounded-full max-w-[360px]"></div>
//             </div>

//             <div class="md:w-1/2 space-y-4 bg-gray-800 p-2 sm:p-8 rounded-lg shadow-lg border border-gray-700">
//               <div class="h-2.5 bg-gray-700 rounded-full w-32 mb-4"></div>
//               <div class="space-y-2.5">
//                 <div class="flex items-center justify-between">
//                   <div class="h-2.5 bg-gray-700 rounded-full w-32"></div>
//                   <div class="h-2.5 bg-gray-700 rounded-full w-32"></div>
//                 </div>
//                 <div class="flex items-center justify-between">
//                   <div class="h-2.5 bg-gray-700 rounded-full w-32"></div>
//                   <div class="h-2.5 bg-gray-700 rounded-full w-32"></div>
//                 </div>
//                 <div class="flex items-center justify-between">
//                   <div class="h-2.5 bg-gray-700 rounded-full w-32"></div>
//                   <div class="h-2.5 bg-gray-700 rounded-full w-32"></div>
//                 </div>
//               </div>
//               <div class="h-2.5 bg-gray-700 rounded-full w-32 mb-4"></div>
//               <div class="h-2.5 bg-gray-700 rounded-full w-32 mb-2"></div>
//               <div class="h-2 bg-gray-700 rounded-full max-w-[480px] mb-2.5"></div>
//               <div class="h-2 bg-gray-700 rounded-full max-w-[440px] mb-2.5"></div>
//               <div class="h-2 bg-gray-700 rounded-full max-w-[460px] mb-2.5"></div>
//               <div class="h-2 bg-gray-700 rounded-full max-w-[360px]"></div>
//             </div>
//           </div>
//           <span class="sr-only">Loading...</span>
//         </div>
//       </>
//     );
//   }
//   return (
//     <>
//       <div className="w-full min-h-screen flex flex-col items-center justify-center px-2 py-16 sm:px-6 sm:py-24">
//         <div className="w-full max-w-2xl lg:max-w-4xl flex flex-col lg:flex-row items-center bg-gray-900 p-8 rounded-3xl shadow-lg border border-gray-600">
//           <div className="w-full lg:w-1/2 p-4">
//             <div className="text-center lg:text-left">
//               <h2 className="text-2xl font-semibold text-gray-200">
//                 Delegate Registration
//               </h2>
//               <p className="mt-1 text-sm text-gray-400">
//                 Complete the form to proceed with your payment.
//               </p>
//             </div>
//             <form className="mt-8 space-y-6" onSubmit={onSubmitHandler}>
//               <div className="relative">
//                 <input
//                   type="text"
//                   placeholder="Your Name * (As per Aadhar Card) "
//                   className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-gray-200 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   required
//                 />
//               </div>

//               <div className="relative">
//                 <input
//                   type="email"
//                   placeholder="Enter your email *"
//                   className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-gray-200 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//                 <p className="text-sm p-1 text-gray-400">
//                   <em>
//                     You will receive an email shortly. Please check your inbox
//                     or spam folder.
//                   </em>
//                 </p>
//               </div>

//               <div className="relative">
//                 <input
//                   type="tel"
//                   placeholder="Phone Number *"
//                   className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-gray-200 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
//                   value={phoneNumber}
//                   onChange={(e) => setPhoneNumber(e.target.value)}
//                   pattern="^\d{10}$"
//                   title="Enter a 10-digit phone number without any dashes or spaces."
//                   required
//                 />
//               </div>
//               <div className="relative">
//                 <select
//                   className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-gray-200 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
//                   value={educationBackground}
//                   onChange={(e) => {
//                     setEducationBackground(e.target.value);
//                   }}
//                   required
//                 >
//                   <option value="" disabled>
//                     Select your background
//                   </option>
//                   <option value="Student">Student</option>
//                   <option value="Professional">Professional</option>
//                   <option value="Other">Other</option>
//                 </select>
//               </div>
//               {/* start of dynamic */}

//               {educationBackground === "Student" && (
//                 <>
//                   <div className="relative">
//                     <input
//                       type="text"
//                       placeholder="Roll Number"
//                       className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-gray-200 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
//                       value={rollNumber || ""}
//                       onChange={(e) => setRollNumber(e.target.value)}
//                     />
//                   </div>
//                   <div className="relative">
//                     <input
//                       type="text"
//                       placeholder="Year"
//                       className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-gray-200 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
//                       value={year || ""}
//                       onChange={(e) => setYear(e.target.value)}
//                       required
//                     />
//                   </div>
//                   <div className="relative">
//                     <input
//                       type="text"
//                       placeholder="College Name"
//                       className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-gray-200 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
//                       value={college || ""}
//                       onChange={(e) => setcollege(e.target.value)}
//                     />
//                   </div>
//                 </>
//               )}
//               {/* End of student */}

//               <div className="relative">
//                 <select
//                   className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-gray-200 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
//                   value={heardFrom}
//                   onChange={(e) => setHeardFrom(e.target.value)}
//                   required
//                 >
//                   <option value="" disabled>
//                     How did you hear about ?
//                   </option>
//                   <option value="Social Media">Social Media/Group</option>
//                   {/* <option value="Newsletter">Newsletter</option> */}
//                   <option value="Friend or College">Friend or College</option>
//                   <option value="My Friend">My Friend</option>
//                   <option value="Other">Other</option>
//                   {/* <option value="Community">Community</option> */}
//                 </select>
//               </div>

//               {heardFrom === "Community" && (
//                 <>
//                   <div className="relative">
//                     <input
//                       type="text"
//                       placeholder="Community Name"
//                       className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-gray-200 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
//                       value={communityAnswer}
//                       onChange={(e) => setCommunityAnswer(e.target.value)}
//                     />
//                   </div>
//                 </>
//               )}

//               {heardFrom === "Social Media" && (
//                 <>
//                   <div className="relative">
//                     <input
//                       type="text"
//                       placeholder="Social Media Name"
//                       className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-gray-200 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
//                       value={communityAnswer}
//                       onChange={(e) => setCommunityAnswer(e.target.value)}
//                     />
//                   </div>
//                 </>

//               )}

//               {heardFrom === "Friend or College" && (
//                 <>
//                 <div className="relative">
//                   <input
//                     type="text"
//                     placeholder="Friend or College Name"
//                     className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-gray-200 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
//                     value={communityAnswer}
//                     onChange={(e) => setCommunityAnswer(e.target.value)}
//                   />
//                 </div>
//                 </>
//               )}

//               {heardFrom === "Other" && (
//                 <>
//                 <div className="relative">
//                   <input

//                     type="text"
//                     placeholder="Other Source Name"
//                     className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-gray-200 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
//                     value={communityAnswer}
//                     onChange={(e) => setCommunityAnswer(e.target.value)}
//                   />
//                 </div>
//                 </>
//               )}

//               <div>
//                 <input

//                   type="text"
//                   placeholder="Coupon Code"
//                   className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-gray-200 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
//                   value={couponCode}
//                   onChange={(e) => setCouponCode(e.target.value)}
//                 />
//               </div>

//               {/* <div className="relative">
//                 <textarea
//                   placeholder="Specific topics you want addressed / suggestions"
//                   className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-gray-200 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
//                   value={specificTopics}
//                   onChange={(e) => setSpecificTopics(e.target.value)}
//                 ></textarea>
//               </div> */}

//               <div className="relative">
//                 <textarea
//                   placeholder="What do you expect from the event?"
//                   className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-gray-200 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
//                   value={specialAllergies}
//                   onChange={(e) => setSpecialAllergies(e.target.value)}
//                 ></textarea>
//               </div>

//               <div className="relative">
//                 <div className="mb-4">
//                   <em className=" pb-7 text-gray-400">
//                     Fields marked with <span className="text-red-500">*</span>{" "}
//                     are required.
//                   </em>
//                   <label className="inline-flex items-center pt-5">
//                     <input
//                       type="checkbox"
//                       className="form-checkbox text-indigo-600 bg-gray-700 border-gray-600"
//                       checked={isAgreed}
//                       onChange={() => setIsAgreed(!isAgreed)}
//                     />
//                     <span className="ml-2 text-gray-200">
//                       I accept the{" "}
//                       <button
//                         type="button"
//                         onClick={handleModalOpen}
//                         className="text-indigo-500 underline"
//                       >
//                         Terms and Conditions
//                       </button>
//                     </span>
//                   </label>
//                 </div>
//                 {spinner ? (
//                   <>
//                     <button
//                       disabled
//                       type="button"
//                       className={`w-full flex justify-center items-center px-4 py-3 text-white font-medium rounded-lg focus:outline-none duration-300 bg-indigo-600 hover:bg-indigo-500 focus:bg-indigo-700 active:bg-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed ${
//                         !isAgreed ? "disabled" : ""
//                       }`}
//                     >
//                       <svg
//                         aria-hidden="true"
//                         role="status"
//                         className="inline w-4 h-4 me-3 text-white animate-spin"
//                         viewBox="0 0 100 101"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
//                           fill="#E5E7EB"
//                         />
//                         <path
//                           d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
//                           fill="currentColor"
//                         />
//                       </svg>
//                       Loading...
//                     </button>
//                   </>
//                 ) : (
//                   <>
//                     <button
//                       type="submit"
//                       className={`w-full flex justify-center items-center px-4 py-3 text-white font-medium rounded-lg focus:outline-none duration-300 bg-indigo-600 hover:bg-indigo-500 focus:bg-indigo-700 active:bg-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed ${
//                         !isAgreed ? "disabled" : ""
//                       }`}
//                       disabled={!isAgreed}
//                     >
//                       {data?.eventPrice === "0"
//                         ? "Complete your registration"
//                         : "Pay with PhonePay"}
//                     </button>
//                   </>
//                 )}
//               </div>
//             </form>
//           </div>
//           <div className="w-full lg:w-1/2 mt-10 lg:mt-0 lg:ml-8 p-4 bg-gray-800 rounded-lg shadow-lg border border-gray-700">
//             <div className="text-center lg:text-left">
//               <h3 className="text-xl font-bold text-gray-200 py-0.5">
//                 Event Details
//               </h3>
//               <div className="mt-4 text-sm text-gray-400 space-y-2">
//                 <p className="flex justify-between items-center">
//                   <span className="font-medium text-gray-300">Event Name:</span>
//                   <span className="text-gray-300 ">{data?.eventName}</span>
//                 </p>
//                 <p className="flex justify-between items-center">
//                   <span className="font-medium text-gray-300">Venue:</span>
//                   <span className="text-gray-300 ">{data?.eventVenue}</span>
//                 </p>
//                 <p className="flex justify-between items-center">
//                   <span className="font-medium text-gray-300">Cost:</span>
//                   <span className="text-gray-300 font-semibold">
//                     {" "}
//                     {data.eventPrice == "0" ? (
//                       <>
//                         <p>FREE</p>
//                       </>
//                     ) : (
//                       <>
//                         <p>₹{data.eventPrice}</p>
//                       </>
//                     )}
//                   </span>
//                 </p>
//                 <div className="mt-6">
//                   <h4 className="text-lg font-semibold text-gray-200 ">
//                     Important Information
//                   </h4>
//                   <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
//                     <li>
//                       Upon successful event registration, please download your
//                       ticket from the success page.
//                     </li>
//                     <li>
//                       You will also receive a confirmation email containing a QR
//                       code and a message from the event organizer.
//                     </li>
//                     <li>
//                       If you face any problems, escalate them to{" "}
//                       <a
//                         href="mailto:support@eventaura.tech"
//                         className="text-indigo-500"
//                       >
//                         support@eventaura.tech
//                       </a>{" "}
//                       for assistance.
//                     </li>
//                     <li>
//                       Check your email regularly for any updates or changes
//                       regarding the event schedule.
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {isModalOpen && (
//           <div
//             id="default-modal"
//             tabIndex="-1"
//             aria-hidden="true"
//             className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50"
//           >
//             <div className="relative p-4 w-full max-w-2xl max-h-full">
//               <div className="relative  rounded-lg shadow bg-gray-700">
//                 <div className="flex items-center justify-between p-4 border-b rounded-t border-gray-600">
//                   <h3 className="text-xl font-semibold  text-white">
//                     Terms of Service
//                   </h3>
//                   <button
//                     type="button"
//                     className="text-gray-400 bg-transparent   rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center hover:bg-gray-600 hover:text-white"
//                     onClick={handleModalClose}
//                   >
//                     <svg
//                       className="w-3 h-3"
//                       aria-hidden="true"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 14 14"
//                     >
//                       <path
//                         stroke="currentColor"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
//                       />
//                     </svg>
//                     <span className="sr-only">Close modal</span>
//                   </button>
//                 </div>
//                 <div className="p-4 space-y-4 overflow-y-auto max-h-96">
//                   <UserEULA />
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };
// export default EventRegistration;

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Modal from "./utils/Modal";
import UserEULA from "../EULA/UserEULA ";
import axiosInstance from "../../api/axiosInstance";

const EventRegistration = () => {
  const navigate = useNavigate();
  const { eventId } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setdata] = useState(null);
  const [name, setName] = useState("");
  const [college, setcollege] = useState("");
  const [email, setEmail] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [spinner, setSpinner] = useState(false);
  const [year, setYear] = useState("");
  const [educationBackground, setEducationBackground] = useState("");
  const [heardFrom, setHeardFrom] = useState("");
  const [specificTopics, setSpecificTopics] = useState("");
  const [specialAllergies, setSpecialAllergies] = useState("");
  const [communityAnswer, setCommunityAnswer] = useState("");
  const [couponCode, setCouponCode] = useState("");
  const [isCouponValid, setIsCouponValid] = useState(false);
  const [couponValidationMessage, setCouponValidationMessage] = useState(""); // New state for validation message

  console.log(isCouponValid);

  const extraQuestions = {
    year,
    educationBackground,
    heardFrom,
    specificTopics,
    specialAllergies,
    communityAnswer,
    isCouponValid,
  };

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await axiosInstance.get(`/event/${eventId}`);
        setdata(response.data.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApi();
  }, []);

  const checkCouponCode = () => {
    if (couponCode === "SDCSNIST" || couponCode === "@EventAura" || couponCode === "Saideep" || couponCode === "Srinivas") {
      setIsCouponValid(true);
      setCouponValidationMessage(
        "Your discount of ₹99.80 will be refunded back to you within 48 hours."
      ); // Set validation message
      console.log("Coupon code is correct");
    } else {
      setIsCouponValid(false);
      setCouponValidationMessage("Not a Valid Coupon Code"); // Set validation message
      console.log("Coupon code is incorrect or invalid");
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setSpinner(true);
    const Userdata = {
      name,
      college,
      email,
      rollNumber,
      phoneNumber,
      extraQuestions,
    };

    if ((data && data.eventPrice) == "0") {
      try {
        const response = await axiosInstance.post(
          `/registration/${eventId}`,
          Userdata
        );
        console.log(response.data);
        if (response && response.data.message === true) {
          navigate(`/event/${response.data.id}/success`);
          return;
        }
      } catch (error) {
        console.log(error);
        navigate(`/event/failure`);
      }
      return;
    }

    try {
      const response = await axiosInstance.post(
        `api/phone-pay/registration/user/${eventId}`,
        Userdata
      );
      window.open(response.data, "_self");
    } catch (error) {
      console.log(error);
    }
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  if (loading) {
    return (
      <>
        <div
          role="status"
          class="w-full min-h-screen flex flex-col items-center justify-center px-2 py-16 sm:px-6 sm:py-24 animate-pulse"
        >
          <div class="w-full max-w-md md:max-w-2xl lg:max-w-4xl space-y-8 bg-gray-900 p-8 rounded-3xl shadow-lg border border-gray-600 flex flex-col md:flex-row md:space-y-0 md:space-x-8">
            <div class="md:w-1/2 space-y-6">
              <div class="h-2.5 bg-gray-700 rounded-full w-48 mb-4"></div>
              <div class="h-2 bg-gray-700 rounded-full max-w-[360px] mb-2.5"></div>
              <div class="h-2 bg-gray-700 rounded-full mb-2.5"></div>
              <div class="h-2 bg-gray-700 rounded-full max-w-[330px] mb-2.5"></div>
              <div class="h-2 bg-gray-700 rounded-full max-w-[300px] mb-2.5"></div>
              <div class="h-2 bg-gray-700 rounded-full max-w-[360px]"></div>
              <div class="h-2.5 bg-gray-700 rounded-full w-48 mb-4"></div>
              <div class="h-2 bg-gray-700 rounded-full max-w-[360px] mb-2.5"></div>
              <div class="h-2 bg-gray-700 rounded-full mb-2.5"></div>
              <div class="h-2 bg-gray-700 rounded-full max-w-[330px] mb-2.5"></div>
              <div class="h-2 bg-gray-700 rounded-full max-w-[300px] mb-2.5"></div>
              <div class="h-2 bg-gray-700 rounded-full max-w-[360px]"></div>
              <div class="h-2.5 bg-gray-700 rounded-full w-48 mb-4"></div>
              <div class="h-2 bg-gray-700 rounded-full max-w-[360px] mb-2.5"></div>
              <div class="h-2 bg-gray-700 rounded-full mb-2.5"></div>
              <div class="h-2 bg-gray-700 rounded-full max-w-[330px] mb-2.5"></div>
              <div class="h-2 bg-gray-700 rounded-full max-w-[300px] mb-2.5"></div>
              <div class="h-2 bg-gray-700 rounded-full max-w-[360px]"></div>
            </div>

            <div class="md:w-1/2 space-y-4 bg-gray-800 p-2 sm:p-8 rounded-lg shadow-lg border border-gray-700">
              <div class="h-2.5 bg-gray-700 rounded-full w-32 mb-4"></div>
              <div class="space-y-2.5">
                <div class="flex items-center justify-between">
                  <div class="h-2.5 bg-gray-700 rounded-full w-32"></div>
                  <div class="h-2.5 bg-gray-700 rounded-full w-32"></div>
                </div>
                <div class="flex items-center justify-between">
                  <div class="h-2.5 bg-gray-700 rounded-full w-32"></div>
                  <div class="h-2.5 bg-gray-700 rounded-full w-32"></div>
                </div>
                <div class="flex items-center justify-between">
                  <div class="h-2.5 bg-gray-700 rounded-full w-32"></div>
                  <div class="h-2.5 bg-gray-700 rounded-full w-32"></div>
                </div>
              </div>
              <div class="h-2.5 bg-gray-700 rounded-full w-32 mb-4"></div>
              <div class="h-2.5 bg-gray-700 rounded-full w-32 mb-2"></div>
              <div class="h-2 bg-gray-700 rounded-full max-w-[480px] mb-2.5"></div>
              <div class="h-2 bg-gray-700 rounded-full max-w-[440px] mb-2.5"></div>
              <div class="h-2 bg-gray-700 rounded-full max-w-[460px] mb-2.5"></div>
              <div class="h-2 bg-gray-700 rounded-full max-w-[360px]"></div>
            </div>
          </div>
          <span class="sr-only">Loading...</span>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="w-full min-h-screen flex flex-col items-center justify-center px-2 py-16 sm:px-6 sm:py-24">
        <div className="w-full max-w-2xl lg:max-w-4xl flex flex-col lg:flex-row items-center bg-gray-900 p-8 rounded-3xl shadow-lg border border-gray-600">
          <div className="w-full lg:w-1/2 p-4">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl font-semibold text-gray-200">
                Delegate Registration
              </h2>
              <p className="mt-1 text-sm text-gray-400">
                Complete the form to proceed with your payment.
              </p>
            </div>
            <form className="mt-8 space-y-6" onSubmit={onSubmitHandler}>
              {/* Other form fields */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Your Name * (As per Aadhar Card) "
                  className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-gray-200 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email *"
                  className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-gray-200 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <p className="text-sm p-1 text-gray-400">
                  <em>
                    You will receive an email shortly. Please check your inbox
                    or spam folder.
                  </em>
                </p>
              </div>

              <div className="relative">
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-gray-200 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  pattern="^\d{10}$"
                  title="Enter a 10-digit phone number without any dashes or spaces."
                  required
                />
              </div>
              <div className="relative">
                <select
                  className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-gray-200 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                  value={educationBackground}
                  onChange={(e) => {
                    setEducationBackground(e.target.value);
                  }}
                  required
                >
                  <option value="" disabled>
                    Select your background
                  </option>
                  <option value="Student">Student</option>
                  <option value="Professional">Professional</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              {/* start of dynamic */}

              {educationBackground === "Student" && (
                <>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Roll Number"
                      className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-gray-200 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                      value={rollNumber || ""}
                      onChange={(e) => setRollNumber(e.target.value)}
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Year"
                      className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-gray-200 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                      value={year || ""}
                      onChange={(e) => setYear(e.target.value)}
                      required
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="College Name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-gray-200 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                      value={college || ""}
                      onChange={(e) => setcollege(e.target.value)}
                    />
                  </div>
                </>
              )}
              {/* End of student */}

              <div className="relative">
                <select
                  className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-gray-200 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                  value={heardFrom}
                  onChange={(e) => setHeardFrom(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    How did you hear about ?
                  </option>
                  <option value="Social Media">Social Media/Group</option>
                  {/* <option value="Newsletter">Newsletter</option> */}
                  <option value="Friend or College">Friend or College</option>
                  <option value="My Friend">My Friend</option>
                  <option value="Other">Other</option>
                  {/* <option value="Community">Community</option> */}
                </select>
              </div>

              {heardFrom === "Community" && (
                <>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Community Name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-gray-200 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                      value={communityAnswer}
                      onChange={(e) => setCommunityAnswer(e.target.value)}
                    />
                  </div>
                </>
              )}

              {heardFrom === "Social Media" && (
                <>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Social Media Name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-gray-200 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                      value={communityAnswer}
                      onChange={(e) => setCommunityAnswer(e.target.value)}
                    />
                  </div>
                </>
              )}

              {heardFrom === "Friend or College" && (
                <>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Friend or College Name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-gray-200 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                      value={communityAnswer}
                      onChange={(e) => setCommunityAnswer(e.target.value)}
                    />
                  </div>
                </>
              )}

              {heardFrom === "Other" && (
                <>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Other Source Name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-gray-200 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                      value={communityAnswer}
                      onChange={(e) => setCommunityAnswer(e.target.value)}
                    />
                  </div>
                </>
              )}
              {/* Coupon Code Section */}
              <div className="relative flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-gray-200 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                />
                <button
                  type="button"
                  onClick={checkCouponCode}
                  className="px-4 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                >
                  Check
                </button>
              </div>
              {/* Validation Message */}
              {couponValidationMessage && (
                <p
                  className={`text-sm ${
                    couponValidationMessage ===
                    "Your discount of ₹99.80 will be refunded back to you within 48 hours."
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {couponValidationMessage}
                </p>
              )}

              {/* Other form fields */}

              <div className="relative">
                <div className="mb-4">
                  <em className="pb-7 text-gray-400">
                    Fields marked with <span className="text-red-500">*</span>{" "}
                    are required.
                  </em>
                  <label className="inline-flex items-center pt-5">
                    <input
                      type="checkbox"
                      className="form-checkbox text-indigo-600 bg-gray-700 border-gray-600"
                      checked={isAgreed}
                      onChange={() => setIsAgreed(!isAgreed)}
                    />
                    <span className="ml-2 text-gray-200">
                      I accept the{" "}
                      <button
                        type="button"
                        onClick={handleModalOpen}
                        className="text-indigo-500 underline"
                      >
                        Terms and Conditions
                      </button>
                    </span>
                  </label>
                </div>
                {spinner ? (
                  <>
                    <button
                      disabled
                      type="button"
                      className={`w-full flex justify-center items-center px-4 py-3 text-white font-medium rounded-lg focus:outline-none duration-300 bg-indigo-600 hover:bg-indigo-500 focus:bg-indigo-700 active:bg-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed ${
                        !isAgreed ? "disabled" : ""
                      }`}
                    >
                      <svg
                        aria-hidden="true"
                        role="status"
                        className="inline w-4 h-4 me-3 text-white animate-spin"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="#E5E7EB"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentColor"
                        />
                      </svg>
                      Loading...
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      type="submit"
                      className={`w-full flex justify-center items-center px-4 py-3 text-white font-medium rounded-lg focus:outline-none duration-300 bg-indigo-600 hover:bg-indigo-500 focus:bg-indigo-700 active:bg-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed ${
                        !isAgreed ? "disabled" : ""
                      }`}
                      disabled={!isAgreed}
                    >
                      {data?.eventPrice === "0"
                        ? "Complete your registration"
                        : "Pay with PhonePay"}
                    </button>
                  </>
                )}
              </div>
            </form>
          </div>
          <div className="w-full lg:w-1/2 mt-10 lg:mt-0 lg:ml-8 p-4 bg-gray-800 rounded-lg shadow-lg border border-gray-700">
            <div className="text-center lg:text-left">
              <h3 className="text-xl font-bold text-gray-200 py-0.5">
                Event Details
              </h3>
              <div className="mt-4 text-sm text-gray-400 space-y-2">
                <p className="flex justify-between items-center">
                  <span className="font-medium text-gray-300">Event Name:</span>
                  <span className="text-gray-300 ">{data?.eventName}</span>
                </p>
                <p className="flex justify-between items-center">
                  <span className="font-medium text-gray-300">Venue:</span>
                  <span className="text-gray-300 ">{data?.eventVenue}</span>
                </p>
                <p className="flex justify-between items-center">
                  <span className="font-medium text-gray-300">Cost:</span>
                  <span className="text-gray-300 font-semibold">
                    {" "}
                    {data.eventPrice == "0" ? (
                      <>
                        <p>FREE</p>
                      </>
                    ) : (
                      <>
                        <p>₹{data.eventPrice}</p>
                      </>
                    )}
                  </span>
                </p>
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-gray-200 ">
                    Important Information
                  </h4>
                  <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
                    <li>
                      Upon successful event registration, please download your
                      ticket from the success page.
                    </li>
                    <li>
                      You will also receive a confirmation email containing a QR
                      code and a message from the event organizer.
                    </li>
                    <li>
                      If you face any problems, escalate them to{" "}
                      <a
                        href="mailto:support@eventaura.tech"
                        className="text-indigo-500"
                      >
                        support@eventaura.tech
                      </a>{" "}
                      for assistance.
                    </li>
                    <li>
                      Check your email regularly for any updates or changes
                      regarding the event schedule.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {isModalOpen && (
          <div
            id="default-modal"
            tabIndex="-1"
            aria-hidden="true"
            className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50"
          >
            <div className="relative p-4 w-full max-w-2xl max-h-full">
              <div className="relative rounded-lg shadow bg-gray-700">
                <div className="flex items-center justify-between p-4 border-b rounded-t border-gray-600">
                  <h3 className="text-xl font-semibold text-white">
                    Terms of Service
                  </h3>
                  <button
                    type="button"
                    className="text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center hover:bg-gray-600 hover:text-white"
                    onClick={handleModalClose}
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="p-4 space-y-4 overflow-y-auto max-h-96">
                  <UserEULA />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default EventRegistration;
