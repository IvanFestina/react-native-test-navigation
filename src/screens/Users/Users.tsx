import {Button, Text, View} from "react-native";
import {useAppNavigation} from "../types";

export function UsersScreen() {
    const navigation = useAppNavigation()
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Users Screen</Text>
            <Button title={'To Home screen'} onPress={() => navigation.navigate('Home')}>
            </Button>
        </View>
    );
}