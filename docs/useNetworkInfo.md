# `useNetworkInfo`

React Native hook that tracks the device's network connectivity status in real time. Re-renders automatically whenever the network state changes (e.g. switching from WiFi to cellular, or going offline).

> Requires: [`@react-native-community/netinfo`](https://github.com/react-native-netinfo/react-native-netinfo)

## Usage

```jsx
import { Text, View } from 'react-native';
import { useNetworkInfo } from 'react-native-use';

const Demo = () => {
  const { isConnected, isInternetReachable, type } = useNetworkInfo();

  return (
    <View>
      <Text>Connected: {isConnected ? 'YES' : 'NO'}</Text>
      <Text>Internet reachable: {isInternetReachable ? 'YES' : 'NO'}</Text>
      <Text>Connection type: {type}</Text>
    </View>
  );
};
```

## Reference

```ts
const { isConnected, isInternetReachable, type, details } = useNetworkInfo();
```
