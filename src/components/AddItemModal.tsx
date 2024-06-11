import React, { useState } from 'react';
import { Modal, StyleSheet, Text, TextInput, View, Button } from 'react-native';

interface AddItemModalProps {
    visible: boolean;
    onClose: () => void;
    onAddItem: (item: string) => void;
}

const AddItemModal: React.FC<AddItemModalProps> = ({ visible, onClose, onAddItem }) => {
    const [item, setItem] = useState('');

    const addItem = () => {
        onAddItem(item);
        setItem('');
        onClose();
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalTitle}>Ajouter un article</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nom de l'article"
                        value={item}
                        onChangeText={text => setItem(text)}
                    />
                    <Button title="Ajouter" onPress={addItem} />
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        width: '80%',
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 20,
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
});

export default AddItemModal;
