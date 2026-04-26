# `createReducer`

Factory for reducer hooks with custom middleware with an identical API as [React's `useReducer`](https://react.dev/reference/react/useReducer). Compatible with [Redux middleware](https://redux.js.org/understanding/history-and-design/middleware).

## Usage: 1

```jsx
import React from 'react';
import { Button, Text, View } from 'react-native';
import { createReducer } from 'rn-hooksy';

const thunk = (store) => (next) => (action) => {
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState);
  }

  return next(action);
};

const logger = (store) => (next) => (action) => {
  console.log('previous state', store.getState());
  const result = next(action);
  console.log('next state', store.getState());
  return result;
};

const useThunkReducer = createReducer(thunk, logger);

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: action.payload };
    default:
      throw new Error('Unknown action');
  }
}

const Demo = ({ initialCount = 1 }) => {
  const addAndReset = React.useCallback(() => {
    return (dispatch) => {
      dispatch({ type: 'increment' });

      setTimeout(() => {
        dispatch({ type: 'reset', payload: initialCount });
      }, 1000);
    };
  }, [initialCount]);

  const [state, dispatch] = useThunkReducer(reducer, { count: initialCount });

  return (
    <View>
      <Text>count: {state.count}</Text>
      <Button title="Add and reset" onPress={() => dispatch(addAndReset())} />
      <Button
        title="Reset"
        onPress={() => dispatch({ type: 'reset', payload: initialCount })}
      />
      <Button title="+" onPress={() => dispatch({ type: 'increment' })} />
      <Button title="-" onPress={() => dispatch({ type: 'decrement' })} />
    </View>
  );
};
```

## Usage: 2

```jsx
import React from 'react';
import { Button, Text, View } from 'react-native';
import { createReducer } from 'rn-hooksy';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const useThunkReducer = createReducer(thunk, logger);

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: action.payload };
    default:
      throw new Error('Unknown action');
  }
}

const Demo = ({ initialCount = 1 }) => {
  const addAndReset = React.useCallback(() => {
    return (dispatch) => {
      dispatch({ type: 'increment' });

      setTimeout(() => {
        dispatch({ type: 'reset', payload: initialCount });
      }, 1000);
    };
  }, [initialCount]);

  const [state, dispatch] = useThunkReducer(reducer, { count: initialCount });

  return (
    <View>
      <Text>count: {state.count}</Text>
      <Button title="Add and reset" onPress={() => dispatch(addAndReset())} />
      <Button
        title="Reset"
        onPress={() => dispatch({ type: 'reset', payload: initialCount })}
      />
      <Button title="+" onPress={() => dispatch({ type: 'increment' })} />
      <Button title="-" onPress={() => dispatch({ type: 'decrement' })} />
    </View>
  );
};
```

## Reference

```js
const useMiddlewareReducer = createReducer(...middlewares);
```
