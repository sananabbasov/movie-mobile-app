import { SafeAreaView, ScrollView, StyleSheet, Text, View, Dimensions, Image, Button, TouchableOpacity, FlatList } from 'react-native';
import React, { useState, useEffect, useStatus } from 'react';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const { width } = Dimensions.get("window");
const height = width * 0.5;




const listTab = [
    {
        status: 'Trailler'
    },
    {
        status: '1 Sezon'
    },
    {
        status: '2 Sezon'
    },
    {
        status: '3 Sezon'
    },
    {
        status: '4 Sezon'
    },
]



const data = [
    {
        name: 'Trailler',
        image: 'https://wallpapercave.com/wp/wp6002672.jpg',
        status: 'Trailler',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        name: 'Efectuar lo acordado',
        image: 'https://wallpapercave.com/wp/wp6126886.jpg',
        status: '1 Sezon',
        description: 'The Professor recruits a young female robber and seven other criminals for a grand heist, targeting the Royal Mint of Spain.'
    },
    {
        name: 'Imprudencias letales',
        image: 'https://wallpapercave.com/wp/wp8035945.jpg',
        status: '1 Sezon',
        description: 'Hostage negotiator Raquel makes initial contact with the Professor. One of the hostages is a crucial part of the thieves plans.'
    },
    {
        name: 'Errar al disparar',
        image: 'https://wallpapercave.com/wp/wp8035982.jpg',
        status: '1 Sezon',
        description: 'Police grab an image of the face of one of the robbers. Raquel is suspicious of the gentleman she meets at a bar.'
    },
    {
        name: 'Sezon 1',
        image: 'https://wallpapercave.com/wp/wp8035990.jpg',
        status: '3 Sezon',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        name: 'Sezon 1',
        image: 'https://cdn.pixabay.com/photo/2021/09/17/13/37/money-heist-6632767_960_720.jpg',
        status: '4 Sezon',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        name: 'Sezon 1',
        image: 'https://cdn.pixabay.com/photo/2021/09/17/13/37/money-heist-6632767_960_720.jpg',
        status: '2 Sezon',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },


]
const DetailPage = () => {
    const [status, setStatus] = useState('Trailler')
    const [datalist, setDatalist] = useState([...data.filter(e => e.status === 'Trailler')])

    const setStatusFilter = status => {
        if(status !== 'Trailler'){
            setDatalist([...data.filter(e => e.status === status)])
        }else{
            setDatalist([...data.filter(e => e.status === 'Trailler')])
        }
        setStatus(status)
    }

const renderItem = ({item,index}) =>(
    <View key={index} style={styles.itemContainer}>
        <View style={styles.itemPhoto}>
            <Image 
                style={styles.itemImage}
                source={{
                    uri: item.image
                }}
            />
            <View>
                <Text style={styles.itemText}>{item.name}</Text>
                <Text style={styles.itemText}>{item.description}</Text>
            </View>
        </View>
    </View>
)
    return (
        <View>
            <SafeAreaView>
                <ScrollView style={styles.homeBg}>

                    <Image
                        style={styles.photo}
                        source={{
                            uri: 'https://www.thelocal.es/wp-content/uploads/2021/12/MOney-Heist-Season-5-1200x675-1-1024x576-1.jpg'
                        }}
                    />
                    <View style={styles.buttonContainer}>
                        <Text style={styles.davam}>İzləməyə davam et</Text>
                    </View>
                    <View style={styles.posterText}>
                        <Text style={styles.posterTextDesing}>
                            La Casa de Papel
                        </Text>
                        <View style={styles.posterDflex}>
                            <Text style={styles.posterInfoTex}>+18</Text>
                            <Text style={styles.posterInfoTex}>8.9</Text>
                            <Text style={styles.posterInfoTex}>Drama</Text>
                        </View>
                    </View>
                    <Text style={styles.title}>Description</Text>
                    <Text style={styles.description}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries, but also the leap
                        into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing
                        Lorem Ipsum passages, and more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                    </Text>
                    <ScrollView style={styles.listTab}
                        horizontal
                    >
                        {
                            listTab.map(e => (
                                <TouchableOpacity
                                    style={[styles.btnTab, status === e.status && styles.btnTabActive]}
                                    onPress={() => setStatusFilter(e.status)}
                                >
                                    <Text style={styles.textTab}>{e.status}</Text>
                                </TouchableOpacity>
                            ))
                        }

                    </ScrollView>
                    <FlatList
                        data={datalist}
                        keyExtractor={(e, i) => i.toString()}
                        renderItem={renderItem}
                    />

                    
                <View>
                    
                </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
};

export default DetailPage;

const styles = StyleSheet.create({
    homeBg: {
        backgroundColor: '#000f26',
        height: deviceHeight
    },
    photo: {
        width: deviceWidth,
        height: 300,
        resizeMode: 'cover'
    },
    title: {
        color: '#fff',
        fontSize: 18,
        marginVertical: 10
    },
    posterInfo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    posterDflex: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    }, posterTextDesing: {
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
    },
    description: {
        color: '#fff'
    },
    davam: {
        backgroundColor: '#ed333c',
        color: '#fff',
        textAlign: 'center',
        width: '70%',
        paddingVertical: 15,
        borderRadius: 20,
        marginVertical: 20
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },

    btnTab: {
        width: Dimensions.get('window').width / 3.5,
        flexDirection: 'row',
        borderWidth: 0.5,
        borderColor: '#EBEBEB',
        padding: 10,
        justifyContent: 'center',
        color: '#fff',
        margin: 10
    },
    textTab: {
        color: '#fff',
        fontSize: 16
    },
    listTab: {
        flex: 1,
        padding: 15,
        flexDirection: 'row'
    },
    btnTabActive: {
        backgroundColor: '#ed333c'
    },
    itemContainer:{
        flexDirection: 'row',
    },
    itemImage:{
        width: 150,
        height: 150
    },
    itemPhoto:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itemText:{
        color: '#fff',
        marginLeft: 15,
        width: 200
    }
});
