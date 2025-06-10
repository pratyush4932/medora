import React, { useState, useEffect } from 'react';
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
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession();

const Patient = () => {
  const router = useRouter();
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  // Google Auth
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: 'YOUR_ANDROID_CLIENT_ID.apps.googleusercontent.com',
    iosClientId: 'YOUR_IOS_CLIENT_ID.apps.googleusercontent.com',
    expoClientId: 'YOUR_EXPO_CLIENT_ID.apps.googleusercontent.com',
  });

  useEffect(() => {
    if (response?.type === 'success') {
      // You can fetch user info here with response.authentication.accessToken
      router.push('/interfaceScreen');
    }
  }, [response]);

  // Simulate OTP sending
  const handleSendOTP = () => {
    if (!mobileNumber || mobileNumber.length < 10) {
      Alert.alert('Please enter a valid mobile number.');
      return;
    }
    // Generate a random 6-digit OTP
    const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setOtp(generatedOtp);
    Alert.alert('OTP Sent', `Your OTP is: ${generatedOtp}`);
    // In real app, send OTP to mobileNumber here
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
            <Text style={styles.welcomeText}> MED~ORA</Text>
            <Text style={styles.tagline}>Your Health, Our Priority!</Text>
          </View>

          <LinearGradient
            colors={['rgb(41, 88, 184)', 'rgba(4, 22, 92, 0.66)']}
            start={{ x: 0, y: 1.9 }}
            end={{ x: 0, y: 0.5 }}
            style={{ borderRadius: 45 }}
          >
            <View style={styles.totalContainer}>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>Mobile No.</Text>
                <View style={styles.mobileInputContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="+91"
                    placeholderTextColor="rgba(238, 237, 237, 0.38)"
                    keyboardType="phone-pad"
                    value={mobileNumber}
                    onChangeText={setMobileNumber}
                    maxLength={10}
                  />
                </View>
                <TouchableOpacity onPress={handleSendOTP}>
                  <Text style={styles.otpButtonText}>{'\n'}Generate OTP</Text>
                </TouchableOpacity>
              </View>

              {/* OTP Input */}
              <View style={styles.inputContainer}>
                <Text style={styles.label}>OTP</Text>
                <View style={styles.mobileInputContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder=""
                    placeholderTextColor="#ccc"
                    keyboardType="phone-pad"
                    value={otp}
                    onChangeText={setOtp}
                    maxLength={6}
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

              {/* Sign In with Google */}
              <TouchableOpacity
                style={styles.signInButton}
                onPress={() => promptAsync()}
                disabled={!request}
              >
                <Text style={styles.signInButtonText}>Login With Google</Text>
                <Image style={styles.iconimg} source={require('./images/google.png')} />
              </TouchableOpacity>

              {/* Register */}
              <TouchableOpacity style={styles.registerButton} onPress={() => router.push('/interfaceScreen')}>
                <Text style={styles.registerButtonText}>LOGIN</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => router.push('/register')}>
                <Text style={styles.registerButtonText}>New User? Register{'\n'}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.loginicons} onPress={() => router.push('/register')}>
                <Image style={styles.iconimg1} source={require('./images/fb.png')} />
                <Image style={styles.iconimg1} source={require('./images/x.png')} />
                <Image style={styles.iconimg1} source={require('./images/apple.png')} />
              </TouchableOpacity>

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
    padding: 20,
    paddingVertical: 69,
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
    marginBottom: 16,
    borderRadius: 20,
    padding: 12,
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
    paddingVertical: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 45,
    borderColor: '#a6a6ff',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    alignItems: 'center',
  },
  label: {
    color: 'rgba(238, 237, 237, 0.77)',
    fontSize: 14,
    marginBottom: 6,
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
    paddingVertical: 12,
    fontSize: 16,
    color: 'white',
    width: '100%',
  },
  input1: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 12,
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
    marginTop: -15,
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
    backgroundColor: '#666699',
    borderRadius: 2,
  },
  checkboxLabel: {
    color: 'white',
    fontSize: 14,
  },
  signInButton: {
    backgroundColor: '#000',
    borderRadius: 15,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 40,
    width: '100%',
    justifyContent: 'center',
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

export default Patient;