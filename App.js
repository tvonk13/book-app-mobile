import { SafeAreaView, StyleSheet } from 'react-native';
import { Platform, NativeModules } from 'react-native';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Read from './Read';

const queryClient = new QueryClient();
const Stack = createNativeStackNavigator();
const { StatusBarManager } = NativeModules;

export default function App() {

  return (
    <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <SafeAreaView style={styles.safeAreaView}>
              <Stack.Navigator>
                <Stack.Screen 
                  name="Home" 
                  component={Home} 
                  options={{ 
                    // headerStyle: {backgroundColor: '#e0b0ab'},
                    headerTintColor: '#4c0000',
                    headerTitleStyle: {
                      fontFamily: 'Roboto',
                    },
                  }}
                />
                <Stack.Screen 
                  name="Read" 
                  component={Read} 
                  options={({ route }) => ({ 
                    title: route.params.read.book.name,
                    // headerStyle: {backgroundColor: '#e0b0ab'},
                    headerTintColor: '#4c0000',
                    headerTitleStyle: {
                      fontFamily: 'Roboto',
                    },
                  })} 
                />
              </Stack.Navigator>
          </SafeAreaView>
        </NavigationContainer>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1, 
    paddingTop: Platform.OS === 'android' ? StatusBarManager.HEIGHT : 0,
  }
});