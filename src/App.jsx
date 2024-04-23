import React from "react";
import NavBar from "./nav-bar/NavBar";
import ContactUsContent from "./body/ContactUsContent";

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <header>
        <NavBar />
      </header>
      <div className="flex-grow md:overflow-hidden">
        <ContactUsContent />
      </div>
    </div>
  );
};

export default App;
