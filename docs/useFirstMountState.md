# `useFirstMountState`

Returns `true` if component is just mounted (on first render) and `false` otherwise.

## Usage

```jsx
import React from 'react';
import { Button, Text, View } from 'react-native';
import { useFirstMountState, useUpdate } from 'rn-hooksy';

const Demo = () => {
  const isFirstMount = useFirstMountState();
  const update = useUpdate();

  return (
    <View>
      <Text>This component is just mounted: {isFirstMount ? 'YES' : 'NO'}</Text>
      <Button title="re-render" onPress={update} />
    </View>
  );
};
```

## Reference

```js
const isFirstMount = useFirstMountState();
```
