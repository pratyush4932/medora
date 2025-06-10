import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

const Doctor = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [yearOfRegistration, setYearOfRegistration] = useState('');
  const [stateMedicalCouncil, setStateMedicalCouncil] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleRegister = () => {
    if (
      !name ||
      !dob ||
      !licenseNumber ||
      !yearOfRegistration ||
      !stateMedicalCouncil ||
      !phoneNumber
    ) {
      Alert.alert('Please fill all the fields.');
      return;
    }
    // You can add further validation or API calls here
    Alert.alert('Registration Successful', `Welcome Dr. ${name}!`);
    router.push('/doc_scan');
  };

  return (
    <LinearGradient
      colors={['rgb(70, 99, 214)', 'rgb(45, 62, 129)', 'rgb(5, 21, 59)']}
      start={{ x: -1, y: 0.8 }}
      end={{ x: 1, y: 0.5 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.safeArea}>
        <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />

        <View style={styles.container}>
          {/* Header Block */}
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeText}> MED~ORA</Text>
            <Text style={styles.tagline}>Doctor Registration</Text>
          </View>

          <LinearGradient
            colors={['rgb(41, 88, 184)', 'rgba(4, 22, 92, 0.66)']}
            start={{ x: 0, y: 1.9 }}
            end={{ x: 0, y: 0.5 }}
            style={{ borderRadius: 25 }}
          >
            <View style={styles.totalContainer}>
              {/* Name */}
              <View style={styles.inputContainer}>
                <Text style={styles.label}>{'\n'}Name</Text>
                <View style={styles.mobileInputContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="Full Name"
                    placeholderTextColor="rgba(238, 237, 237, 0.38)"
                    value={name}
                    onChangeText={setName}
                  />
                </View>
              </View>
              {/* Date of Birth */}
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Date of Birth</Text>
                <View style={styles.mobileInputContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="DD/MM/YYYY"
                    placeholderTextColor="rgba(238, 237, 237, 0.38)"
                    value={dob}
                    keyboardType="calender"
                    onChangeText={setDob}
                  />
                </View>
              </View>
              {/* License Number */}
              <View style={styles.inputContainer}>
                <Text style={styles.label}>License Number</Text>
                <View style={styles.mobileInputContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="License Number"
                    placeholderTextColor="rgba(238, 237, 237, 0.38)"
                    value={licenseNumber}
                    onChangeText={setLicenseNumber}
                  />
                </View>
              </View>
              {/* Year of Registration */}
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Year of Registration</Text>
                <View style={styles.mobileInputContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="YYYY"
                    placeholderTextColor="rgba(238, 237, 237, 0.38)"
                    value={yearOfRegistration}
                    onChangeText={setYearOfRegistration}
                    keyboardType="numeric"
                    maxLength={4}
                  />
                </View>
              </View>
              {/* State Medical Council */}
              <View style={styles.inputContainer}>
                <Text style={styles.label}>State Medical Council</Text>
                <View style={styles.mobileInputContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="State Medical Council"
                    placeholderTextColor="rgba(238, 237, 237, 0.38)"
                    value={stateMedicalCouncil}
                    onChangeText={setStateMedicalCouncil}
                  />
                </View>
              </View>
              {/* Phone Number */}
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Phone Number</Text>
                <View style={styles.mobileInputContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="+91"
                    placeholderTextColor="rgba(238, 237, 237, 0.38)"
                    keyboardType="phone-pad"
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                    maxLength={10}
                  />
                </View>
              </View>
              {/* Remember Me */}
              <View style={styles.checkboxContainer}>
                <TouchableOpacity
                  style={styles.checkbox}
                  onPress={() => setRememberMe(!rememberMe)}
                >
                  {rememberMe && <View style={styles.checkboxInner} />}
                </TouchableOpacity>
                <Text style={styles.checkboxLabel}>Remember Me</Text>
              </View>
              {/* Register */}
              <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
                <Text style={styles.registerButtonText}>REGISTER</Text>
              </TouchableOpacity>
              <Text style={styles.registerButtonText}>Already Registered? Login{'\n'}</Text>
              
            </View>
          </LinearGradient>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  safeArea: {},
  container: {
    marginTop: 60,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  welcomeContainer: {
    marginBottom: 30,
    marginTop: -30,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingVertical: 30,
    borderRadius: 35,
    borderColor: '#a6a6ff',
    borderWidth: 1,
    backgroundColor: 'rgba(17, 13, 13, 0.06)',
  },
  tagline: {
    fontSize: 15,
    color: 'white',
    fontFamily: 'serif',
  },
  welcomeText: {
    fontSize: 40,
    fontWeight: '700',
    color: 'white',
    fontFamily: 'serif',
    letterSpacing: 1,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 10,
    borderRadius: 20,
  },
  iconimg: {
    marginLeft: 5,
    width: 25,
    marginTop: 1,
    height: 25,
  },
  iconimg1: {
    marginLeft: 15,
    width: 30,
    marginTop: 1,
    height: 30,
  },
  totalContainer: {
    width: '90%',
    paddingHorizontal: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 20,
    borderColor: '#a6a6ff',
    borderWidth: 1,
    shadowColor: 'rgb(255, 255, 255)',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    alignItems: 'center',
  },
  label: {
    color: 'rgba(238, 237, 237, 0.77)',
    fontSize: 14,
    marginBottom: 2,
    marginLeft: 5,
    fontWeight: '600',
  },
  mobileInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 20,
    paddingHorizontal: 15,
    fontSize: 16,
    color: 'white',
    width: '100%',
  },
  otpButtonText: {
    color: '#fff',
    fontSize: 12,
    marginBottom: -30,
    textAlign: 'right',
    fontWeight: 'bold',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginBottom: 20,
    marginTop: -5,
    paddingLeft: 10,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: '#aaa',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    borderRadius: 50,
  },
  checkboxInner: {
    width: 12,
    height: 12,
    backgroundColor: 'rgb(25, 0, 250)',
    borderRadius: 20,
  },
  checkboxLabel: {
    color: 'white',
    fontSize: 14,
  },
  registerButton: {
    backgroundColor: 'rgba(102, 102, 153, 0.3)',
    borderRadius: 25,
    paddingVertical: 14,
    paddingHorizontal: 70,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  loginicons: {
    flexDirection: 'row',
    width: '100%',
    marginRight: 20,
    borderRadius: 25,
    marginTop: 10,
    marginBottom: 10,
  },
  registerButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Doctor;