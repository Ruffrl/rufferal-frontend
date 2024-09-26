import { Alert, Linking } from "react-native";

export const permissionAlert = () =>
  Alert.alert(
    'Update camera settings',
    'Rufferal is requesting camera permissions',
    [
      {
        text: 'Go to Settings',
        onPress: () => Linking.openSettings(),
      },
    ]
  );