import { useState } from "react";
import { Navbar, Welcome, Service, Transaction, Footer } from "./Components";
function App() {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Service />
      <Transaction />
      <Footer />
    </div>
  );
}

export default App;
