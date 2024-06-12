import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const buttons = [
  ['AC', '^', '%', '/'],
  ['7', '8', '9', 'X'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['.', '0', 'Del', '='],
];

const Calculator: React.FC = () => {
  const [currentInput, setCurrentInput] = useState<string>('');

  const handlePress = (input: string): void => {
    if (input === 'AC') {
      setCurrentInput('');
    } else if (input === 'Del') {
      setCurrentInput(currentInput.slice(0, -1));
    } else if (input === '=') {
      calculateResult();
    } else {
      setCurrentInput(currentInput + input);
    }
  };

  const calculateResult = (): void => {
    try {
      let expression = currentInput.replace(/X/g, '*').replace(/\^/g, '**');
      let result = eval(expression);
      setCurrentInput(result.toString());
    } catch (error) {
      setCurrentInput('Error');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Calculatrice</Text>
      <View style={styles.resultContainer}>
        <Text style={styles.result}>{currentInput || '0'}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        {buttons.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((button) => (
              <TouchableOpacity
                key={button}
                style={[
                  styles.button,
                  button === '=' ? styles.equalsButton : null,
                  isNaN(Number(button)) && button !== '.' ? styles.functionButton : null,
                ]}
                onPress={() => handlePress(button)}
              >
                <Text style={[
                  styles.buttonText,
                  isNaN(Number(button)) && button !== '.' ? styles.functionButtonText : null,
                ]}>{button}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  resultContainer: {
    width: '90%',
    height: 100,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 10,
    borderBottomColor: '#555',
    borderBottomWidth: 1,
  },
  result: {
    color: '#fff',
    fontSize: 48,
  },
  buttonsContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingVertical: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 5,
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    backgroundColor: '#fff',
  },
  equalsButton: {
    backgroundColor: '#f09a36',
  },
  functionButton: {
    backgroundColor: '#808080',
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  functionButtonText: {
    color: '#fff',
  },
});

export default Calculator;
