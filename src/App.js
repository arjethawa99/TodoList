import ListContainer from "./Component/ListContainer";
import TextFeild from "./Component/TextFeild";
import '../src/Component/style.css'



function App() {
  return (
    <div className="App">
      <div className="header-text" style={{marginTop:"10rem"}}><h1>Todo List</h1></div>
      <TextFeild />
      <ListContainer />
    </div>
  );
}

export default App;
