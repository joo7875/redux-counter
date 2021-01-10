import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { connect, Provider } from 'react-redux';

// Action Creators - You don't need to change these
const increment = () => ({ type: 'increment' });
const decrement = () => ({ type: 'decrement' });

const Counter = (props) => { // added!
    return (
        <div>
            <button onClick={props.increment} className="increment">Increment</button>
            <button onClick={props.decrement} className="decrement">Decrement</button>
            Current Count: <span>{props.count}</span> 
        </div>
    );
};

const mapStateToProps = state => { // added!
    console.log(state);
    return { count: state.count };
};

const WrappedCounter = connect(mapStateToProps, { increment, decrement })(Counter); // added!

// Only change code *before* me!
// -----------


const store = createStore(combineReducers({
    count: (count = 0, action) => {
        if (action.type === 'increment') {
            return count + 1;
        } else if (action.type === 'decrement') {
            return count - 1;
        } else {
            return count;
        }
    }
}));

ReactDOM.render(
    <Provider store={store}>
        <WrappedCounter />
    </Provider>, 
    document.querySelector('#root')
);