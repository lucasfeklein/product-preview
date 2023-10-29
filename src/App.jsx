function App() {
  return (
    <div className="h-screen bg-cream flex justify-center items-center">
      <div className="bg-white flex h-1/2 w-[40%] rounded-md overflow-hidden">
        <div className="bg-[url('./image-product-desktop.jpg')] bg-cover flex-1"></div>
        <div className="flex-1">
          <p>PERFUME</p>
          <h1>Gabrielle Essence Eau De Parfum</h1>
          <p>
            A floral, solar and voluptuous interpretation composed by Oliver
            Polge, Perfumer-Creator for the House of CHANEL
          </p>
          <div>
            <p>$149,99</p>
            <p>$169,99</p>
          </div>

          <button className="bg-dark-cyan text-white flex items-center w-full">
            <img src="./icon-cart.svg" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
