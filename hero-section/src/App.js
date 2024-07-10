import './App.css';

function App() {
  return (
    <div className="App">
      <div className='hero-banner'>
          <div className='hero-details'>
            <h3 className='hero-header'>
              Well crafted abstract images
            </h3>
            <p className='hero-desc'>
              High quality abstract images for your projects, wallpaper and presentations.
            </p>

            <div className='cta-wrapper'>
              <button className='learn-more'>
                Learn more
              </button>
              <button className='see-pricing'>
                See pricing
              </button>
            </div>
          </div>
          <div className='hero-image'>
            {/* <img className='image' alt='hero-image'/> */}
          </div>
      </div>
    </div>
  );
}

export default App;
