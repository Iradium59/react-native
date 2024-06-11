import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default function Ex1() {
    return (
        <View style={styles.container}>
            <Image 
                source={{ uri: 'https://cdn001.tintin.com/public/tintin/img/static/le-capitaine-haddock/captain-haddock_v2.jpg' }} 
                style={styles.image} 
            />
            <Text>
                Nom : <Text style={styles.boldText}>Haddock</Text>
            </Text>
            <Text>
                Prenom : <Text style={styles.boldText}>Capitaine</Text>
            </Text>
            <Text>
                Telephone : <Text style={styles.boldText}>14 85 46 75 62</Text>
            </Text>
            <Text>
                Adresse : <Text style={styles.boldText}>35 rue des pias 59200 Tourcoing</Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    boldText: {
        fontWeight: 'bold',
    },
});
