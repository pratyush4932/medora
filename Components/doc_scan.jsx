import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/Ionicons';

const { height } = Dimensions.get('window');

const QRScanEntryScreen = () => {
  const router = useRouter();

  const handleScanPress = () => {
    router.push('/qrscan');
  };

  return (
    <LinearGradient
      colors={['rgb(70, 99, 214)', 'rgb(45, 62, 129)', 'rgb(5, 21, 59)']}
      start={{ x: -1, y: 0.8 }}
      end={{ x: 1, y: 0.5 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.centeredContainer}>
          
            <View style={styles.totalContainer}>
              <Text style={styles.title}>Welcome to Prescription Scanner</Text>
              <TouchableOpacity style={styles.scanButton} onPress={handleScanPress}>
                <Icon name="qr-code-outline" size={28} color="white" style={{ marginRight: 10 }} />
                <Text style={styles.buttonText}>Scan QR</Text>
              </TouchableOpacity>
            </View>
         
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    height: '100%',
    
  },
  innerGradient: {
    borderRadius: 45,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  totalContainer: {
    width: '80%',
    paddingHorizontal: 20,
    paddingVertical: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 45,
    borderColor: '#a6a6ff',
    borderWidth: 1,
    shadowColor: 'rgb(0, 0, 0)',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0.9, height: 1 },
    shadowRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
  },
  scanButton: {
    flexDirection: 'row',
    backgroundColor: 'rgba(14, 13, 13, 0.42)',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 32,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default QRScanEntryScreen;