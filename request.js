import React, { Component } from 'react'
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";

const image = { uri: "https://w0.peakpx.com/wallpaper/339/669/HD-wallpaper-mcu-avengers-birds-black-panther-heroes-marvel-samurai-spider-man-star-universe-villians.jpg" };

class RequestManager extends Component {
   state = {
      data: ''
   }
   componentDidMount = () => {
      fetch('https://whenisthenextmcufilm.com/api', {
         method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
         console.log(responseJson);
         this.setState({
            data: responseJson
         })
      })
      .catch((error) => {
         console.error(error);
      });
   }
   render() {
      return (

        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <Text style={styles.mainTitle}>
                The Next MCU Film
                </Text>
                <Text style={styles.mainTitle}>
                {this.state.data.title}
                </Text>

                <Text style={styles.mainSubTitle}>
                {"Releasing In " + this.state.data.days_until + " Days"}
                </Text>

                <Text style={styles.mainSubTitle}>
                {"Release Date: "+this.state.data.release_date}
                </Text>

                <View style={styles.row_container}>
                <Image style={{width: '50%', height: '100%'}}
                    source={{uri: "https://upload.wikimedia.org/wikipedia/en/8/88/Thor_Love_and_Thunder_poster.jpeg"}}/>
                </View>
            

                <Text style={styles.mainSubTitle}>
                   Overview
                </Text>
                <Text style={styles.overviewStyle}>
                    {this.state.data.overview}
                </Text>
            </ImageBackground>
        </View>

        //  <View>
        //     <Text>
        //        {this.state.data.title}
        //     </Text>
        //     <Text>
        //        {this.state.data.days_until}
        //     </Text>
        //     <Text>
        //        {this.state.data.overview}
        //     </Text>
        //  </View>
      )
   }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    row_container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "center",
        backgroundColor: "#000000c0"
      },
    image: {
      flex: 1,
      justifyContent: "flex-start"
    },
    text: {
      color: "white",
      fontSize: 42,
      lineHeight: 50,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000c0"
    },
    mainTitle: {
        color: "yellow",
        fontSize: 30,
        lineHeight: 60,
        fontFamily: 'acme.ttf',
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0"
    },
    mainSubTitle: {
        color: "white",
        fontSize: 20,
        lineHeight: 50,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0"
    },
    overviewStyle: {
        color: "grey",
        fontSize: 18,
        lineHeight: 25,
        fontWeight: "normal",
        textAlign: "center",
        backgroundColor: "#000000c0"
    }
  });
export default RequestManager
