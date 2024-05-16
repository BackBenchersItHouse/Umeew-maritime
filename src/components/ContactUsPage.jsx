import "@/components/Style/Umeew.css";
import { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
const ContactUsPage = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="main-div">
      <HelmetProvider>
        <Helmet>
          <title>UMEEW | Contact Us</title>
        </Helmet>
      </HelmetProvider>

      <div className="part-1-2 my-10 ">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10">
        <div
  className={`fixed inset-0 flex items-center justify-center z-50 ${
    openModal ? 'scale-1 opacity-1 duration-300' : 'scale-0 opacity-0 duration-150'
  }`}
  onClick={() => setOpenModal(false)}
>

</div>

          {/* part one div form section basically */}
          <div className="part1 basis-1/2 flex flex-col items-center  p-8 rounded-xl shadow-md">
            <h1 className="typewriter-anim   lg:text-4xl md:text-3xl text-2xl font-semibold my-10 text-center">
              Leave A Message
            </h1>
            <form action="https://getform.io/f/pamqxeqa" method="POST" className="w-full max-w-lg ">
                {/* modal */}
  <div
  className={`fixed inset-0 flex items-center justify-center z-50 ${
    openModal ? 'scale-100 opacity-100 duration-300' : 'scale-0 opacity-0 duration-150'
  }`}
  onClick={() => setOpenModal(false)}
>
  <div
    onClick={(e_) => e_.stopPropagation()}
    className="max-w-md rounded-lg bg-slate-50 p-6 drop-shadow-lg dark:bg-gray-800 dark:text-white"
  >
    <h1 className="mb-2 text-2xl font-semibold">Thank You!</h1>
    <p className="mb-5 text-sm opacity-80">We appreciate your support and hope you enjoy staying With BackbencherItHouse .</p>
    <div className="flex justify-center">
  
      <button
        onClick={() => setOpenModal(false)}
        className="rounded-md border border-rose-600 px-6 py-[6px] text-rose-600 duration-150 hover:bg-rose-600 hover:text-white"
      >
        Close
      </button>
    </div>
  </div>
</div>

  {/* modal */}
              <div className="flex flex-wrap  -mx-3 mb-6">
                <div className="w-full md:w-1/2  px-3 mb-6 md:mb-0">
                  <input
                    className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none bg-transparent "
                    id="grid-first-name"
                    type="text"
                    placeholder="Name"
                    name="name"
                    required
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <input
                    className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none bg-transparent "
                    id="grid-last-name"
                    type="email"
                    placeholder="E-Mail"
                    name="email"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6 md:mb-0">
                <div className="w-full px-3 md:w-1/2 mb-6 md:mb-0">
                  <input
                    className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none bg-transparent "
                    id="grid-password"
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    required
                  />
                </div>
                <div className="w-full px-3 md:w-1/2 mb-6 md:mb-0">
                  <input
                    className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none bg-transparent "
                    id="grid-password"
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    required
                  />
                </div>
                <div className="w-full px-3">
                  <textarea
                    className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none bg-transparent "
                    rows={5}
                    id="grid-password"
                    type="text"
                    placeholder="Message"
                    name="message"
                    required
                  />
                </div>
              </div>
              
              <button
                type="submit"
                className={`w-full px-6 md:px-8 lg:px-8 py-2 md:py-3 lg:py-3 bg-secondary rounded font-semibold text-white outline outline-1 capitalize transition ease duration-300 hover:translate-x-1 hover:-translate-y-1 `}

                onClick={() => setOpenModal(true)}
              >
                Contact Us
              </button>

                        <div onClick={(e_) => e_.stopPropagation()} className={`text- absolute max-w-md rounded-lg bg-white p-6 drop-shadow-lg dark:bg-gray-800 dark:text-white ${openModal ? 'scale-1 opacity-1 duration-300' : 'scale-0 opacity-0 duration-150'}`}>
            <h1 className="mb-2 text-2xl font-semibold">Welcome to NavigateUI!</h1>
            <p className="mb-5 text-sm opacity-80">Elevate your React projects with beautifully crafted components designed for TailwindCSS.</p>
            <div className="flex justify-between">
              <button onClick={() => setOpenModal(false)} className="me-2 rounded-md bg-indigo-600 hover:bg-indigo-700 px-6 py-[6px] text-white">
                Ok
              </button>
              <button onClick={() => setOpenModal(false)} className="rounded-md border border-rose-600 px-6 py-[6px] text-rose-600 duration-150 hover:bg-rose-600 hover:text-white">
                Cancel
              </button>
            </div>
          </div>
            </form>
          </div>

          {/* part two div information section basically */}
          <div className="  part2    text-2xl basis-2/3  p-8 rounded-xl shadow-md">
            <h1 className="typewriter-anim   lg:text-4xl md:text-3xl text-2xl font-semibold my-10 text-center">
              Get Closer With Us
            </h1>
            <p className=" text-sm    pr-4 text-gray ">
              United Marine Engineering & Electrical Works is your reliable
              partner for all your maritime needs. Since 2005, we've provided a
              comprehensive suite of services designed to keep your vessel
              operational and efficient, no matter where you are in the world.
            </p>

            <div className="flex flex-col gap-5 mt-8">
              <div className="flex  gap-4">
                <span>
                  {/* map icon */}
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.25 1.58771C19.3329 0.962498 20.6671 0.962498 21.75 1.58771L35.0705 9.27831C36.1534 9.90353 36.8205 11.059 36.8205 12.3094V27.6906C36.8205 28.941 36.1534 30.0965 35.0705 30.7217L21.75 38.4123C20.6671 39.0375 19.3329 39.0375 18.25 38.4123L4.92949 30.7217C3.84659 30.0965 3.17949 28.941 3.17949 27.6906V12.3094C3.17949 11.059 3.84659 9.90353 4.92949 9.27831L18.25 1.58771Z"
                      stroke="black"
                    />
                    <path
                      d="M17.2917 18.3333C17.2917 16.8376 18.5042 15.625 20 15.625C21.4958 15.625 22.7083 16.8376 22.7083 18.3333C22.7083 19.8291 21.4958 21.0417 20 21.0417C18.5042 21.0417 17.2917 19.8291 17.2917 18.3333Z"
                      fill="#FF8C00"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.1446 17.3978C13.431 13.9237 16.3341 11.25 19.82 11.25H20.18C23.6659 11.25 26.5691 13.9237 26.8554 17.3978C27.0096 19.2683 26.4318 21.1257 25.2438 22.5786L21.2496 27.4634C20.6037 28.2532 19.3963 28.2532 18.7505 27.4634L14.7563 22.5786C13.5682 21.1257 12.9904 19.2683 13.1446 17.3978ZM20 14.375C17.8139 14.375 16.0417 16.1472 16.0417 18.3333C16.0417 20.5195 17.8139 22.2917 20 22.2917C22.1861 22.2917 23.9583 20.5195 23.9583 18.3333C23.9583 16.1472 22.1861 14.375 20 14.375Z"
                      fill="#FF8C00"
                    />
                  </svg>
                  {/* map icon */}
                </span>
                <span className="text-xl">
                  South Side of Aziz Mia Masjid Circle,
                  <br />
                  37No. Ward Munir Nagar,
                  <br />
                  Boropole, Chattogram, Bangladesh.
                </span>
              </div>
              
              <div className="grid grid-cols-1 gap-5 ">
               <div className="flex gap-4">
               <span>
                  {/* mail icon */}
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.25 1.58771C19.3329 0.962498 20.6671 0.962498 21.75 1.58771L35.0705 9.27831C36.1534 9.90353 36.8205 11.059 36.8205 12.3094V27.6906C36.8205 28.941 36.1534 30.0965 35.0705 30.7217L21.75 38.4123C20.6671 39.0375 19.3329 39.0375 18.25 38.4123L4.92949 30.7217C3.84659 30.0965 3.17949 28.941 3.17949 27.6906V12.3094C3.17949 11.059 3.84659 9.90353 4.92949 9.27831L18.25 1.58771Z"
                      stroke="black"
                    />
                    <path
                      d="M11.25 17.2242V24.375C11.25 25.7557 12.3693 26.875 13.75 26.875H26.25C27.6307 26.875 28.75 25.7557 28.75 24.375V17.2242L21.3102 21.8026C20.5067 22.297 19.4933 22.297 18.6898 21.8026L11.25 17.2242Z"
                      fill="#FF8C00"
                    />
                    <path
                      d="M28.75 15.7565V15.625C28.75 14.2443 27.6307 13.125 26.25 13.125H13.75C12.3693 13.125 11.25 14.2443 11.25 15.625V15.7565L19.3449 20.738C19.7466 20.9852 20.2534 20.9852 20.6551 20.738L28.75 15.7565Z"
                      fill="#FF8C00"
                    />
                  </svg>

                  {/* mail icon */}
                </span>
                <a href="mailto:info@umeew.com">
                  <span className="text-slate-800 text-xl">
                  info@umeew.com
                  </span>
                </a>
               </div>
              <div className="flex gap-4">
              <span>
                  {/* mail icon */}
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.25 1.58771C19.3329 0.962498 20.6671 0.962498 21.75 1.58771L35.0705 9.27831C36.1534 9.90353 36.8205 11.059 36.8205 12.3094V27.6906C36.8205 28.941 36.1534 30.0965 35.0705 30.7217L21.75 38.4123C20.6671 39.0375 19.3329 39.0375 18.25 38.4123L4.92949 30.7217C3.84659 30.0965 3.17949 28.941 3.17949 27.6906V12.3094C3.17949 11.059 3.84659 9.90353 4.92949 9.27831L18.25 1.58771Z"
                      stroke="black"
                    />
                    <path
                      d="M11.25 17.2242V24.375C11.25 25.7557 12.3693 26.875 13.75 26.875H26.25C27.6307 26.875 28.75 25.7557 28.75 24.375V17.2242L21.3102 21.8026C20.5067 22.297 19.4933 22.297 18.6898 21.8026L11.25 17.2242Z"
                      fill="#FF8C00"
                    />
                    <path
                      d="M28.75 15.7565V15.625C28.75 14.2443 27.6307 13.125 26.25 13.125H13.75C12.3693 13.125 11.25 14.2443 11.25 15.625V15.7565L19.3449 20.738C19.7466 20.9852 20.2534 20.9852 20.6551 20.738L28.75 15.7565Z"
                      fill="#FF8C00"
                    />
                  </svg>

                  {/* mail icon */}
                </span>
                <a href="mailto: technical@umeew.com">
                  <span className="text-slate-800 text-xl">
                  technical@umeew.com
                  </span>
                </a>
              </div>
              </div>
              <div className="flex items-center gap-4 mb-5 conncet-anim ">
                <span>
                  {/* call icon  */}
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.25 1.58771C19.3329 0.962498 20.6671 0.962498 21.75 1.58771L35.0705 9.27831C36.1534 9.90353 36.8205 11.059 36.8205 12.3094V27.6906C36.8205 28.941 36.1534 30.0965 35.0705 30.7217L21.75 38.4123C20.6671 39.0375 19.3329 39.0375 18.25 38.4123L4.92949 30.7217C3.84659 30.0965 3.17949 28.941 3.17949 27.6906V12.3094C3.17949 11.059 3.84659 9.90353 4.92949 9.27831L18.25 1.58771Z"
                      stroke="black"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.25 13.75C11.25 12.3693 12.3693 11.25 13.75 11.25H14.893C15.61 11.25 16.235 11.738 16.4089 12.4335L17.3304 16.1195C17.4828 16.7294 17.2549 17.3713 16.752 17.7485L15.674 18.557C15.5621 18.641 15.5377 18.7639 15.5692 18.8497C16.5154 21.4329 18.5671 23.4846 21.1503 24.4308C21.2361 24.4623 21.359 24.4379 21.443 24.326L22.2515 23.248C22.6287 22.7451 23.2706 22.5172 23.8805 22.6696L27.5665 23.5911C28.262 23.765 28.75 24.39 28.75 25.107V26.25C28.75 27.6307 27.6307 28.75 26.25 28.75H24.375C17.1263 28.75 11.25 22.8737 11.25 15.625V13.75Z"
                      fill="#FF8C00"
                    />
                  </svg>

                  {/* call icon */}
                </span>

                <a href="https://wa.me/8801682036423" target="_blank">
                  <span className="text-slate-800 text-xl">+8801682036423,</span>
                </a>
                  <a href="tel:+88031717297"><span className="text-slate-800 text-xl"> +88031717297</span></a>
              </div>
            </div>

            <div className="grid grid-cols-1 items-center gap-4 mb-5">
              <span className="text-3xl font-semibold mt-7 mb-10 text-center">
                Follow us
              </span>

              <span className="flex gap-10 justify-center items-center">
                <span className="hover:translate-y-1 ease duration-500">
                  <a href="https://www.facebook.com/" target="_blank">
                    {/* fb icon */}
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 60 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M28.25 1.58771C29.3329 0.962498 30.6671 0.962498 31.75 1.58771L53.7308 14.2783C54.8137 14.9035 55.4808 16.059 55.4808 17.3094V42.6906C55.4808 43.941 54.8137 45.0965 53.7308 45.7217L31.75 58.4123C30.6671 59.0375 29.3329 59.0375 28.25 58.4123L6.26924 45.7217C5.18633 45.0965 4.51924 43.941 4.51924 42.6906V17.3094C4.51924 16.059 5.18633 14.9035 6.26924 14.2783L28.25 1.58771Z"
                        stroke="black"
                      />
                      <path
                        d="M33.2685 15C31.214 15 29.2437 15.801 27.791 17.2268C26.3383 18.6526 25.5222 20.5864 25.5222 22.6027V26.8356H21.3768C21.1687 26.8356 21 27.0012 21 27.2055V32.7945C21 32.9988 21.1687 33.1644 21.3768 33.1644H25.5222V44.6301C25.5222 44.8344 25.6909 45 25.899 45H31.5936C31.8017 45 31.9704 44.8344 31.9704 44.6301V33.1644H36.1525C36.3254 33.1644 36.4761 33.0489 36.5181 32.8842L37.9417 27.2952C38.0012 27.0617 37.8213 26.8356 37.5761 26.8356H31.9704V22.6027C31.9704 22.2649 32.1072 21.9408 32.3506 21.7019C32.5941 21.463 32.9242 21.3288 33.2685 21.3288H37.6232C37.8313 21.3288 38 21.1632 38 20.9589V15.3699C38 15.1656 37.8313 15 37.6232 15H33.2685Z"
                        fill="#FF8C00"
                      />
                    </svg>
                    {/* fb icon */}
                  </a>
                </span>
                <span className="hover:translate-y-1 ease duration-500">
                  <a href="https://www.instagram.com/" target="_blank">
                    {/* insta icon */}
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 60 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M28.25 1.58771C29.3329 0.962498 30.6671 0.962498 31.75 1.58771L53.7308 14.2783C54.8137 14.9035 55.4808 16.059 55.4808 17.3094V42.6906C55.4808 43.941 54.8137 45.0965 53.7308 45.7217L31.75 58.4123C30.6671 59.0375 29.3329 59.0375 28.25 58.4123L6.26924 45.7217C5.18633 45.0965 4.51924 43.941 4.51924 42.6906V17.3094C4.51924 16.059 5.18633 14.9035 6.26924 14.2783L28.25 1.58771Z"
                        stroke="black"
                      />
                      <path
                        d="M38.01 20.19C37.6541 20.19 37.306 20.2956 37.0099 20.4933C36.714 20.6911 36.4833 20.9723 36.347 21.3012C36.2108 21.6301 36.1752 21.992 36.2446 22.3411C36.3141 22.6903 36.4854 23.011 36.7372 23.2628C36.989 23.5145 37.3097 23.686 37.6588 23.7554C38.008 23.8249 38.3699 23.7892 38.6988 23.653C39.0278 23.5167 39.3088 23.286 39.5067 22.99C39.7044 22.694 39.81 22.346 39.81 21.99C39.81 21.5126 39.6204 21.0548 39.2827 20.7172C38.9452 20.3796 38.4874 20.19 38.01 20.19ZM44.91 23.82C44.8809 22.5754 44.6478 21.3441 44.22 20.175C43.8385 19.1747 43.245 18.2689 42.48 17.52C41.7372 16.7511 40.8294 16.1613 39.825 15.795C38.659 15.3542 37.4262 15.1158 36.18 15.09C34.59 15 34.08 15 30 15C25.92 15 25.41 15 23.82 15.09C22.5737 15.1158 21.341 15.3542 20.175 15.795C19.1725 16.165 18.2654 16.7543 17.52 17.52C16.7511 18.2628 16.1613 19.1707 15.795 20.175C15.3542 21.341 15.1158 22.5737 15.09 23.82C15 25.41 15 25.92 15 30C15 34.08 15 34.59 15.09 36.18C15.1158 37.4262 15.3542 38.6589 15.795 39.825C16.1613 40.8293 16.7511 41.7372 17.52 42.48C18.2654 43.2456 19.1725 43.835 20.175 44.205C21.341 44.6457 22.5737 44.8842 23.82 44.91C25.41 45 25.92 45 30 45C34.08 45 34.59 45 36.18 44.91C37.4262 44.8842 38.659 44.6457 39.825 44.205C40.8294 43.8387 41.7372 43.2489 42.48 42.48C43.2483 41.7339 43.8424 40.8273 44.22 39.825C44.6478 38.6559 44.8809 37.4246 44.91 36.18C44.91 34.59 45 34.08 45 30C45 25.92 45 25.41 44.91 23.82ZM42.21 36C42.199 36.9522 42.0267 37.8956 41.7 38.79C41.4604 39.4428 41.0758 40.0326 40.575 40.515C40.0884 41.0108 39.4998 41.3946 38.85 41.64C37.9555 41.9666 37.0122 42.1391 36.06 42.15C34.56 42.225 34.005 42.24 30.06 42.24C26.115 42.24 25.56 42.24 24.06 42.15C23.0713 42.1685 22.0869 42.0162 21.15 41.7C20.5287 41.4422 19.967 41.0592 19.5 40.575C19.0021 40.0931 18.6223 39.5028 18.39 38.85C18.0238 37.9427 17.8207 36.9779 17.79 36C17.79 34.5 17.7 33.945 17.7 30C17.7 26.055 17.7 25.5 17.79 24C17.7967 23.0266 17.9744 22.0619 18.315 21.15C18.5791 20.5169 18.9844 19.9525 19.5 19.5C19.9557 18.9842 20.5189 18.5746 21.15 18.3C22.0643 17.9701 23.028 17.7976 24 17.79C25.5 17.79 26.055 17.7 30 17.7C33.945 17.7 34.5 17.7 36 17.79C36.9522 17.8009 37.8955 17.9734 38.79 18.3C39.4716 18.553 40.0834 18.9643 40.575 19.5C41.0665 19.9608 41.4507 20.5241 41.7 21.15C42.0334 22.0634 42.2059 23.0277 42.21 24C42.285 25.5 42.3 26.055 42.3 30C42.3 33.945 42.285 34.5 42.21 36ZM30 22.305C28.4787 22.308 26.9924 22.7618 25.729 23.6091C24.4655 24.4565 23.4816 25.6593 22.9014 27.0656C22.3213 28.472 22.1711 30.0188 22.4697 31.5104C22.7683 33.0021 23.5024 34.3718 24.5791 35.4465C25.6559 36.5211 27.027 37.2525 28.5193 37.5482C30.0116 37.844 31.5581 37.6907 32.9632 37.1078C34.3685 36.525 35.5694 35.5386 36.4142 34.2735C37.2591 33.0084 37.71 31.5213 37.71 30C37.712 28.9876 37.5138 27.9849 37.1268 27.0494C36.74 26.1139 36.1719 25.2642 35.4553 24.5491C34.7388 23.8339 33.8878 23.2675 32.9517 22.8824C32.0154 22.4973 31.0124 22.301 30 22.305ZM30 34.995C29.0121 34.995 28.0464 34.7021 27.2249 34.1532C26.4035 33.6044 25.7633 32.8242 25.3852 31.9115C25.0072 30.9987 24.9082 29.9945 25.101 29.0255C25.2937 28.0566 25.7694 27.1666 26.468 26.468C27.1666 25.7694 28.0566 25.2937 29.0255 25.101C29.9945 24.9082 30.9988 25.0072 31.9114 25.3852C32.8242 25.7633 33.6043 26.4035 34.1532 27.2249C34.702 28.0463 34.995 29.0121 34.995 30C34.995 30.656 34.8659 31.3055 34.6147 31.9115C34.3638 32.5175 33.9958 33.0681 33.5321 33.5321C33.0681 33.9959 32.5176 34.3638 31.9114 34.6148C31.3054 34.8659 30.6559 34.995 30 34.995Z"
                        fill="#FF8C00"
                      />
                    </svg>
                    {/* insta icon */}
                  </a>
                </span>
                <span className="hover:translate-y-1 ease duration-500">
                  <a href="https://www.linkedin.com/" target="_blank">
                    {/* linked in  */}
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 60 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M28.25 1.58771C29.3329 0.962498 30.6671 0.962498 31.75 1.58771L53.7308 14.2783C54.8137 14.9035 55.4808 16.059 55.4808 17.3094V42.6906C55.4808 43.941 54.8137 45.0965 53.7308 45.7217L31.75 58.4123C30.6671 59.0375 29.3329 59.0375 28.25 58.4123L6.26924 45.7217C5.18633 45.0965 4.51924 43.941 4.51924 42.6906V17.3094C4.51924 16.059 5.18633 14.9035 6.26924 14.2783L28.25 1.58771Z"
                        stroke="black"
                      />
                      <path
                        d="M18.4 15C16.5222 15 15 16.4827 15 18.3117C15 20.1407 16.5222 21.6234 18.4 21.6234C20.2778 21.6234 21.8 20.1407 21.8 18.3117C21.8 16.4827 20.2778 15 18.4 15Z"
                        fill="#FF8C00"
                      />
                      <path
                        d="M15.2 24.3506C15.0895 24.3506 15 24.4379 15 24.5455V44.8052C15 44.9128 15.0895 45 15.2 45H21.6C21.7105 45 21.8 44.9128 21.8 44.8052V24.5455C21.8 24.4379 21.7105 24.3506 21.6 24.3506H15.2Z"
                        fill="#FF8C00"
                      />
                      <path
                        d="M25.6 24.3506C25.4895 24.3506 25.4 24.4379 25.4 24.5455V44.8052C25.4 44.9128 25.4895 45 25.6 45H32C32.1105 45 32.2 44.9128 32.2 44.8052V33.8961C32.2 33.1211 32.5161 32.3779 33.0787 31.8299C33.6413 31.2819 34.4044 30.974 35.2 30.974C35.9956 30.974 36.7587 31.2819 37.3213 31.8299C37.8839 32.3779 38.2 33.1211 38.2 33.8961V44.8052C38.2 44.9128 38.2895 45 38.4 45H44.8C44.9105 45 45 44.9128 45 44.8052V31.3718C45 27.5899 41.623 24.6312 37.7597 24.9732C36.5683 25.0787 35.3903 25.3672 34.2904 25.8264L32.2 26.699V24.5455C32.2 24.4379 32.1105 24.3506 32 24.3506H25.6Z"
                        fill="#FF8C00"
                      />
                    </svg>
                    {/* linked in  */}
                  </a>
                </span>
                <span className="hover:translate-y-1 ease duration-500">
                  <a href="https://twitter.com/" target="_blank">
                    {/* twit icon */}
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 60 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M28.25 1.58771C29.3329 0.962498 30.6671 0.962498 31.75 1.58771L53.7308 14.2783C54.8137 14.9035 55.4808 16.059 55.4808 17.3094V42.6906C55.4808 43.941 54.8137 45.0965 53.7308 45.7217L31.75 58.4123C30.6671 59.0375 29.3329 59.0375 28.25 58.4123L6.26924 45.7217C5.18633 45.0965 4.51924 43.941 4.51924 42.6906V17.3094C4.51924 16.059 5.18633 14.9035 6.26924 14.2783L28.25 1.58771Z"
                        stroke="black"
                      />
                      <path
                        d="M38.6268 15H43.2269L33.1769 27.7077L45 45H35.7426L28.4919 34.5123L20.1954 45H15.5924L26.342 31.4077L15 15H24.4924L31.0464 24.5862L38.6268 15ZM37.0122 41.9538H39.5613L23.1074 17.8862H20.372L37.0122 41.9538Z"
                        fill="#FF8C00"
                      />
                    </svg>
                    {/* twit icon */}
                  </a>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* map */}
      {/* part three div map section basically */}
      <div className="part3 my-16 ">
        <div className="">
          <h1 className=" typewriter-anim   lg:text-4xl md:text-3xl text-2xl font-semibold my-10 text-center">
            Find Us On Google Map
          </h1>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.817511993117!2d91.77688477391928!3d22.32274034208425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acdf36d2d89ee9%3A0xc928c75ddd6fa59a!2sUnited%20Marine%20Engineering%20and%20Electrical%20Works!5e0!3m2!1sen!2sbd!4v1711208148165!5m2!1sen!2sbd"
            style={{ border: "" }}
            className="rounded-lg px-4 w-[100%] h-[450px]   "
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
