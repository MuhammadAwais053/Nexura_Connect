import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FONT_SIZE = 45

const Prac = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Prac</Text>
            <View style={{ height: '50%', backgroundColor: 'grey' }}>
                <Text style={styles.text}>Prac</Text>

            </View>

        </View>
    )
}

export default Prac

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        // width: '300%',
        // height: '50%'
        flex: 1

    },

    text: {
        fontSize: FONT_SIZE

    }
})