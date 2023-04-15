import Model from "./components/Model";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-[url('../src/images/Homepage-ModelY-LHD-Mobile.jpeg')] lg:bg-[url('../src/images/Homepage-Model-Y-Global-Desktop.jpeg')] h-screen bg-cover bg-center">
      <Navbar />
      <Model />
    </div>
  );
}

export default App;
