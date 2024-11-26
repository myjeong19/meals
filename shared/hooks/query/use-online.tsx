import { useEffect } from 'react';
import { onlineManager } from '@tanstack/react-query';
import * as Network from 'expo-network';

export const useOnline = () => {
  useEffect(() => {
    onlineManager.setEventListener(setOnline => {
      const listener = Network.addNetworkStateListener(state => {
        if (state.isConnected) {
          setOnline(state.isConnected);
        }
      });

      return () => {
        if (listener && typeof listener.remove === 'function') {
          listener.remove();
        }
      };
    });
  }, []);
};
