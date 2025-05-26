import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import Clients from './Clients'

export default function Home() {
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.heanding}>Agroçougue</Text>
                <Text style={styles.paragraph}>06.207.421.0010-65</Text>
                <Text style={styles.paragraph}>Seg a Sex: 08 hrs as 18:00</Text>
                <Text style={styles.paragraph}>Inadimplente</Text>
            </View>
            <TouchableOpacity>
                <Ionicons name="add-circle"  size={32} />
            </TouchableOpacity>
            <Clients />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingInline: 20,
        paddingBlock: 10,
        borderBottomWidth: 1

    },
    heanding: {
        fontFamily: "sans-serif",
        fontSize: 25,
        fontWeight: 700,
    },
    paragraph: {
        fontSize: 15,
        fontWeight: 700,
        fontFamily: "sans-serif",

    }
})