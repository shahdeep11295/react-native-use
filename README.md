# react-native-use

A lightweight, comprehensive collection of reusable React hooks for React Native — designed to handle common functionality, eliminate boilerplate, and boost developer productivity across iOS, Android, Windows, Web, and visionOS.

Whether you need async state management, timers, debouncing, history tracking, global state, or lifecycle utilities — `react-native-use` has you covered with battle-tested, well-typed hooks that work seamlessly in any React Native project.

---

## Installation

```sh
npm install react-native-use
```

or with Yarn:

```sh
yarn add react-native-use
```

---

## Features

- 🔁 **Lifecycle hooks** — mount, unmount, update detection
- 📦 **State hooks** — counters, toggles, history, lists, sets, queues, maps
- ⏱️ **Timer hooks** — interval, timeout, debounce, throttle, RAF, countdown, stopwatch
- 🔀 **Async hooks** — loading/error/value states with retry support
- 🔄 **Reducer & Context factories** — shared state without Redux overhead
- ✅ **Validation hooks** — run validators reactively on state change
- ⚡ **Performance hooks** — memoization, render counting, RAF state, deep compare
- 📱 **Device hooks** — network, keyboard, dimensions, color scheme, permissions, clipboard
- 🛡️ **Safety hooks** — safe state, safe area insets, lock fn, mounted state
- 🌐 **Cross-platform** — works on iOS, Android, Windows, Web, and visionOS

---

## Usage

```js
import {
  useToggle,
  useCounter,
  useAsync,
  useDebounce,
  useInterval,
  createGlobalState,
} from 'react-native-use';

// Toggle between true/false
const [isVisible, toggle] = useToggle(false);

// Track a number with helpers
const [count, { inc, dec, reset }] = useCounter(0);

// Fetch data with loading/error/value state
const state = useAsync(async () => {
  const res = await fetch('https://api.example.com/data');
  return res.json();
}, []);

// Debounce a search input
const [query, setQuery] = React.useState('');
useDebounce(
  () => {
    console.log('Search:', query);
  },
  500,
  [query]
);

// Run something every second
useInterval(() => {
  console.log('tick');
}, 1000);

// Globally shared state — no provider needed
const useGlobalCount = createGlobalState(0);
const [globalCount, setGlobalCount] = useGlobalCount();
```

---

## Hooks Reference

