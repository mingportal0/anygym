import React from "react";
import { Select, SelectItem  } from "@ui-kitten/components"
import { View, Picker, StyleSheet } from "react-native";

export const SimpleSelectBox = (placeholder, list, selectedValue, setSelectedValue, style) => {
    let selectItem = list && list.map( (item) => {
        return <Picker.Item label={item} value={item} key={item}/>
    });

    return (
        <Picker
            style={style}
            placeholder={placeholder}
            selectedValue={selectedValue}
            onValueChange={(value, idx) => setSelectedValue(value) }>
            {selectItem}
        </Picker>
    )
}