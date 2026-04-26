# `useGetSetState`

A mix of `useGetSet` and `useSetState`.

## Usage

```jsx
import { Button, Text, View } from 'react-native';
import { useGetSetState } from 'react-native-use';

const Demo = () => {
  const [get, setState] = useGetSetState({ cnt: 0 });

  const onClick = () => {
    setTimeout(() => {
      setState({ cnt: get().cnt + 1 });
    }, 1000);
  };

  return (
    <View>
      <Text>Clicked: {get().cnt}</Text>
      <Button title="Increment after 1s" onPress={onClick} />
    </View>
  );
};
```
