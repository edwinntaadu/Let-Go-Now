import { Image, StyleSheet, TouchableHighlight, View } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import Text from '../Text';
import colors from '../../config/colors';

function ListItem({title, subTitle, image, IconComponent, onPress, renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image style={styles.image} source={image}/>}
                    <View style={styles.detailsContainer}>
                        <Text style={styles.title} numberOfLines={1}>{title}</Text>
                        {subTitle && <Text style={styles.subTitle} numberOfLines={2}>{subTitle}</Text>}
                    </View>
                    <MaterialCommunityIcons color={colors.medium} name='chevron-right' size={25} />
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15,
        backgroundColor: colors.white,
        alignItems: "center"
    },
    image: {
        width: 70,
        height: 70,
        borderRadius:35,
    },
    title: {
        fontWeight: "600"
    },
    description: {
        color: colors.medium,
    },
    detailsContainer: {
        marginLeft: 10,
        justifyContent: "center",
        flex: 1
    }
})

export default ListItem;