import { useState } from 'react'
import { Alert, Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView, SafeAreaProvier } from 'react-native-safe-area-context'

function Clients() {
    const [modalVisible, setModalVisible] = useState(false);
    return(
        <SafeAreaProvier>
            <SafeAreaView>
                <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed')
                    setModalVisible(!modalVisible);
                }}
                >
                    <View>
                        <View>
                            <Text>Hello World</Text>
                            <Pressable onPress={() => setModalVisible(!modalVisible)}>

                            </Pressable>
                            <Text>Hide Modal</Text>
                        </View>
                    </View>


                </Modal>
                <Pressable>
                    <Text>Show Modal</Text>
                </Pressable>
            </SafeAreaView>
        </SafeAreaProvier>
        
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 30,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194ff"
    },
    buttonClose: {
        backgroundColor: "#2196f3"
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }

})

export default Clients