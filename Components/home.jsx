import React from 'react';
import { useRouter } from 'expo-router';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const { width, height } = Dimensions.get('window');

const home = () => {
    const router = useRouter();

  return (
    <LinearGradient
      colors={['rgb(70, 99, 214)', 'rgb(70, 80, 122)', 'rgb(7, 31, 85)']}
      start={{ x: -1, y: 0.8 }}
      end={{ x: 1, y: 0.5 }}
      style={{ flex: 1 }}
        >
     <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2C3E87" />
      
      <View style={styles.content}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.brandName}>MED~ORA</Text>
          <View style={styles.underline} />
          <Text style={styles.tagline}>Your Health, Our Priority!</Text>
        </View>

        {/* Welcome Section */}
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeTitle}>WELCOME !</Text>
          <Text style={styles.welcomeSubtitle}>
            Let us make you feel better...
          </Text>
        </View>

        {/* Selection Section */}
        <View style={styles.selectionSection}>
          <Text style={styles.selectText}>SELECT ONE</Text>
          

          <TouchableOpacity 
            onPress={() => router.push('/patient')}
          >
          <LinearGradient
            colors={['rgb(255, 255, 255)', 'rgb(22, 38, 104)']}
            start={{ x:0, y: 1.9 }}
            end={{ x: 0.9, y: 0.1 }}
            onPress={() => router.push('/patient')}
            style={styles.button}>
            <Text style={styles.buttonText}>Hey I'm Patient</Text>
          </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={() => router.push('/doctor')}
          >
            <LinearGradient
            colors={['rgb(255, 255, 255)', 'rgb(22, 38, 104)']}
            start={{ x:0, y: 1.9 }}
            end={{ x: 0.9, y: 0.1 }}
            onPress={() => router.push('/doctor')}
            style={styles.button}>
            
            <Text style={styles.buttonText}>Hey I'm Doctor</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 40,
    justifyContent: 'space-between',
  },
  header: {
    alignItems: 'center',
    marginTop: 20,
  },
  brandName: {
    fontSize: 36,
    fontWeight: '300',
    color: '#FFFFFF',
    letterSpacing: 4,
    marginBottom: 8,
  },
  underline: {
    width: 60,
    height: 1,
    backgroundColor: '#FFFFFF',
    marginBottom: 12,
  },
  tagline: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '300',
    opacity: 0.9,
  },
  welcomeSection: {
    fontFamily: 'Roboto',
    marginTop: 50,
  },
  welcomeTitle: {
    fontSize: 40,
    marginLeft: 20,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  welcomeSubtitle: {
    fontSize: 20,
    color: '#FFFFFF',
    marginLeft: 20,
    fontStyle: 'italic',
    opacity: 0.8,
  },
  selectionSection: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 0,
  },
  selectText: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '500',
    marginBottom: 20,
    letterSpacing: 1,
    opacity: 0.9,
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 36,
    paddingVertical: 60,
    paddingHorizontal: 80,
    marginBottom: 30,
    width: '100%',
    maxWidth: 300,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'linear-gradient(rgb(141, 101, 173),rgb(236, 0, 0))',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: 0.5,
  },
});

export default home;