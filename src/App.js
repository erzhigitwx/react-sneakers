import "./styles/App.scss";
import "./styles/home.scss";
import "./styles/profile.scss";
import "./styles/basket.scss";
import "./styles/favorite.scss";
import Navbar from "./components/navbar/navbar.tsx";
import Layout from "./routes/layout";

function App() {
  return (
    <div className="App">
      <Navbar />
      <hr className="line"/>
      <Layout />
    </div>
  );
}

export default App;
