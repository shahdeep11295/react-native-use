# `useThrottle`

React hook that throttles rapidly changing values.

## Usage

```jsx
import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { useThrottle } from 'react-native-use';

const Demo = () => {
  const [value, setValue] = React.useState('');
  const throttledValue = useThrottle(value, 500);

  return (
    <View>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder="Type quickly"
      />
      <Text>Value: {value}</Text>
      <Text>Throttled value: {throttledValue}</Text>
    </View>
  );
};
```

## Reference

```ts
useThrottle(value, ms?: number);
```
