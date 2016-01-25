//EVERY FILE RUNS IN ITS OWN SANDBOX, THERE ARE NO GLOBAL VARIABLES, SO YOU HAVE TO REQUIRE STUFF IN
// LIKE REACT IN THIS CASE

var Moment = require('moment');

//  (1)  IMPORT SOME CODE WE NEED   (REACT-NATIVE LIBRARY)

var React = require('react-native');

//APPREGISTRY VARIABLE IS ACTUALLY A PROPERTY OF REACT-NATIVE LIBRARY

var AppRegistry = React.AppRegistry;
var Text = React.Text;
var View = React.View;
var StyleSheet = React.StyleSheet;

//BRINGING IN A MODULE YOU CREATED
var DayItem = require('./src/day-item');


// A COMPONENT REPRESENTS SOMETHING WE WANT TO SHOW ON THE SCREEN OF OUR DEVICE

// (2)  CREATE A REACT COMPONENT

var Weekdays = React.createClass({

  render: function() {

    return <View style={styles.container}>
              { this.days() }
           </View> 

  },

  days: function() {
    
    var daysItems = [];

    for(var i = 0; i < 7; i++){

      var day = Moment().add(i, 'days').format('dddd');

      daysItems.push(
        <DayItem day={day} daysUntil={i} key={i} /> 
      )
    }

    return daysItems

  }

});

//  (3)  STYLE THE REACT COMPONENT

//FLEXBOX IS LIKE A GRID SYSTEM FOR PLACEMENT OF ELEMENTS

// STYLE PROPERTIES:

// FLEX: setting flex to 1 is like sayin width:%100, height:%100
// JUSTIFY CONTENT y-axis placement. options: center, flex-end, flex-start
// alignItems x-axis placement. options: center, flex-end, flex-start
// flexDirection. options: column, row. (property roles inverse depending on this)

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',  
    alignItems: 'center'
  }
});


// (4)  SHOW THE REACT COMPONENT ON THE SCREEN

AppRegistry.registerComponent('weekdays', function() {
  return Weekdays
});


//YOU WILL ONLY NEED TO REGISTER ONE COMPONENT PER APP AS OTHER COMPONENTS YOU CREATE
//WILL BE CHILDREN OF THE FIRST AND WILL THUS BE CALLED AUTOMATICALLY