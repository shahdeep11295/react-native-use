# `useImageDimensions`

React Native hook that fetches the dimensions of an image from a local resource or a remote URL.

## Usage

```jsx
import { Image, Text, View } from 'react-native';
import { useImageDimensions } from 'react-native-use';

const Demo = () => {
  const { dimensions, loading, error } = useImageDimensions({
    uri: 'https://picsum.photos/400/300',
  });

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <View>
      <Text>{`${dimensions.width} x ${dimensions.height} (ratio: ${dimensions.aspectRatio.toFixed(2)})`}</Text>
      <Image
        source={{ uri: 'https://picsum.photos/400/300' }}
        style={{ width: 200, height: 150 }}
      />
    </View>
  );
};
```

## Reference

```ts
const { dimensions, loading, error } = useImageDimensions(
  source: ImageRequireSource | { uri: string },
  headers?: object
);
```
