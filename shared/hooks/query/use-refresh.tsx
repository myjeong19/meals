import React from 'react';
import { useFocusEffect } from '@react-navigation/native';

export function useRefresh<T>(refetch: () => Promise<T>) {
  const refreshRef = React.useRef(true);

  useFocusEffect(
    React.useCallback(() => {
      if (refreshRef.current) {
        refreshRef.current = false;
        return;
      }

      refetch();
    }, [refetch])
  );

  return refreshRef;
}
