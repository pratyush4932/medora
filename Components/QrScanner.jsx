import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { Camera } from 'expo-camera';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; // Changed from react-native-vector-icons

const QrScanner = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [loading, setLoading] = useState(false);
  const cameraRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const getCameraPermission = async () => {
      try {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === 'granted');
      } catch (error) {
        console.error('Error requesting camera permission:', error);
        setHasPermission(false);
      }
    };
    getCameraPermission();
  }, []);

  const handleBarCodeScanned = async ({ type, data }) => {
    if (scanned) return;
    
    setScanned(true);
    setLoading(true);
    
    try {
      console.log('QR code scanned with ID:', data);
      const response = await fetch(`http://192.168.29.64:3000/prescriptions/${data}`);
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const result = await response.json();
      
      router.push({
        pathname: '/result',
        params: {
          prescriptionData: JSON.stringify(result),
          prescriptionFile: null
        }
      });
    } catch (error) {
      console.error('Error fetching prescription data:', error);
      Alert.alert(
        'Error',
        'Failed to fetch prescription data. Please try again.',
        [{ text: 'OK' }]
      );
      setScanned(false);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#1CAA6E" />
        <Text style={styles.loadingText}>Processing...</Text>
      </View>
    );
  }

  if (hasPermission === null) {
    return (
      <View style={styles.permissionContainer}>
        <ActivityIndicator size="large" color="#1CAA6E" />
        <Text style={styles.permissionText}>Requesting camera permission...</Text>
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View style={styles.permissionContainer}>
        <Ionicons name="camera-off" size={50} color="#FF6B6B" />
        <Text style={styles.permissionText}>Camera access is required</Text>
        <TouchableOpacity
          style={styles.permissionButton}
          onPress={async () => {
            try {
              const { status } = await Camera.requestCameraPermissionsAsync();
              setHasPermission(status === 'granted');
            } catch (error) {
              console.error('Error requesting camera permission:', error);
            }
          }}>
          <Text style={styles.buttonText}>Grant Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        style={styles.camera}
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        barCodeScannerSettings={{
          barCodeTypes: ['qr']
        }}
      >
        <View style={styles.scanOverlay}>
          <View style={styles.scanArea}>
            <View style={styles.cornerTopLeft} />
            <View style={styles.cornerTopRight} />
            <View style={styles.cornerBottomLeft} />
            <View style={styles.cornerBottomRight} />
          </View>
          <Text style={styles.overlayText}>Align QR Code</Text>
        </View>
      </Camera>

      {scanned && (
        <TouchableOpacity
          style={styles.scanAgainButton}
          onPress={() => setScanned(false)}
        >
          <Ionicons name="qr-code" size={24} color="white" />
          <Text style={styles.buttonText}>Scan Again</Text>
        </TouchableOpacity>
      )}
      
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.back()}
      >
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D1B2F'
  },
  camera: {
    flex: 1
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1D1B2F'
  },
  loadingText: {
    color: 'white',
    marginTop: 20,
    fontSize: 16
  },
  permissionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1D1B2F',
    padding: 20
  },
  permissionText: {
    color: 'white',
    fontSize: 18,
    marginVertical: 20,
    textAlign: 'center'
  },
  scanOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  scanArea: {
    width: 250,
    height: 250,
    position: 'relative'
  },
  cornerTopLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 40,
    width: 40,
    borderTopWidth: 4,
    borderLeftWidth: 4,
    borderColor: '#1CAA6E',
  },
  cornerTopRight: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: 40,
    width: 40,
    borderTopWidth: 4,
    borderRightWidth: 4,
    borderColor: '#1CAA6E',
  },
  cornerBottomLeft: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 40,
    width: 40,
    borderBottomWidth: 4,
    borderLeftWidth: 4,
    borderColor: '#1CAA6E',
  },
  cornerBottomRight: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    height: 40,
    width: 40,
    borderBottomWidth: 4,
    borderRightWidth: 4,
    borderColor: '#1CAA6E',
  },
  overlayText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: 10,
    borderRadius: 5,
    marginTop: 30
  },
  permissionButton: {
    backgroundColor: '#1CAA6E',
    padding: 15,
    borderRadius: 10
  },
  scanAgainButton: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    backgroundColor: '#1CAA6E',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20,
    padding: 8
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10
  }
});

export default QrScanner;