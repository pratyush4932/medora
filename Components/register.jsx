import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

const Register = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // Add registration logic here
    // For now, just navigate back or show a message
    router.push('/interfaceScreen');
  };

  return (
    <LinearGradient
      colors={['rgb(70, 99, 214)', 'rgb(45, 62, 129)', 'rgb(5, 21, 59)']}
      start={{ x: -1, y: 0.8 }}
      end={{ x: 1, y: 0.5 }}
      style={{ flex: 1 }}
    >
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <View style={styles.outerContainer}>
        {/* Welcome Container OUTSIDE the input container */}
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>MED~ORA</Text>
          <Text style={styles.header}>Patient Registration</Text>
        </View>

        <View style={styles.container}>
          

          <TextInput
            style={styles.input}
            placeholder="Full Name"
            placeholderTextColor="#ccc"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#ccc"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Mobile Number"
            placeholderTextColor="#ccc"
            value={mobile}
            onChangeText={setMobile}
            keyboardType="phone-pad"
            maxLength={10}
          />
          <TextInput
            style={styles.input}
            placeholder="Age"
            placeholderTextColor="#ccc"
            value={age}
            onChangeText={setAge}
            keyboardType="numeric"
            maxLength={3}
          />
          <TextInput
            style={styles.input}
            placeholder="Gender"
            placeholderTextColor="#ccc"
            value={gender}
            onChangeText={setGender}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#ccc"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="#ccc"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />

          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
  },
  welcomeContainer: {
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    padding: 20,
    marginTop: -20,
    paddingVertical: 40,
    borderRadius: 45,
    borderColor: '#a6a6ff',
    borderWidth: 1,
    backgroundColor: 'rgba(17, 13, 13, 0.06)',
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: '700',
    color: 'white',
    fontFamily: 'serif',
    letterSpacing: 1,
  },

  container: {
    width: '90%',
    backgroundColor: 'rgba(17, 13, 13, 0.10)',
    borderRadius: 25,
    padding: 24,
    alignItems: 'center',
    borderColor: '#a6a6ff',
    borderWidth: 1,
  },
  header: {
    fontSize: 15,
    color: 'white',
    fontFamily: 'serif',
  },
  input: {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    color: 'white',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#4663d6',
    borderRadius: 20,
    paddingVertical: 14,
    paddingHorizontal: 60,
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Register;