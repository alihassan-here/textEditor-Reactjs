import './App.css';
import TextEditor from './components/TextEditor';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-link">
          React Text Editor
        </h1>
      </header>
      <div className="editor">
        <TextEditor/>
      </div>
    </div >
  );
}

export default App;
