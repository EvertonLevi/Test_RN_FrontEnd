import * as React from 'react';
import {
 Image, Platform, StyleSheet, Text,
 TouchableOpacity, View
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'
import Constants from 'expo-constants'
import colors from '../constants/Colors'

export default function Feed() {
 return (
  <View style={styles.container}>
   <View style={styles.header}>
    <Text style={styles.textHeader}>RIDERIZE</Text>

    <TouchableOpacity >
     <Feather name="magnifying-glass" size={28} color="#8f5de8" />
    </TouchableOpacity>

    <TouchableOpacity >
     <Feather name="send-o" size={28} color="#8f5de8" />
    </TouchableOpacity>
   </View>

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
 header: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: 'center'
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
});
