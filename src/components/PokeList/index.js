import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';

export default function PokeList({ item, index }) {

    console.log(item)

    return (
        <>
            <Content>
                <List>
                    <ListItem thumbnail>
                        <Left>
                            <Thumbnail square source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.data.index + 1}.png` }} />
                        </Left>
                        <Body>
                            <Text>{props.data.name}</Text>
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
    )
}