import Reads from './Reads';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import New from './New/New';
import { useTheme } from 'react-native-paper';

const Tab = createMaterialBottomTabNavigator();

export default function Home() {
    theme = useTheme();

    return (
        <Tab.Navigator
            screenOptions={{
                headerTintColor: '#4c0000',
                headerTitleStyle: { fontFamily: 'Roboto' },
            }}
            activeColor={theme.colors.primary}
            inactiveColor="grey"
        >
            <Tab.Screen
                name="Reads"
                component={Reads}
                options={{
                    tabBarLabel: 'Reads',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="bookshelf" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="New"
                component={New}
                options={{
                    tabBarLabel: 'New',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="plus-circle-outline" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}