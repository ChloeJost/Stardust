// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';

import rootReducer from '../reducers';

// == Import : local
import logMiddleware from '../middleware/logMiddleware';
import registerMiddleware from '../middleware/registerMiddleware';
import threadsMiddleware from '../middleware/threadsMiddleware';
import authMiddleware from '../middleware/authMiddleware';
import newThreadMiddleware from '../middleware/newThreadMiddleware';
import userMiddleware from '../middleware/userMiddleware';


// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    logMiddleware,
    registerMiddleware,
    authMiddleware,
    threadsMiddleware,
    newThreadMiddleware,
    userMiddleware,
  ),
);

// == Store
export const store = createStore(rootReducer, enhancers);

export const persistor = persistStore(store);
