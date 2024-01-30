import Reads from './Reads';
import { StyleSheet, View } from 'react-native';

export default function Home({ navigation }) {
    return (
      <View style={styles.content}>
        <Reads navigation={navigation} />
      </View>
    )
}

const styles = StyleSheet.create({
    content: {
      flex: 1,
      marginTop: 10,
    //   backgroundColor: '#fff7eb',
    }
});