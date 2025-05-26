import { StyleSheet, Text, View } from "react-native";

export default function Home() {
    return(
        <View style={styles.container}>
            <Text style={styles.heanding}>Agroçougue</Text>
            <Text>CNPJ</Text>
            <Text>Horário de Funcionamento</Text>
            <Text>Cobrança:</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
      
    },
    heanding: {
        fontFamily: "sans-serif",
        fontSize: 20,
        fontWeight: 700,
    }
})