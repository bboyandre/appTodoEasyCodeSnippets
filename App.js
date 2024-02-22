import { StyleSheet, SafeAreaView, View } from 'react-native';
import { TodoScreen } from './src/screen/TodoScreen';

export default function App() {
  return (
    <SafeAreaView 
      style={{
        paddingTop: 30,
      }}
    >
      <TodoScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
