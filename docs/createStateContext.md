# `createStateContext`

Factory for react context hooks that will behave just like [React's `useState`](https://react.dev/reference/react/useState) except the state will be shared among all components in the provider.

This allows you to have a shared state that any component can update easily.

## Usage

An example with shared text between two input fields.

```jsx
import { createStateContext } from 'rn-hooksy';
import { Button, Text, TextInput, View } from 'react-native';

const [useSharedText, SharedTextProvider] = createStateContext('');

const ComponentA = () => {
  const [text, setText] = useSharedText();

  return (
    <View>
      <Text>Component A:</Text>
      <TextInput value={text} onChangeText={setText} />
    </View>
  );
};

const ComponentB = () => {
  const [text, setText] = useSharedText();

  return (
    <View>
      <Text>Component B:</Text>
      <TextInput value={text} onChangeText={setText} />
    </View>
  );
};

const Demo = () => {
  return (
    <SharedTextProvider>
      <Text>Those two fields share the same value.</Text>
      <ComponentA />
      <ComponentB />
    </SharedTextProvider>
  );
};
```

## Reference

```jsx
const [useSharedState, SharedStateProvider] = createStateContext(initialValue);

const Wrapper = ({ children }) => (
  <SharedStateProvider initialValue={overrideInitialValue}>
    {children}
  </SharedStateProvider>
);

const Component = () => {
  const [sharedState, setSharedState] = useSharedState();
  // ...
};
```
