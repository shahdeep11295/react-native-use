# `useRafLoop`

Calls a given function within a RAF loop without re-rendering the parent component.
The loop stops automatically on component unmount.

## Usage

```jsx
import React from 'react';
import { Button, Text, View } from 'react-native';
import { useRafLoop, useUpdate } from 'rn-hooksy';

const Demo = () => {
  const [ticks, setTicks] = React.useState(0);
  const [lastCall, setLastCall] = React.useState(0);
  const update = useUpdate();

  const [stopLoop, startLoop, isActive] = useRafLoop((time) => {
    setTicks((value) => value + 1);
    setLastCall(time);
  });

  return (
    <View>
      <Text>RAF triggered: {ticks} (times)</Text>
      <Text>Last high-res timestamp: {lastCall}</Text>
      <Button
        title={isActive() ? 'STOP' : 'START'}
        onPress={() => {
          isActive() ? stopLoop() : startLoop();
          update();
        }}
      />
    </View>
  );
};
```

## Reference

```ts
const [stopLoop, startLoop, isActive] = useRafLoop(
  callback,
  (initiallyActive = true)
);
```
