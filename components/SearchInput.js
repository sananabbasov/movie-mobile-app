import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';
const SearchInput = () => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nə axtarırsınız?"
        placeholderTextColor={'#fff'}
        style={{
          borderBottomWidth: 1,
          borderColor: '#fff',
          padding: 10,
          width: '90%'
        }}
      />
      <Text
      style={styles.searchIco}
        title='Axatar'
      ><Feather name="search" color={'#fff'} size={32} /></Text>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  searchIco:{
    width: '10%',
    textAlign: 'center',
    alignContent: 'center',
    alignItems: 'center'
  }
});
