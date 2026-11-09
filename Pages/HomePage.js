import { Text, View, Pressable } from 'react-native';

export default function HomePage({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'black', textAlign: 'center' }}>
                Home Page
            </Text>
            <Pressable
                onPress={() => navigation.navigate('Movies')}
                style={{ alignSelf: 'center', marginTop: 12 }}
            >
                <Text style={{ fontSize: 18, color: 'blue', textAlign: 'center' }}>
                    Go to Movies Page
                </Text>
            </Pressable>
        </View>
    );
}