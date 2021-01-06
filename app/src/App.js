import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <div class="logo">
            <a href="#home">Logo</a>
          </div>
          <div class="links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
        <h1>Hello World</h1>
      </header>
      <section>
        <h2>About Me</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, unde
          autem sit dignissimos voluptates tempora necessitatibus molestias
          laudantium ipsum magni fugiat, praesentium enim, aliquam eum optio
          explicabo quo? Voluptatibus, temporibus.
        </p>
      </section>
      <section>
        <div class="parent">
          <div class="box">One</div>
          <div class="box">Two</div>
          <div class="box">Three</div>
          <div class="box">Four</div>
        </div>
      </section>
      <section class="hero"></section>
      <section class="gallery">
        <div role="img" aria-label="building in NYC" class="img one"></div>
        <div class="img two"></div>
        <div class="img three"></div>
        <div class="img four"></div>
        <div class="img five"></div>
        <div class="img six"></div>
      </section>
    </div>
  );
}

export default App;
