import React, { useState, useEffect } from 'react';
import {
 StyleSheet, Text,
 View,
} from 'react-native';
import colors from '../constants/Colors'


export default function Test() {

 return (
  <View style={styles.container}>
   <Text style={{ fontSize: 100 }}>Pág de test</Text>
  </View>
 );
}


const styles = StyleSheet.create({
 container: {
  flex: 1,
  alignItems: "center",
  backgroundColor: colors.backCinzaEscuro,
 },

});
