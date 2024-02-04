import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Read from './Read';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function Main() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerTintColor: '#4c0000',
                    headerTitleStyle: {
                        fontFamily: 'Roboto',
                    },
                }}
            >
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={({ route }) => ({
                        headerTitle: getHeaderTitle(route),
                    })}
                />
                <Stack.Screen
                    name="Read"
                    component={Read}
                    options={({ route }) => ({
                        title: route.params.read.book.name,
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

function getHeaderTitle(route) {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Reads';
    switch (routeName) {
        case 'New':
            return 'New';
        default:
            return routeName;
    }
}