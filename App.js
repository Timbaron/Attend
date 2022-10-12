import { StatusBar } from 'expo-status-bar';
import {  StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { HomeScreen } from './components/screens/Homescreen';

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
        <HomeScreen />
        <StatusBar style="light" />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1570e8',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
