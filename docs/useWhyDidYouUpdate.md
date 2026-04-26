# `useWhyDidYouUpdate`

A debug hook that logs which props or state values caused a component to re-render. Only active in development.

## Usage

```jsx
import React from 'react';
import { Text, View } from 'react-native';
import { useWhyDidYouUpdate } from 'rn-hooksy';

const MyComponent = (props) => {
  useWhyDidYouUpdate('MyComponent', props);

  return (
    <View>
      <Text>{props.name}</Text>
    </View>
  );
};

const Demo = () => {
  const [count, setCount] = React.useState(0);

  return <MyComponent name="Deep" count={count} />;
};
```

Check your console for output like:

```
[useWhyDidYouUpdate] MyComponent { count: { from: 0, to: 1 } }
```

## Reference

```ts
useWhyDidYouUpdate(componentName: string, props: Record<string, any>): void;
```
