import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Calculator from './components/Calculatrice'; // Assurez-vous que le chemin est correct

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Calculator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
});

export default App;
