import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  FlatList,
  StyleSheet,
  View,
  Keyboard,
  ScrollView,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 25,
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 20,
  },
  field: {
    borderWidth: 1,
    borderColor: "#dcdcdc",
    padding: 5,
    fontSize: 15,
    color: "#333",
    borderRadius: 5,
    flex: 1,
    height: 35,
    marginRight: 10,
  },
  form: {
    display: "flex",
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#00cc99",
    padding: 5,
    borderRadius: 5,
    justifyContent: "center",
  },
  buttonReset: {
    backgroundColor: "#600",
    padding: 5,
    borderRadius: 5,
    justifyContent: "center",
    marginLeft: 5,
  },
  buttonText: {
    color: "#fdfdfd",
  },
  item: {
    borderWidth: 1,
    borderColor: "#dcdcdc",
    padding: 10,
    marginTop: 15,
    borderRadius: 5,
  },
  buttonsArea: {
    flexDirection: "row",
    marginRight: 5,
  },
});

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const handleAdd = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
    Keyboard.dismiss();
  };

  const handleIem = ({ item }) => <Text style={styles.item}>{item}</Text>;

  const handleReset = () => {
    setTasks([]);
  };
  return (
    <SafeAreaView>
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={styles.container}>
          <Text style={styles.title}>Lista de Tarefas</Text>
          <View style={styles.form}>
            <TextInput
              foc
              placeholderTextColor={"#7d7d7d"}
              placeholder="Digite sua tarefa aqui..."
              style={styles.field}
              autoCapitalize="none"
              autoComplete="off"
              autoCorrect={false}
              value={inputValue}
              onChangeText={(text) => setInputValue(text)}
            />
            <View style={styles.buttonsArea}>
              <TouchableWithoutFeedback onPress={handleAdd}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>Adicionar</Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={handleReset}>
                <View style={styles.buttonReset}>
                  <Text style={styles.buttonText}>Resetar</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
          <FlatList
            data={tasks}
            keyExtractor={(item) => item}
            renderItem={handleIem}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
