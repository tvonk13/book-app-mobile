import { useGetReads, useGetBookCovers } from "./util/apiUtil";
import { FlatList, View, Image, Pressable, StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

export default function Reads({ navigation }) {
    const { data: reads, isLoading: isReadsLoading } = useGetReads();
    const { data: covers, isLoading: isCoversLoading } = useGetBookCovers();
    const isLoading = isReadsLoading || isCoversLoading;
    const width = 110;
    const height = 175;

    return (
        <View style={styles.wrapper}>
            {isLoading ? (
                <View style={styles.loading}>
                    <ActivityIndicator animating={true} size='large' />
                </View>
            ) : (
                <FlatList
                    data={reads}
                    renderItem={({ item }) => {
                        const cover = covers?.items?.find(cover => cover?.name?.replace('.jpeg', '') === item?.bookId.toString());
                        return (
                            <Pressable onPress={() => navigation.navigate('Read', { read: item, cover: cover })}>
                                <Image source={{ uri: cover?.mediaLink }} style={{ width, height, margin: 10, borderRadius: 5 }} />
                            </Pressable>
                        );
                    }}
                    numColumns={3}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        flex: 1,
        paddingTop: 20,
    },
    loading: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center'
    }
});