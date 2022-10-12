import React from 'react'

const Footer = () => {
  return (
    <div className="bg-admit-dark-blue">
     <footer className="text-white body-font bg-admit-dark-blue">
          <div className="container px-5 py-48 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap  flex-wrap flex-col divide-y">
            {/* <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <img src={Admit} alt="Admit logo"/>
          <span className="ml-3 text-xl">Admit AS</span>
        </a>
        <p className="mt-2 text-sm text-gray-500">#weadmit</p>
      </div> */}
            <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center ">
              <div className="lg:w-1/4 md:w-1/2 w-full px-4 ">
                <h2 className="title-font font-medium text-white tracking-widest text-base mb-3">
                  Tjenester
                </h2>
                <nav className="list-none mb-10">
                  <li>
                    <a href="/avatar" className="text-white hover:text-gray-300 cursor-pointer text-sm">
                      Admit Avatar
                    </a>
                  </li>
                  <li>
                    <a href="/studio" className="text-white hover:text-gray-300 cursor-pointer text-sm">
                      Admit Studio
                    </a>
                  </li>
                  <li>
                    <a href="/lounge" className="text-white hover:text-gray-300 cursor-pointer text-sm">
                      Admit Lounge
                    </a>
                  </li>
                  {/* <li>
              <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
            </li> */}
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <div href="/lounge" className="title-font font-medium text-gray-200 tracking-widest text-base mb-3 ">
                Ressurser
                </div>
                <nav className="list-none mb-10">
                  <li>
                    <a href="/lounge" className="text-white hover:text-gray-300 cursor-pointer text-sm">
                      Admit Lounge
                    </a>
                  </li>
                  <li>
                    <a href="/post" className="text-white hover:text-gray-300 cursor-pointer text-sm">
                      Blogg
                    </a>
                  </li>
                  <li>
                    <a href="/kontakt" className="text-white hover:text-gray-300 cursor-pointer text-sm">
                      Kontakt
                    </a>
                  </li>
                  {/* <li>
              <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
            </li> */}
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-200 tracking-widest text-base mb-3 ">
                  Sosialt
                </h2>
                <nav className="list-none mb-10">
                  <li>
                    <a href="https://www.facebook.com/admit.no" className="text-white hover:text-gray-300 cursor-pointer text-sm">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/admit.no/" className="text-white hover:text-gray-300 cursor-pointer text-sm">
                      instagram
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/admit-no" className="text-white hover:text-gray-300 cursor-pointer text-sm">
                      LinkedIn
                    </a>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-200 tracking-widest text-base mb-3 ">
                  Personvern
                </h2>
                <nav className="list-none mb-10">
                  <li>
                    <a href="https://www.privacypolicytemplate.net/live.php?token=EIXXz3L3UVYBS9bKb5WKmUcvlDtJQRzH" className="text-white hover:text-gray-300 cursor-pointer text-sm">
                      Personvern{" "}
                    </a>
                  </li>
                  <li>
                    <a href="https://www.privacypolicytemplate.net/live.php?token=EIXXz3L3UVYBS9bKb5WKmUcvlDtJQRzH" className="text-white hover:text-gray-300 cursor-pointer text-sm">
                      Cookies
                    </a>
                  </li>
                  <li>
                    <a href="/conditions" className="text-white hover:text-gray-300 cursor-pointer text-sm hidden">
                      Betingelser
                    </a>
                  </li>
                </nav>
              </div>
             
            </div>
          </div>
          <div className="bg-admit-dark-blue">
            <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
              <p className="text-gray-200 text-sm text-center sm:text-left">
                © 2022 Admit AS —
                <a
                  href="https://www.monicamyklebust.no/"
                  rel="noopener noreferrer"
                  className="text-gray-600 ml-1"
                  target="_blank"
                >
                  @monica
                </a>
                <a
                  href="https://www.instagram.com/cavepuppy/"
                  rel="noopener noreferrer"
                  className="text-gray-600 ml-1"
                  target="_blank"
                >
                  @swapnil
                </a>
              </p>
              <span className=" sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start hidden">
                <a href="/" className="text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a href="/" className="ml-3 text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a href="/" className="ml-3 text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a href="/" className="ml-3 text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="0"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    
                    <path
                      stroke="none"
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                    ></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </footer>
    </div>
  )
}

export default Footer