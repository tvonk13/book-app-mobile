import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Platform, NativeModules } from 'react-native';
import Reads from './Reads';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  const { StatusBarManager } = NativeModules;

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={{...styles.container, paddingTop: Platform.OS === 'android' ? StatusBarManager.HEIGHT : 0}}>
        <View style={styles.nav}>
          <Text>NAV</Text>
        </View>
        <View style={styles.content}>
          <Button title="HOME"/>
          <Button title="TEST" />
          <Reads />
        </View>
      </SafeAreaView>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nav: {
    height: 50,
    // backgroundColor: '#e0b0ab',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    // backgroundColor: '#fff7eb',
  }
});
