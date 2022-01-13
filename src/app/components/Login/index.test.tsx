import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import Login from './index';

const mockStore = configureStore([]);

describe('Login Component', () => {
    let store;
    let component: renderer.ReactTestRenderer;
    beforeEach(() => {
        store = mockStore({
            myState: 'sample text'
        });

        component = renderer.create(
            <Provider store={store}>
                <Login />
            </Provider>
        );
    });

    it('should render with given state from Redux store', () => {
        expect(component.toJSON()).toMatchSnapshot();
    });
});
