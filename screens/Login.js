import * as WebBrowser from 'expo-web-browser';
import React, { useState } from 'react';
import {
 Image, Platform, StyleSheet,
 Text, TouchableOpacity, View, Dimensions
} from 'react-native';
import Constants from 'expo-constants'
import colors from '../constants/Colors'
 

const { width } = Dimensions.get("window")

export default function Login(props) {
 
 return (
  <View style={styles.container}>
   <Text style={styles.brandLetter}>R</Text>
   <Text style={styles.smallText}>Para ter acesso a todas as funcionalidades
   recomendamos que conecte seu strava!
   </Text>
   <TouchableOpacity style={styles.buttonStrava}
    onPress={() => props.navigation.navigate('Feed')}
   >
    <Text style={styles.textStrava}>
     Conectar Strava
    </Text>
   </TouchableOpacity>
   <TouchableOpacity style={styles.smallButton}
    onPress={() => props.navigation.navigate('Feed')}
   >
    <Text style={styles.textSmallButton}>
     Outras opções de Login
    </Text>
   </TouchableOpacity>

  </View>
 );
}

const styles = StyleSheet.create({
 container: {
  paddingTop: Constants.statusBarHeight + 20,
  flex: 1,
  backgroundColor: '#fff',
  alignItems: "center",
 },
 brandLetter: {
  fontSize: 120,
  color: colors.roxo,
  fontWeight: "bold",
  fontStyle: "italic",
  paddingVertical: 50,
 },
 smallText: {
  textAlign: "center",
  paddingVertical: 10,
  paddingHorizontal: 50,
  fontSize: 12,
  color: colors.cinza,
 },
 buttonStrava: {
  marginVertical: 10,
  backgroundColor: colors.laranja,
  borderRadius: 50,
  width: width - 210,
  height: 60,
  justifyContent: "center",
  shadowColor: "#000",
  elevation: 5,
 },
 textStrava: {
  alignSelf: "center",
  fontWeight: "bold",
  fontSize: 20,
  color: colors.textButtons,
 },
 smallButton: {
  justifyContent: "center",
  marginVertical: 20,
  backgroundColor: "#fff",
  borderRadius: 50,
  width: width - 250,
  height: 35,
  shadowColor: '#000',
  elevation: 3,
 },
 textSmallButton: {
  color: colors.cinza,
  fontSize: 12,
  fontWeight: "700",
  alignSelf: "center",
 },
});
