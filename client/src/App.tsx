import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
// import Shelf from "./components/home/Shelf";

function App() {
  return (
    <div className="min-h-screen bg-[#F4E9D8] text-[#171717]">
      <Navbar />
      <Hero />
     {/* // <Shelf /> */}
    </div>
  );
}

export default App;