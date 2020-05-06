import React, { useState, useEffect } from 'react';
import {
  Image, Platform, StyleSheet, Text, Alert,
  TouchableOpacity, View, Dimensions
} from 'react-native';
import axios from 'axios'
import { Feather } from '@expo/vector-icons'
import Constants from 'expo-constants'
import colors from '../constants/Colors'
import { ScrollView } from 'react-native-gesture-handler';

import { withBadge, Icon } from 'react-native-elements'
const MessageBadge = withBadge(1)(Icon)

const { width } = Dimensions.get("window")

export default function Feed() {
  const [] = useState(false)
  const [] = useState(false)
  const [] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('https://json-server-recruitment.herokuapp.com/feed')
      .then(response => {
        setData(response.data)
      })
      .catch(() => {
        Alert.alert("erro no useEffect")
      })
  }, [])


  return (
    <View style={styles.container}>
      <View style={styles.headerFull}>

        <View style={styles.header}>
          <Text style={styles.textHeader}>RIDERIZE</Text>

          <View style={styles.buttonHeader}>
            <TouchableOpacity >
              <Feather name="search" size={20} color="#8f5de8" />
            </TouchableOpacity>

            <TouchableOpacity style={{
              alignItems: "center",
              justifyContent: "center",
              flex: 1
            }}  >
              <Feather style={{
                marginTop: 0,
                marginRight: 0
              }} name="send" size={20} color="#8f5de8" />
              <MessageBadge style={{
                elevation: 40,
                zIndex: 1, right: 18, marginBottom: -18,
                position: "absolute"
              }} />
            </TouchableOpacity>
          </View>
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
              Criar nova publicação
      </Text>
            <Feather name="plus-circle" size={15} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView>


        {data.map((data, index) => {
          return (
            <View key={index} style={styles.card}>
              <View style={styles.headerCard}>
                <View style={styles.userDetailPost}>
                  <Image source={{ uri: data.image_profile }}
                    style={styles.avatar} />
                  <View>
                    <Text style={styles.nameText}>{data.name}</Text>
                    <Text style={styles.dateText}>{data.date}</Text>
                  </View>
                </View>
                <View>
                  <TouchableOpacity style={styles.moreButton}>
                    <Feather name="more-horizontal" size={30} color={colors.cinza} />
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <Image source={{ uri: data.image_post }}
                  style={styles.imgCard} />
              </View>
              <View style={styles.footerCard}>
                <TouchableOpacity><Feather name="heart" size={30} color={colors.roxo} /></TouchableOpacity>
                <TouchableOpacity><Feather name="message-square" size={30} color={colors.roxo} /></TouchableOpacity>
                <TouchableOpacity><Feather name="share-2" size={30} color={colors.roxo} /></TouchableOpacity>
              </View>
            </View>
          )
        })
        }
      </ScrollView>

    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.backCinzaEscuro,
  },
  headerFull: {
    backgroundColor: '#fff',
    flexDirection: "column",
    // justifyContent: "space-between",
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight + 20,
    width: width,
    height: 230,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 30,
    width: width
  },
  textHeader: {
    fontSize: 30,
    color: colors.roxo,
    fontWeight: "bold",
    fontStyle: "italic"
  },
  buttonHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 50,
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
    flexDirection: "row",
    marginVertical: 18,
    backgroundColor: colors.roxo,
    height: 40,
    width: width - 130,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center"
  },
  textButtonNewPost: {
    paddingHorizontal: 5,
    color: "#fff",
    fontSize: 13,
    fontWeight: "bold",
  },
  card: {
    marginTop: 8,
    // marginBottom: 8,
    backgroundColor: '#fff',
    width: width,
    height: 415,
  },



  // card
  headerCard: {
    width: width,
    paddingHorizontal: 25,
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  userDetailPost: {
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center"
  },
  avatar: {
    marginRight: 15,
    borderRadius: 45 / 2,
    height: 45,
    width: 45,
  },
  nameText: {
    color: colors.roxo,
    fontWeight: "bold",
    fontSize: 14,
  },
  dateText: {
    color: colors.cinzaEscuro,
    fontSize: 12,
  },
  moreButton: {
    marginTop: -27,
    color: colors.cinzaEscuro
  },
  imgCard: {
    width: width,
    height: 280,
    // resizeMode: 'contain'
  },
  footerCard: {
    marginVertical: 10,
    paddingHorizontal: 25,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
