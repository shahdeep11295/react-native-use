# `useLayout`

React Native hook that measures the layout of a component via the `onLayout` event.

## Usage

```jsx
import { Text, View } from 'react-native';
import { useLayout } from 'rn-hooksy';

const Demo = () => {
  const { onLayout, width, height, x, y } = useLayout();

  return (
    <View onLayout={onLayout} style={{ padding: 16 }}>
      <Text>Width: {width}</Text>
      <Text>Height: {height}</Text>
      <Text>
        x: {x}, y: {y}
      </Text>
    </View>
  );
};
```

## Reference

```ts
const { onLayout, x, y, width, height } = useLayout();
```
