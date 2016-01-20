// IMPORT SOME CODE WE NEED

var React = require('react-native');

var Text = React.Text;

var StyleSheet = React.StyleSheet;

//CREATE OUR COMPONENT

var DayItem = React.createClass({
	render: function() {
		return <Text style={styles.day}>
			A day of the week
		</Text>
	}
});

//STYLE OUR COMPONENT

var styles = StyleSheet.create({
	day: {
		fontSize: 18,
		color: '#0000FF'
	}
});

//MAKE THIS CODE AVAILABLE ELSEWHERE

//THIS ALLOWS US TO EXPORT STUFF FROM INSIDE THIS FILE TO MAKE IT AVAILABLE TO OTHERS

module.exports = DayItem;