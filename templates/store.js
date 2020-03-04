const template = `import { createStore, compose, applyMiddleware } from "redux";
import { rootReducer } from "./reducers";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
    const store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(thunk))
    );
    if (process.env.NODE_ENV !== "production") {
        if (module.hot) {
            module.hot.accept("./reducers", () => {
                store.replaceReducer(rootReducer);
            });
        }
    }

    return store;
};

export default configureStore()

`

module.exports = template
