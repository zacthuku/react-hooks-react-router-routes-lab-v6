// src/App.jsx
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar"; // Assuming you have a NavBar component

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet /> {/* This is where nested routes will be rendered */}
      </main>
    </>
  );
}

export default App;
