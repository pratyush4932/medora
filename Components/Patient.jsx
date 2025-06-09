import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

const Patient = () => {
  const router = useRouter();
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSendOTP = () => {
    console.log("Sending OTP to", mobileNumber);
  };

  const handleSignIn = () => {
    console.log("Signing in with", mobileNumber, "and OTP", otp);
    router.push('/interface');
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
            <View style={styles.imageContainer}>
              <Image
                source={require('./images/patient.png')}
                style={styles.image}
              />
            </View>
            <Text style={styles.welcomeText}>Welcome !</Text>
          </View>

          {/* Mobile Number Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Mobile No.</Text>
            <View style={styles.mobileInputContainer}>
              <TextInput
                style={styles.input}
                placeholder=""
                placeholderTextColor="#ccc"
                keyboardType="phone-pad"
                value={mobileNumber}
                onChangeText={setMobileNumber}
              />
              <TouchableOpacity style={styles.otpButton} onPress={handleSendOTP}>
                <Text style={styles.otpButtonText}>Send OTP</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* OTP Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>OTP</Text>
            <TextInput
              style={styles.input}
              placeholder=""
              placeholderTextColor="#ccc"
              keyboardType="number-pad"
              value={otp}
              onChangeText={setOtp}
              secureTextEntry
            />
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

          {/* Sign In */}
          <TouchableOpacity style={styles.signInButton}  onPress={() => router.push('/interfaceScreen')}>
            <Text style={styles.signInButtonText}>SIGN IN</Text>
          </TouchableOpacity>

          {/* Register */}
          <TouchableOpacity style={styles.registerButton} onPress={() => router.push('/register')}>
            <Text style={styles.registerButtonText}>New User? Register</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  welcomeContainer: {
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    padding: 20,
    
    borderRadius: 25,
    borderColor: '#a6a6ff',
    borderWidth: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
  },
  imageContainer: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
    backgroundColor: '#BE464E',
  },
  welcomeText: {
    fontSize: 26,
    fontWeight: '700',
    color: 'white',
    fontFamily: 'serif',
    letterSpacing: 1,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: 20,
    padding: 12,
  },
  label: {
    color: 'white',
    fontSize: 14,
    marginBottom: 6,
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
    paddingVertical: 12,
    fontSize: 16,
    color: 'white',
    width: '100%',
  },
  otpButton: {
    position: 'absolute',
    right: 10,
    top: 10,
    backgroundColor: '#F20C5C',
    borderRadius: 18,
    paddingHorizontal: 10,
    paddingVertical: 6,
    elevation: 2,
  },
  otpButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginBottom: 20,
    marginTop: -5,
    paddingLeft: 5,
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
    borderRadius: 4,
  },
  checkboxInner: {
    width: 12,
    height: 12,
    backgroundColor: '#666699',
    borderRadius: 2,
  },
  checkboxLabel: {
    color: 'white',
    fontSize: 14,
  },
  signInButton: {
    backgroundColor: '#000',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 30,
    width: '100%',
    marginBottom: 15,
    alignItems: 'center',
  },
  signInButtonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  registerButton: {
    backgroundColor: 'rgba(102, 102, 153, 0.3)',
    borderRadius: 25,
    paddingVertical: 14,
    paddingHorizontal: 20,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  registerButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Patient;
