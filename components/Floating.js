import React from "react";

const Floating = () => {
  return (
    <div title="Click meg" className="fabbu animate-pulse-once">
      <div className="fab-wrapper ">
        <input id="fabCheckbox" type="checkbox" className="fab-checkbox" />
        <label className="fab" for="fabCheckbox">
          <span className="fab-dots fab-dots-1"></span>
          <span className="fab-dots fab-dots-2"></span>
          <span className="fab-dots fab-dots-3"></span>
        </label>
        <div className="fab-wheel cursor-pointer">
          <a
           title="Avtale møte"
            href="https://calendly.com/admitas/"
            className="fab-action fab-action-1 hover:scale-150 flex items-center text-xl justify-center"
          >
            <i aria-label="asas" className="fas fa-question  ">
              📅
            </i>
          </a>
          <a
            title="Sende E-Post"
            href="mailto:post@admit.no"
            className="fab-action fab-action-2 hover:scale-150 text-xl"
          >
            <i className="fas fa-book">📧</i>
          </a>
          <a
          title ="Ring oss"
            href="tel:+47 70 32 93 80"
            className="fab-action fab-action-3 hover:scale-150 flex items-center text-xl justify-center"
          >
            <i className="fas fa-address-book">☎️</i>
          </a>
          <a 
          title ="Hjem"
          
          href="/" className="fab-action fab-action-4 hover:scale-150 flex items-center text-xl justify-center">
            <i className="fas fa-info">🏠</i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Floating;
