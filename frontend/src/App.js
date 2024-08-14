import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "./scenes/loginPage";
import { HomePage } from "./scenes/homePage";
import { ProfilePage } from "./scenes/profilePage";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile/:userId" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
