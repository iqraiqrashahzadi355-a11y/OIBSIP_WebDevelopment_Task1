import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';

export default function Index() {
  const [value, setValue] = useState('');
  const [fromUnit, setFromUnit] = useState('cm');
  const [toUnit, setToUnit] = useState('m');
  const [result, setResult] = useState('');

  const convert = () => {
    let v = parseFloat(value);
    if (isNaN(v)) {
      setResult("Please enter a value");
      return;
    }

    let res = v;

    // Length conversions
    if (fromUnit === 'cm' && toUnit === 'm') res = v / 100;
    if (fromUnit === 'm' && toUnit === 'cm') res = v * 100;

    // Weight conversions
    if (fromUnit === 'g' && toUnit === 'kg') res = v / 1000;
    if (fromUnit === 'kg' && toUnit === 'g') res = v * 1000;

    setResult(res + ` ${toUnit}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Unit Converter</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Enter value</Text>
        <TextInput
          style={styles.input}
          placeholder="Type number..."
          placeholderTextColor="#aaa"
          keyboardType="numeric"
          value={value}
          onChangeText={setValue}
        />

        <Text style={styles.label}>From:</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={fromUnit}
            onValueChange={setFromUnit}
            style={styles.picker}
          >
            <Picker.Item label="Centimeter" value="cm" />
            <Picker.Item label="Meter" value="m" />
            <Picker.Item label="Gram" value="g" />
            <Picker.Item label="Kilogram" value="kg" />
          </Picker>
        </View>

        <Text style={styles.label}>To:</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={toUnit}
            onValueChange={setToUnit}
            style={styles.picker}
          >
            <Picker.Item label="Centimeter" value="cm" />
            <Picker.Item label="Meter" value="m" />
            <Picker.Item label="Gram" value="g" />
            <Picker.Item label="Kilogram" value="kg" />
          </Picker>
        </View>

        <View style={styles.buttonWrapper}>
          <Button title="Convert" onPress={convert} color="#2E8B57" />
        </View>

        {result ? <Text style={styles.result}>Result: {result}</Text> : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#2E8B57'
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 5
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    marginTop: 5,
    fontSize: 16,
    color: '#000'
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginTop: 5,
    overflow: 'hidden'
  },
  picker: {
    height: 50,
    color: '#000'
  },
  buttonWrapper: {
    marginTop: 20,
    borderRadius: 10,
    overflow: 'hidden'
  },
  result: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2E8B57',
    textAlign: 'center'
  }
});
