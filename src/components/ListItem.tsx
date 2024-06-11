import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface ListItemProps {
    item: string;
    onPress: () => void;
}

const ListItem: React.FC<ListItemProps> = ({ item, onPress }) => {
    return (
        <TouchableOpacity style={styles.item} onPress={onPress}>
            <Text style={styles.itemText}>{item}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    itemText: {
        fontSize: 18,
    },
});

export default ListItem;
