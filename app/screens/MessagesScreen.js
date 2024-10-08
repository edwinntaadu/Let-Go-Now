import React, {useState} from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import ListItem from '../components/lists/ListItem';
import Screen from '../components/Screen';
import ListItemSeperator from '../components/lists/ListItemSeperator';
import ListItemDeleteAction from '../components/lists/ListItemDeleteAction';

const initialMessages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/sabali.jpg')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/sabali.jpg')
    }
]

function MessagesScreen(props) {
    const [messages,setMessages] = useState(initialMessages);
    const [refreshing,setRefreshing] = useState(false);

    const handleDelete = message => {
        // Delete the message from messages
        setMessages(messages.filter((m) => m.id !== message.id));
    };

    return (
        <Screen>
            <FlatList
            data={messages} 
            keyExtractor={messages => messages.id.toString()}
            renderItem={({item}) => (
                <ListItem
                    title={item.title}
                    description={item.description}
                    image={item.image} 
                    onPress={() => console.log("Message selected", item)}
                    renderRightActions={() =>
                         <ListItemDeleteAction onPress={() => handleDelete(item)} />}
                    />
            )}
            ItemSeparatorComponent={ListItemSeperator}
            refreshing={refreshing}
            onRefresh={() => {
                setMessages([
                    {
                        id: 2,
                        title: 'T2',
                        description: 'D2',
                        image: require('../assets/sabali.jpg')
                    },
                ])
            }}
        />
        </Screen>
    );
}

const styles = StyleSheet.create({

})

export default MessagesScreen;