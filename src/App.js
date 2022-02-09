import "./styles.css";
import Profile from "./components/Profile";
import Login from "./components/Login";
import LogOut from "./components/Logout";
import ChangeColor from "./components/ChangeColor";

export default function App() {
  return (
    <div className="App">
      <Profile />
      <Login />
      <LogOut />
      <ChangeColor />
    </div>
  );
}
