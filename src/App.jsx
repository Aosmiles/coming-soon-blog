import { useState } from "react";
import brickGolemUrl from "./assets/brick_golem.jpg"
import swordUrl from "./assets/sword in the black flame.png"

function App() {
  const [count, setCount] = useState(0);

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <div className="App">
      <main className="container mx-auto pt-10 lg:w-1/2 w-4/5 min-w-min max-w-lg">
        <h1 className="md:text-6xl sm:text-5xl text-2xl uppercase font-sans text-amber-50 text-center">
          Through the dungeon
        </h1>
        <p className="text-center sm:text-base text-sm text-amber-100 font-serif">
          A Blog{" "}
          <span className="text-amber-200">(or something like it)</span>{" "}
          coming soon!
        </p>
        <img
          className="w-full mx-auto mt-6 max-w-md rounded-3xl shadow-xl shadow-amber-50/50"
          src={brickGolemUrl}
          alt="an illustration of a black flame sword"
        />
      </main>
      {/*<footer className="bg-amber-50 h-10">*/}
      {/*</footer>*/}
    </div>
  );
}

export default App;
