import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  SafeAreaView,
  StatusBar,
  ScrollView
} from 'react-native';

// If you want to use expo-linear-gradient, you need to install it first
// For now, let's create a simpler version without external dependencies
const GradientView = ({ style, children }) => {
  return (
    <View style={[style, { backgroundColor: '#4B9DF8' }]}>
      {children}
    </View>
  );
};

const interfaceScreen = () => {
  const [selectedDay, setSelectedDay] = useState('24');
  const [selectedTimeframe, setSelectedTimeframe] = useState('All day');
  
  const days = [
    { day: 'Tue', date: '22' },
    { day: 'Wed', date: '23' },
    { day: 'Thu', date: '24' },
    { day: 'Fri', date: '25' },
    { day: 'Sat', date: '26' },
    { day: 'Sun', date: '27' },
  ];
  
  const timeframes = ['All day', 'Morning', 'Afternoon', 'Evening'];
  
  const medications = [
    { 
      name: 'Roaccutane 30mg', 
      time: '8:00 AM', 
      dosage: '1 tablet', 
      instruction: 'Before food',
      icon: 'pill',
      completed: true
    },
    { 
      name: 'Omega 3', 
      time: '8:00 AM', 
      dosage: '2 pills', 
      instruction: 'Before food',
      icon: 'capsule',
      completed: true,
      color: '#FFC107'
    },
    { 
      name: 'Vitamin D', 
      time: '1:00 PM', 
      dosage: '10 drops', 
      instruction: 'Before food',
      icon: 'dropper',
      completed: false
    }
  ];

  const renderIcon = (type) => {
    if (type === 'pill') {
      return (
        <View style={styles.medicationIcon}>
          <Text style={styles.iconText}>○</Text>
        </View>
      );
    } else if (type === 'capsule') {
      return (
        <View style={styles.medicationIcon}>
          <Text style={styles.iconText}>⊂⊃</Text>
        </View>
      );
    } else if (type === 'dropper') {
      return (
        <View style={styles.medicationIcon}>
          <Text style={styles.iconText}>⏧</Text>
        </View>
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          <Image 
            source={{ uri: 'https://via.placeholder.com/40' }} 
            style={styles.profileImage} 
          />
        </View>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.notificationIconContainer}>
            <Text style={styles.notificationIcon}>🔔</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuContainer}>
            <Text style={styles.menuIcon}>≡</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      {/* Greeting */}
      <Text style={styles.greeting}>Hello </Text>
      
      {/* Health Article */}
      <GradientView style={styles.articleContainer}>
        <View style={styles.dotsContainer}>
          <Text style={styles.dots}>::::</Text>
        </View>
        <View>
          <Text style={styles.articleLabel}>Health Article</Text>
          <Text style={styles.articleTitle}>Why do pills only need water?</Text>
        </View>
        <Text style={styles.closeIcon}>✕</Text>
        <View style={[styles.dotsContainer, styles.bottomDots]}>
          <Text style={styles.dots}>::::</Text>
        </View>
      </GradientView>
      
      {/* Days Selection */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.daysContainer}>
        {days.map(item => (
          <TouchableOpacity 
            key={item.date}
            style={[
              styles.dayItem,
              selectedDay === item.date && styles.selectedDay
            ]}
            onPress={() => setSelectedDay(item.date)}
          >
            <Text style={[
              styles.dayText,
              selectedDay === item.date && styles.selectedDayText
            ]}>{item.day}</Text>
            <Text style={[
              styles.dateText,
              selectedDay === item.date && styles.selectedDayText
            ]}>{item.date}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      
      {/* Timeframes */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.timeframesContainer}>
        {timeframes.map(timeframe => (
          <TouchableOpacity 
            key={timeframe}
            style={[
              styles.timeframeItem,
              selectedTimeframe === timeframe && styles.selectedTimeframe
            ]}
            onPress={() => setSelectedTimeframe(timeframe)}
          >
            <Text style={[
              styles.timeframeText,
              selectedTimeframe === timeframe && styles.selectedTimeframeText
            ]}>{timeframe}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      
      {/* Medications List */}
      <ScrollView style={styles.medicationsContainer}>
        {medications.map((medication, index) => (
          <View key={index} style={styles.medicationCard}>
            <View style={styles.medicationInfoContainer}>
              {renderIcon(medication.icon)}
              <View style={styles.medicationDetails}>
                <Text style={styles.medicationName}>{medication.name}</Text>
                <Text style={styles.medicationTime}>
                  {medication.time} | {medication.dosage} | {medication.instruction}
                </Text>
              </View>
            </View>
            <TouchableOpacity 
              style={[
                styles.checkCircle,
                medication.completed && styles.checkedCircle,
                medication.color && { backgroundColor: medication.color }
              ]}
            >
              {medication.completed && (
                <Text style={styles.checkmark}>✓</Text>
              )}
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      
      {/* Add Button */}
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
      
      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={[styles.navIcon, styles.activeNavIcon]}>🏠</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>📅</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>👤</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>⚙️</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  profileContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  notificationIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  notificationIcon: {
    fontSize: 16,
  },
  menuContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIcon: {
    fontSize: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 15,
  },
  articleContainer: {
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  dotsContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  bottomDots: {
    top: 'auto',
    bottom: 10,
    right: 10,
    left: 'auto',
  },
  dots: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 16,
    letterSpacing: 2,
  },
  articleLabel: {
    color: 'white',
    fontSize: 12,
    opacity: 0.8,
  },
  articleTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    maxWidth: '80%',
  },
  closeIcon: {
    color: 'white',
    fontSize: 16,
  },
  daysContainer: {
    marginTop: 20,
    paddingHorizontal: 15,
  },
  dayItem: {
    alignItems: 'center',
    marginHorizontal: 5,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
  selectedDay: {
    backgroundColor: '#1A2A3A',
  },
  dayText: {
    color: '#9E9E9E',
    fontSize: 14,
  },
  dateText: {
    color: '#212121',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 4,
  },
  selectedDayText: {
    color: 'white',
  },
  timeframesContainer: {
    marginTop: 20,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  timeframeItem: {
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: '#F5F5F5',
  },
  selectedTimeframe: {
    backgroundColor: '#E8D7EF',
  },
  timeframeText: {
    color: '#9E9E9E',
    fontSize: 14,
  },
  selectedTimeframeText: {
    color: '#7B2CBF',
    fontWeight: '500',
  },
  medicationsContainer: {
    marginTop: 10,
    paddingHorizontal: 20,
    flex: 1,
  },
  medicationCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    marginBottom: 10,
  },
  medicationInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  medicationIcon: {
    marginRight: 15,
  },
  iconText: {
    fontSize: 24,
    color: '#424242',
  },
  medicationDetails: {
    flex: 1,
  },
  medicationName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  medicationTime: {
    fontSize: 12,
    color: '#757575',
    marginTop: 4,
  },
  checkCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkedCircle: {
    backgroundColor: '#4CAF50',
    borderColor: 'transparent',
  },
  checkmark: {
    color: 'white',
    fontSize: 14,
  },
  addButton: {
    position: 'absolute',
    bottom: 80,
    alignSelf: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#E9EEFA',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    zIndex: 10,
  },
  addButtonText: {
    fontSize: 26,
    color: '#4B88DF',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#F5F5F5',
  },
  navItem: {
    alignItems: 'center',
    padding: 8,
  },
  navIcon: {
    fontSize: 20,
    color: '#BDBDBD',
  },
  activeNavIcon: {
    color: '#212121',
  },
});

export default interfaceScreen;