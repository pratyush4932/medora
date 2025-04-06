import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/Ionicons';

const QRScanEntryScreen = () => {
  const router = useRouter();

  const handleScanPress = () => {
    router.push('/qrscan'); // this should match the path for your QrScanScreen
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome to Prescription Scanner</Text>

      <TouchableOpacity style={styles.scanButton} onPress={handleScanPress}>
        <Icon name="qr-code-outline" size={28} color="white" style={{ marginRight: 10 }} />
        <Text style={styles.buttonText}>Scan QR</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E2C",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
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
    backgroundColor: '#1CAA6E',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default QRScanEntryScreen;
