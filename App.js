import { StatusBar } from "expo-status-bar"
import { useState } from "react"
import {
    Button,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View
} from "react-native"
import { v4 as uuidFuckYou } from "uuid"

export default function App() {
    const [fuckingTodos, setFuckingTodos] = useState([
        {
            id: 0,
            content: "you",
            isDone: false
        }
    ])

    const [counter, setCounter] = useState(1)

    const [newContent, setNewContent] = useState("")

    const addFuckingTodo = () => {
        const newTodo = {
            id: counter,
            content: newContent,
            isDone: false
        }
        setCounter(counter + 1)

        let todos = fuckingTodos
        todos.push(newTodo)
        setFuckingTodos(todos)
    }

    const toggleFuckingTodo = (id) => {
        let todos = fuckingTodos
        todos.forEach((t) => {
            if (t.id === id) {
                t.isDone = !t.isDone
            }
        })
        setFuckingTodos(todos)
    }

    return (
        <SafeAreaView style={{ paddingTop: 50 }}>
            <View style={{ flexDirection: "row" }}>
                <Button title="JS"></Button>
                <Button title="React"></Button>
                <Button title="Coding Test"></Button>
            </View>
            <View>
                <TextInput
                    value={newContent}
                    onChangeText={(t) => setNewContent(t)}
                ></TextInput>
                <Button title="ADD TODO" onPress={addFuckingTodo}></Button>
            </View>
            <ScrollView>
                {fuckingTodos.map((fuckYou) => {
                    return (
                        <LasPutasTodo
                            key={fuckYou.id}
                            fuckingTodoAgain={fuckYou}
                            setFuckingTodos={setFuckingTodos}
                            allFuckingTodos={fuckingTodos}
                        />
                    )
                })}
            </ScrollView>
        </SafeAreaView>
    )
}

const LasPutasTodo = ({
    fuckingTodoAgain,
    setFuckingTodos,
    allFuckingTodos
}) => {
    const [newTodoContent, setNewTodoContent] = useState("")
    return (
        <View style={{ flexDirection: "row" }}>
            <View>
                <Text>{fuckingTodoAgain.content}</Text>
                <Text>
                    {fuckingTodoAgain.isDone ? "completed" : "not completed"}
                </Text>
            </View>

            <View style={{ flexDirection: "row" }}>
                <Button
                    title="Check"
                    onPress={() => {
                        let todos = allFuckingTodos.filter(
                            (t) => t.id !== fuckingTodoAgain.id
                        )
                        const newTodo = fuckingTodoAgain
                        fuckingTodoAgain.isDone = !fuckingTodoAgain.isDone
                        todos.push(newTodo)
                        setFuckingTodos(todos)
                    }}
                ></Button>
                <Button
                    title="Edit"
                    onPress={() => {
                        let todos = allFuckingTodos.filter(
                            (t) => t.id !== fuckingTodoAgain.id
                        )
                        const newTodo = fuckingTodoAgain
                        newTodo.content = newTodoContent
                        todos.push(newTodo)
                        setFuckingTodos(todos)
                    }}
                ></Button>
                <TextInput
                    value={newTodoContent}
                    onChangeText={(t) => {
                        setNewTodoContent(t)
                    }}
                ></TextInput>
                <Button
                    title="Delete"
                    onPress={() => {
                        let todos = allFuckingTodos.filter(
                            (t) => t.id !== fuckingTodoAgain.id
                        )
                        setFuckingTodos(todos)
                    }}
                ></Button>
            </View>
        </View>
    )
}
