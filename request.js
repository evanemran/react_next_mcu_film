import React, { Component } from 'react'
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";

const image = { uri: "https://lh3.googleusercontent.com/37jKSwObSfyxrdC6jy69aEvqND1dsyh_z7-AKX43OgoF9rxKhlUyz_Jm4tYXSYXUa7o" };

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
                {this.state.data.title}
                </Text>
                <Text style={styles.mainSubTitle}>
                {"Release Date: "+this.state.data.release_date}
                </Text>

                <Text style={styles.mainSubTitle}>
                {this.state.data.days_until + " Days Left"}
                </Text>

                <Image style={{width: '50%', height: '50%'}}
                    source={{uri:this.state.data.poster_url}}/>
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
    image: {
      flex: 1,
      justifyContent: "flex-start"
    },
    text: {
      color: "white",
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000c0"
    },
    mainTitle: {
        color: "white",
        fontSize: 30,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0"
    },
    mainSubTitle: {
        color: "white",
        fontSize: 20,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0"
    }
  });
export default RequestManager
