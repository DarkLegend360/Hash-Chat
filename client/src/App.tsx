import { Provider } from 'react-redux';
import Main from './scenes/Main';
import store from './store';
export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
