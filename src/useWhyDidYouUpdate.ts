import { useEffect, useRef } from 'react';

/**
 * A debug hook that logs which props or state values caused a component to re-render.
 * Only active in development — does nothing in production.
 *
 * @example
 * const MyComponent = (props) => {
 *   useWhyDidYouUpdate('MyComponent', props);
 *   return <View />;
 * };
 */
export const useWhyDidYouUpdate = (
  componentName: string,
  props: Record<string, any>
): void => {
  const previousProps = useRef<Record<string, any>>({});

  useEffect(() => {
    if (__DEV__) {
      const allKeys = new Set([
        ...Object.keys(previousProps.current),
        ...Object.keys(props),
      ]);

      const changes: Record<string, { from: any; to: any }> = {};

      allKeys.forEach((key) => {
        if (previousProps.current[key] !== props[key]) {
          changes[key] = {
            from: previousProps.current[key],
            to: props[key],
          };
        }
      });

      if (Object.keys(changes).length > 0) {
        console.log(`[useWhyDidYouUpdate] ${componentName}`, changes);
      }
    }

    previousProps.current = props;
  });
};
