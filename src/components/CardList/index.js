import React from "react";
import { SectionList, View } from "react-native";

export default List = (props) => {
    return (
        <View>
            <Text>{props.titulo}</Text>
            <SectionList>
                {props.itens}
            </SectionList>
        </View>

    )
}