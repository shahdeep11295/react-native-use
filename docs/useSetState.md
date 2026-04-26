# `useSetState`

React state hook that creates `setState` method which works similar to how
`this.setState` works in class components—it merges object changes into
current state.

## Usage

```jsx
import { Button, Text, View } from 'react-native';
import { useSetState } from 'react-native-use';

const Demo = () => {
  const [state, setState] = useSetState({});

  return (
    <View>
      <Text>{JSON.stringify(state, null, 2)}</Text>
      <Button title="hello" onPress={() => setState({ hello: 'world' })} />
      <Button title="foo" onPress={() => setState({ foo: 'bar' })} />
      <Button
        title="count"
        onPress={() => {
          setState((prevState) => ({
            count: (prevState.count || 0) + 1,
          }));
        }}
      />
    </View>
  );
};
```

## Reference

```js
const [state, setState] = useSetState({ cnt: 0 });

setState({ cnt: state.cnt + 1 });
setState((prevState) => ({
  cnt: prevState.cnt + 1,
}));
```
