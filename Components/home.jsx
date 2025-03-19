import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';

const HomeScreen = ({ navigation }) => {

  return (
    <>
 <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <View style={styles.fullScreenContainer}>
      <Text style={styles.titletext}>Select Your Preferred Mode: </Text>
        <View style={styles.contentContainer}>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("Patient")}>
            <View style={[styles.circleButton, styles.patientButton]}>
              {/* Inner Shadow Layer */}
              <View style={styles.innerShadow} />
              <Text style={styles.emoji}>😷</Text>
            </View>
            <Text style={styles.buttonText}>PATIENT</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("Doctor")}>
            <View style={[styles.circleButton, styles.doctorButton]}>
              {/* Inner Shadow Layer */}
              <View style={styles.innerShadow} />
              <Text style={styles.emoji}>👨‍⚕️</Text>
            </View>
            <Text style={styles.buttonText}>DOCTOR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  fullScreenContainer: {
    flex: 1,
    backgroundColor: '#1D1B2F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 20,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  titletext:{
    color: 'white',
    fontSize: 25,
    marginBottom: 20,
  },
  circleButton: {
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  innerShadow: {
    position: 'absolute',
    width: '90%', // Slightly smaller than the button
    height: '90%', // Slightly smaller than the button
    borderRadius: 50, // Adjusted for the smaller size (85% of 60)
    backgroundColor: 'transparent',
    shadowColor: '#FFFFFF', // Dark shadow for inner effect
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.6,
    shadowRadius: 60,
    elevation: 8, // For Android
    zIndex: 0, // Behind the emoji
  },
  patientButton: {
    backgroundColor: '#C70E0E',
  },
  doctorButton: {
    backgroundColor: '#2043E0',

  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  emoji: {
    fontSize: 50,
  },
});


export default HomeScreen;
