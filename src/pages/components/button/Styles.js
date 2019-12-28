import {StyleSheet, Dimensions} from 'react-native'

const Styles = StyleSheet.create({

   texto: {
        color: 'white',
        textAlign: 'center',
        textAlignVertical:'center',
        fontSize: 20,
        height: 70
   },
   botao:{
        width: Dimensions.get('screen').width/2,
        height: Dimensions.get('screen').height/10,
        backgroundColor: '#2E2E2E',
        borderColor: '#585858',
        borderWidth: 5,
        borderRadius: 100
   }

})

export default Styles