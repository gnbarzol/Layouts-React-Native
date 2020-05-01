import React from 'react';
import {StyleSheet, View, Image, Platform} from 'react-native';

const App = () => {
  return (
    <>
      <View>
        <View style={styles.header}>
          <Image
            style={styles.banner}
            source={require('./assets/img/bg.jpg')}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginTop: Platform.OS === 'ios' ? 35 : 10,
  },
  banner: {
    height: 250,
    flex: 1,
  },
});

export default App;
