import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';
import { Image, View, TouchableHighlight } from 'react-native';
import { Content, Card, CardItem, Text, Body } from 'native-base';
import styles from './styles';

export default function SinglePokemon() {
    const route = useRoute();
    const { navigate } = useNavigation();
    const pokemons = route.params.item;
    const pokeIndex = route.params.index;

    const [baseExperience, setBaseExperience] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [types, setTypes] = useState([]);
    const [abilities, setAbilities] = useState([]);

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemons.name}`).then(response => {
            const { base_experience, height, weight } = response.data;
            setBaseExperience(base_experience);
            setHeight(height);
            setWeight(weight);
            setAbilities(response.data.abilities.map(abilitie => abilitie.ability.name));
            setTypes(response.data.types.map(type => type.type.name));
        })
    }, []);

    return (
        <Content style={styles.container}>
            <TouchableHighlight onPress={() => navigate('Home')} style={styles.backBtn}>
                <Text style={styles.titleBtn}>Voltar</Text>
            </TouchableHighlight>
            <Card style={{ flex: 0 }}>
                <CardItem>
                    <Body style={styles.bodyCard}>
                        <Image source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeIndex + 1}.png` }} style={styles.image} />
                        <Text style={styles.title}>{pokemons.name}</Text>
                        <View style={styles.infos}>
                            <Text>Base Experience</Text>
                            <Text style={styles.pokeData}>{baseExperience}</Text>
                        </View>
                        <View style={styles.line}></View>

                        <View style={styles.infos}>
                            <Text>Height</Text>
                            <Text style={styles.pokeData}>{height}</Text>
                        </View>
                        <View style={styles.line}></View>

                        <View style={styles.infos}>
                            <Text>Weight</Text>
                            <Text style={styles.pokeData}>{weight}</Text>
                        </View>

                        <Text style={styles.title}>Pokemon Abilities</Text>
                        {abilities.map((ability) => (
                            <Text key={ability} style={styles.abilitys}>{ability}</Text>
                        ))}

                        <Text style={styles.title}>Pokemon Types</Text>
                        {types.map((type) => (
                            <Text key={type} style={styles.abilitys}>{type}</Text>
                        ))}
                    </Body>
                </CardItem>
            </Card>
        </Content>
    )
}
