# `useStateValidator`

Each time given state changes, validator function is invoked.

## Usage

```jsx
import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { useStateValidator } from 'react-native-use';

const evenValidator = (s) => [s === '' ? undefined : Number(s) % 2 === 0];

const Demo = () => {
  const [state, setState] = React.useState('0');
  const [[isValid]] = useStateValidator(state, evenValidator);

  return (
    <View>
      <Text>Below field is valid only if number is even</Text>
      <TextInput
        value={state}
        onChangeText={setState}
        keyboardType="number-pad"
      />
      {isValid !== undefined && <Text>{isValid ? 'Valid!' : 'Invalid'}</Text>}
    </View>
  );
};
```

## Reference

```ts
const [validity, revalidate] = useStateValidator(
  state,
  validator,
  initialValidity
);
```
