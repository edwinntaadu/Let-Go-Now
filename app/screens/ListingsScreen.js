import React from 'react';
import { FlatList, Image, StyleSheet } from 'react-native';

import Screen from '../components/Screen';
import Card from '../components/Card';
import colors from '../config/colors';

const listings = [
    {
        id: 1,
        title: 'MacBook for sale',
        price: 359,
        image: require('../assets/macBook.jpg')
    },
    {
        id: 1,
        title: 'Wireless Headphones in great condition',
        price: 150,
        image: require('../assets/wireless-headphones.jpg')
    }
]

function ListingsScreen(props) {
    return (
        <Screen style={styles.screen}>
            <FlatList
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({item}) =>
                    <Card
                        title={item.title}
                        subTitle={"€" + item.price}
                        image={item.image} />
                } />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 15,
        backgroundColor: colors.light,
    }
})

export default ListingsScreen;