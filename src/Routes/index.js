import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Pages/LoginPage";
import SignUp from "../Pages/SignUpPage";
import WorkingPage from "../Pages/WorkingPage";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/working" element={<WorkingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
