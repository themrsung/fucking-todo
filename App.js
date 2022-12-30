import axios from "axios"
import { useEffect, useState } from "react"
import {
    Button,
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    View
} from "react-native"

export default function App() {
    const SERVER_URL = "https://23859027uv8923vu5892b3v523v.loca.lt"
    const [fuckingTodos, setFuckingTodos] = useState([])

    const fetchTodos = async () => {
        const response = await axios.get(SERVER_URL + "/todos")
        if (response) {
            setFuckingTodos(response.data.todos)
            setTodosFetched(true)
        }
    }

    const [todosFetched, setTodosFetched] = useState(false)

    useEffect(() => {
        if (!todosFetched) {
            fetchTodos()
        }
    }, [])

    const postTodos = async () => {
        await axios.put(SERVER_URL + "/todos", { todos: fuckingTodos })
    }

    const [a, setA] = useState(false)

    const update = async () => {
        setTimeout(() => {
            postTodos()
            setA(!a)
        }, 3000)
    }
    useEffect(() => {
        update()
    }, [a])

    const [currentTodoList, setCurrentTodoList] = useState(1)

    const [counter, setCounter] = useState(1)

    const [newContent, setNewContent] = useState("")

    const addFuckingTodo = () => {
        const newTodo = {
            id: Date.now(),
            content: newContent,
            isDone: false,
            category: currentTodoList
        }
        setCounter(counter + 1)

        let todos = fuckingTodos
        todos.push(newTodo)
        setFuckingTodos(todos)
    }

    return (
        <SafeAreaView style={{ paddingTop: 50 }}>
            <View style={{ flexDirection: "row" }}>
                <Text>Current Todo List: {currentTodoList}</Text>
                <Button
                    title="ONE"
                    onPress={() => {
                        setCurrentTodoList(1)
                    }}
                ></Button>
                <Button
                    title="TWO"
                    onPress={() => {
                        setCurrentTodoList(2)
                    }}
                ></Button>
                <Button
                    title="THREE"
                    onPress={() => {
                        setCurrentTodoList(3)
                    }}
                ></Button>
                <Button
                    title="FETCH TODOS"
                    onPress={() => {
                        fetchTodos()
                    }}
                ></Button>
                <Button
                    title="SAVE"
                    onPress={() => {
                        postTodos()
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
                {fuckingTodos
                    .filter((t) => t.category === currentTodoList)
                    .map((fuckYou) => {
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
