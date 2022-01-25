import { SafeAreaView, ScrollView, StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';
import SearchInput from '../components/SearchInput';
import ContentList from '../components/ContentList';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const { width } = Dimensions.get("window");
const height = width * 0.5;

const Search = () => {
  return (
    <ScrollView  style={styles.homeBg}>
        <SafeAreaView>
            <SearchInput />
            <ContentList />
        </SafeAreaView>
    </ScrollView>
  );
};

export default Search;

const styles = StyleSheet.create({
    homeBg: {
        backgroundColor: '#000f26',
        height: deviceHeight
    },
});
