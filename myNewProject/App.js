import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, View, Text } from 'react-native';
import RegistrationScreen from './Screens/RegistrationScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require("./assets/images/backgroundImage.jpeg")} 
        style={styles.image}
      >
        <Text>Open up App.js to start working on your app!</Text>
        <RegistrationScreen/>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    flex: 1,
    width: '100%',
    resizeMode: "cover",
    justifyContent: "center",
    }
});
