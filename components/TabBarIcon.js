import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';

import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
  return (
    <Ionicons
      name={props.name}
      size={props.size}
      style={{ marginBottom: -15 }}
      color={props.focused ? Colors.roxo : Colors.cinza}
    />
  );
}
