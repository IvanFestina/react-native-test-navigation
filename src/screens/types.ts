import {NavigationProp, useNavigation} from "@react-navigation/native";
import {NativeStackScreenProps} from '@react-navigation/native-stack'

export type RootStackParamList = {
    Home: undefined;
    Users: {id: number, name: string} | undefined;
    Details: undefined;
};

export type NavigationUseType = NavigationProp<RootStackParamList>

export const useAppNavigation = () => useNavigation<NavigationUseType>()

export type HomePropsType = NativeStackScreenProps<RootStackParamList, 'Home'>
export type UsersPropsType = NativeStackScreenProps<RootStackParamList, 'Users'>
export type DetailsPropsType = NativeStackScreenProps<RootStackParamList, 'Details'>