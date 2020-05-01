import React from 'react';
import {StyleSheet, View, Image, Platform, Text, ScrollView} from 'react-native';

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
        <View style={styles.container}>
          <Text style={styles.titulo}>Que hacer en Paris</Text>
          <ScrollView horizontal>
            <View>
              <Image
                style={styles.ciudad}
                source={require('./assets/img/actividad1.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require('./assets/img/actividad2.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require('./assets/img/actividad3.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require('./assets/img/actividad4.jpg')}
              />
            </View>
          </ScrollView>
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
  container: {
    marginLeft: 10,
  },
  ciudad: {
    height: 250,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
});

export default App;
