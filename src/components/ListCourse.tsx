import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import ListItem from './ListItem';
import AddItemModal from './AddItemModal';

const ListCourse: React.FC = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [itemsList, setItemsList] = useState<string[]>([]);

    const addItemToList = (item: string) => {
        setItemsList([...itemsList, item]);
    };

    const removeItem = (index: number) => {
        const updatedList = [...itemsList];
        updatedList.splice(index, 1);
        setItemsList(updatedList);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Liste de Course :</Text>
            <FlatList
                style={styles.content}
                data={itemsList}
                renderItem={({ item, index }) => (
                    <ListItem
                        item={item}
                        onPress={() => removeItem(index)}
                    />
                )}
                keyExtractor={(item, index) => index.toString()}
            />

            <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
                <Text style={styles.buttonText}>Ajouter un article</Text>
            </TouchableOpacity>

            <AddItemModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                onAddItem={addItemToList}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20,
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 20,
    },
    content: {
        flex: 1,
        width: '100%',
    },
    addButton: {
        backgroundColor: 'blue',
        padding: 15,
        borderRadius: 10,
        marginHorizontal: 20,
        marginBottom: 20,
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
});

export default ListCourse;
