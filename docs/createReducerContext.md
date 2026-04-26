# `createReducerContext`

Factory for react context hooks that will behave just like [React's `useReducer`](https://react.dev/reference/react/useReducer) except the state will be shared among all components in the provider.

This allows you to have a shared state that any component can update easily.

## Usage

An example with two counters that share the same value.

```jsx
import { Button, Text, View } from 'react-native';
import { createReducerContext } from 'react-native-use';

const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      throw new Error('Unknown action');
  }
};

const [useSharedCounter, SharedCounterProvider] = createReducerContext(
  reducer,
  0
);

const Counter = ({ label }) => {
  const [count, dispatch] = useSharedCounter();

  return (
    <View>
      <Text>
        {label}: {count}
      </Text>
      <Button title="-" onPress={() => dispatch('decrement')} />
      <Button title="+" onPress={() => dispatch('increment')} />
    </View>
  );
};

const Demo = () => {
  return (
    <SharedCounterProvider>
      <Text>Those two counters share the same value.</Text>
      <Counter label="Component A" />
      <Counter label="Component B" />
    </SharedCounterProvider>
  );
};
```

## Reference

```jsx
const [useSharedState, SharedStateProvider] = createReducerContext(
  reducer,
  initialState
);

const Wrapper = ({ children }) => (
  <SharedStateProvider initialState={overrideInitialState}>
    {children}
  </SharedStateProvider>
);

const Component = () => {
  const [sharedState, dispatch] = useSharedState();

  // ...
};
```
