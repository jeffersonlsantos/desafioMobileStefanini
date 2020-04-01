/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// In App.js in a new project

/*import * as React from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ListItem } from 'react-native-elements';

//import cityList from './city.list';
import SearchScreen from './src/screens/landing/Landing'

const Cities = cityList.data;

function HomeScreen() {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Home Screen</Text>
		</View>
	);
}

function DetailsScreen() {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Details Screen</Text>
		</View>
	);
}

function SearchScreen({navigation}) {
	return (
		<ScrollView>
			{
				Cities.map((city) => (
				<TouchableOpacity>
					<ListItem
						key={city.id}
						title={city.name}
						topDivider
						chevron={{ color: 'red' }}
						onPress={() => navigation.navigate('Details')}
					/>
				</TouchableOpacity>
				))
			}
		</ScrollView>
	);
}


const Stack = createStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Search">
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={{ title: 'Selecione uma cidade' }}
				/>
				<Stack.Screen
					name="Search"
					component={<SearchScreen/>}
				/>
				<Stack.Screen
					name="Details"
					component={DetailsScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;*/
