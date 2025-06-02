import React from 'react';
import { BaseToast, ErrorToast } from 'react-native-toast-message';
export const toastConfig = {
  success: (props: any) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: '#16a34a' }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{ fontSize: 15, fontWeight: 'bold' }}
    />
  ),
  error: (props: any) => (
    <ErrorToast
      {...props}
      style={{ borderLeftColor: '#dc2626' }}
      text1Style={{ fontSize: 15, fontWeight: 'bold' }}
    />
  ),
};
