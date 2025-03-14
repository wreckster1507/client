import React, { useEffect, useState } from "react";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import CopyButton from "../EventOnboarding/utils/CopyButton";
import FormattedDate from "../EventOnboarding/utils/FormattedDate";
import axios from "axios";
import cryptoRandom from "crypto-random-string";
import axiosInstance from "../../api/axiosInstance";

const EventsDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [participants, setParticipants] = useState(null);
  const [loading, setLoading] = useState(true);
  const p = cryptoRandom({ length: 10, type: "alphanumeric" });
  const secureId = cryptoRandom({ length: 10, type: "alphanumeric" });
  const pId = cryptoRandom({ length: 10, type: "url-safe" });
  const postSecureId = cryptoRandom({ length: 10, type: "numeric" });
  // console.log(id);

  useEffect(() => {
    const fetchApi = async () => {
      if (location.pathname === "/event/67811eaa97c498fefc82659c") {
        navigate("/event/6782a2e697c498fefc827439");
        window.location.reload();
        console.log("yes");
      }
      try {
        // const response = await axios.get(
        //   `https://eventaura-server-api.onrender.com/event/${id}`
        // );
        const response = await axiosInstance.get(`/event/${id}`);
        setData(response.data.data);
        // console.log(response.data.data);
        console.log(location.pathname);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApi();
  }, [id]);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        // const result = await axios.get(
        //   `https://eventaura-server-api.onrender.com/participants/event/${id}`
        // );
        const result = await axiosInstance.get(`/participants/event/${id}`);
        setParticipants(result.data);
        console.log(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApi();
  }, [id]);

  if (loading) {
    return (
      <div
        role="status"
        className="max-w md:m-10 m-5 p-4 space-y-4 border  divide-y  rounded shadow animate-pulse divide-gray-700 md:p-6 border-gray-700"
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="h-2.5  rounded-full bg-gray-600 w-24 mb-2.5"></div>
            <div className="w-32 h-2  rounded-full bg-gray-700"></div>
          </div>
          <div className="h-2.5  rounded-full bg-gray-700 w-12"></div>
        </div>
        <div className="flex items-center justify-between pt-4">
          <div>
            <div className="h-2.5  rounded-full bg-gray-600 w-24 mb-2.5"></div>
            <div className="w-32 h-2  rounded-full bg-gray-700"></div>
          </div>
          <div className="h-2.5  rounded-full bg-gray-700 w-12"></div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  const successfulParticipants = participants?.filter(
    (participant) => participant.paymentData?.data?.responseCode === "SUCCESS"
  ).length;
  const isEventClosed =
    new Date(data.eventLastDate) < new Date() ||
    successfulParticipants >= data.eventRegistrationLimit;

  return (
    <>
      {data && (
        <>
          <header>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
              <div className="sm:flex sm:items-center sm:justify-center">
                <div className="text-center">
                  <h1 className="mt-1.5 text-4xl sm:text-4xl font-semibold tracking-tight leading-tight text-indigo-600">
                    {data.eventName}
                  </h1>
                  <p className="mt-1.5 text-xs text-gray-200">
                    ✨Amazing isn't it✨
                  </p>
                  <p className="mt-1.5 text-xs text-gray-200">
                    Want to know more about the event? 🤔
                  </p>
                </div>
              </div>
            </div>
          </header>
          <div className="flow-root rounded-lg border py-3 shadow-sm border-gray-700 mx-7 sm:mx-28">
            <dl className="-my-3 divide-y text-sm divide-gray-700">
              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-white">What event ? 🤔</dt>
                <dd className="sm:col-span-2 text-gray-200">
                  {data.eventName}
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-white">
                  Who is Conducting ❓❓
                </dt>
                <dd className="sm:col-span-2 text-gray-200">
                  {data.eventHostedBy}
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-white">Where 📍</dt>
                <dd className="sm:col-span-2 text-gray-200">
                  {data.eventVenue}
                </dd>
              </div>
              <div
                className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4 cursor-pointer"
                onClick={() => window.open(data.eventVenueUrl, "_blank")}
              >
                <dt className="font-semibold text-white">
                  Location 📌 (Google Maps Link)
                </dt>
                <dd className="sm:col-span-2 text-gray-100 flex items-center">
                  <button className="flex items-center px-3 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      id="google-maps"
                    >
                      <path
                        fill="#4285f4"
                        d="M25.3959 8.8345l-.0039.0038c.0837.2319.1617.4667.2285.7062C25.5527 9.3047 25.48 9.067 25.3959 8.8345zM16 2.23L8.929 5.1593 12.9916 9.222A4.2486 4.2486 0 0 1 19.0208 15.21L25 9.23l.392-.392A9.9872 9.9872 0 0 0 16 2.23z"
                      ></path>
                      <path
                        fill="#ffba00"
                        d="M16,16.4733A4.25,4.25,0,0,1,12.9916,9.222L8.929,5.1593A9.9683,9.9683,0,0,0,6,12.23c0,4.4057,2.2651,7.1668,4.93,10,.1787.1828.3274.3852.4959.5746l7.5608-7.5609A4.2341,4.2341,0,0,1,16,16.4733Z"
                      ></path>
                      <path
                        fill="#0066da"
                        d="M16,2.23a10,10,0,0,0-10,10,11.0918,11.0918,0,0,0,.5454,3.4546l12.8505-12.85A9.9563,9.9563,0,0,0,16,2.23Z"
                      ></path>
                      <path
                        fill="#00ac47"
                        d="M16.9011,29.12a21.83,21.83,0,0,1,4.032-6.8966C23.7976,19.3129,26,16.636,26,12.23a9.9585,9.9585,0,0,0-.6041-3.3958l-13.97,13.97A18.0436,18.0436,0,0,1,15.0173,29.08.9975.9975,0,0,0,16.9011,29.12Z"
                      ></path>
                      <path
                        fill="#0066da"
                        d="M10.93 22.23c.1787.1828.3274.3852.4959.5746h0C11.257 22.6155 11.1083 22.4131 10.93 22.23zM7.207 7.4637A9.9357 9.9357 0 0 0 6.45 9.2566 9.9429 9.9429 0 0 1 7.207 7.4637zM6.45 9.2566a9.9522 9.9522 0 0 0-.398 1.9513A9.9537 9.9537 0 0 1 6.45 9.2566z"
                        opacity=".5"
                      ></path>
                      <path
                        fill="#fff"
                        d="M15.1957 29.3989c.02.0248.0445.0422.0664.0644C15.24 29.4411 15.2156 29.4236 15.1957 29.3989zM15.7874 29.7429l.04.0066zM13.6216 25.9269c-.0371-.067-.0679-.1382-.1059-.2047C13.5533 25.789 13.5849 25.86 13.6216 25.9269zM15.0173 29.08q-.3069-.9036-.6906-1.7566C14.5793 27.8937 14.8127 28.4771 15.0173 29.08zM15.5269 29.6563c-.0229-.0112-.0463-.0207-.0684-.0338C15.4809 29.6356 15.5036 29.6452 15.5269 29.6563zM19.7117 23.7529c-.249.3474-.4679.7125-.6927 1.0741C19.2431 24.465 19.4633 24.1006 19.7117 23.7529z"
                      ></path>
                      <polygon
                        fill="#fff"
                        points="23.322 19.553 23.322 19.553 23.322 19.553 23.322 19.553"
                      ></polygon>
                      <path
                        fill="#fff"
                        d="M17.0468 28.774h0q.3516-.887.7561-1.7428C17.5316 27.6006 17.2812 28.1826 17.0468 28.774zM18.68 25.3584c-.2879.4957-.55 1.0068-.8 1.5242C18.13 26.3647 18.3931 25.8547 18.68 25.3584z"
                      ></path>
                      <path
                        fill="#ea4435"
                        d="M8.929,5.1593A9.9683,9.9683,0,0,0,6,12.23a11.0918,11.0918,0,0,0,.5454,3.4546L13,9.23Z"
                      ></path>
                    </svg>
                    Open in Google Maps
                  </button>
                </dd>
              </div>
              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-white">When ? 🕓</dt>
                <dd className="sm:col-span-2 text-gray-200">
                  <FormattedDate dateString={data.eventDate} />
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-white">How much? 💸</dt>
                <dd className="sm:col-span-2 text-gray-200">
                  {data.eventPrice === 0 ? "FREE" : `₹${data.eventPrice}`}
                </dd>
              </div>
              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-white">
                  Last Date to apply ? 🎇
                </dt>
                <dd className="sm:col-span-2 text-gray-200">
                  <FormattedDate dateString={data.eventLastDate} />
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-white">Why this event ?</dt>
                {/* <dd className="sm:col-span-2 text-gray-200">
                  {data.eventDescription}
                </dd> */}
                <dd className="sm:col-span-2 text-gray-200">
  {data.eventDescription.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ))}
</dd>

              </div>
              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-white">Contact Details</dt>
                <dd className="sm:col-span-2 text-gray-200">
                  {data.eventManagerMail}
                </dd>
              </div>
            </dl>
          </div>
          <div className="flex justify-center">
            {data.eventStaus === true && !isEventClosed ? (
              <Link
                to={`/event/secure/v3/${p}/${secureId}/${pId}/${id}/${postSecureId}`}
                className="flex bg-indigo-600 px-5 py-3 text-center text-sm font-semibold text-gray-100 transition-transform transform hover:bg-indigo-700 hover:scale-105 hover:shadow-lg hover:text-white rounded-3xl my-10 items-center justify-center"
              >
                Reserve your seat Now!!
              </Link>
            ) : (
              <span className="flex bg-indigo-600 px-5 py-3 text-center text-sm font-semibold text-gray-100 transition-transform transform hover:bg-indigo-700 hover:scale-105 hover:shadow-lg hover:text-white rounded-3xl my-10 items-center justify-center opacity-50 cursor-not-allowed">
                Oops the registrations are closed 😔
              </span>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default EventsDetail;
