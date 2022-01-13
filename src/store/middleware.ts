import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const enhancer = composeWithDevTools(
    applyMiddleware(thunk)
    // other store enhancers if any
);

export default enhancer;
