import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import { Image } from 'react-native';

const { width, height } = Dimensions.get('window');

const home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity
          style={[styles.card, styles.patientCard]}
          activeOpacity={0.9}
        >
          <View style={styles.imageContainer}>
            {/* Image placeholder for patient */}
            <Image 
  source={require('../images/patient.png')} 
  // Or for network images: source={{uri: 'https://example.com/patient-image.jpg'}}
  style={styles.image} 
  resizeMode="cover"
/>
          </View>
          <Text style={styles.cardText}>PATIENT</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.card, styles.doctorCard]}
          activeOpacity={0.9}
        >
          <View style={styles.imageContainer}>
            {/* Image placeholder for doctor */}
            <Image 
  source={require('../images/doctor.png')} 
  // Or for network images: source={{uri: 'https://example.com/patient-image.jpg'}}
  style={styles.image} 
  resizeMode="cover"
/>
          </View>
          <Text style={styles.cardText}>DOCTOR</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E2E',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  card: {
    width: width * 0.85,
    height: height * 0.15,
    borderRadius: 15,
    marginVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    overflow: 'hidden',
  },
  patientCard: {
    backgroundColor: '#C26E6E', // Pink/red color like in the design
  },
  doctorCard: {
    backgroundColor: '#4DA6CD', // Blue color like in the design
  },
  imageContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flex: 1,
  },
  imagePlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    // You can add a border to make the placeholder more visible
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    marginRight: 10,
  },
  cardText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
});

export default home;