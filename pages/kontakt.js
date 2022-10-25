import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

const contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fwa89qj', 'template_83rta6o', form.current, 'v3B7279CVdgAF7kuV')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <>
      <section className="text-gray-600 body-font relative font-heroSubText text-xl">
        <div className="container px-5 py-0 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-full md:w-full h-[90vh] bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameborder="0"
              title="map"
              marginheight="0"
              marginwidth="0"
              scrolling="no"
              loading="lazy"
              allowfullscreen=""
              referrerpolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1844.0851721927206!2d6.232233516244679!3d62.47098256228957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4616db47b3f81199%3A0x9b231ca629b20735!2sAdmit%20AS!5e0!3m2!1sen!2sno!4v1663154071526!5m2!1sen!2sno"
              // style="filter: grayscale(1) contrast(1.2) opacity(0.4);"
            ></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold font-admitTitle text-gray-900 tracking-widest text-s">
                  ADRESSE
                </h2>
                <p className="mt-1">
                Norwegian Maritime Competence Center, Borgundvegen 340, 6009 Ålesund
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold font-admitTitle text-gray-900 tracking-widest text-s">
                  E-POST
                </h2>
                <button 
                onClick={() => window.location = 'mailto:post@admit.com'}
                className="text-admit-blue leading-relaxed cursor-pointer">
                  post@admit.no
                </button>
                <h2 className="title-font font-semibold font-admitTitle text-gray-900 tracking-widest text-s mt-4">
                  TELEFON
                </h2>
                <p className="leading-relaxed">+47 70 32 93 80</p>
              </div>
            </div>
          </div>

          {/* <form ref={form} onSubmit={sendEmail} className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-3xl mb-1 font-admitTitle  font-semibold title-font">
            Kontakt oss
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
            Har du spørsmål om våre tjenester eller Admit som bedrift? Ta gjerne kontakt.
            </p>
            <div className="relative mb-4">
              <label for="name"  className="leading-7 text-sm text-gray-600">
                Navn
              </label>
              <input
                type="text"
                id="name"
                
                
                name="user_name"
                className="w-full bg-white rounded border border-gray-300 focus:border-admit-blue focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label for="email" name="user_email" className="leading-7 text-sm text-gray-600">
                E-Post
              </label>
              <input
                type="email"
                id="email"
                
                name="user_email"
                className="w-full bg-white rounded border border-gray-300 focus:border-admit-blue focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label for="message" className="leading-7 text-sm text-gray-600">
                Melding
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-admit-blue focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button
            type="submit" value="Send"
            className="text-white bg-admit-blue border-0 py-2 px-6 focus:outline-none hover:bg-admit-blue-pressed rounded text-lg">
              Send melding
            </button>
            <p className="text-xs text-gray-500 mt-3">
              Tusen takk
            </p>
          </form> */}
        </div>
      </section>
    </>
  );
};

export default contact;
