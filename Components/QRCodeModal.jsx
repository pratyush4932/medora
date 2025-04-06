import React from 'react';
import { 
  View, 
  Modal, 
  StyleSheet, 
  TouchableOpacity, 
  Text,
  Dimensions
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/Ionicons';

const QRCodeModal = ({ isVisible, onClose, prescriptionId }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Icon name="close" size={24} color="#1E1E2C" />
          </TouchableOpacity>
          
          <Text style={styles.modalTitle}>Prescription QR Code</Text>
          
          <View style={styles.qrContainer}>
            {prescriptionId ? (
              <QRCode
                value={prescriptionId}
                size={200}
                backgroundColor='white'
                color='#1E1E2C'
              />
            ) : (
              <Text style={styles.noIdText}>No prescription ID available</Text>
            )}
          </View>
          
          <Text style={styles.instructions}>
            Scan this QR code to quickly access this prescription
          </Text>
          
          <Text style={styles.idText}>ID: {prescriptionId}</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: Dimensions.get('window').width * 0.85,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeButton: {
    position: 'absolute',
    top: 15,
    right: 15,
    zIndex: 1,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E1E2C',
    marginBottom: 20,
  },
  qrContainer: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noIdText: {
    color: 'red',
    fontSize: 16,
  },
  instructions: {
    textAlign: 'center',
    color: '#555',
    marginBottom: 15,
  },
  idText: {
    fontSize: 14,
    color: '#1CAA6E',
    fontWeight: 'bold',
  },
});

export default QRCodeModal;