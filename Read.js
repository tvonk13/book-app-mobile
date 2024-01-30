import { Text, StyleSheet, Image, ScrollView } from 'react-native';
import BodyText from './BodyText';

export default function Read({ route }) {
    const { read, cover } = route.params;
    const width = 110;
    const height = 175;

    return (
        <ScrollView style={styles.content}>
            <Image source={{uri: cover?.mediaLink }} style={{width, height, margin: 10, borderRadius: 5 }} />
            <BodyText>
                <Text style={styles.fontWeight500}>ID: </Text> 
                <Text style={styles.fontWeight300}>{read.id}</Text>
            </BodyText>
            <BodyText>
                <Text style={styles.fontWeight500}>Author: </Text>
                <Text style={styles.fontWeight300}>{read.book.author.name}</Text>
            </BodyText>
            <BodyText>
                <Text style={styles.fontWeight500}>Series: </Text>
                <Text style={styles.fontWeight300}>{read.book.series?.name || '-'}</Text>
            </BodyText>
            <BodyText>
                <Text style={styles.fontWeight500}>Order: </Text>
                <Text style={styles.fontWeight300}>{read.book.seriesOrder || '-'}</Text>
            </BodyText>
            <BodyText>
                <Text style={styles.fontWeight500}>Genre: </Text>
                <Text style={styles.fontWeight300}>{read.book.genre.name}</Text>
            </BodyText>
            <BodyText>
                <Text style={styles.fontWeight500}>Rating: </Text>
                <Text style={styles.fontWeight300}>{read.book.rating}</Text>
            </BodyText>
            <BodyText>
                <Text style={styles.fontWeight500}>Spice: </Text>
                <Text style={styles.fontWeight300}>{read.book.spice}</Text>
            </BodyText>
            <BodyText>
                <Text style={styles.fontWeight500}>Tropes: </Text>
                <Text style={styles.fontWeight300}>{read.book.tropes.map(trope => trope.name).join(', ')}</Text>
            </BodyText>
            <BodyText>
                <Text style={styles.fontWeight500}>Tags: </Text>
                <Text style={styles.fontWeight300}>{read.book.tags.map(tag => tag.name).join(', ')}</Text>
            </BodyText>
            {/* <BodyText>Notes: {read.book.notes}</BodyText> */}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    content: {
      flex: 1,
      marginTop: 10,
      marginHorizontal: 10,
    },
    fontWeight500: {
        fontWeight: '500',
    },
    fontWeight300: {
        fontWeight: '300',
    }
});