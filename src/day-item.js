// IMPORT SOME CODE WE NEED

var React = require('react-native');

var Text = React.Text;

var StyleSheet = React.StyleSheet;

//CREATE OUR COMPONENT

var DayItem = React.createClass({
	render: function() {
		return <Text style={this.style()}>
			{this.props.day}
		</Text>
	},

	style: function() {
		return {
			color: this.color(),
			fontWeight: this.fontWeight(),
			fontSize: this.fontSize(),
			lineHeight: this.lineHeight()
		}
	},

	color: function() {

		if (this.props.daysUntil === 0) {
			var opacity = 1;
		} else {
			var opacity =  0.8 / this.props.daysUntil;
		};
		
		return 'rgba(0, 0, 0, '+ opacity + ')';
	},

	fontWeight: function() {
		var weight = 7 - this.props.daysUntil;

		return (weight * 100).toString();
	},

	fontSize: function() {
		return 60 - 6 * this.props.daysUntil;
	},

	lineHeight: function() {
		return 70 - 4 * this.props.daysUntil;
	}
});

//STYLE OUR COMPONENT

// var styles = StyleSheet.create({
// 	day: {
// 		fontSize: 18,
// 		color: '#0000FF'
// 	}
// });

//MAKE THIS CODE AVAILABLE ELSEWHERE

//THIS ALLOWS US TO EXPORT STUFF FROM INSIDE THIS FILE TO MAKE IT AVAILABLE TO OTHERS

module.exports = DayItem;