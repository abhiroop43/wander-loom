import React from 'react';
import { StyleSheet, Platform, Dimensions } from 'react-native';
import { Header, Icon } from '@rneui/themed';
import { theme } from '../../constants/theme';

interface AppHeaderProps {
  onBackPress?: any;
  onFilterPress?: any;
  title: string;
}

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const AppHeader = ({ title, onBackPress, onFilterPress }: AppHeaderProps) => {
  return (
    <Header
      placement="center"
      centerComponent={{
        text: title,
        style: {
          color: theme.colors.text,
          fontSize: 20,
          fontFamily: 'Poppins-regular',
        },
      }}
      leftComponent={
        onBackPress && <Icon name="chevron-left" type="feather" color={theme.colors.text} onPress={onBackPress} />
      }
      rightComponent={
        onFilterPress && <Icon name="filter" type="feather" color={theme.colors.text} onPress={onFilterPress} />
      }
      containerStyle={styles.headerContainer}
    />
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: theme.colors.bg100,
    justifyContent: 'space-around',
    borderBottomWidth: 0, // Remove the default bottom border
    borderTopWidth: 0,
    marginTop: 0,
    paddingTop: 0,
    height: deviceHeight / 10,
    alignItems: 'flex-start',
    top: Platform.OS === 'ios' ? -40 : 0,
    marginBottom: Platform.OS === 'ios' ? -10 : 0,
  },
});

export default AppHeader;
