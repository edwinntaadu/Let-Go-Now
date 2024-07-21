import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import colors from '../config/colors';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';


function ListingDetailsScreen(props) {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/shoes.jpg')} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>Pair of Blue and Pink Floral Almond Toe pumps</AppText>
                <AppText style={styles.price}>€300</AppText>
                <View style={styles.userContainer}>
                    <ListItem 
                        image={require("../assets/sabali.jpg")}
                        title="sabali"
                        subTitle="5 Listings"
                        />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: '100%',
        height: 300,
    },
    title: {
        fontSize: 24,
        fontWeight: "500",
    },
    price: {
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10,
    },
    userContainer: {
        marginVertical: 40,
    }
})

export default ListingDetailsScreen;