import MainContent from "./components/MainContent";
import "./styles/components/app.sass";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div id="portifolio">
      <h1>Gabriel de Paiva Barth</h1>
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
