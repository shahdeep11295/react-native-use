# `useMediatedState`

Like `useState`, but with a mediation process.

## Usage

```jsx
import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { useMediatedState } from 'rn-hooksy';

const inputMediator = (value) => value.replace(/[\s]+/g, ' ');

const Demo = () => {
  const [state, setState] = useMediatedState(inputMediator, '');

  return (
    <View>
      <Text>You cannot enter more than one space in a row</Text>
      <TextInput value={state} onChangeText={setState} />
    </View>
  );
};
```

## Reference

```ts
const [state, setState] = useMediatedState(mediator, initialState?);
```
