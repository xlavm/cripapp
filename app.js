import React, { useState, useEffect } from 'react'
import { Image, View, ScrollView, ActivityIndicator } from 'react-native'
import axios from 'axios'
import Header from './components/Header'
import Formulario from './components/Formulario'
import Cotizacion from './components/Cotizacion'
import styles from './assets/styles/styles'


const App = () => {

  const [moneda, guardarMoneda] = useState('')//useState es un string porque trae solo un elemento
  const [criptomoneda, guardarCriptomoneda] = useState('')
  const [quiereConsultarAPI, actualizarQuiereConsultarAPI] = useState(false)//inicialmente la quiereConsultarAPI es false, va a ser true cuando quiera consultar la API
  const [resultado, guardarResultado] = useState({})
  const [spinnerEstaActivo, actualizarSpinner] = useState(false)//cuando el usuario llene el formulario y pida la cotizacion, se va a cambiar a true


  //si hay un cambio de quiereConsultarAPI, se va a ejecutar este efecto
  useEffect(() => {
    const cotizarCriptomoneda = async () => {
      //si quiere consultar la API
      if (quiereConsultarAPI) {
        // consulta la api para obtener la cotización
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
        const resultado = await axios.get(url)
        
        //como quiero mostrar el resultado, pongo un timeout de 3 segundos y muestro el spinner
        actualizarSpinner(true)
        setTimeout(() => {
          guardarResultado(resultado.data.DISPLAY[criptomoneda][moneda])
          actualizarQuiereConsultarAPI(false)//le digo que quiero consultar la API para que no se recargue la informacion
          actualizarSpinner(false)//le digo que detenga el spinner
        }, 3000)//3 segundos de retraso o 3seg de Spinner
      }
    }
    cotizarCriptomoneda()
  }, [quiereConsultarAPI])// la dependencia [quiereConsultarAPI] escucha cambios de quiereConsultarAPI


  // si el spinnerEstaActivo es igual a True, entonces muestra el spinner y si no, muestra la cotizacion
  const componente = spinnerEstaActivo ? <ActivityIndicator size="large" color="#5E49E2" /> : <Cotizacion resultado={resultado} />

  return (
    <>
      <ScrollView>
        <Header />

        <Image
          style={styles.imagen}
          source={require('./assets/img/cryptomonedas.png')}
        />

        <View style={styles.contenido}>
          <Formulario
            moneda={moneda}
            criptomoneda={criptomoneda}
            guardarMoneda={guardarMoneda}
            guardarCriptomoneda={guardarCriptomoneda}
            actualizarQuiereConsultarAPI={actualizarQuiereConsultarAPI}
          />
        </View>

        <View style={{ marginTop: 40 }}>
          {componente}
        </View>

      </ScrollView>
    </>
  )
}

export default App

/* con esta instruccion estamos creando un pasadiso con el componente Formulario
  < Formulario
moneda = { moneda }
criptomoneda = { criptomoneda }
guardarMoneda = { guardarMoneda }
guardarCriptomoneda = { guardarCriptomoneda }
actualizarQuiereConsultarAPI = { actualizarQuiereConsultarAPI }
  />

y en el componente Formulario se abre el pasadiso con:
const Formulario = ({ moneda, criptomoneda, guardarMoneda, guardarCriptomoneda, actualizarQuiereConsultarAPI }) => { */