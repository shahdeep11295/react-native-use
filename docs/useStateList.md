# `useStateList`

Provides handles for circular iteration over states list.
Supports forward and backward iterations and arbitrary position set.

## Usage

```jsx
import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { useStateList } from 'rn-hooksy';

const stateSet = ['first', 'second', 'third', 'fourth', 'fifth'];

const Demo = () => {
  const {
    state,
    prev,
    next,
    setStateAt,
    setState,
    currentIndex,
    isFirst,
    isLast,
  } = useStateList(stateSet);
  const [indexInput, setIndexInput] = React.useState('0');
  const [stateInput, setStateInput] = React.useState('first');

  return (
    <View>
      <Text>{`${state} [index: ${currentIndex}], [isFirst: ${isFirst}], [isLast: ${isLast}]`}</Text>
      <Button title="prev" onPress={prev} />
      <Button title="next" onPress={next} />
      <TextInput value={indexInput} onChangeText={setIndexInput} />
      <Button
        title="set state by index"
        onPress={() => setStateAt(Number(indexInput))}
      />
      <TextInput value={stateInput} onChangeText={setStateInput} />
      <Button title="set state by value" onPress={() => setState(stateInput)} />
    </View>
  );
};
```

## Reference

```ts
const { state, currentIndex, prev, next, setStateAt, setState, isFirst, isLast } = useStateList<T>(stateSet: T[] = []);
```
