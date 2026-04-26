# `useStopwatch`

An accurate stopwatch that tracks elapsed time with `start`, `stop`, and `reset` controls. Uses `Date.now()` for accuracy — not affected by re-renders or frame drops.

## Usage

```jsx
import { Button, Text, View } from 'react-native';
import { useStopwatch } from 'react-native-use';

const Demo = () => {
  const { hours, minutes, seconds, isRunning, start, stop, reset } =
    useStopwatch();

  return (
    <View>
      <Text>{`${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`}</Text>
      <Button title="Start" onPress={start} />
      <Button title="Stop" onPress={stop} />
      <Button title="Reset" onPress={reset} />
      <Text>{isRunning ? 'Running' : 'Stopped'}</Text>
    </View>
  );
};
```

## Reference

```ts
const { time, seconds, minutes, hours, isRunning, start, stop, reset } = useStopwatch(autoStart?: boolean);
```
