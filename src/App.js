import Random from "./components/Random";
import Tag from "./components/Tag";

function App() {
  return (
    <div className="w-full h-full flex flex-col items-center bg-blue-300">
      <h1 className="bg-white w-11/12 mt-5 text-3xl font-bold px-10 py-2 text-center rounded-md">RANDOM GIFS</h1>
      <div className="flex flex-col w-full items-center mt-5 gap-y-10">
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}

export default App;
