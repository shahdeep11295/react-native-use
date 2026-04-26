# `useMultiStateValidator`

Each time any of given states changes, validator function is invoked.

## Usage

```jsx
import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { useMultiStateValidator } from 'rn-hooksy';

const allEven = (values) => [values.every((num) => !(num % 2))];

const Demo = () => {
  const [state1, setState1] = React.useState(1);
  const [state2, setState2] = React.useState(1);
  const [state3, setState3] = React.useState(1);
  const [[isValid]] = useMultiStateValidator([state1, state2, state3], allEven);

  return (
    <View>
      <Text>Below fields are valid only if all values are even</Text>
      <TextInput
        value={String(state1)}
        onChangeText={(v) => setState1(Number(v) || 0)}
      />
      <TextInput
        value={String(state2)}
        onChangeText={(v) => setState2(Number(v) || 0)}
      />
      <TextInput
        value={String(state3)}
        onChangeText={(v) => setState3(Number(v) || 0)}
      />
      <Text>{isValid ? 'Valid!' : 'Invalid'}</Text>
    </View>
  );
};
```

## Reference

```ts
const [validity, revalidate] = useMultiStateValidator(states, validator, initialValidity?);
```
