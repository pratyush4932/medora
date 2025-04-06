import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import QRCodeModal from './QRCodeModal'; // Import the QR code modal component

import { useRouter } from 'expo-router';

const PrescriptionResultsScreen = ({ prescriptionData, prescriptionFile }) => {
  const router = useRouter();
  
  // State for QR code modal visibility
  const [qrModalVisible, setQrModalVisible] = useState(false);
  
  // Get the prescription ID
  const prescriptionId = prescriptionData?.prescription?.id;

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.back()}
      >
        <Icon name="arrow-back" size={24} color="white" />
      </TouchableOpacity>
      
      {/* QR Code Button */}
      <TouchableOpacity
        style={styles.qrButton}
        onPress={() => setQrModalVisible(true)}
      >
        <Icon name="qr-code" size={24} color="white" />
      </TouchableOpacity>

      <ScrollView style={styles.content}>
        <Text style={styles.title}>Prescription Analysis</Text>
        
        {/* Display the prescription image */}
        {prescriptionFile && prescriptionFile.uri && (
          <View style={styles.imageContainer}>
            <Image 
              source={{ uri: prescriptionFile.uri }} 
              style={styles.prescriptionImage}
              resizeMode="contain"
            />
          </View>
        )}
        
        {/* Display the AI summary */}
        <View style={styles.summaryContainer}>
          <Text style={styles.sectionTitle}>AI Summary:</Text>
          <Text style={styles.summaryText}>
            {prescriptionData?.prescription?.aiSummary || "No summary available"}
          </Text>
        </View>
        
        {/* Display other prescription details */}
        <View style={styles.detailsContainer}>
          <Text style={styles.sectionTitle}>Prescription Details:</Text>
          <Text style={styles.detailText}>
            Upload Date: {new Date(prescriptionData?.prescription?.uploadDate).toLocaleDateString()}
          </Text>
          <Text style={styles.detailText}>
            Prescription ID: {prescriptionId || "Not available"}
          </Text>
        </View>
      </ScrollView>
      
      <View style={styles.bottomNavigation}>
        <TouchableOpacity onPress={() => router.push("/qrscan")}>
          <Icon name="qr-code" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/medicine")}>
          <Icon name="medkit" size={24} color="white" />
        </TouchableOpacity>
      </View>
      
      {/* QR Code Modal */}
      <QRCodeModal 
        isVisible={qrModalVisible}
        onClose={() => setQrModalVisible(false)}
        prescriptionId={prescriptionId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E2C",
  },
  backButton: {
    position: 'absolute',
    top: 15,
    left: 15,
    zIndex: 10,
  },
  qrButton: {
    position: 'absolute',
    top: 15,
    right: 15,
    zIndex: 10,
    backgroundColor: "#1CAA6E",
    borderRadius: 20,
    padding: 8,
  },
  content: {
    flex: 1,
    padding: 20,
    marginTop: 40, // Add space for the header buttons
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  imageContainer: {
    backgroundColor: '#2C2C3E',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  prescriptionImage: {
    width: '100%',
    height: 250,
  },
  summaryContainer: {
    backgroundColor: '#2C2C3E',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1CAA6E',
    marginBottom: 10,
  },
  summaryText: {
    color: 'white',
    fontSize: 16,
    lineHeight: 24,
  },
  detailsContainer: {
    backgroundColor: '#2C2C3E',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  detailText: {
    color: 'white',
    fontSize: 16,
    marginBottom: 8,
  },
  bottomNavigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#1CAA6E",
    paddingVertical: 10,
  },
});

export default PrescriptionResultsScreen;