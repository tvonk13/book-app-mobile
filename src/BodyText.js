import { Text, StyleSheet } from 'react-native';

export default function BodyText({ children }) {
    return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Roboto',
        color: '#4c0000',
        fontWeight: '200',
        fontSize: 16,
    }
});