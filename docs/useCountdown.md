# `useCountdown`

Counts down from a given number of seconds to zero. Provides `start`, `pause`, and `reset` controls.

## Usage

```jsx
import { Button, Text, View } from 'react-native';
import { useCountdown } from 'react-native-use';

const Demo = () => {
  const [count, { start, pause, reset, isRunning }] = useCountdown(60, {
    onEnd: () => console.log('Time is up!'),
  });

  return (
    <View>
      <Text>Remaining: {count}s</Text>
      <Button title="Start" onPress={start} />
      <Button title="Pause" onPress={pause} />
      <Button title="Reset" onPress={() => reset()} />
      <Text>{isRunning ? 'Running' : 'Stopped'}</Text>
    </View>
  );
};
```

## Reference

```ts
const [count, { start, pause, reset, isRunning }] = useCountdown(
  initialSeconds: number,
  options?: { autoStart?: boolean; onEnd?: () => void }
);
```
