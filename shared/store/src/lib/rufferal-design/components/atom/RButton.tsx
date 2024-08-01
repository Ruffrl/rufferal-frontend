import {
  ActivityIndicator,
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
} from 'react-native';

interface Props extends PressableProps {
  loading?: boolean;
  title?: string;
}

export const RButton = ({ loading, onPress, title = 'Save' }: Props) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      {loading ? (
        <ActivityIndicator size="small" color="aqua" />
      ) : (
        <Text style={styles.text}>{title}</Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
