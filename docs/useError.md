# `useError`

React side-effect hook that returns an error dispatcher.

## Usage

```jsx
import { Button } from 'react-native';
import { useError } from 'react-native-use';

const Demo = () => {
  const dispatchError = useError();

  const clickHandler = () => {
    dispatchError(new Error('Some error!'));
  };

  return <Button title="Click me to throw" onPress={clickHandler} />;
};
```

## Reference

```js
const dispatchError = useError();
```
