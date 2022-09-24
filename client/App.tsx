import HashChat from './src/App';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <HashChat />
      </NavigationContainer>
    </SafeAreaView>
  );
}
