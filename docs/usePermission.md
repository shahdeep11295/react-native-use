# `usePermission`

React Native hook that checks and requests a single device permission (camera, location, microphone, contacts, etc.) and tracks the current permission status.

> Requires: [`react-native-permissions`](https://github.com/zoontek/react-native-permissions)

## Usage

```jsx
import { Button, Text, View } from 'react-native';
import { PERMISSIONS } from 'react-native-permissions';
import { usePermission } from 'rn-hooksy';

const Demo = () => {
  const [state, actions] = usePermission(PERMISSIONS.IOS.CAMERA);

  if (state.loading) return <Text>Checking permission...</Text>;

  return (
    <View>
      <Text>Camera permission: {state.status}</Text>
      {!state.isGranted && (
        <Button title="Allow Camera" onPress={actions.request} />
      )}
      {state.isGranted && <Text>Camera access granted!</Text>}
    </View>
  );
};
```

## Reference

```ts
const [state, { request, check }] = usePermission(permission: Permission);
```
