import { useCallback, useEffect, useState } from 'react';
import {
  check,
  request,
  type Permission,
  type PermissionStatus,
  RESULTS,
} from 'react-native-permissions';

export interface PermissionState {
  status: PermissionStatus;
  isGranted: boolean;
  isDenied: boolean;
  isBlocked: boolean;
  isUnavailable: boolean;
  loading: boolean;
}

export interface PermissionActions {
  request: () => Promise<PermissionStatus>;
  check: () => Promise<PermissionStatus>;
}

/**
 * Checks and requests a single device permission (camera, location,
 * microphone, contacts, etc.) and tracks the current permission status.
 *
 * Requires: react-native-permissions
 *
 * @example
 * import { PERMISSIONS } from 'react-native-permissions';
 *
 * const [state, actions] = usePermission(PERMISSIONS.IOS.CAMERA);
 *
 * if (state.isGranted) {
 *   // show camera
 * } else {
 *   <Button title="Allow Camera" onPress={actions.request} />
 * }
 */
export const usePermission = (
  permission: Permission
): [PermissionState, PermissionActions] => {
  const [status, setStatus] = useState<PermissionStatus>(RESULTS.UNAVAILABLE);
  const [loading, setLoading] = useState(true);

  const checkPermission = useCallback(async (): Promise<PermissionStatus> => {
    const result = await check(permission);
    setStatus(result);
    return result;
  }, [permission]);

  const requestPermission = useCallback(async (): Promise<PermissionStatus> => {
    setLoading(true);
    try {
      const result = await request(permission);
      setStatus(result);
      return result;
    } finally {
      setLoading(false);
    }
  }, [permission]);

  useEffect(() => {
    setLoading(true);
    checkPermission().finally(() => setLoading(false));
  }, [checkPermission]);

  const state: PermissionState = {
    status,
    loading,
    isGranted: status === RESULTS.GRANTED || status === RESULTS.LIMITED,
    isDenied: status === RESULTS.DENIED,
    isBlocked: status === RESULTS.BLOCKED,
    isUnavailable: status === RESULTS.UNAVAILABLE,
  };

  return [state, { request: requestPermission, check: checkPermission }];
};
