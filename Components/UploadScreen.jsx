import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView, 
  Alert 
} from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import Icon from 'react-native-vector-icons/Ionicons';

const UploadScreen = ({ navigation }) => {
  const [prescriptionFile, setPrescriptionFile] = useState(null);
  const [reportFile, setReportFile] = useState(null);

  const pickDocument = async (type) => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: [
          'application/pdf',    // PDF
          'image/jpeg',         // JPEG
          'image/png',          // PNG
          'application/msword', // DOC
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document' // DOCX
        ],
        multiple: false
      });

      if (result.type === 'success') {
        if (type === 'prescription') {
          setPrescriptionFile(result);
          Alert.alert(
            'Upload Successful', 
            `Prescription: ${result.name}`,
            [{ text: 'OK' }]
          );
        } else if (type === 'report') {
          setReportFile(result);
          Alert.alert(
            'Upload Successful', 
            `Report: ${result.name}`,
            [{ text: 'OK' }]
          );
        }
      } else {
        Alert.alert('Upload Cancelled', 'No document was selected');
      }
    } catch (err) {
      console.error('Document pick error:', err);
      Alert.alert('Error', 'Failed to upload document');
    }
  };

  const uploadDocument = async (type) => {
    // Here you would typically send the file to a server
    // For now, we'll just show an alert
    if (type === 'prescription' && prescriptionFile) {
      Alert.alert(
        'Upload Prescription', 
        `Preparing to upload ${prescriptionFile.name}`,
        [{ text: 'OK' }]
      );
    } else if (type === 'report' && reportFile) {
      Alert.alert(
        'Upload Report', 
        `Preparing to upload ${reportFile.name}`,
        [{ text: 'OK' }]
      );
    } else {
      pickDocument(type);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity 
        style={styles.profileIcon}
        onPress={() => navigation?.navigate('Profile')}
      >
        <Icon name="person-circle" size={30} color="white" />
      </TouchableOpacity>

      <View style={styles.content}>
        <TouchableOpacity 
          style={styles.uploadButton}
          onPress={() => uploadDocument('prescription')}
        >
          <Text style={styles.uploadButtonText}>
            {prescriptionFile 
              ? `PRESCRIPTION: ${prescriptionFile.name}` 
              : 'UPLOAD PRESCRIPTION'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.uploadButton}
          onPress={() => uploadDocument('report')}
        >
          <Text style={styles.uploadButtonText}>
            {reportFile 
              ? `REPORT: ${reportFile.name}` 
              : 'UPLOAD REPORT'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomNavigation}>
        <TouchableOpacity onPress={() => navigation?.navigate('QRScan')}>
          <Icon name="qr-code" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation?.navigate('Medicine')}>
          <Icon name="medkit" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E2C',
  },
  profileIcon: {
    alignSelf: 'flex-end',
    padding: 15,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  uploadButton: {
    backgroundColor: '#2C2C3E',
    borderRadius: 10,
    paddingVertical: 15,
    marginVertical: 10,
    alignItems: 'center',
  },
  uploadButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#1CAA6E',
    paddingVertical: 10,
  },
});

export default UploadScreen;