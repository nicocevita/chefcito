import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import GlobalProvider from "./context";

const App: React.FC = () => {

  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute redirectPath="/login">
                <Home />
              </ProtectedRoute>
            }
          ></Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
};

export default App;
