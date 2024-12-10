import TestComponent from './tutorial/04-conditional-rendering/3-show-hide';

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