import React from 'react'
import {View, Text,Image} from 'react-native'
import Button from '../components/button/Button'
import Styles from './Styles'


class Main extends React.Component{

 
    state = {
        cronometro: null,
        min: '00',
        seg: '00',
        habilit_cont: 0, // 1 (habilitada) ou 0 (desabilitada)
        cor_contagem:'white',
        cor_iniciar: 'white',
        texto_pause: 'PAUSAR'
    }


    componentWillUnmount(){
        clearInterval(this.state.cronometro)
    }
    
   
    Init_contagem = () =>{
        this.setState({texto_pause: 'PAUSAR'})
        this.setState({cor_contagem: 'white'})
        this.setState({cor_iniciar: 'green'})

        if(Number(this.state.habilit_cont) == 0)
        {
            this.setState({habilit_cont:1})

            let cronometro = setInterval(() => { 

                this.setState({seg: (Number(this.state.seg) + 1).toString()})
                this.setState({seg: this.state.seg.length == 1 ? '0' + this.state.seg : this.state.seg})
                if(this.state.seg == 59)
                {
                    this.setState({seg: '00'})
                    this.setState({min: (Number(this.state.min) + 1).toString()})
                    this.setState({min: this.state.min.length == 1 ? '0' + this.state.min : this.state.min})
                }

            }, 1000)

            this.setState({cronometro}); 
        }
       
    }

    Zerar_contagem = () =>{
        this.setState({min: '00'})
        this.setState({seg: '00'})
        this.setState({habilit_cont:0})
        this.setState({cor_contagem: 'white'})
        this.setState({cor_iniciar: 'white'})
        this.setState({texto_pause: 'PAUSAR'})
        clearInterval(this.state.cronometro)
        this.state.cronometro = null
    }

    Des_contagem = () =>{

        let habilit_cont = this.state.habilit_cont
   

        if(habilit_cont == 1)
        {
            this.setState({habilit_cont:0})
            this.setState({cor_contagem: '#FA5858'})
            this.setState({texto_pause: 'CONTINUAR'})
            this.setState({cor_iniciar: 'white'})
            clearInterval(this.state.cronometro);
        }
        else if(habilit_cont == 0 & this.state.cronometro != null )
        {
            this.setState({habilit_cont:1})
            this.setState({cor_contagem: 'white'})
            this.setState({texto_pause: 'PAUSAR'})
            this.Init_contagem()
        }
       
    }

    render(){
       
        return(
            
            <View style = {Styles.view_princip}> 

                <View style={Styles.titulo}>
                    <Text style = {Styles.text_titulo}>CRONOMETRO</Text>
                    
                    <Image style={{width: 100, height: 100, resizeMode: 'contain'}} 
                        source = {{uri:'https://images.vexels.com/media/users/3/153924/isolated/preview/4591355da4c62844fda2328fa8c2f200---cones-de-esporte-de---cone-de-tra--o-colorido-cron--metro-by-vexels.png' }}>
                    </Image>

                </View>
                
                <View style={Styles.contagem}>
                    <Text style = {{color: this.state.cor_contagem, fontSize: 80}}>{this.state.min} : {this.state.seg}</Text>
                </View>

                
                <View style = {Styles.botoes}>
                    <View style={{flexDirection: "row"}}> 
                        <Button style = {Styles.botao} cor = 'white' texto = 'ZERAR' operacao = {this.Zerar_contagem} /* botao de reiniciar*/ />
                        <Button style = {Styles.botao} cor = {this.state.cor_contagem} texto = {this.state.texto_pause} operacao  = {this.Des_contagem} /* botao de pausar*/ />
                    </View> 
                    <View>
                        <Button style = {Styles.botao} cor = {this.state.cor_iniciar} texto = 'INICIAR' operacao = {this.Init_contagem}  /* botao de iniciar*/ />
                    </View> 
                
                </View>


            </View>

        )
    }
}

export default Main
