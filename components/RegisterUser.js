import React, {useState} from 'react';
import { Dimensions, ImageBackground, StyleSheet, Text, TextInput, View,Modal, Button } from 'react-native';
import { ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';

const RegisterUser = () => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}
      showsHorizontalScrollIndicator={false}>
      <ImageBackground
        style={styles.bgImage}
        source={{
          uri: 'https://cdn.pixabay.com/photo/2019/05/19/10/40/cinema-4213751_960_720.jpg'
        }}>
        <View style={styles.brandView}>
          <Feather style={{}} name="play" color={'#fff'} size={100} />
        </View>
      </ImageBackground>
      <View style={styles.bottomView}>
        <View style={{ padding: 40 }}>
          <Text style={{ color: '#4632A1', fontSize: 34 }}>Register</Text>
          <View style={{marginTop: 50}}>
            <View>
              <Text style={{color: '#676767'}}>Email or phone number</Text>
              <TextInput
              placeholder="example@example.com"
              placeholderTextColor={'#676767'}
              style={{
                borderBottomWidth: 1,
                borderColor: '#000',
                paddingVertical: 15,
                width: '90%'
              }}
              />
            </View>
            <View  style={{marginTop: 30}}>
              <Text style={{color: '#676767'}}>User name</Text>
              <TextInput
              placeholder="Murad"
              placeholderTextColor={'#676767'}
              style={{
                borderBottomWidth: 1,
                borderColor: '#000',
                paddingVertical: 15,
                width: '90%'
              }}
              />
            </View>
            <View style={{marginTop: 30}}>
              <Text style={{color: '#676767'}}>Password</Text>
              <TextInput
              placeholder="********"
              placeholderTextColor={'#676767'}
              style={{
                borderBottomWidth: 1,
                borderColor: '#000',
                paddingVertical: 15,
                width: '90%'
              }}
              />
            </View>
            <View style={{marginTop: 30}}>
              <Text style={{backgroundColor: '#676767', textAlign: 'center',padding: 10,width: '50%',color: '#fff'}}>Register</Text>
            </View>
          </View>
        </View>
      </View>
      <Modal 
      visible={modalOpen}
      animationType='slide'
      >
        <Text onPress={() => setModalOpen(false)} ><Feather name="search" color={'#fff'} size={32} /></Text>


        
      </Modal>
    </ScrollView>
  );
};

export default RegisterUser;

const styles = StyleSheet.create({
  bgImage: {
    height: 200
  },
  brandView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomView: {
    flex: 1.5,
    backgroundColor: '#FFF',
    bottom: 50,
    borderTopStartRadius: 60,
    borderTopEndRadius: 60
  }
});
