import { StyleSheet, Text, View, Dimensions, SafeAreaView } from 'react-native';
import React from 'react';
import ContentGrid from '../components/ContentGrid';
import Junior from '../components/Junior';


const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const { width } = Dimensions.get("window");
const height = width * 0.5;

const List = () => {
  return (
    <View style={styles.homeBg}>
      <SafeAreaView>
          <View style={styles.container}>
                <ContentGrid />
                <Junior />
          </View>
      </SafeAreaView>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
    homeBg: {
        backgroundColor: '#000f26',
        height: deviceHeight
    },
    container:{
        marginTop: 20
    }
});
