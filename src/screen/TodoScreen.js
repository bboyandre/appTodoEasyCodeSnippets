import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, ScrollView } from "react-native";
import React, { useState } from "react";
import { IconButton } from "react-native-paper";
import { Fallback } from "../components/Fallback";

export const TodoScreen = () => {

    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);
    const [editedTodo, setEditedTodo] = useState(null);

    const handleAddTodo = () => {
        if (todo === "") {
            return;
        }
        setTodoList([...todoList, {id: Date.now().toString(), title: todo}]);
        setTodo("");
    }
    const handleDeleteTodo = (id) => {
        const updateTodoList = todoList.filter((todo) => todo.id !== id)

        setTodoList(updateTodoList);
    }
    const handleEditTodo = (todo) => {
        setEditedTodo(todo);
        setTodo(todo.title);
    }
    const handleUpdateTodo = () => {
        const updateTodos = todoList.map((item) => {
            if (item.id === editedTodo.id) {
                return {...item, title: todo}
            }

            return item;

        })

        setTodoList(updateTodos);
        setEditedTodo(null);
        setTodo("");
    }
    const renderTodo = ({ item, index }) => {
        return (
            <View
                style={{
                    backgroundColor: "#1e90ff",
                    borderRadius: 6,
                    paddingHorizontal: 6,
                    paddingVertical: 8,
                    marginBottom: 12,
                    flexDirection: "row",
                    alignItems: "center",
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.8,
                    shadowRadius: 3,

                }}
            >
                <Text 
                    style={{
                        color: "#fff",
                        fontSize: 20,
                        fontWeight: "800",
                        flex: 1,
                    }}
                >{item.title}</Text>

                <IconButton icon="pencil" iconColor="#fff" onPress={() => handleEditTodo(item)} />
                <IconButton icon="trash-can" iconColor="#fff" onPress={() => handleDeleteTodo(item.id)} />
            </View>
        )
    }
    return (
        <View style={{ marginHorizontal: 16 }}>
            <Text style={{ fontWeight: "500" }}>TodoScreen</Text>

            <TextInput
                style={{
                    borderWidth: 2, 
                    borderColor: "#1e90ff", 
                    borderRadius: 6, 
                    paddingVertical: 12,
                    paddingHorizontal: 16
                }}
                placeholder="Add a task"
                value={todo}
                onChangeText={(userText) => setTodo(userText)}
            />

            {
                editedTodo ? (
                    <TouchableOpacity 
                        style={{ 
                            backgroundColor: "#000", 
                            borderRadius: 6,
                            paddingVertical: 12,
                            marginVertical: 34,
                            alignItems: "center"
                        }}
                        onPress={() => handleUpdateTodo()}
                    >
                        <Text style={{ 
                            color: "#fff",
                            fontWeight: "bold",
                            fontSize: 20
                        }}>
                            Save
                        </Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity style={{ 
                        backgroundColor: "#000", 
                        borderRadius: 6,
                        paddingVertical: 12,
                        marginVertical: 34,
                        alignItems: "center"
                    }}
                        onPress={() => handleAddTodo()}
                    >
                        <Text style={{ 
                            color: "#fff",
                            fontWeight: "bold",
                            fontSize: 20
                        }}>
                            Add
                        </Text>
                    </TouchableOpacity>
                )
            }

                <FlatList 
                    // scrollEnabled={false} 
                    data={todoList} 
                    renderItem={renderTodo} 
                    style={{ height: "73%" }}
                />

            {todoList.length <= 0 && <Fallback />}
        </View>
    )
}

const styles = StyleSheet.create({});