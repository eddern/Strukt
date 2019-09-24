import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TodoList from './components/TodoList'

export default function App() {
  return (
    <View style={styles.container}>
      <TodoList></TodoList>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
