import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import SetAvatar from "./pages/SetAvatar";
function App() {
  const toastOption = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/register"
          element={<Register toastOption={toastOption} />}
        ></Route>
        <Route
          path="/login"
          element={<Login toastOption={toastOption} />}
        ></Route>
        <Route
          path="/setAvatar"
          element={<SetAvatar toastOption={toastOption} />}
        ></Route>
        <Route path="/" element={<Chat toastOption={toastOption} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
