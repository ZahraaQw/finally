import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Alert,
  Platform,
  Dimensions
} from 'react-native';
import MapView,
{ PROVIDER_GOOGLE, Marker, Callout, Polyline, Circle }
  from 'react-native-maps';
import { request, PERMISSIONS } from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
import Carousel from 'react-native-snap-carousel';

export default class FindMyPosition extends Component {

  static navigationOptions = {
    title: 'San Francisco',
  };

  state = {
    markers: [],
    coordinates: [
        {name:"slot 1",latitude:32.06783783751630,longitude:35.31,price:"5 Points",image: require('../assets/Car-Parking.jpg') },
        {name:"slot 2",latitude:32.08,longitude:35.34180,price:"7 Points",image: require('../assets/welcome2.jpg') },
        {name:"slot 3",latitude:32.08145,longitude:35.3168,price:"10 Points",image: require('../assets/parking.jpg') },
        {name:"slot 4",latitude:32.06783783751625,longitude:35.31842568,price:"12 Points",image: require('../assets/parking2.jpg') },
    ]
  }

  componentDidMount() {
    this.requestLocationPermission();
  }



  requestLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      var response = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
      console.log('iPhone: ' + response);

      if (response === 'granted') {
        this.locateCurrentPosition();
      }
    } else {
      var response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
      console.log('Android: ' + response);

      if (response === 'granted') {
        this.locateCurrentPosition();
      }
    }
  }

  locateCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      position => {
        console.log(JSON.stringify(position));

        let initialPosition = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.09,
          longitudeDelta: 0.035
        }

        this.setState({ initialPosition });
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 90000 }
    )
  }
  onCarouselItemChange = (index) => {
    let location = this.state.coordinates[index];

    this._map.animateToRegion({
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: 0.09,
      longitudeDelta: 0.035
    })

    this.state.markers[index].showCallout()
  }

  onMarkerPressed = (location, index) => {
    this._map.animateToRegion({
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: 0.09,
      longitudeDelta: 0.035
    });

    this._carousel.snapToItem(index);
  }

  renderCarouselItem = ({ item }) =>
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitle}>{item.name}</Text>
      <Text style={styles.priceTitle}>{item.price}</Text>
      <Image style={styles.cardImage} source={item.image} />
    </View>


  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          ref={map => this._map = map}
          showsUserLocation={true}
          zoomEnabled={true}
          pitchEnabled={true}
          showsCompass={true}
          showsBuildings={true}
          showsTraffic={true}
          showsIndoors={true}
          style={styles.map}
          initialRegion={this.state.initialPosition}>

          <Circle
            center={{ latitude:32.067816799825856, longitude:35.315367195999336}}
            radius={4000}
            fillColor={'rgba(200, 300, 200, 0.5)'}
          />
        

          {
            this.state.coordinates.map((marker, index) => (
              <Marker
                key={marker.name}
                ref={ref => this.state.markers[index] = ref}
                onPress={() => this.onMarkerPressed(marker, index)}
                coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
              >
                <Callout>
                  <Text>{marker.name}</Text>
                  <Text>{marker.price}</Text>
                </Callout>

              </Marker>
            ))
          }

     <Polyline
		coordinates={[
            {latitude:32.067816799825856,longitude:35.315367195999336},
            {latitude:32.08145,longitude:35.3168},
           
		]}
		strokeColor="red" 
		strokeWidth={4}
	/>


        </MapView>
        <Carousel
          ref={(c) => { this._carousel = c; }}
          data={this.state.coordinates}
          containerCustomStyle={styles.carousel}
          renderItem={this.renderCarouselItem}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={300}
          removeClippedSubviews={false}
          onSnapToItem={(index) => this.onCarouselItemChange(index)}
        />
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  carousel: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 25
  },
  cardContainer: {
    backgroundColor: 'rgba(0, 69, 124,0.5)',
    height: 200,
    width: 300,
    padding: 20,
    borderRadius: 24
  },
  cardImage: {
    height: 120,
    width: 300,
    bottom: 0,
    position: 'absolute',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24
  },
  cardTitle: {
    color: 'white',
    fontSize: 22,
    alignSelf: 'center'
  },
  priceTitle: {
    color: '#ebf7fc',
    fontSize: 15,
    alignSelf: 'center'
  }
});