import './App.css';
import TodosPostAZ from './components/TodosPostAZ.jsx';
import TodosPostZA from './components/TodosPostZA.jsx';

function App() {

  return (
    <div>
      <div id="divPost">
        <TodosPostAZ></TodosPostAZ>
      </div>
      <div id="divPost">
        <TodosPostZA></TodosPostZA>
      </div>
    </div>
    );
}
export default App;


