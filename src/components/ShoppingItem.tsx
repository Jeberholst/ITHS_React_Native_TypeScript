import React from "react";
import {Caption, Card, Divider, Paragraph, Title, useTheme} from "react-native-paper";
import {StyleSheet, Text, View} from 'react-native'

export const ShoppingItem = (props: { onPress: () => void, onLongPress: () => void, item: any }) => {

    const {styles} = useThemedStyles();

    return (
        <Card style={styles.card}
                 onPress={props.onPress}
                 onLongPress={props.onLongPress}
    >
        <Title style={styles.itemTitle}>{props.item.title}</Title>
        <Divider/>
        <CustomChip str={props.item.type}/>
        <Paragraph style={styles.itemDescription}>{props.item.description}</Paragraph>
        <Caption style={styles.itemDescription}>{`${props.item.amount} kr/$`}</Caption>
    </Card>
    );
}

const CustomChip = (props: any): JSX.Element => {

    const {styles} = useThemedStyles();

    return(
        <View style={styles.itemChip}>
            <Text style={styles.itemChipText}>
                {props.str}
            </Text>
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
                height: 200,
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: 10,
                paddingBottom: 10,
            },
            itemChip: {
                flexDirection: 'column',
                marginTop: 10,
                borderRadius: 3,
                paddingTop: 5,
                paddingBottom: 5,
                width: '100%',
                maxWidth: 75,
                backgroundColor: theme.colors.background
            },
            itemChipText: {
                fontWeight: '500',
                textAlign: 'center',
                color: 'black',
                fontSize: 12,
                paddingLeft: 5,
                paddingRight: 5,
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