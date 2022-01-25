import { StyleSheet, Text, View, SafeAreaView, Dimensions, ScrollView } from 'react-native';
import React from 'react';
import Slider from '../components/Slider';
import Cinemalab from '../components/Cinemalab';
import ContentGrid from '../components/ContentGrid';
import PlatformList from '../components/PlatformList';
import Series from '../components/Series';
import Junior from '../components/Junior';

const deviceHeight = Dimensions.get('window').height;

const Home = ({ navigation }) => {
    return (
        <SafeAreaView>
            <ScrollView style={styles.homeBg}>
           
                <Slider />
                <Cinemalab />
                <PlatformList />
                <ContentGrid />
                <Series />
                <Junior />
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;

const styles = StyleSheet.create({
    homeBg: {
        backgroundColor: '#000f26',
        height: deviceHeight

    }
});
