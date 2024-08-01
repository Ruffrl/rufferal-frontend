import { StyleSheet, View } from 'react-native';

type TemplateProps = {
  mobile: boolean;
};

export const RAccessTemplate = ({
  children,
  mobile = false,
}: React.PropsWithChildren<TemplateProps>): React.ReactElement => {
  return (
    <View style={mobile ? styles.containerMobile : styles.containerWeb}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  containerWeb: {
    // marginHorizontal: 4,
    // marginVertical: 8,
    backgroundColor: 'aqua',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerMobile: {
    // marginHorizontal: 4,
    // marginVertical: 8,
    width: '100%',
    height: '100%',
    backgroundColor: 'aqua',
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
