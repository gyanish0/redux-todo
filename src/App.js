import { Provider } from 'react-redux';
import { Container } from 'reactstrap';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import store from './store';
const App = () => {

    return (
        <Provider store={store}>
            <Container fluid>
                <Todo />
                <TodoForm />
            </Container>
        </Provider>
    );
}

export default App
