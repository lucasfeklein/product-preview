function App() {
  return (
    <div className="h-screen bg-cream flex justify-center items-center">
      <div className="bg-white flex h-[420px] w-[550px] rounded-xl overflow-hidden">
        <div className="bg-[url('./image-product-desktop.jpg')] bg-cover flex-1"></div>
        <div className="flex-1">
          <div className="p-7 flex flex-col justify-between h-full">
            <p className="text-dark-grayish-blue text-xs tracking-[5px]">
              PERFUME
            </p>
            <h1 className="font-fraunces text-3xl leading-7">
              Gabrielle Essence Eau De Parfum
            </h1>
            <p className="text-dark-grayish-blue text-xs leading-5">
              A floral, solar and voluptuous interpretation composed by Oliver
              Polge, Perfumer-Creator for the House of CHANEL
            </p>
            <div className="flex gap-5 items-center">
              <p className="text-dark-cyan font-bold font-fraunces text-3xl">
                $149,99
              </p>
              <p className="text-dark-grayish-blue text-sm line-through">
                $169,99
              </p>
            </div>

            <button className="bg-dark-cyan text-white flex items-center w-full justify-center gap-3 h-12 rounded-md hover:bg-very-dark-blue">
              <img src="./icon-cart.svg" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
