// App.jsx
import Count from './Components/Count';
import Counter from './Components/Counter';
import Homeclass from './Components/Homeclass'
import Name from './Components/Name';

export default function App() {
  let fname = "Gamana";
  let age = 39;
  return (
    <div>
      <h1>Welcome</h1>
      <Count />
      <Counter />
      <Name />
      {/* <Homeclass name={fname} age={age} /> */}
    </div>
  );
}