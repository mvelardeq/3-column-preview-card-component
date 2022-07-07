import './App.css';

function App() {
  return (
    <>
    <main className='flex items-center justify-center w-screen min-h-screen'>
      <div className="card flex flex-col lg:flex-row rounded-xl my-16 overflow-hidden">
        <article className='w-full h-1/3 lg:w-1/3 lg:h-full bg-br-orange p-14 flex flex-col justify-between'>
          <div className="h-56 flex flex-col justify-between">
            <div>
              <img src="./assets/images/icon-sedans.svg" alt="icon sedan" />
            </div>
            <h1 className='text-white font-bold text-3xl uppercase font-shoulders'>Sedans</h1>
            <p className='text-white font-lexend font-normal text-sm'>
            Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city 
            or on your next road trip.
            </p>
          </div>
          <div>
            <a href="/" className='text-br-orange bg-white py-4 px-8 rounded-full font-lexend hover:bg-transparent hover:text-white hover:border-2 hover:border-white'>Learn More</a>
          </div>
        </article>
        <article className='w-full h-1/3 lg:w-1/3 lg:h-full bg-dark-cyan p-14 flex flex-col justify-between'>
          <div className="h-56 flex flex-col justify-between">
            <div>
              <img src="./assets/images/icon-suvs.svg" alt="icon sedan" />
            </div>
            <h1 className='text-white font-bold text-3xl uppercase font-shoulders'>Suvs</h1>
            <p className='text-white font-lexend font-normal text-sm'>
            Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation 
            and off-road adventures.
            </p>
          </div>
          <div>
            <a href="/" className='text-dark-cyan bg-white py-4 px-8 rounded-full font-lexend hover:bg-transparent hover:text-white hover:border-2 hover:border-white'>Learn More</a>
          </div>
        </article>
        <article className='w-full h-1/3 lg:w-1/3 lg:h-full bg-very-dark-cyan p-14 flex flex-col justify-between'>
          <div className="h-56 flex flex-col justify-between">
            <div>
              <img src="./assets/images/icon-luxury.svg" alt="icon sedan" />
            </div>
            <h1 className='text-white font-bold text-3xl uppercase font-shoulders'>Luxury</h1>
            <p className='text-white font-lexend font-normal text-sm'>
            Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury 
            rental and arrive in style.
            </p>
          </div>
          <div>
            <a href="/" className='text-very-dark-cyan bg-white py-4 px-8 rounded-full font-lexend hover:bg-transparent hover:text-white hover:border-2 hover:border-white'>Learn More</a>
          </div>
        </article>
      </div>
    </main>
    </>
  );
}

export default App;
