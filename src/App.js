import Component1 from './components/Component1/Component1'
import Component2 from './components/Component2/Component2'

function App() {
  return (
    <div className="App">
      <Component1 />
      <Component2 heading='2' />
      <Component2 heading='3' />
    </div>
  );
}

export default App;


/*
  REACTJS

  Declarative library 
  - Just tell it WHAT to want 
  - You don't tell it HOW to do it

  ---------------------------
  Components - class (Class based components) or function (Function based components) which returns JSX

  - Parts of UI
  - Can be nested
  - Can be re-used

  ----------------------------
  PROPS - 
  [In the scope of function, relate it with function parameters]
  - It is the data that is transferred from the parent component to the child components
*/
