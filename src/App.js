import "./App.css";
import Content from "./components/Content";
import Footer from "./components/Content/Footer";
import SideBar from "./components/Sidebar/sideBar";

function App() {
  return (
    <div className="App">
      <SideBar />
      <Content />
    </div>
  );
}

export default App;
