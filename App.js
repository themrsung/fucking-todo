import { StatusBar } from "expo-status-bar"
import {
    Button,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    View
} from "react-native"

export default function App() {
    return (
        <SafeAreaView>
            <View>
                <Button title="JS"></Button>
                <Button title="React"></Button>
                <Button title="Coding Test"></Button>
            </View>
            <View>
                <TextInput>Enter your fucking todo</TextInput>
            </View>
            <View>
                <View>
                    <Text>FUCKING TODO</Text>
                    <View>
                        <Button title="Check"></Button>
                        <Button title="Edit"></Button>
                        <Button title="Delete"></Button>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
})
