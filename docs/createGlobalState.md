# `createGlobalState`

A React hook factory that creates globally shared state.

## Usage

```jsx
import { Button, Text, View } from 'react-native';
import { createGlobalState } from 'react-native-use';

const useGlobalValue = createGlobalState(0);

const CompA = () => {
  const [value, setValue] = useGlobalValue();
  return <Button title="+" onPress={() => setValue(value + 1)} />;
};

const CompB = () => {
  const [value, setValue] = useGlobalValue();
  return <Button title="-" onPress={() => setValue(value - 1)} />;
};

const Demo = () => {
  const [value] = useGlobalValue();

  return (
    <View>
      <Text>{value}</Text>
      <CompA />
      <CompB />
    </View>
  );
};
```

It also supports function-based initial state and updater functions.

```jsx
const useGlobalValue = createGlobalState(() => 0);

setValue((prev) => prev + 1);
```
