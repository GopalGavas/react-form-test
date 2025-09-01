import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="dashboard">
      <h2>React Test - 02</h2>
      <p>Click the button to Proceed with the test</p>

      <button onClick={() => navigate("/register")}>Register</button>
    </div>
  );
};

export default Home;
