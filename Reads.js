import { useGetReads, useGetBookCovers } from "./apiUtil";
import { ActivityIndicator, FlatList, View, Image, Pressable } from 'react-native';

export default function Reads({ navigation }) {
    const { data: reads, isLoading: isReadsLoading } = useGetReads();
    const { data: covers, isLoading: isCoversLoading } = useGetBookCovers();
    const isLoading = isReadsLoading || isCoversLoading;
    const width = 110;
    const height = 175;

    return (
        <View style={{ alignItems: 'center'}}>
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <FlatList 
                    data={reads} 
                    renderItem={({item}) => {
                        const cover = covers?.items?.find(cover => cover?.name?.replace('.jpeg', '') === item?.bookId.toString());
                        return (
                            <Pressable onPress={() => navigation.navigate('Read', { read: item, cover: cover })}>
                                <Image source={{uri: cover?.mediaLink }} style={{width, height, margin: 10, borderRadius: 5 }} />
                            </Pressable>
                        );
                    }}
                    numColumns={3}
                />
            )}
        </View>
    );
}