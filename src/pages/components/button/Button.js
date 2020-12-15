import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import Styles from './Styles'


class Button extends React.Component {


    render() {

        return (
            <TouchableOpacity style={Styles.botao}
                onPress={() => this.props.operacao()} >
                <Text style={[Styles.texto, { color: this.props.cor }]}>
                    {this.props.texto}
                </Text>
            </TouchableOpacity>

        )
    }
}


export default Button