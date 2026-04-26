# `useRafState`

React state hook that only updates state in the callback of [`requestAnimationFrame`](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame).

## Usage

```jsx
import React from 'react';
import { Text, View } from 'react-native';
import { useRafState } from 'rn-hooksy';

const Demo = () => {
  const [state, setState] = useRafState({
    x: 0,
    y: 0,
  });

  const handlePress = (x, y) => {
    setState({ x, y });
  };

  return (
    <View>
      <Text>Position: {`${state.x}, ${state.y}`}</Text>
      <View
        onTouchMove={(event) => {
          const { pageX, pageY } = event.nativeEvent;
          handlePress(pageX, pageY);
        }}
      />
    </View>
  );
};
```

## Reference

```ts
const [state, setState] = useRafState<S>(
  initialState: S | (() => S)
): [S, Dispatch<SetStateAction<S>>];
```
