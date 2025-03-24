import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import { Image } from 'react-native';
import { Shadow } from 'react-native-shadow-2';

const { width, height } = Dimensions.get('window');

const home = () => {
    const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Shadow
          distance={10}
          startColor={'hsla(0, 4.00%, 44.10%, 0.50)'}
          offset={[5, 10]}
          containerViewStyle={styles.shadowContainer}
        >
          <TouchableOpacity
            style={[styles.card, styles.patientCard]}
            activeOpacity={0.9}
            onPress={() => navigation.navigate('Patient')}
          >
            <View style={styles.imageContainer}>
              <Image 
                source={require('../images/patient.png')} 
                style={styles.image} 
              />
            </View>
            <Text style={styles.cardText}>PATIENT</Text>
          </TouchableOpacity>
        </Shadow>

        <Shadow
          distance={10}
          startColor={'hsla(0, 4.00%, 44.10%, 0.50)'}
          offset={[5, 10]}
          containerViewStyle={styles.shadowContainer}
        >
          <TouchableOpacity
            style={[styles.card, styles.doctorCard]}
            activeOpacity={0.9}
            onPress={() => navigation.navigate('Doctor')}
          >
            <Text style={styles.cardText}>DOCTOR</Text>
            <View style={styles.imageContainer}>
              <Image 
                source={require('../images/doctor.png')} 
                style={styles.docimage} 
              />
            </View>
          </TouchableOpacity>
        </Shadow>
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
  shadowContainer: {
    marginVertical: 1,
  },
  card: {
    width: width * 0.85,
    height: height * 0.22,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginVertical: 15,
    overflow: 'hidden',
  },
  patientCard: {
    backgroundColor: '#BE464E',
  },
  doctorCard: {
    backgroundColor: '#2779A8',
  },
  imageContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flex: 1,
  },
  image: {
    width: '100%',
    height: '1200%',
    resizeMode: 'contain',
  },
  docimage: {
      width: '130%',
      height: '105%',
      resizeMode: 'contain',
  },
  cardText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
});

export default home;