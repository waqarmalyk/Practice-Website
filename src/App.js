import "./App.css";

import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d128083.9297114178!2d10.645035667605613!3d59.8937806427389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416e61f267f039%3A0x7e92605fd3231e9a!2sOslo!5e0!3m2!1sen!2sno!4v1640295745652!5m2!1sen!2sno"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
      ></iframe>
      <footer>All rights reserved 2021 | Ahmed Waqar</footer>
    </div>
  );
}

export default App;
