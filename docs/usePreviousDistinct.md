# `usePreviousDistinct`

Just like `usePrevious` but it will only update once the value actually changes. This is important when other hooks are involved and you aren't just interested in the previous props version, but want to know the previous distinct value.

## Usage

```jsx
import React from 'react';
import { Button, Text, View } from 'react-native';
import { usePreviousDistinct } from 'rn-hooksy';

const Demo = () => {
  const [count, setCount] = React.useState(0);
  const prevCount = usePreviousDistinct(count);

  return (
    <View>
      <Text>
        Now: {count}, before: {prevCount}
      </Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
    </View>
  );
};
```

You can also provide a way of identifying the value as unique. By default, a strict equals is used.

```jsx
import React from 'react';
import { usePreviousDistinct } from 'rn-hooksy';

const Demo = () => {
  const [str, setStr] = React.useState('something_lowercase');
  const prevStr = usePreviousDistinct(
    str,
    (prev, next) => prev && prev.toUpperCase() === next.toUpperCase()
  );

  return (
    <Text>
      Now: {str}, before: {prevStr}
    </Text>
  );
};
```

## Reference

```ts
const prevState = usePreviousDistinct<T>(
  state: T,
  compare?: (prev: T | undefined, next: T) => boolean
): T | undefined;
```
