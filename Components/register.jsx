import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView, 
  KeyboardAvoidingView, 
  Platform 
} from 'react-native';

const register = () => {
  const [name, setName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [age, setAge] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleRegister = () => {
    // Add your registration logic here
    console.log({ name, dateOfBirth, age, phoneNumber });
    // You can add API calls or navigation logic here
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}
      >
        <View style={styles.card}>
          {/* Profile Icon */}
          <View style={styles.profileIconContainer}>
            <View style={styles.profileIcon}>
              <Text style={styles.profileIconText}>👤</Text>
            </View>
          </View>
          
          {/* Welcome Text */}
          <Text style={styles.welcomeText}>Hello User!</Text>
          
          {/* Input Fields */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="NAME"
              placeholderTextColor="#fff"
              value={name}
              onChangeText={setName}
            />
            
            <TextInput
              style={[styles.input, styles.darkInput]}
              placeholder="DATE OF BIRTH"
              placeholderTextColor="#fff"
              value={dateOfBirth}
              onChangeText={setDateOfBirth}
            />
            
            <TextInput
              style={styles.input}
              placeholder="AGE"
              placeholderTextColor="#fff"
              value={age}
              onChangeText={setAge}
              keyboardType="numeric"
            />
            
            <TextInput
              style={styles.input}
              placeholder="PHONE NUMBER"
              placeholderTextColor="#fff"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              keyboardType="phone-pad"
            />
          </View>
          
          {/* Register Button */}
          <TouchableOpacity 
            style={styles.registerButton}
            onPress={handleRegister}
          >
            <Text style={styles.registerButtonText}>REGISTER</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyboardAvoidingView: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '85%',
    maxWidth: 400,
    backgroundColor: '#1e1e2e',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  profileIconContainer: {
    marginVertical: 20,
  },
  profileIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#1e88e5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileIconText: {
    fontSize: 40,
    color: 'white',
  },
  welcomeText: {
    fontSize: 20,
    color: 'white',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 8,
    padding: 12,
    marginVertical: 8,
    color: 'white',
  },
  darkInput: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  registerButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#007bff',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginTop: 10,
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default register;