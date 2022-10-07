import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import * as Font from 'expo-font';
import { useEffect, useState } from 'react';


export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    if (!fontsLoaded) {
      loadFonts();
    }
  });

  const loadFonts = async () => {
    await Font.loadAsync({
      'type-36-black': require('./assets/font/type-36-black.ttf'),
    });

    setFontsLoaded(true);
  }

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.hours}> 4:05 </Text>
        <Text style={styles.textInit}>Previous parking</Text>
        <View style={styles.menu}>
          <Ionicons style={styles.iconMenu} name="ios-menu" size={24} />
        </View>

        <View style={styles.signal}>
          <FontAwesome5 name="signal" style={styles.iconSignal} size={16} color="white" />
          <MaterialIcons name="wifi" style={styles.iconSignal} size={20} color="white" />
          <Fontisto name="battery-full" style={styles.iconSignal} size={24} color="white" />
        </View>

        <View style={styles.containerImg}>
          <Image source={require("./assets/avatar.png")} style={styles.image} />
        </View>

      </View>

      <View style={styles.previous}>
        <Text style={styles.textPrevious}> My Previous parking</Text>
      </View>

      <View style={styles.listParking}>
        <Text style={styles.textOne}>60 AED</Text>
        <Text style={styles.textFor}>for hr</Text>
        <Text style={styles.textKilometros}>3.3 km</Text>

        <View style={styles.marker}>
          <MaterialCommunityIcons name="map-marker-path" size={18} style={styles.IconMarker} />
        </View>

        <View>
          <Text style={styles.textOpal}>Opal Tower</Text>
          <Text style={styles.text}>Home</Text>
          <Text style={styles.textSpots}>15 Car Spots</Text>
          <Entypo name="document" size={24} style={styles.iconCar} />
          <Entypo name="dot-single" size={24} style={styles.iconpoint} />
        </View>

      </View>

      <View style={styles.listParkingTwo}>
        <Text style={styles.textOne}>12 AED</Text>
        <Text style={styles.textFor}>for hr</Text>
        <Text style={styles.textKilometros}>22.3 km</Text>

        <View style={styles.marker}>
          <MaterialCommunityIcons name="map-marker-path" size={18} style={styles.IconMarker} />
        </View>

        <View>
          <Text style={styles.textOpal}>Marina Mall</Text>
          <Text style={styles.text}>Office</Text>
          <Text style={styles.textSpots}>80 Car Spots</Text>
          <Entypo name="document" size={24} style={styles.iconCar} />
          <Entypo name="dot-single" size={24} style={styles.iconpoint} />
        </View>

      </View>

      <View style={styles.listParkingThree}>
        <Text style={styles.textOne}>12 AED</Text>
        <Text style={styles.textFor}>for 3.4hr</Text>
        <Text style={styles.textKilometros}>1.3 km</Text>

        <View style={styles.marker}>
          <MaterialCommunityIcons name="map-marker-path" size={18} style={styles.IconMarker} />
        </View>

        <View>
          <Text style={styles.textOpal}>Marina Mall</Text>
          <Text style={styles.text}>Secuirity Parking</Text>
          <Text style={styles.textSpots}>1222 Car Spots</Text>
          <Entypo name="document" size={24} style={styles.iconCar} />
          <Entypo name="dot-single" size={24} style={styles.iconpoint} />
        </View>

      </View>

      <View style={styles.footer}>
        <View style={styles.iconsFooter}>
          <FontAwesome name="home" size={30} style={styles.iconsFooterTwo} />
          <MaterialCommunityIcons name="map-legend" size={30} style={styles.iconsFooterTwo} />
          <AntDesign name="book" size={30} style={styles.iconsFooterTwo} />
          <Ionicons name="notifications-outline" size={30} style={styles.iconsFooterTwo} />
        </View>
      </View>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7fa',

  },

  subContainer: {
    position: 'absolute',
    bottom: "80%",
    width: '100%',
    height: 200,
    backgroundColor: '#656cee',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },

  textInit: {
    color: "white",
    marginTop: 40,
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 20,
  },

  menu: {
    position: 'absolute',
    marginLeft: 30,
    backgroundColor: "white",
    borderRadius: 10,
    width: 40,
    height: 40,
    marginTop: 135,
  },

  iconMenu: {
    color: "#656cee",
    marginTop: "19%",
    alignSelf: "center",
  },

  signal: {
    position: 'absolute',
    marginTop: 80,
    flexDirection: "row",
    marginLeft: "76%",
  },

  iconSignal: {
    margin: 2,
  },

  hours: {
    color: "white",
    marginTop: 80,
    marginLeft: 30,
    fontWeight: "bold",
    fontSize: 15,
  },

  previous: {
    position: 'absolute',
    bottom: "73%",
  },

  textPrevious: {
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 35,
    fontFamily: "type-36-black",
  },

  image: {
    position: 'absolute',
    width: 35,
    height: 40,
    marginTop: 4,
  },

  containerImg: {
    position: "absolute",
    width: 45,
    height: 45,
    backgroundColor: '#eaf2ff',
    marginTop: 125,
    alignItems: "center",
    marginLeft: "78%",
    borderRadius: 10,
  },

  listParking: {
    position: "absolute",
    width: "82%",
    height: 100,
    marginTop: 220,
    alignSelf: "center",
    backgroundColor: "#ffffff",
    borderRadius: 25,
    bottom: "58%",
  },

  textOne: {
    position: "absolute",
    marginLeft: "82%",
    color: "#656cee",
    fontWeight: "bold",
    marginTop: 10,
  },

  textFor: {
    position: "absolute",
    fontSize: 9,
    marginLeft: "84%",
    marginTop: 30,
    color: "#bcc0c9",
  },

  textKilometros: {
    position: "absolute",
    fontSize: 12,
    fontWeight: "bold",
    marginLeft: "82%",
    marginTop: 60,
    color: "#bcc0c9",
  },

  marker: {
    position: 'absolute',
    marginLeft: "76%",
    borderRadius: 10,
    width: 40,
    height: 40,
    marginTop: 60,
  },

  IconMarker: {
    position: "absolute",
    color: "#656cee",
  },

  listParkingTwo: {
    position: "absolute",
    width: "82%",
    height: 100,
    alignSelf: "center",
    backgroundColor: "#ffffff",
    borderRadius: 25,
    bottom: "40%",
  },

  textOpal: {
    position: "absolute",
    marginLeft: "5%",
    color: "#bcc0c9",
    marginTop: 10,
  },

  text: {
    position: "absolute",
    fontSize: 18,
    color: "#6e727c",
    marginTop: 30,
    marginLeft: "5%",
    fontWeight: "bold",
  },

  iconCar: {
    position: "absolute",
    color: "#009688",
    marginTop: 60,
    marginLeft: 12,
  },

  iconpoint: {
    position: "absolute",
    color: "#009688",
    marginTop: 60,
    marginLeft: 12,
  },

  textSpots: {
    position: "absolute",
    color: "#bcc0c9",
    marginTop: 65,
    marginLeft: 39,
    fontSize: 12,
  },

  listParkingThree: {
    position: "absolute",
    width: "82%",
    height: 100,
    alignSelf: "center",
    backgroundColor: "#ffffff",
    borderRadius: 25,
    bottom: "22%",
  },

  footer: {
    position: "absolute",
    height: 100,
    width: "100%",
    marginTop: 735,
    backgroundColor: '#242632',
    bottom: "0%",
  },

  iconsFooter: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 5,
  },

  iconsFooterTwo: {
    margin: 30,
    color: "#ffffff",
  },
});
