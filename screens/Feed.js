import * as React from 'react';
import {
 Image, Platform, StyleSheet, Text, Alert,
 TouchableOpacity, View, Dimensions
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'
import Constants from 'expo-constants'
import colors from '../constants/Colors'

const { width } = Dimensions.get("window")

export default function Feed() {
 return (
  <View style={styles.container}>
   <View style={styles.headerFull}>

    <View style={styles.header}>
     <Text style={styles.textHeader}>RIDERIZE</Text>

     <TouchableOpacity >
      <Feather name="magnifying-glass" size={28} color="#8f5de8" />
     </TouchableOpacity>

     <TouchableOpacity >
      <Feather name="send-o" size={28} color="#8f5de8" />
     </TouchableOpacity>
    </View>

    <View style={styles.buttonGroup}>
     <TouchableOpacity
      style={styles.segmentButton}
      onPress={() => Alert.alert("Seguindo")}
     >
      <Text style={styles.textSegmentButton}>Seguindo</Text>
     </TouchableOpacity>
     <TouchableOpacity
      style={styles.segmentButton}
      onPress={() => Alert.alert("Clubes")}
     >
      <Text style={styles.textSegmentButton}>Clubes</Text>
     </TouchableOpacity>
     <TouchableOpacity
      style={styles.segmentButton}
      onPress={() => Alert.alert("Marcas")}
     >
      <Text style={styles.textSegmentButton}>Marcas</Text>
     </TouchableOpacity>
    </View>

    <View>
     <TouchableOpacity style={styles.buttonNewPost}>
      <Text style={styles.textButtonNewPost}>
       Criar nova publicação <Feather name="plus" size={15} color="#fff" />
      </Text>
     </TouchableOpacity>
    </View>
   </View>

  </View>

 );
}

const styles = StyleSheet.create({
 container: {
  paddingTop: Constants.statusBarHeight + 20,
  flex: 1,
  alignItems: "center",
  backgroundColor: colors.backCinzaEscuro
 },
 headerFull: {
  backgroundColor: '#fff',
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: 'center',
  width: width,
  height: 230,
 },
 header: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: 'center',
  marginBottom: 10,
 },
 textHeader: {
  fontSize: 30,
  color: colors.roxo,
  fontWeight: "bold",
  fontStyle: "italic"
 },
 headerTextBold: {
  fontWeight: "bold"
 },
 buttonGroup: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between"
 },
 segmentButton: {
  paddingVertical: 15,
  paddingHorizontal: 30,
 },
 textSegmentButton: {
  fontSize: 14,
  color: colors.roxo,
  fontWeight: "bold",
  borderBottomWidth: 2,
  borderBottomColor: colors.roxo
 },
 buttonNewPost: {
  marginVertical: 18,
  backgroundColor: colors.roxo,
  height: 40,
  width: width - 130,
  borderRadius: 12,
  justifyContent: "center",
  alignItems: "center"
 },
 textButtonNewPost: {
  color: "#fff",
  fontSize: 13,
  fontWeight: "bold",
 },

});
