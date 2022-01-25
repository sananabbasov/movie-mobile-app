import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const { width } = Dimensions.get("window");
const PlatformList = () => {
    return (
        <View style={styles.container}>
            <View style={styles.mb5}>
                <Image
                    style={styles.platformImage}
                    blurRadius={6}
                    source={{
                        uri: "https://www.whats-on-netflix.com/wp-content/uploads/2021/08/netflix-library-photo-scaled.jpg"
                    }}
                />
                <View style={styles.platformContainer}>
                    <View style={styles.dFlex}>
                        <Text style={styles.platformInfo}>Netflix</Text>
                        <Image
                            style={styles.logo}
                            source={{
                                uri: 'https://flyclipart.com/thumb2/netflix-logo-png-transparent-image-png-arts-82874.png'
                            }}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.mb5}>
                <Image
                    style={styles.platformImage}
                    blurRadius={6}
                    source={{
                        uri: "https://tr.web.img3.acsta.net/r_654_368/newsv7/20/12/22/14/22/2612633.jpg"
                    }}
                />
                <View style={styles.platformContainer}>
                    <View style={styles.dFlex}>
                        <Text style={styles.platformInfo}>EXXEN</Text>
                        <Image
                            style={styles.logo}
                            source={{
                                uri: 'https://is3-ssl.mzstatic.com/image/thumb/Purple116/v4/98/6d/0f/986d0fec-a9ca-63b9-a8b4-0c9cfb2771bb/source/512x512bb.jpg'
                            }}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.mb5}>
                <Image
                    style={styles.platformImage}
                    blurRadius={6}
                    source={{
                        uri: "https://www.wanhaber.com/images/haberler/2021/01/blu_tvde_yayinlanan_hic_dizisi_oyunculari_kimler_konusu_nedir_h264987_249e6.jpg"
                    }}
                />
                <View style={styles.platformContainer}>
                    <View style={styles.dFlex}>
                        <Text style={styles.platformInfo}>BLU TV</Text>
                        <Image
                            style={styles.logo}
                            source={{
                                uri: 'https://www.savebutonu.com/wp-content/uploads/2020/12/unnamed-1.jpg'
                            }}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default PlatformList;

const styles = StyleSheet.create({
    container: {
        marginBottom: 40,
    },
    platformImage: {
        width: deviceWidth,
        height: 80,
        borderRadius: 10
        
    },
    logo: {
        width: 50,
        height: 50,
        borderRadius: 100,
        margin: 10
    },
    dFlex: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    platformContainer: {
        position: 'absolute',
        width: '100%',
        top: 10
    },
    platformInfo:{
        color: '#fff',
        fontSize: 32,
        padding: 10
    },
    mb5:{
        marginBottom: 20
    }
});
