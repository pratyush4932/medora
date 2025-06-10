import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  SafeAreaView,
  Modal,
  Pressable,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

const { width, height } = Dimensions.get('window');

export default function InterfaceScreen({ userName = "Guest" }) {
  const [searchText, setSearchText] = useState('');
  const [menuVisible, setMenuVisible] = useState(false);
  const initial = userName ? userName.charAt(0).toUpperCase() : 'G';
  const router = useRouter();

  return (
    <LinearGradient
      colors={['rgb(70, 99, 214)', 'rgb(16, 44, 156)', 'rgb(4, 27, 80)']}
      start={{ x: -1, y: 0.8 }}
      end={{ x: 1, y: 0.5 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#1e1b4b" />
        {/* Slide Panel Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={menuVisible}
          onRequestClose={() => setMenuVisible(false)}
        >
          <Pressable style={styles.modalOverlay} onPress={() => setMenuVisible(false)}>
            <View style={styles.slidePanel}>
              <TouchableOpacity style={styles.slidePanelButton}>
                <Text style={styles.slidePanelIcon}>👤</Text>
                <Text style={styles.slidePanelText}>Profile</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.slidePanelButton}>
                <Text style={styles.slidePanelIcon}>✏️</Text>
                <Text style={styles.slidePanelText}>Edit Profile</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.slidePanelButton}>
                <Text style={styles.slidePanelIcon}>🤖</Text>
                <Text style={styles.slidePanelText}>AskOris</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.slidePanelButton}>
                <Text style={styles.slidePanelIcon}>🩺</Text>
                <Text style={styles.slidePanelText}>Medical Analysis</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.slidePanelButton}>
                <Text style={styles.slidePanelIcon}>📅</Text>
                <Text style={styles.slidePanelText}>Reminder</Text>
              </TouchableOpacity>
            </View>
          </Pressable>
        </Modal>
        <View style={styles.gradient}>
          <ScrollView
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
          >
            {/* Header */}
            <View style={styles.header}>
              <View style={styles.headerLeft}>
                <TouchableOpacity style={styles.menuButton} onPress={() => setMenuVisible(true)}>
                  <Text style={styles.menuIcon}>☰</Text>
                </TouchableOpacity>
                <Text style={styles.logo}>MED~ORA</Text>
              </View>
              <View style={styles.headerRight}>
                <TouchableOpacity style={styles.headerIcon}>
                  <Text style={styles.headerIconText}>{initial}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                  <Text style={styles.icon}>🔔</Text>
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

            {/* Banner */}
            <View style={styles.bannerContainer}>
              <View style={styles.banner}>
                <View style={styles.bannerContent}>
                  <Text style={styles.bannerSubtitle}>MED~ORA </Text>
                  <Text style={styles.bannerTitle}>
                    Control lifestyle diseases through India's 1st doctor-led healthy weight loss program
                  </Text>
                  <Text style={styles.bannerDoctor}>
                    -Dr. Helen Brooke Taussig (HOD){"\n"}
                    MBBS.MD (Internal Medicine),USA
                  </Text>
                  <TouchableOpacity style={styles.exploreButton}>
                    <Text style={styles.exploreButtonText}>Explore Now</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.bannerImage}>
                  <View style={styles.doctorImagePlaceholder}>
                    <Image style={styles.docimg} source={require('./images/doc.png')} />
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
                <TouchableOpacity
                  style={styles.scanButton}
                  onPress={() => router.push('/qrscan')}
                >
                  <Text style={styles.scanButtonText}>Scan</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Feature Cards Row */}
            <View style={styles.featureRow}>
              
              {/* #AskOris */}
              <TouchableOpacity style={styles.featureCard}>
                <View style={styles.featureIconContainer}>
                  <Text style={styles.featureIcon}>🤖</Text>
                </View>
                <Text style={styles.featureSubtext}>Hey! How can I help you ?</Text>
                <Text style={styles.featureTitle}>#AskOris</Text>
                <Text style={styles.featurePowered}>Powered by Gemini</Text>
              </TouchableOpacity>
              {/* Upload your documents */}
              <TouchableOpacity style={styles.featureCard}>
                <View style={styles.featureIconContainer}>
                  <Text style={styles.featureIcon}>📤</Text>
                </View>
                <Text style={styles.featureSubtext}>Fed up of carrying files?</Text>
                <Text style={styles.featureTitle}>Upload your documents</Text>
                <Text style={styles.featurePowered}>Secured with us</Text>
              </TouchableOpacity>
            </View>

            {/* Reports Section */}
            <View style={styles.reportsContainer}>
  <View style={styles.reportsCard}>
    <View style={styles.reportsRow}>
      <View style={styles.reportsTextCol}>
        <Text style={styles.reportsTitle}>Access all your Reports</Text>
        <Text style={styles.reportsSubtitle}>VIEW ALL YOUR MEDICAL HISTORY</Text>
        <TouchableOpacity style={styles.reportsBtnWrap}>
          <Text style={styles.reportsButton}>CLICK TO VIEW &gt;</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.reportsImgCol}>
        <Image style={styles.authimg} source={require('./images/auth.png')} />
      </View>
    </View>
  </View>
</View>


            {/* Utility Section */}
            <View style={styles.utilityContainer}>
              <Text style={styles.utilityTitle}>
                MED~ORA <Text style={styles.utilityItalic}>Utility</Text>
              </Text>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 12,
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
  searchContainer: {
    
    marginBottom: 16,
    paddingHorizontal: 40,
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
    right: 50,
    top: 10,
  },
  searchIconText: {
    fontSize: 16,
  },
  bannerContainer: {
    paddingHorizontal: 16,
    marginBottom: 8,
    justifyContent: 'space-between',
  },
  banner: {
    backgroundColor: '#3730a3',
    borderRadius: 16,
    padding: 15,
    justifyContent: 'space-around',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  bannerContent: {
    flex: 1,
   
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
    marginBottom: 10,
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
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  doctorImagePlaceholder: {
    alignItems: 'center',
    marginLeft: 10,
    
    width: 100,
    justifyContent: 'space-between',
  },
  docimg: {
    top:10,
    width: '100%',
    borderRadius: 10,
  },
  

  scannerContainer: {
    paddingHorizontal: 16,
    marginBottom: 14,
  },
  scanner: {
    backgroundColor: 'rgba(10, 28, 78, 0.81)',
    borderRadius: 16,
    padding: 10,
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
    fontSize: 13,
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
  featureRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 13,
  },
  featureCard: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 16,
    padding: 14,
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
  reportsContainer: {
  paddingHorizontal: 16,
  marginBottom: 10,
  alignItems: 'center',
  justifyContent: 'center',
},
  reportsCard: {
  borderRadius: 16,
  padding: 16,
  width: '100%',
  backgroundColor: 'rgba(10, 28, 78, 0.81)',
  alignItems: 'flex-start',
  justifyContent: 'center',
  borderWidth: 1,
    borderColor: 'linear-gradient(rgb(141, 101, 173),rgb(236, 0, 0))',
},
reportsRow: {
  flexDirection: 'row',
  alignItems: 'center',
  width: '100%',
},
reportsTextCol: {
  flex: 1.5,
  justifyContent: 'center',
},
reportsImgCol: {
  flex: 1,
  alignItems: 'flex-end',
  justifyContent: 'center',
},
  reportsTitle: {
  color: 'white',
  fontSize: 14,
  fontWeight: '600',
  marginBottom: 2,
  letterSpacing: 1,
},
reportsSubtitle: {
  color: 'rgba(255,255,255,0.9)',
  fontSize: 10,
  marginBottom: 2,
  letterSpacing: 1,
},
reportsBtnWrap: {
  alignItems: 'flex-start',
  marginTop: 8,
},
reportsButton: {
  color: 'white',
  fontSize: 10,
  fontWeight: '500',
  letterSpacing: 3,
  marginTop: 8,
},
authimg: {
  width: 80,
  height: 80,
  borderRadius: 18,
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
  // Slide panel styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  slidePanel: {
    width: 220,
    backgroundColor: '#23235b',
    paddingTop: 48,
    paddingBottom: 24,
    paddingHorizontal: 16,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    elevation: 8,
    height: '100%',
  },
  slidePanelButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.08)',
  },
  slidePanelIcon: {
    fontSize: 22,
    marginRight: 16,
    color: 'white',
  },
  slidePanelText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '400',
  },
});