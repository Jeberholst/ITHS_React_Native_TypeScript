import React, {FC, useContext, useEffect} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {NativeStackNavigationProp} from "react-native-screens/native-stack";
import {Caption, Card, Divider, FAB, Paragraph, Title, useTheme} from "react-native-paper";

import {ShoppingContext} from "../contexts/ShoppingContext";

interface ShoppingListInterface {
    navigation: NativeStackNavigationProp<any, any>,
}

export const ShoppingList: FC<ShoppingListInterface> = ({navigation}) => {

    const {styles} = useThemedStyles();
    const {shopping: shoppingList, removeItem} = useContext(ShoppingContext);

    useEffect(() => {
        console.log(shoppingList)
    })

    return (
        <View style={styles.container}>
            <FAB
                style={styles.fab}
                small
                icon="plus"
                onPress={() =>
                    navigation.navigate('ShoppingEditAddItem')
                }
            />

            <FlatList
                data={shoppingList}
                keyExtractor={(item) => item.title}
                renderItem={({item}) =>
                    <Card style={styles.card}
                          onPress={() => {
                              navigation.navigate('ShoppingEditAddItem', {editing: true, item: item})
                              //updateItem(item, {...item, ...{ title: 'Blue!!'}}
                          }}
                          onLongPress={() => {
                              removeItem(item)
                          }}
                    >
                        <Title style={styles.itemTitle}>{item.title}</Title>
                        <Divider/>
                        <Paragraph style={styles.itemDescription}>{item.description}</Paragraph>
                        <Caption style={styles.itemDescription}>{`${item.amount} kr/$`}</Caption>
                    </Card>
                }
            />

        </View>
    );
}

const useThemedStyles = () => {
    const theme = useTheme();
    return {
        styles: StyleSheet.create({
            container: {
                padding: 15,
                height: '100%',
            },
            card: {
                marginBottom: 10,
                height: 150,
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: 10,
                paddingBottom: 10,
            },
            itemContainer: {
                marginTop: 10,
                height: 150,
            },
            itemTitle: {
                fontWeight: "600",
            },
            itemDescription: {
                marginTop: 10,
                fontSize: 12
            },
            itemAmount: {
                fontWeight: "600"
            },
            fab: {
                position: 'absolute',
                backgroundColor: theme.colors.primary,
                margin: 22,
                right: 0,
                bottom: 0,
                zIndex: 100,
            },
        }),
    };
};


export default ShoppingList;
