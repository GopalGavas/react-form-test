import { useNavigate } from "react-router-dom";

const Dashboard = ({ setIsLoggedIn }) => {
  const user = localStorage.getItem("loggedInUser");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("loggedInUser");
    setIsLoggedIn(false);
    navigate("/login");
  };
  return (
    <div className="dashboard">
      <p>Welcome! {user}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
