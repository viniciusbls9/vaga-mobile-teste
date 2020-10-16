import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import { View, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';

import { useNavigation, CommonActions } from '@react-navigation/native'

import styles from './styles';

export default function App() {
    const navigation = useNavigation();

    const [pokemons, setPokemons] = useState([]);
    const [currentPage, setCurrentPage] = useState('https://pokeapi.co/api/v2/pokemon');
    const [nextPage, setNextPage] = useState('');
    const [prevPage, setPrevPage] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        let cancel
        axios.get(currentPage, {
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(response => {
            setLoading(false);
            setNextPage(response.data.next);
            setPrevPage(response.data.previous);
            const { results } = response.data;
            setPokemons(results);
        })

        return () => cancel();

    }, [currentPage]);

    function nextPageUrl() {
        setCurrentPage(nextPage);
    }

    function prevPageUrl() {
        setCurrentPage(prevPage);
    }

    function handlePokeData(item, index) {
        navigation.navigate('SinglePokemon', { item, index });
    }

    if (loading) {
        return (
            <View style={styles.containerLoading}>
                <Text>Loading...</Text>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={pokemons}
                renderItem={({ item, index }) => (
                    <>
                        <Content>
                            <List>
                                <ListItem thumbnail>
                                    <Left>
                                        <Thumbnail square source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png` }} />
                                    </Left>
                                    <Body>
                                        <Text>{item.name}</Text>
                                    </Body>
                                    <Right>
                                        <Button onPress={() => handlePokeData(item, index)} transparent>
                                            <Text>View</Text>
                                        </Button>
                                    </Right>
                                </ListItem>
                            </List>
                        </Content>
                    </>
                )}
                keyExtractor={(item) => item.name}
            />

            <View style={styles.containerBtn}>
                {prevPage !== null ?
                    <TouchableOpacity style={styles.btn} onPress={prevPageUrl}>
                        <Text style={styles.textBtn}>Anterior</Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.textBtn}>Anterior</Text>
                    </TouchableOpacity>
                }

                <TouchableOpacity style={styles.btn} onPress={nextPageUrl}>
                    <Text style={styles.textBtn}>Proximo</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}