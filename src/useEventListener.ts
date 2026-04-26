import { useEffect, useRef } from 'react';

type EventEmitterLike = {
  addListener: (
    event: string,
    handler: (...args: any[]) => void
  ) => { remove: () => void };
};

type NativeEventEmitterLike = {
  addEventListener: (
    event: string,
    handler: (...args: any[]) => void
  ) => { remove: () => void };
};

/**
 * Attaches an event listener to a React Native event emitter (e.g. Keyboard, AppState,
 * Dimensions, or any NativeEventEmitter instance) and automatically removes it on unmount.
 *
 * @example
 * useEventListener(Keyboard, 'keyboardDidShow', (e) => console.log(e));
 * useEventListener(AppState, 'change', (state) => console.log(state));
 */
export const useEventListener = (
  emitter: EventEmitterLike | NativeEventEmitterLike | null | undefined,
  event: string,
  handler: (...args: any[]) => void
): void => {
  const handlerRef = useRef(handler);
  handlerRef.current = handler;

  useEffect(() => {
    if (!emitter) return;

    const wrappedHandler = (...args: any[]) => handlerRef.current(...args);

    let subscription: { remove: () => void };

    if ('addEventListener' in emitter) {
      subscription = (emitter as NativeEventEmitterLike).addEventListener(
        event,
        wrappedHandler
      );
    } else {
      subscription = (emitter as EventEmitterLike).addListener(
        event,
        wrappedHandler
      );
    }

    return () => subscription.remove();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [emitter, event]);
};
