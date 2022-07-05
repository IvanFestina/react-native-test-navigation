import {Button, Text, View} from "react-native";
import {useAppNavigation} from "../types";

export function HomeScreen() {
    const navigation = useAppNavigation()
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home Screen</Text>
            <Button title={'To Users screen'} onPress={() => navigation.navigate('Users', {id: 1000, name: 'Sergey'})}>
            </Button>
            <Button title={'To Details screen'} onPress={() => navigation.navigate('Details')}>
            </Button>
        </View>
    );
}