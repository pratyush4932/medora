import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import QRCodeModal from './QRCodeModal';
import { useRouter, useLocalSearchParams } from 'expo-router';
import axios from 'axios';

const docres = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const id = params.id;

  const [loading, setLoading] = useState(true);
  const [prescriptionData, setPrescriptionData] = useState(null);
  const [qrModalVisible, setQrModalVisible] = useState(false);

  useEffect(() => {
    const fetchPrescription = async () => {
      try {
        const url = `http://192.168.29.64:3000/prescriptions/${id}`;
        console.log('Fetching from:', url);
        const response = await axios.get(url);
        console.log('Response:', response.data);
        setPrescriptionData(response.data);
      } catch (error) {
        console.error('Error fetching prescription:', error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPrescription();
    } else {
      console.error("No ID provided in params");
      setLoading(false);
    }
  }, [id]);

  const prescription = prescriptionData;

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#1CAA6E" style={{ marginTop: 50 }} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Icon name="arrow-back" size={24} color="white" />
      </TouchableOpacity>
      <ScrollView style={styles.content}>
        <Text style={styles.title}>Prescription Analysis</Text>

        {prescription?.imageBase64 && (
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: `data:image/jpeg;base64,${prescription.imageBase64}` }}
              style={styles.prescriptionImage}
              resizeMode="contain"
            />
          </View>
        )}

        <View style={styles.summaryContainer}>
          <Text style={styles.sectionTitle}>AI Summary:</Text>
          <Text style={styles.summaryText}>
            {prescription?.aiSummary || "No summary available"}
          </Text>
        </View>

        <View style={styles.detailsContainer}>
          <Text style={styles.sectionTitle}>Prescription Details:</Text>
          <Text style={styles.detailText}>
            Upload Date: {prescription?.uploadDate ? new Date(prescription.uploadDate).toLocaleDateString() : "Not available"}
          </Text>
          <Text style={styles.detailText}>
            Prescription ID: {prescription?._id || "Not available"}
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
    marginTop: 40,
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

export default docres;