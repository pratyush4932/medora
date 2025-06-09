import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  StatusBar,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

export default function InterfaceScreen() {
  const [searchText, setSearchText] = useState('');

  return (
    <LinearGradient
      colors={['rgb(70, 99, 214)', 'rgb(16, 44, 156)', 'rgb(4, 27, 80)']}
      start={{ x: -1, y: 0.8 }}
      end={{ x: 1, y: 0.5 }}
      style={{ flex: 1 }}
        >
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1e1b4b" />
      
      <View style={styles.gradient}>
        <ScrollView 
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <TouchableOpacity style={styles.menuButton}>
                <Text style={styles.menuIcon}>☰</Text>
              </TouchableOpacity>
              <Text style={styles.logo}>MED~ORA</Text>
            </View>
            <View style={styles.headerRight}>
              <TouchableOpacity style={styles.headerIcon}>
                <Text style={styles.headerIconText}>G</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <Text style={styles.icon}>🔔</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <Text style={styles.icon}>🛒</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Search Bar */}
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search for 'oral care'"
              placeholderTextColor="rgba(255,255,255,0.6)"
              value={searchText}
              onChangeText={setSearchText}
            />
            <TouchableOpacity style={styles.searchIcon}>
              <Text style={styles.searchIconText}>🔍</Text>
            </TouchableOpacity>
          </View>

          {/* WeightWise Banner */}
          <View style={styles.bannerContainer}>
            <View style={styles.banner}>
              <View style={styles.bannerContent}>
                <Text style={styles.bannerSubtitle}>MED~ORA </Text>
                <Text style={styles.bannerTitle}>
                  Control lifestyle diseases through India's 1st doctor-led healthy weight loss program
                </Text>
                <Text style={styles.bannerDoctor}>
                  -Dr. Helen Brooke Taussig (HOD){'\n'}
                  MBBS.MD (Internal Medicine),USA
                </Text>
                <TouchableOpacity style={styles.exploreButton}>
                  <Text style={styles.exploreButtonText}>Explore Now</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.bannerImage}>
                <View style={styles.doctorImagePlaceholder}>
                  <Text style={styles.doctorIcon}>👩‍⚕️</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Prescription Scanner */}
          <View style={styles.scannerContainer}>
            <View style={styles.scanner}>
              <View style={styles.scannerLeft}>
                <View style={styles.scannerIcon}>
                  <Text style={styles.scannerIconText}>📄</Text>
                </View>
                <Text style={styles.scannerText}>Scan & Summarise your prescription !</Text>
              </View>
              <TouchableOpacity style={styles.scanButton}>
                <Text style={styles.scanButtonText}>Scan</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Feature Cards Row */}
          <View style={styles.featureRow}>
            <View style={styles.featureCard}>
              <View style={styles.featureIconContainer}>
                <Text style={styles.featureIcon}>🤖</Text>
              </View>
              <Text style={styles.featureSubtext}>Hey! How can I help you ?</Text>
              <Text style={styles.featureTitle}>#AskOris</Text>
              <Text style={styles.featurePowered}>Powered by Gemini</Text>
            </View>
            
            <View style={styles.featureCard}>
              <View style={styles.featureIconContainer}>
                <Text style={styles.featureIcon}>📤</Text>
              </View>
              <Text style={styles.featureTitle}>Upload your documents</Text>
            </View>
          </View>

          {/* Reports Section */}
          <View style={styles.reportsContainer}>
            <View style={styles.reportsCard}>
              <Text style={styles.reportsTitle}>Access all your Reports</Text>
              <Text style={styles.reportsSubtitle}>VIEW ALL YOUR MEDICAL HISTORY</Text>
              <TouchableOpacity>
                <Text style={styles.reportsButton}>CLICK TO VIEW ></Text>
              </TouchableOpacity>
              
              <View style={styles.phoneIllustration}>
                <Text style={styles.phoneIcon}>📱</Text>
              </View>
              
              <View style={styles.dotsContainer}>
                <View style={styles.dotActive} />
                <View style={styles.dot} />
                <View style={styles.dot} />
              </View>
            </View>
          </View>

          {/* Utility Section */}
          <View style={styles.utilityContainer}>
            <Text style={styles.utilityTitle}>MED~ORA <Text style={styles.utilityItalic}>Utility</Text></Text>
            <View style={styles.utilityRow}>
              <TouchableOpacity style={styles.utilityCard}>
                <View style={styles.utilityIconContainer}>
                  <Text style={styles.utilityIcon}>🩺</Text>
                </View>
                <Text style={styles.utilityText}>Medical Analysis</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.utilityCard}>
                <View style={styles.utilityIconContainer}>
                  <Text style={styles.utilityIcon}>📱</Text>
                </View>
                <Text style={styles.utilityText}>Generator QR</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.utilityCard}>
                <View style={styles.utilityIconContainer}>
                  <Text style={styles.utilityIcon}>📅</Text>
                </View>
                <Text style={styles.utilityText}>Reminder</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Health Goals Banner */}
          <View style={styles.healthGoalsContainer}>
            <View style={styles.healthGoalsBanner}>
              <Text style={styles.healthGoalsTitle}>Unlock the path to your health goals</Text>
              <Text style={styles.healthGoalsSubtitle}>
                Get personalized recommendations on supplements, lifestyle and diet with MED~ORA
              </Text>
              <Text style={styles.healthGoalsArrow}>→</Text>
              <View style={styles.silhouette} />
            </View>
          </View>
        </ScrollView>

        {/* Bottom Navigation */}
        <View style={styles.bottomNav}>
          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navIcon}>🏠</Text>
            <Text style={styles.navText}>Home</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.sosButton}>
            <Text style={styles.sosText}>SOS</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navIcon}>👤</Text>
            <Text style={styles.navText}>Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 80,
  },
  
  // Header Styles
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 16,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuButton: {
    marginRight: 12,
  },
  menuIcon: {
    color: 'white',
    fontSize: 18,
  },
  logo: {
    color: 'white',
    fontSize: 18,
    fontWeight: '300',
    letterSpacing: 2,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIcon: {
    width: 28,
    height: 28,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.5)',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  headerIconText: {
    color: 'white',
    fontSize: 12,
  },
  iconButton: {
    marginLeft: 12,
  },
  icon: {
    fontSize: 18,
  },

  // Search Styles
  searchContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
    position: 'relative',
  },
  searchInput: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 9,
    paddingRight: 50,
    color: 'white',
    fontSize: 14,
  },
  searchIcon: {
    position: 'absolute',
    right: 28,
    top: 12,
  },
  searchIconText: {
    fontSize: 16,
  },

  // Banner Styles
  bannerContainer: {
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  banner: {
    backgroundColor: '#3730a3',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  bannerContent: {
    flex: 1,
    paddingRight: 8,
  },
  bannerSubtitle: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 8,
    fontWeight: '500',
    marginBottom: 4,
  },
  bannerTitle: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 14,
    marginBottom: 8,
  },
  bannerDoctor: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 8,
    lineHeight: 8,
    marginBottom: 8,
  },
  exploreButton: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  exploreButtonText: {
    color: 'white',
    fontSize: 10,
    fontWeight: '500',
  },
  bannerImage: {
    width: 100,
    height: 80,
    backgroundColor: '#16a34a',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  doctorImagePlaceholder: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  doctorIcon: {
    fontSize: 40,
  },

  // Scanner Styles
  scannerContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  scanner: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 16,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  scannerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  scannerIcon: {
    width: 32,
    height: 32,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  scannerIconText: {
    fontSize: 16,
  },
  scannerText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
    flex: 1,
  },
  scanButton: {
    backgroundColor: '#374151',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  scanButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },

  // Feature Cards Styles
  featureRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  featureCard: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    marginHorizontal: 6,
  },
  featureIconContainer: {
    width: 48,
    height: 48,
    backgroundColor: 'rgba(59,130,246,0.2)',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  featureIcon: {
    fontSize: 24,
  },
  featureSubtext: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 10,
    textAlign: 'center',
    marginBottom: 4,
  },
  featureTitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 8,
  },
  featurePowered: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 10,
    textAlign: 'center',
  },

  // Reports Styles
  reportsContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  reportsCard: {
    backgroundColor: '#1d4ed8',
    borderRadius: 16,
    padding: 16,
    position: 'relative',
  },
  reportsTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  reportsSubtitle: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 14,
    marginBottom: 12,
  },
  reportsButton: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 1,
  },
  phoneIllustration: {
    position: 'absolute',
    right: 12,
    top: '50%',
    marginTop: -24,
    width: 48,
    height: 48,
    backgroundColor: 'rgba(59,130,246,0.3)',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  phoneIcon: {
    fontSize: 24,
  },
  dotsContainer: {
    flexDirection: 'row',
    marginTop: 12,
  },
  dotActive: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'white',
    marginRight: 6,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(255,255,255,0.5)',
    marginRight: 6,
  },

  // Utility Styles
  utilityContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  utilityTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '300',
    marginBottom: 12,
  },
  utilityItalic: {
    fontStyle: 'italic',
    fontFamily: 'serif',
  },
  utilityRow: {
    flexDirection: 'row',
  },
  utilityCard: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  utilityIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  utilityIcon: {
    fontSize: 20,
  },
  utilityText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
  },

  // Health Goals Styles
  healthGoalsContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  healthGoalsBanner: {
    backgroundColor: '#f59e0b',
    borderRadius: 16,
    padding: 16,
    position: 'relative',
    overflow: 'hidden',
  },
  healthGoalsTitle: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  healthGoalsSubtitle: {
    color: 'rgba(0,0,0,0.8)',
    fontSize: 14,
    lineHeight: 18,
    marginBottom: 12,
  },
  healthGoalsArrow: {
    color: 'black',
    fontSize: 20,
  },
  silhouette: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 60,
    height: 40,
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderTopLeftRadius: 30,
  },

  // Bottom Navigation Styles
  bottomNav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#1e1b4b',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.1)',
    paddingVertical: 8,
    paddingBottom: 20,
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    fontSize: 20,
    marginBottom: 4,
  },
  navText: {
    color: 'white',
    fontSize: 12,
  },
  sosButton: {
    width: 40,
    height: 40,
    backgroundColor: '#dc2626',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sosText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});