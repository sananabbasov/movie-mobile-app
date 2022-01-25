import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image, Dimensions } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const { width } = Dimensions.get("window");
const height = width * 0.5;

const movies = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];
let CurrentSlide = 0;
let IntervalTime = 4000;
const displaySlider = (item) => {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <Image
                    style={styles.thumbnail}
                    blurRadius={6}
                    source={{
                        uri: 'https://s3.amazonaws.com/heights-photos/wp-content/uploads/2021/12/01114542/Netflix-Pays-Big-for-Red-Notice-Cast2-1145x628.jpeg'
                    }}
                />
                <View style={styles.sliderContent}>
                    <View style={styles.pos}>
                        <Feather style={styles.playButton} name="play" color={'#fff'} size={30} />
                    </View>
                    {/* <View style={styles.sliderRight}>
                        <Text  style={styles.text}>Красное уведомление Красное уведомление Красное уведомление Красное уведомление </Text>
                    </View>
                     */}


                </View>
                <View style={styles.posterContainer}>
                    <View style={styles.posterInfo}>
                        <Image
                            style={styles.poster}
                            source={{
                                uri: 'https://m.media-amazon.com/images/M/MV5BZmRjODgyMzEtMzIxYS00OWY2LTk4YjUtMGMzZjMzMTZiN2Q0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg'
                            }}
                        />
                    </View>

                </View>

                <View style={styles.posterText}>
                    <Text style={styles.posterTextDesing}>
                        Red Notice a Notice
                    </Text>
                    <View style={styles.posterDflex}>
                    <Text style={styles.posterInfoTex}>+18</Text>
                    <Text style={styles.posterInfoTex}>8.9</Text>
                    <Text style={styles.posterInfoTex}>Drama</Text>
                    </View>
                </View>
                
            </View>
        </TouchableOpacity>
    )
}

const Slider = () => {
    return (
        <View>
            <FlatList
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                horizontal
                data={movies}
                renderItem={item => displaySlider(item)}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

export default Slider;

const styles = StyleSheet.create({
    container: {
    },
    thumbnail: {
        width: deviceWidth,
        height: 300,
        borderBottomRightRadius: 250
    },
    sliderContent: {

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    posterInfo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    posterDflex:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    sliderRight: {
        flexDirection: 'row',
        backgroundColor: '#000f26',
        marginTop: -80,
        textAlign: 'center',
        height: 50,
        borderTopLeftRadius: 20,
        minHeight: 20,
        maxWidth: 300,
    },
    playButton: {
        backgroundColor: '#ed333c',
        padding: 10,
        borderRadius: 100,
        margin: 20,
        marginTop: 40
    },
    pos: {
        marginTop: -100
    },
    star: {
        color: '#fff',
        padding: 10,
        borderRadius: 100,
    },
    text: {
        marginTop: 10,
        color: '#fff',
        marginRight: 10,
        height: 30,
        padding: 3,
        fontWeight: 'bold',
        fontSize: 18,
        maxWidth: 300,

    },
    poster: {
        width: 200,
        height: 300,


    },
    posterContainer: {
        width: 150,
        height: 250,
        position: 'relative',
        left: 10,
        top: -150,
        // borderWidth: 2,
        shadowColor: "#000",
        shadowOffset: { width: -1, height: 0 },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
        zIndex: 5,
    },
    posterText: {
        position: 'absolute',
        top: 0,
        left: 10,
        top: 50,
        maxWidth: 300
    },
    posterTextDesing: {
        color: "white",
        textShadowColor: 'black',
        textShadowOffset: { width: -1, height: 0 },
        textShadowRadius: 10,
        fontWeight: '800',
        fontSize: 32,
    },
    posterInfoTex: {
        color: '#fff',
        backgroundColor: '#ed333c',
        minWidth: 50,
        textAlign: 'center',
        alignContent: 'center',
        padding: 5,
        fontWeight: 'bold',
        marginRight: 15,
        marginTop: 20
    }
});
