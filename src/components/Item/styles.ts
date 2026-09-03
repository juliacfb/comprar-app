import { Container } from "lucide-react-native"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row", // deixa um do lado do outro
        alignItems: "center",
        gap: 7,
    },
    description: {
        flex: 1, // isso vai fazer o texto ocupar todo espaço disponível
        fontSize: 14,
        fontWeight: 600,
    },
})