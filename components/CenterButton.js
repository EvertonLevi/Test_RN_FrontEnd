import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import colors from '../constants/Colors'


import { withBadge, Icon } from 'react-native-elements'
const MessageBadge = withBadge(1)(Icon)


export default function CenterButton() {
 return (
  <TouchableOpacity
   style={{
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.roxo,
    color: '#FFF'
   }}
  >
   <MessageBadge
    style={{
     marginLeft: 30,
     marginBottom: 40,
    }} />
   <Text style={{
    color: '#FFF',
    fontSize: 45,
    fontWeight: "bold",
    fontStyle: "italic",
    alignSelf: "center",
    position: "absolute"
   }}>R</Text>
  </TouchableOpacity>
 )
}