| Hook                                                           | Description                                                                                | iOS | Android | Windows | Web | visionOS |
| -------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | :-: | :-----: | :-----: | :-: | :------: |
| **Lifecycle**                                                  |                                                                                            |     |         |         |     |
| [useEffectOnce](docs/useEffectOnce.md)                         | Runs an effect only once on mount.                                                         | ✅  |   ✅    |   ✅    | ✅  |    ✅    |
| [useUpdateEffect](docs/useUpdateEffect.md)                     | Like `useEffect` but skips the first invocation on mount.                                  | ✅  |   ✅    |   ✅    | ✅  |    ✅    |
| [useUnmount](docs/useUnmount.md)                               | Calls a function when the component unmounts.                                              | ✅  |   ✅    |   ✅    | ✅  |    ✅    |
| [useMountedState](docs/useMountedState.md)                     | Returns a function to check if the component is currently mounted.                         | ✅  |   ✅    |   ✅    | ✅  |    ✅    |
| [useFirstMountState](docs/useFirstMountState.md)               | Returns `true` only on the very first render.                                              | ✅  |   ✅    |   ✅    | ✅  |    ✅    |
| [useIsomorphicLayoutEffect](docs/useIsomorphicLayoutEffect.md) | `useLayoutEffect` on web; falls back to `useEffect` in React Native.                       | ⚠️  |   ⚠️    |   ⚠️    | ✅  |    ⚠️    |
| **State**                                                      |                                                                                            |     |         |         |     |
| [useToggle](docs/useToggle.md)                                 | Tracks a boolean value with a toggle function.                                             | ✅  |   ✅    |   ✅    | ✅  |    ✅    |
| [useCounter](docs/useCounter.md)                               | Tracks a numeric value with inc/dec/set/reset helpers.                                     | ✅  |   ✅    |   ✅    | ✅  |    ✅    |
| [useDefault](docs/useDefault.md)                               | Returns a fallback default when state is `null` or `undefined`.                            | ✅  |   ✅    |   ✅    | ✅  |    ✅    |
| [useSetState](docs/useSetState.md)                             | Merges partial updates into state like class `this.setState`.                              | ✅  |   ✅    |   ✅    | ✅  |    ✅    |
| [useGetSet](docs/useGetSet.md)                                 | Returns a getter instead of raw state to prevent stale closure bugs.                       | ✅  |   ✅    |   ✅    | ✅  |    ✅    |
| [useGetSetState](docs/useGetSetState.md)                       | A mix of `useGetSet` and `useSetState`.                                                    | ✅  |   ✅    |   ✅    | ✅  |    ✅    |
| [useRafState](docs/useRafState.md)                             | Updates state only inside a `requestAnimationFrame` callback.                              | ✅  |   ✅    |   ✅    | ✅  |    ✅    |
| [usePrevious](docs/usePrevious.md)                             | Returns the previous value of a state or prop.                                             | ✅  |   ✅    |   ✅    | ✅  |    ✅    |
| [usePreviousDistinct](docs/usePreviousDistinct.md)             | Like `usePrevious` but only updates when the value actually changes.                       | ✅  |   ✅    |   ✅    | ✅  |    ✅    |
| [useLatest](docs/useLatest.md)                                 | Always returns the latest value via a ref — safe inside async callbacks.                   | ✅  |   ✅    |   ✅    | ✅  |    ✅    |
| [useCombinedState](docs/useCombinedState.md)                   | Updates individual object fields, merges changes, and resets to initial state.             | ✅  |   ✅    |   ✅    | ✅  |    ✅    |
| [useStateHistory](docs/useStateHistory.md)                     | Stores previous state values and provides handles to travel back and forward through them. | ✅  |   ✅    |   ✅    | ✅  |    ✅    |
| [useStateList](docs/useStateList.md)                           | Provides circular iteration handles over a list of states.                                 | ✅  |   ✅    |   ✅    | ✅  |    ✅    |
| [useMediatedState](docs/useMediatedState.md)                   | Like `useState` but runs every update through a mediator function.                         | ✅  |   ✅    |   ✅    | ✅  |    ✅    |
| **Collections**                                                |                                                                                            |     |         |         |     |
| [useList](docs/useList.md)                                     | Tracks an array with push, remove, sort, filter, and more.                                 | ✅  |   ✅    |   ✅    | ✅  |    ✅    |
| [useSet](docs/useSet.md)                                       | Tracks a `Set` with add/remove/toggle/clear helpers.                                       | ✅  |   ✅    |   ✅    | ✅  |    ✅    |
| [useQueue](docs/useQueue.md)                                   | Implements a simple FIFO queue with add/remove/first/last/size.                            | ✅  |   ✅    |   ✅    | ✅  |    ✅    |
| **Validation**                                                 |                                                                                            |     |         |         |     |
| [useStateValidator](docs/useStateValidator.md)                 | Runs a validator function every time the state changes.                                    | ✅  |   ✅    |   ✅    | ✅  |    ✅    |
| [useMultiStateValidator](docs/useMultiStateValidator.md)       | Runs a validator whenever any of the given multiple states change.                         | ✅  |   ✅    |   ✅    | ✅  |    ✅    |
| **Reducers & Context**                                         |                                                                                            |     |         |         |     |
| [createReducer](docs/createReducer.md)                         | Factory for `useReducer` with custom Redux-compatible middleware.                          | ✅  |   ✅    |   ✅    | ✅  |    ✅    |
| [createReducerContext](docs/createReducerContext.md)           | Shared `useReducer`-like context hook across all components in a provider.                 | ✅  |   ✅    |   ✅    | ✅  |    ✅    |
| [createStateContext](docs/createStateContext.md)               | Shared `useState`-like context hook across all components in a provider.                   | ✅  |   ✅    |   ✅    | ✅  |    ✅    |
| [createGlobalState](docs/createGlobalState.md)                 | Creates globally shared state accessible from any component without a provider.            | ✅  |   ✅    |   ✅    | ✅  |    ✅    |
| **Performance & Memoization**                                  |                                                                                            |     |         |         |     |
| [createMemo](docs/createMemo.md)                               | Factory that wraps a function with `useMemo`, returning a memoized hook.                   | ✅  |   ✅    |   ✅    | ✅  |    ✅    |
| [useUpdate](docs/useUpdate.md)                                 | Returns a function that forces the component to re-render.                                 | ✅  |   ✅    |   ✅    | ✅  |    ✅    |
| [useRendersCount](docs/useRendersCount.md)                     | Tracks the total number of times a component has rendered.                                 | ✅  |   ✅    |   ✅    | ✅  |    ✅    |
| **Timers & Scheduling**                                        |                                                                                            |     |         |         |     |
| [useInterval](docs/useInterval.md)                             | Declarative `setInterval` hook; pausable by setting delay to `null`.                       | ✅  |   ✅    |   ✅    | ✅  |    ✅    |
| [useTimeout](docs/useTimeout.md)                               | Re-renders component after a timeout with cancel and reset handles.                        | ✅  |   ✅    |   ✅    | ✅  |    ✅    |
| [useTimeoutFn](docs/useTimeoutFn.md)                           | Calls a function after a delay with cancel and reset handles.                              | ✅  |   ✅    |   ✅    | ✅  |    ✅    |
| [useDebounce](docs/useDebounce.md)                             | Delays invoking a function until dependencies stop changing.                               | ✅  |   ✅    |   ✅    | ✅  |    ✅    |
| [useThrottle](docs/useThrottle.md)                             | Throttles a rapidly changing value by a given millisecond interval.                        | ✅  |   ✅    |   ✅    | ✅  |    ✅    |
| [useThrottleFn](docs/useThrottleFn.md)                         | Invokes a function then delays subsequent calls until the wait period passes.              | ✅  |   ✅    |   ✅    | ✅  |    ✅    |
| [useHarmonicIntervalFn](docs/useHarmonicIntervalFn.md)         | Like `useInterval` but synchronizes multiple intervals to fire at the same time.           | ✅  |   ✅    |   ✅    | ✅  |    ✅    |
| [useRaf](docs/useRaf.md)                                       | Re-renders on every `requestAnimationFrame`; returns elapsed time percentage.              | ✅  |   ✅    |   ✅    | ✅  |    ✅    |
| [useRafLoop](docs/useRafLoop.md)                               | Calls a function in a RAF loop without re-rendering; controllable start/stop.              | ✅  |   ✅    |   ✅    | ✅  |    ✅    |
| **Async**                                                      |                                                                                            |     |         |         |     |
| [useAsync](docs/useAsync.md)                                   | Resolves an async function and tracks `loading`, `value`, and `error`.                     | ✅  |   ✅    |   ✅    | ✅  |    ✅    |
| [useAsyncFn](docs/useAsyncFn.md)                               | Like `useAsync` but returns a callback to manually trigger execution.                      | ✅  |   ✅    |   ✅    | ✅  |    ✅    |
| [useAsyncRetry](docs/useAsyncRetry.md)                         | Like `useAsync` with an extra `retry()` method to re-run the function.                     | ✅  |   ✅    |   ✅    | ✅  |    ✅    |
| [useAsyncEffect](docs/useAsyncEffect.md)                       | Runs an `async` function inside a `useEffect` when dependencies change.                    | ✅  |   ✅    |   ✅    | ✅  |    ✅    |
| **Misc**                                                       |                                                                                            |     |         |         |     |
| [useError](docs/useError.md)                                   | Returns an error dispatcher that throws into React's error boundary.                       | ✅  |   ✅    |   ✅    | ✅  |    ✅    |
| [useObservable](docs/useObservable.md)                         | Tracks the latest value emitted by an Observable.                                          | ✅  |   ✅    |   ✅    | ✅  |    ✅    |
| [useMethods](docs/useMethods.md)                               | Simplifies `useReducer` using plain method objects instead of action types.                | ✅  |   ✅    |   ✅    | ✅  |    ✅    |
| **React Native Specific**                                      |                                                                                            |     |         |         |     |
| [useBackHandler](docs/useBackHandler.md)                       | Handles the Android hardware back button press.                                            | ❌  |   ✅    |   ❌    | ❌  |    ❌    |
| **Device & System**                                            |                                                                                            |     |         |         |     |
| [useAppState](docs/useAppState.md)                             | Tracks app foreground/background/inactive state via `AppState`.                            | ✅  |   ✅    |   ✅    | ⚠️  |    ✅    |
| [useKeyboard](docs/useKeyboard.md)                             | Tracks keyboard visibility and height; platform-aware show/hide events.                    | ✅  |   ✅    |   ✅    | ✅  |    ✅    |
| [useDimensions](docs/useDimensions.md)                         | Tracks window & screen dimensions; re-renders on rotation or resize.                       | ✅  |   ✅    |   ✅    | ✅  |    ✅    |
| [useColorScheme](docs/useColorScheme.md)                       | Tracks system light/dark mode; re-renders when the user changes theme.                     | ✅  |   ✅    |   ✅    | ✅  |    ✅    |
| [useNetworkInfo](docs/useNetworkInfo.md)                       | Tracks network connectivity, type, and internet reachability in real time.                 | ✅  |   ✅    |   ✅    | ✅  |    ✅    |
| [usePermission](docs/usePermission.md)                         | Checks and requests a single device permission; tracks its status reactively.              | ✅  |   ✅    |   ❌    | ❌  |    ✅    |
| [useClipboard](docs/useClipboard.md)                           | Reads from and writes to the device clipboard with `setText` and `clear`.                  | ✅  |   ✅    |   ✅    | ✅  |    ✅    |
| [useSafeAreaInsets](docs/useSafeAreaInsets.md)                 | Returns safe area insets (notch, home bar, status bar) for the current device.             | ✅  |   ✅    |   ✅    | ✅  |    ✅    |
| [useDeviceOrientation](docs/useDeviceOrientation.md)           | Tracks whether the device is in portrait or landscape orientation.                         | ✅  |   ✅    |   ✅    | ✅  |    ✅    |
| [useAccessibilityInfo](docs/useAccessibilityInfo.md)           | Tracks accessibility settings (screen reader, reduce motion, bold text, etc.).             | ✅  |   ✅    |   ✅    | ✅  |    ✅    |
| [useInteractionManager](docs/useInteractionManager.md)         | Defers work until all JS animations and interactions have completed.                       | ✅  |   ✅    |   ✅    | ✅  |    ✅    |
| [useImageDimensions](docs/useImageDimensions.md)               | Fetches the intrinsic width and height of a remote or local image.                         | ✅  |   ✅    |   ✅    | ✅  |    ✅    |
| [useLayout](docs/useLayout.md)                                 | Returns the layout dimensions of a component via `onLayout`.                               | ✅  |   ✅    |   ✅    | ✅  |    ✅    |
| [useRefresh](docs/useRefresh.md)                               | Manages pull-to-refresh state with `refreshing` flag and `onRefresh` handler.              | ✅  |   ✅    |   ✅    | ✅  |    ✅    |
| **Extended State**                                             |                                                                                            |     |         |         |     |
| [useMap](docs/useMap.md)                                       | Tracks a `Map` with set/delete/has/get/clear/reset — the Map equivalent of `useSet`.       | ✅  |   ✅    |   ✅    | ✅  |    ✅    |
| [useBoolean](docs/useBoolean.md)                               | Boolean state with explicit `setTrue`, `setFalse`, `toggle`, `set` actions.                | ✅  |   ✅    |   ✅    | ✅  |    ✅    |
| [useAsyncStorage](docs/useAsyncStorage.md)                     | Persists state to `AsyncStorage`; auto-loads on mount and saves on change.                 | ✅  |   ✅    |   ❌    | ❌  |    ✅    |
| **Timers & Counters**                                          |                                                                                            |     |         |         |     |
| [useCountdown](docs/useCountdown.md)                           | Counts down from a given number of seconds with start/pause/reset controls.                | ✅  |   ✅    |   ✅    | ✅  |    ✅    |
| [useStopwatch](docs/useStopwatch.md)                           | Accurate stopwatch with start/stop/reset and hours/minutes/seconds breakdown.              | ✅  |   ✅    |   ✅    | ✅  |    ✅    |
| **Safety & Guards**                                            |                                                                                            |     |         |         |     |
| [useSafeState](docs/useSafeState.md)                           | Like `useState` but silently ignores updates after the component unmounts.                 | ✅  |   ✅    |   ✅    | ✅  |    ✅    |
| [useLockFn](docs/useLockFn.md)                                 | Prevents concurrent async calls — stops double-submit on buttons.                          | ✅  |   ✅    |   ✅    | ✅  |    ✅    |
| **Utilities**                                                  |                                                                                            |     |         |         |     |
| [useEventListener](docs/useEventListener.md)                   | Attaches any RN event emitter listener and removes it safely on unmount.                   | ✅  |   ✅    |   ✅    | ✅  |    ✅    |
| [useDeepCompareEffect](docs/useDeepCompareEffect.md)           | Like `useEffect` but uses deep equality for deps — safe with objects/arrays.               | ✅  |   ✅    |   ✅    | ✅  |    ✅    |
| [useWhyDidYouUpdate](docs/useWhyDidYouUpdate.md)               | Dev-only debug hook that logs which props/state caused a re-render.                        | ✅  |   ✅    |   ✅    | ✅  |    ✅    |

### Legend

| Symbol | Meaning                                                                                                                                                                                            |
| :----: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   ✅   | Fully supported                                                                                                                                                                                    |
|   ⚠️   | Works with caveat — `useIsomorphicLayoutEffect` always resolves to `useEffect` (never `useLayoutEffect`) on non-browser platforms since `typeof window === 'undefined'` is `true` in React Native. |
|   ❌   | Not supported / no-op on this platform                                                                                                                                                             |

---

## Contributing

- [Development workflow](CONTRIBUTING.md#development-workflow)
- [Sending a pull request](CONTRIBUTING.md#sending-a-pull-request)
- [Code of conduct](CODE_OF_CONDUCT.md)

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
