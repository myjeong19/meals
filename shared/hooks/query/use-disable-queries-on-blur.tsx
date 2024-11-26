import React from 'react';
import { useFocusEffect } from '@react-navigation/native';

export function useDisableQueriesOnBlur() {
  const focusedRef = React.useRef(true);

  useFocusEffect(
    React.useCallback(() => {
      focusedRef.current = true;

      return () => {
        focusedRef.current = false;
      };
    }, [])
  );

  return () => focusedRef.current;
}
