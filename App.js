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

    const [todosOne, setTodosOne] = useState([])
    const [todosTwo, setTodosTwo] = useState([])
    const [todosThree, setTodosThree] = useState([])
    const [currentTodoList, setCurrentTodoList] = useState(1)

    const switchTodoList = (list) => {
        switch (currentTodoList) {
            case 1:
                setTodosOne(fuckingTodos)
                setCurrentTodoList(list)
                switch (list) {
                    case 2:
                        setFuckingTodos(todosTwo)
                    case 3:
                        setFuckingTodos(todosThree)
                    default:
                        setFuckingTodos(todosOne)
                }

            case 2:
                setTodosTwo(fuckingTodos)
                setCurrentTodoList(list)
                switch (list) {
                    case 1:
                        setFuckingTodos(todosOne)
                    case 3:
                        setFuckingTodos(todosThree)
                    default:
                        setFuckingTodos(todosTwo)
                }

            case 3:
                setTodosThree(fuckingTodos)
                setCurrentTodoList(list)
                switch (list) {
                    case 1:
                        setFuckingTodos(todosOne)
                    case 2:
                        setFuckingTodos(todosTwo)
                    default:
                        setFuckingTodos(todosThree)
                }
            default:
                return
        }
    }

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
                <Text>Current Todo List: {currentTodoList}</Text>
                <Button
                    title="ONE"
                    onPress={() => {
                        switchTodoList(1)
                    }}
                ></Button>
                <Button
                    title="TWO"
                    onPress={() => {
                        switchTodoList(2)
                    }}
                ></Button>
                <Button
                    title="THREE"
                    onPress={() => {
                        switchTodoList(3)
                    }}
                ></Button>
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
