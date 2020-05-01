import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Platform,
  Text,
  ScrollView,
} from 'react-native';

const App = () => {
  return (
    <>
      <ScrollView>
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
          <Text style={styles.titulo}>Otro titulo</Text>
          <View>
            <View>
              <Image
                style={styles.mejores}
                source={require('./assets/img/mejores1.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.mejores}
                source={require('./assets/img/mejores2.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.mejores}
                source={require('./assets/img/mejores3.jpg')}
              />
            </View>
          </View>
        </View>
      </ScrollView>
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
    marginHorizontal: 10,
  },
  ciudad: {
    height: 250,
    width: 250,
    marginRight: 10,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  mejores: {
    width: '100%',
    height: 200,
    marginVertical: 2.5,
  },
});

export default App;
