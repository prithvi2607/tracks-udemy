import * as Location from 'expo-location';
//only for testing purpose;
const tenMetersWithDegrees = 0.0001;

const getLocation = increment => {
    return {
        timestamp: 1000000,
        coords: {
            speed: 0,
            heading: 0,
            accuracy: 0,
            altitudeAccuracy: 5,
            altitude: 5,
            longitude: 84.7901322 + increment*tenMetersWithDegrees,
            latitude: 19.3084594 + increment*tenMetersWithDegrees
        }
    }
}

let counter = 0;
setInterval (() => {
    Location.EventEmitter.emit('Expo.locationChanged', {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    });
    counter++;
}, 1000)