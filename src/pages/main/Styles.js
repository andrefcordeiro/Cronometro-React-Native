import {StyleSheet} from 'react-native'

const Styles = StyleSheet.create({

    view_princip:{
        flex: 1,
        backgroundColor: '#585858',
     

    },

    titulo:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2E2E2E', 
        flexDirection: "column",
        flex: 1
    },

    text_titulo:{
        color: 'white', 
        fontSize: 40,

    },

    contagem:{
        justifyContent: 'center' ,
        alignItems: 'center',
        flex: 1
    },

    botoes:{
        flex:1, 
        alignItems: 'center',
        flexDirection: "column-reverse",
        justifyContent: 'flex-end'
    }

})

export default Styles