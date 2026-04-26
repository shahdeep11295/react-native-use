# `useCombinedState`

React state hook that lets you update individual fields, merge multiple changes,
and reset back to the initial object state.

## Usage

```jsx
import { Button, Text, View } from 'react-native';
import { useCombinedState } from 'react-native-use';

const initialState = {
  name: '',
  email: '',
  subscribed: false,
};

const Demo = () => {
  const { state, setField, setFields, reset } = useCombinedState(initialState);

  return (
    <View>
      <Text>{JSON.stringify(state, null, 2)}</Text>
      <Button title="Set name" onPress={() => setField('name', 'Deep')} />
      <Button
        title="Fill guest"
        onPress={() =>
          setFields({
            name: 'Guest',
            email: 'guest@example.com',
            subscribed: true,
          })
        }
      />
      <Button title="Reset" onPress={reset} />
    </View>
  );
};
```

## Reference

```js
const { state, setField, setFields, reset } = useCombinedState(initialState);

setField('name', 'Deep');
setFields({ email: 'guest@example.com', subscribed: true });
reset();
```
