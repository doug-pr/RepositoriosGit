import React, { Component } from 'react';

import {
    View,
    Text,
    Modal,
    TextImput,
    StyleSheet,
    TochableOpacity,
} from 'react-native';

export default class NewRepoModal extends Component {
    render() {
        state = {
            newrepoText: '',
        }
        return(
            <Modal animationType="fade" transparent={true} visible={this.props.visible}>
                <View style={styles.modalContainer}>
                    <View style={styles.boxContainer}>
                        <Text style={styles.boxTitle}>Adicionar Repositório</Text>
                        <TextInput 
                            autoFocus
                            autoCapitalize="none"
                            style={styles.boxInput}
                            underlineColorAndroid="rgba(0, 0, 0, 0)"
                            placeholder="organização/repositório"
                            value={this.state.newrepoText}
                            onChangeText={newRepoText => this.setState({ newrepoText})}
                        />
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity 
                                style={[styles.button, styles.cancelButton]} 
                                onPress={this.props.onCancel}
                            >
                                <Text style={styles.buttonText}>Cancelar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style={[styles.button, styles.csubmitButton]} 
                                onPress={() => this.props.onAdd(this.state.newRepoText)}
                            >
                                <Text style={styles.buttonText}>Adicionar</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    
    modalConteiner:{
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      justifyContent: 'center',
      AlignItems: 'center',  
    },

    boxContainer:{
        padding: 20,
        backgroundColor: '#FFF',
        borderRadius: 10,
        alignItems: 'center',
        width: 280,
        height: 80,
    },

    boxTitle:{
        fontWeight: 'bold',
        fontSize: 16,
    },

    boxInput:{
        alignSelf: 'stretch',
        marginTop: 10,
        paddingVertical: 0,
        paddingHorizontal: 20,
        borderTopWidth: 1,
        borderColor: '#DDD',
        height: 40,
        borderRadius: 3,
    },

    buttonContainer: {
        marginTop: 10,
        height: 40,
        flexDirection: 'row',
    },

    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
    },

    cancelButton: {
        backgroundColor: '#E25F5F',
        marginRight: 5,
    },

    submitButton: {
        backgroundColor: '#70BD85',
        marginLeft: 5,
    },

    buttonText: {
        fontWeight: 'bold',
        color: '#FFF',
        fontSize: 12 ,
    }
})