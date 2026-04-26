import { useEffect, useState } from 'react';
import NetInfo, {
  type NetInfoState,
  type NetInfoStateType,
} from '@react-native-community/netinfo';

export interface NetworkInfo {
  isConnected: boolean | null;
  isInternetReachable: boolean | null;
  type: NetInfoStateType;
  details: NetInfoState['details'];
}

/**
 * Tracks the device's network connectivity status in real time.
 * Re-renders automatically whenever the network state changes
 * (e.g. switching from WiFi to cellular, or going offline).
 *
 * Requires: @react-native-community/netinfo
 *
 * @example
 * const { isConnected, type, isInternetReachable } = useNetworkInfo();
 *
 * if (!isConnected) {
 *   return <Text>You are offline</Text>;
 * }
 */
export const useNetworkInfo = (): NetworkInfo => {
  const [networkInfo, setNetworkInfo] = useState<NetworkInfo>({
    isConnected: null,
    isInternetReachable: null,
    // @ts-ignore
    type: 'unknown',
    details: null,
  });

  useEffect(() => {
    // Fetch initial state
    NetInfo.fetch().then((state) => {
      setNetworkInfo({
        isConnected: state.isConnected,
        isInternetReachable: state.isInternetReachable,
        type: state.type,
        details: state.details,
      });
    });

    // Subscribe to changes
    const unsubscribe = NetInfo.addEventListener((state) => {
      setNetworkInfo({
        isConnected: state.isConnected,
        isInternetReachable: state.isInternetReachable,
        type: state.type,
        details: state.details,
      });
    });

    return () => unsubscribe();
  }, []);

  return networkInfo;
};
