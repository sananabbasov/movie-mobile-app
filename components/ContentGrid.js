import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View, Image, Dimensions } from 'react-native';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const { width } = Dimensions.get("window");
const ContentGrid = () => {

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
        <Text style={styles.cinemalabTitle}>Filimlər</Text>
    <View>
        {isLoading ? <ActivityIndicator /> : (
            <FlatList
                data={data}
                horizontal
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

                    </View>
                    
                )}
            />
            
        )}
                        <View style={styles.mt5}></View>

    </View>
</View>
  );
};

export default ContentGrid;

const styles = StyleSheet.create({

    cardImage: {
        width: 150,
        height: 200,
        marginRight: 20,
    },
    mt5: {
        marginBottom: 10,
        paddingTop: 50
    },
    contenName:{
        color: '#fff'
    },
    cinemalabTitle:{
        color: '#fff',
        fontSize: 20
    }
});
