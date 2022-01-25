import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View, Image, Dimensions } from 'react-native';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const { width } = Dimensions.get("window");
const Cinemalab = () => {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getMovies = async () => {
        try {
            const response = await fetch('http://elxanquliyev-001-site22.itempurl.com/api/Content/Az/getallcontent');
            const json = await response.json();
            setData(json);
            console.log(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <View style={styles.cinemalabContainer}>
            <View>
                {isLoading ? <ActivityIndicator /> : (
                    <FlatList
                        horizontal
                        data={data}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                            <View>
                                <Image
                                    blurRadius={2}
                                    style={styles.cardImage}
                                    source={{
                                        uri: item.photoUrl
                                    }}
                                />
                                <View style={styles.textPosition}>
                                    <Text style={styles.contenName}>{item.name}</Text>
                                </View>
                                <View style={styles.mt5}></View>

                            </View>
                        )}
                    />
                )}
            </View>
        </View>

    );
};

export default Cinemalab;

const styles = StyleSheet.create({
    Flex: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    contenTypeName: {
        color: '#fff',
        fontSize: 24
    },
    contenViewAll: {
        color: '#fff',
        marginTop: 10
    },
    cardImage: {
        width: 300,
        height: 200,
        marginRight: 20,
        borderRadius: 20,
    },
    mt5: {
        marginBottom: 10,
        paddingTop: 50
    },
    contenName: {
        color: '#fff',
        fontSize: 24,
        top: 20,
        left: 20
    },
    textPosition:{
        position: 'absolute',
        backgroundColor: '#ed333c90',
        width: 300,
        height: 200,
        borderRadius: 20,
    },
    cinemalabContainer:{
        marginTop: -30
    }
});
