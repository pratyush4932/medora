import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
  ActivityIndicator,
} from "react-native";
import * as DocumentPicker from "expo-document-picker";
import Icon from "react-native-vector-icons/Ionicons";
import * as FileSystem from "expo-file-system";
import { useRouter } from "expo-router";
const UploadScreen = () => {
  const router = useRouter();
  const [prescriptionFile, setPrescriptionFile] = useState(null);
  const [reportFile, setReportFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const API_URL = "http://192.168.29.64:3000/prescriptions/upload"; // Replace with your actual API endpoint

  const pickDocument = async (type) => {
    try {
      // The newer versions of expo-document-picker have a different response structure
      const result = await DocumentPicker.getDocumentAsync({
        type: [
          "application/pdf", // PDF
          "image/jpeg", // JPEG
          "image/png", // PNG
          "application/msword", // DOC
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // DOCX
        ],
        copyToCacheDirectory: true,
        multiple: false,
      });

      // Check if the document was picked successfully
      // In newer versions, result.canceled is used instead of result.type
      if (!result.canceled && result.assets && result.assets.length > 0) {
        const file = result.assets[0];
        
        if (type === "prescription") {
          setPrescriptionFile(file);
          // Process prescription image immediately
          processAndUploadPrescription(file);
        } else if (type === "report") {
          setReportFile(file);
          Alert.alert("Upload Successful", `Report: ${file.name}`, [
            { text: "OK" },
          ]);
        }
      } else if (result.type === "success") {
        // For backward compatibility with older versions
        if (type === "prescription") {
          setPrescriptionFile(result);
          // Process prescription image immediately
          processAndUploadPrescription(result);
        } else if (type === "report") {
          setReportFile(result);
          Alert.alert("Upload Successful", `Report: ${result.name}`, [
            { text: "OK" },
          ]);
        }
      } else {
        // Only show this alert if the user actually cancelled
        // Don't show it if there was an error
        console.log("Document picker result:", result);
        if (result.canceled) {
          Alert.alert("Upload Cancelled", "No document was selected");
        }
      }
    } catch (err) {
      console.error("Document pick error:", err);
      Alert.alert("Error", "Failed to upload document. " + err.message);
    }
  };

// In your React Native UploadScreen.js file

const processAndUploadPrescription = async (file) => {
  try {
    setIsLoading(true);
    
    // Get the file URI - handle both old and new response formats
    const fileUri = file.uri || (file.assets && file.assets[0] ? file.assets[0].uri : null);
    
    if (!fileUri) {
      throw new Error("Could not get file URI");
    }
    
    // For React Native, we need to read the file and convert to base64
    // Import this at the top of your file:
    // import * as FileSystem from 'expo-file-system';
    
    // Read the file as base64
    const base64Image = await FileSystem.readAsStringAsync(fileUri, {
      encoding: FileSystem.EncodingType.Base64
    });
    
    // Replace with your actual server IP
    // ⚠️ CHANGE THIS IP
    
    // Create payload with base64 image data
    const payload = {
      base64Image: base64Image
    };
    
    // Send the base64-encoded image data to server
    const response = await fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
    }
    
    const responseData = await response.json();
    console.log("API response:", responseData);
    
    // Navigate to results page with the API response data
    router.push({
      pathname: '/result',
      params: { 
        prescriptionData: JSON.stringify(responseData),
        prescriptionFile: JSON.stringify(file)
      }
    });
    
  } catch (error) {
    console.error('Error uploading prescription:', error);
    Alert.alert(
      'Upload Failed',
      'There was a problem uploading your prescription: ' + error.message
    );
  } finally {
    setIsLoading(false);
  }
};

  const uploadDocument = async (type) => {
    if (type === "prescription" && prescriptionFile) {
      // If we already have a file, upload it
      processAndUploadPrescription(prescriptionFile);
    } else {
      // Otherwise, pick a new document
      pickDocument(type);
    }
  };

  if (isLoading) {
    return (
      <SafeAreaView style={[styles.container, styles.loadingContainer]}>
        <ActivityIndicator size="large" color="#1CAA6E" />
        <Text style={styles.loadingText}>
          Processing your prescription...
        </Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.profileIcon}
        onPress={() => router.push("/profile")}
      >
        <Icon name="person-circle" size={30} color="white" />
      </TouchableOpacity>

      <View style={styles.content}>
        <TouchableOpacity
          style={styles.uploadButton}
          onPress={() => uploadDocument("prescription")}
        >
          <Text style={styles.uploadButtonText}>
            {prescriptionFile
              ? `PRESCRIPTION: ${prescriptionFile.name}`
              : "UPLOAD PRESCRIPTION"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.uploadButton}
          onPress={() => uploadDocument("report")}
        >
          <Text style={styles.uploadButtonText}>
            {reportFile ? `REPORT: ${reportFile.name}` : "UPLOAD REPORT"}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomNavigation}>
        <TouchableOpacity onPress={() => router.push("/qrscan")}>
          <Icon name="qr-code" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/medicine")}>
          <Icon name="medkit" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E2C",
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: 'white',
    marginTop: 10,
    fontSize: 16,
  },
  profileIcon: {
    alignSelf: "flex-end",
    padding: 15,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  uploadButton: {
    backgroundColor: "#2C2C3E",
    borderRadius: 10,
    paddingVertical: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  uploadButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  bottomNavigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#1CAA6E",
    paddingVertical: 10,
  },
});

export default UploadScreen;