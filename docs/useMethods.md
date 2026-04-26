# `useMethods`

React hook that simplifies the `useReducer` implementation.

## Usage

```jsx
import { Button, Text, View } from 'react-native';
import { useMethods } from 'react-native-use';

const initialState = {
  count: 0,
};

function createMethods(state) {
  return {
    reset() {
      return initialState;
    },
    increment() {
      return { ...state, count: state.count + 1 };
    },
    decrement() {
      return { ...state, count: state.count - 1 };
    },
  };
}

const Demo = () => {
  const [state, methods] = useMethods(createMethods, initialState);

  return (
    <View>
      <Text>Count: {state.count}</Text>
      <Button title="-" onPress={methods.decrement} />
      <Button title="+" onPress={methods.increment} />
      <Button title="Reset" onPress={methods.reset} />
    </View>
  );
};
```

## Reference

```js
const [state, methods] = useMethods(createMethods, initialState);
```

- `createMethods` — function that takes current state and returns an object containing methods that return updated state.
- `initialState` — initial value of the state.
