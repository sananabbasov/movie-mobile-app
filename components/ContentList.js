import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View, Image, Dimensions } from 'react-native';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const { width } = Dimensions.get("window");
const ContentList = () => {

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
        <View >

            <View>
                {isLoading ? <ActivityIndicator /> : (
                    <FlatList
                        numColumns={2}
                        data={data}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                            <View style={styles.cinemalabContainer}>
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

                            </View>

                        )}
                    />

                )}
                <View style={styles.mt5}></View>

            </View>
        </View>
    );
};

export default ContentList;

const styles = StyleSheet.create({

    cardImage: {
        width: 190,
        height: 250,
        marginVertical: 10
    },
    mt5: {
        marginBottom: 30,
    },
    contenName: {
        color: '#fff'
    },
    cinemalabTitle: {
        color: '#fff',
        fontSize: 20
    },
    cinemalabContainer: {
        alignContent: 'center',
        // display: 'flex',
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        marginTop: 10,
    },
    textPosition: {
        width: 200
    }
});
