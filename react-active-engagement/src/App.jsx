import TestComponent from './tutorial/01-useState/4-useState-object';

function App() {
  return (
    <div className = "container"> 
      <h2>Advanced Tutorial</h2>
      <TestComponent/>
    </div>
  );
}

export default App;

/*This is an error because we are not rendering the site 
This will also fail because we do not have a way of preserving the variables between renders

Now that you can see why you would error and then use case for useState
Lets learn to make it work
*/