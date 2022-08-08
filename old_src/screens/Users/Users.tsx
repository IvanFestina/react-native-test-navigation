import {Button, Text, View} from "react-native";
import {useAppNavigation, UsersPropsType} from "../types";

export function UsersScreen({route}: UsersPropsType) {
    const param  = route.params
    const navigation = useAppNavigation()
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Users Screen</Text>
            { param && <Text>{JSON.stringify(param, null, 2)}</Text> }
            <Button title={'To Home screen'} onPress={() => navigation.navigate('Home', {screen: 'Login'})}>
            </Button>
        </View>
    );
}