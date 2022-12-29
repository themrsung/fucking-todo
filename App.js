import { StatusBar } from "expo-status-bar"
import {
    Button,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View
} from "react-native"

export default function App() {
    return (
        <SafeAreaView>
            <View style={{ flexDirection: "row" }}>
                <Button title="JS"></Button>
                <Button title="React"></Button>
                <Button title="Coding Test"></Button>
            </View>
            <View>
                <TextInput>Enter your fucking todo</TextInput>
            </View>
            <ScrollView>
                <View style={{ flexDirection: "row" }}>
                    <Text>FUCKING TODO</Text>
                    <View style={{ flexDirection: "row" }}>
                        <Button title="Check"></Button>
                        <Button title="Edit"></Button>
                        <Button title="Delete"></Button>
                    </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Text>FUCKING TODO</Text>
                    <View style={{ flexDirection: "row" }}>
                        <Button title="Check"></Button>
                        <Button title="Edit"></Button>
                        <Button title="Delete"></Button>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
