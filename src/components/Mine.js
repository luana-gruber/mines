import React from 'react'
import { SafeAreaView, StyleSheet, Text} from 'react-native'

export default props => {
    return (
        <SafeAreaView style={styles.container}>
            <SafeAreaView style={styles.coreMine} />
            <SafeAreaView style={styles.line} />
            <SafeAreaView style={[styles.line, {transform: [{rotate: '45deg'}]}]} />
            <SafeAreaView style={[styles.line, {transform: [{rotate: '90deg'}]}]} />
            <SafeAreaView style={[styles.line, {transform: [{rotate: '135deg'}]}]} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    coreMine: {
        height: 14,
        width: 14,
        borderRadius: 10,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
    line:{
        position: 'absolute',
        height: 3,
        width: 20,
        borderRadius: 3,
        backgroundColor: 'black'
    }
})