import { useCallback, useEffect, useState } from 'react';
import Clipboard from '@react-native-clipboard/clipboard';

export interface ClipboardActions {
  setText: (text: string) => void;
  clear: () => void;
}

/**
 * Reads from and writes to the device clipboard.
 * The current clipboard string is returned as state and refreshes
 * whenever you write a new value via `setText`.
 *
 * Requires: @react-native-clipboard/clipboard
 *
 * @example
 * const [text, { setText, clear }] = useClipboard();
 *
 * <Text>Clipboard: {text}</Text>
 * <Button title="Copy" onPress={() => setText('Hello World!')} />
 * <Button title="Clear" onPress={clear} />
 */
export const useClipboard = (): [string, ClipboardActions] => {
  const [text, setText_internal] = useState('');

  // Read clipboard on mount
  useEffect(() => {
    Clipboard.getString().then((value) => {
      setText_internal(value ?? '');
    });
  }, []);

  const setText = useCallback((value: string) => {
    Clipboard.setString(value);
    setText_internal(value);
  }, []);

  const clear = useCallback(() => {
    Clipboard.setString('');
    setText_internal('');
  }, []);

  return [text, { setText, clear }];
};
