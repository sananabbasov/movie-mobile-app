import * as React from 'react';
import { Text, View, Button,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Feather } from '@expo/vector-icons';
import DetailPage from './components/DetailPage';
import Search from './screens/Search';
import List from './screens/List';
import LoginUser from './screens/LoginUser';

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

function MyList() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}


function HomeScreen({ navigation }){
  return (
    <View>
      <Home />
    </View>
  )
}
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
         screenOptions={({ route }) => ({
          tabBarActiveTintColor: '#ed333c',
          tabBarStyle: {
            paddingTop: 10,
            backgroundColor: 'rgba(34,36,40,1)',
            borderTopWidth: 0,
            alignContent: 'center',
            
        },
      })}
      >
        <Tab.Screen name="Home"

          options={{
            backgroundColor: '#000',
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <Feather name="home" color={color} size={size} />
            ),
          }}
          component={HomeScreen} />
        <Tab.Screen name="MyList"
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <Feather name="list" color={color} size={size} />
            ),
          }}
          component={List} />
        <Tab.Screen name="Search"
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <Feather name="search" color={color} size={size} />
            ),
          }}
          component={Search} />
          <Tab.Screen name="Detail"
          options={{
            backgroundColor: '#000',
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <Feather name="link" color={color} size={size} />
            ),
          }}
          component={DetailPage} />
           <Tab.Screen name="LoginUser"
          options={{
            backgroundColor: '#000',
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <Feather name="user" color={color} size={size} />
            ),
          }}
          component={LoginUser} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}