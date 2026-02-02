import React from "react";
import Header from "./components/Header";
import TargetAudience from "./components/TargetAudience";
import Method from "./components/Method";
import ProductDetails from "./components/ProductDetails";
import HowItWorks from "./components/HowItWorks";
import Offer from "./components/Offer";
import Author from "./components/Author";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <TargetAudience />
      <Method />
      <ProductDetails />
      <HowItWorks />
      <Offer />
      <Author />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
