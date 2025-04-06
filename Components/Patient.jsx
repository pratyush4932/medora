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
import { useRouter } from 'expo-router';

const Patient = () => {
  const router = useRouter();
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSendOTP = () => {
    // Logic to send OTP
    console.log("Sending OTP to", mobileNumber);
  };

  const handleSignIn = () => {
    // Logic for signing in
    console.log("Signing in with", mobileNumber, "and OTP", otp);
    // Navigate to main patient screen after successful login
    router.push('/interface');
  };


  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <View style={styles.container}>
        {/* Avatar and Welcome */}
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
              placeholderTextColor="#999"
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
            placeholderTextColor="#999"
            keyboardType="number-pad"
            value={otp}
            onChangeText={setOtp}
            secureTextEntry
          />
        </View>

        {/* Remember Me Checkbox */}
        <View style={styles.checkboxContainer}>
          <TouchableOpacity 
            style={styles.checkbox} 
            onPress={() => setRememberMe(!rememberMe)}>
            {rememberMe && <View style={styles.checkboxInner} />}
          </TouchableOpacity>
          <Text style={styles.checkboxLabel}>Remember Me</Text>
        </View>

        {/* Sign In Button */}
        <TouchableOpacity style={styles.signInButton} onPress={() => router.push('/interfaceScreen')}>
          <Text style={styles.signInButtonText}>SIGN IN</Text>
        </TouchableOpacity>

        {/* Register Option */}
        <TouchableOpacity style={styles.registerButton} onPress={() => router.push('/register')}>
          <Text style={styles.registerButtonText}>New User? Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1D1B2F',
  },
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeContainer: {
   
    marginBottom: 40,
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
  },
    imageContainer: {
      width: 140, // Adjusted width for profile picture
      height: 140, 
      
      // Adjusted height for profile picture
    },

    image: {
      resizeMode: 'contain',
      width: '100%', // Ensure image fits the container
      height: '100%',
      borderRadius: 100,
      backgroundColor: '#BE464E', // Ensure image fits the container
    },


  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    color: 'white',
    fontSize: 16,
    marginBottom: 8,
  },
  mobileInputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 15,
    fontSize: 16,
    color: '#333',
    width: '100%',
  },
  otpButton: {
    position: 'absolute',
    right: 5,
    backgroundColor: 'rgb(248, 16, 16)',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  otpButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginBottom: 30,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checkboxInner: {
    width: 14,
    height: 14,
    backgroundColor: '#666699',
  },
  checkboxLabel: {
    color: 'white',
    fontSize: 16,
  },
  signInButton: {
    backgroundColor: '#E83B43',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 40,
    marginBottom: 30,
  },
  signInButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerButton: {
    backgroundColor: 'rgba(102, 102, 153, 0.8)',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  registerButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Patient;
