import {Button, Text, View} from "react-native";
import {useAppNavigation} from "../types";

export function DetailsScreen() {
    const navigation = useAppNavigation()
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Details Screen</Text>
            <Button title={'To Home screen'} onPress={() => navigation.navigate('Home', {screen: 'Login'})}>
            </Button>
        </View>
    );
}