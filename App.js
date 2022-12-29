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
    const fuckingTodos = [
        {
            id: 0,
            title: "fuck",
            content: "you",
            isDone: false
        }
    ]
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
                {fuckingTodos.map((fuckYou) => {
                    return (
                        <LasPutasTodo
                            key={fuckYou.id}
                            fuckingTodoAgain={fuckYou}
                        />
                    )
                })}
            </ScrollView>
        </SafeAreaView>
    )
}

const LasPutasTodo = ({ fuckingTodoAgain }) => {
    return (
        <View style={{ flexDirection: "row" }}>
            <View>
                <Text>{fuckingTodoAgain.title}</Text>
                <Text>{fuckingTodoAgain.content}</Text>
                <Text>
                    {fuckingTodoAgain.isDone ? "completed" : "not completed"}
                </Text>
            </View>

            <View style={{ flexDirection: "row" }}>
                <Button title="Check"></Button>
                <Button title="Edit"></Button>
                <Button title="Delete"></Button>
            </View>
        </View>
    )
}
