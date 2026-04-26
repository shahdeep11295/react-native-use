# `useCounter`

React state hook that tracks a numeric value.

## Usage

```jsx
import { Button, Text, View } from 'react-native';
import { useCounter } from 'rn-hooksy';

const Demo = () => {
  const [min, { inc: incMin, dec: decMin }] = useCounter(1);
  const [max, { inc: incMax, dec: decMax }] = useCounter(10);
  const [value, { inc, dec, set, reset }] = useCounter(5, max, min);

  return (
    <View>
      <Text>{`current: ${value} [min: ${min}; max: ${max}]`}</Text>
      <Button title="Increment" onPress={() => inc()} />
      <Button title="Decrement" onPress={() => dec()} />
      <Button title="Increment (+5)" onPress={() => inc(5)} />
      <Button title="Decrement (-5)" onPress={() => dec(5)} />
      <Button title="Set 100" onPress={() => set(100)} />
      <Button title="Reset" onPress={() => reset()} />
      <Button title="Reset (25)" onPress={() => reset(25)} />
      <Button title="Min +" onPress={() => incMin()} />
      <Button title="Min -" onPress={() => decMin()} />
      <Button title="Max +" onPress={() => incMax()} />
      <Button title="Max -" onPress={() => decMax()} />
    </View>
  );
};
```

## Reference

```ts
const [current, { inc, dec, get, set, reset }] = useCounter(initial: number, max: number | null = null, min: number | null = null);
```
