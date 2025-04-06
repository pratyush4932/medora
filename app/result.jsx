import React from 'react';
import PrescriptionResults from '../Components/PrescriptionResults';
import { useLocalSearchParams } from 'expo-router';

const PrescriptionResultsScreen = () => {
  const params = useLocalSearchParams();
  return <PrescriptionResults 
    prescriptionData={params.prescriptionData ? JSON.parse(params.prescriptionData) : null}
    prescriptionFile={params.prescriptionFile ? JSON.parse(params.prescriptionFile) : null}
  />;
};

export default PrescriptionResultsScreen;
