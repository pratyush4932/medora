import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  Image 
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const interfaceScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Hamburger Menu */}
      <TouchableOpacity style={styles.hamburgerMenu}>
        <Icon name="menu" size={24} color="white" />
      </TouchableOpacity>

      {/* Hexagon Icon */}
      <TouchableOpacity style={styles.hexagonIcon}>
        <Icon name="apps" size={24} color="white" />
      </TouchableOpacity>

      {/* Hello User Text */}
      <Text style={styles.helloText}>Hello, User</Text>

      {/* Upload Prescription Button */}
      <TouchableOpacity style={styles.uploadButton} onPress={() => navigation.navigate("UploadScreen")}>
        <Icon name="cloud-upload" size={40} color="white" />
        <Text style={styles.uploadButtonText}>UPLOAD PRESCRIPTION</Text>
      </TouchableOpacity>

      {/* Chatbot and Notification Buttons */}
      <View style={styles.secondRowButtons}>
        <TouchableOpacity style={styles.blueButton}>
          <Text style={styles.blueButtonText}>CHATBOT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.blueButton}>
          <Text style={styles.blueButtonText}>NOTIFICATION</Text>
        </TouchableOpacity>
      </View>

      {/* Medicine and View Buttons */}
      <View style={styles.thirdRowButtons}>
        <TouchableOpacity style={styles.greenButton}>
          <Text style={styles.greenButtonText}>Medicine</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.greenButton}>
          <Text style={styles.greenButtonText}>QR</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity><Icon name="home" size={24} color="white" /></TouchableOpacity>
        <TouchableOpacity><Icon name="search" size={24} color="white" /></TouchableOpacity>
        <TouchableOpacity><Icon name="cloud-upload" size={24} color="white" /></TouchableOpacity>
        <TouchableOpacity><Icon name="qr-code" size={24} color="white" /></TouchableOpacity>
        <TouchableOpacity><Icon name="access-time" size={24} color="white" /></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(41, 43, 43)', // Dark background matching the screenshot
    padding: 20,
    position: 'relative',
  },
  hamburgerMenu: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  hexagonIcon: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  helloText: {
    color: 'white',
    fontSize: 22,
    marginTop: 80,
    marginBottom: 30,
  },
  uploadButton: {
    backgroundColor: '#009E60',
    borderRadius: 15,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  uploadButtonText: {
    color: 'white',
    fontSize: 26,
    marginTop: 10,
  },
  secondRowButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  blueButton: {
    backgroundColor: '#0D47AB',
    borderRadius: 10,
    paddingVertical: 15,
    width: '48%',
    height: 80,
    alignItems: 'center',
  },
  blueButtonText: {
    color: 'white',
    fontSize: 20,
    marginTop: 10,
  },
  thirdRowButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  greenButton: {
    backgroundColor: '#009E60',
    borderRadius: 10,
    paddingVertical: 15,
    width: '48%',
    height: 180,
    alignItems: 'center',
  },
  greenButtonText: {
    color: 'white',
    fontSize: 24,
    marginTop: 55,
  },
  bottomNavigation: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#009E60',
    paddingVertical: 15,
  },
});

export default interfaceScreen;