import React from "react";

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}

function About(){
  return(
  <div id='about' > <h2>my name is maxwell kiplagat am learning react js for front end development</h2></div>
  )
}


function App() {
  return (
    <div>
      <NavBar />
      <Home/>
      <About/>
    </div>
  );
}

export default App;
