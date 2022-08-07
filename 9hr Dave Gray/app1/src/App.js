import './App.css';
import Counter, { ToDo } from './components/UseState1';
import { Greet } from './components/UseState1';
import Product from './components/Product';
import TodoItem from './components/TodoItem';
import { ProductList } from './Dummy Data/ProductList';
import TodoData from './Dummy Data/TodoList';
import Guesser from './components/Guesser';

function App() {
  return (
    <div className="todo-app">
      {/* {
        ProductList.map(product => <Product key={product.id} name={product.name} price={product.price} description={product.description} />)
      }
  */}
      {/* {
        TodoData.map(todo => <TodoItem key={todo.id} task={todo.task}/>)
      } */}

      {/* <Counter />
      <Greet /> */}
      {/* <ToDo heading="Hello App"/> */}

      <Guesser />
    </div>
  );
}

export default App;
