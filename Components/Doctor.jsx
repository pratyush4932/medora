import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Doctor = () => {
  const insets = useSafeAreaInsets();
  
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    licenseNumber: '',
    registrationYear: '',
    medicalCouncil: '',
    phone: ''
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleRegister = () => {
    console.log('Doctor Registered:', formData);
    // Add form validation and backend integration here
  };

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <View style={styles.fullScreenContainer}>
        <View style={[styles.doctorButton]}>
             <Text style={styles.emoji}>👨‍⚕️</Text>
        </View>
        <Text style={styles.heading}>Hello Doctor!</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="NAME" placeholderTextColor="#ccc" onChangeText={(text) => handleInputChange('name', text)} />
          <TextInput style={styles.input} placeholder="DATE OF BIRTH" placeholderTextColor="#ccc" onChangeText={(text) => handleInputChange('dob', text)} />
          <TextInput style={styles.input} placeholder="LICENSE NUMBER" placeholderTextColor="#ccc" onChangeText={(text) => handleInputChange('licenseNumber', text)} />
          <TextInput style={styles.input} placeholder="YEAR OF REGISTRATION" placeholderTextColor="#ccc" onChangeText={(text) => handleInputChange('registrationYear', text)} />
          <TextInput style={styles.input} placeholder="STATE MEDICAL COUNCIL" placeholderTextColor="#ccc" onChangeText={(text) => handleInputChange('medicalCouncil', text)} />
          <TextInput style={styles.input} placeholder="PHONE NUMBER" placeholderTextColor="#ccc" keyboardType="phone-pad" onChangeText={(text) => handleInputChange('phone', text)} />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>REGISTER</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  fullScreenContainer: {
    flex: 1,
    backgroundColor: '#1D1B2F',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  emoji: {
    fontSize: 60,
    marginBottom: 10,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
  },
  doctorButton: {
    backgroundColor: '#2196F3',
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  input: {
    backgroundColor: '#4D4567',
    color: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    width: '100%',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#00082F',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 20,
    marginTop: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Doctor;
