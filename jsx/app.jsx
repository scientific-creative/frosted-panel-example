require('../sass/style.scss');

const React = require ('react')
const ReactDOM = require ('react-dom')
const PropTypes = require('prop-types') // For error checking (dev-only)

const { PanelWallpaper, PanelDashboard } = require('./ui.jsx');

// Error Validation
PanelWallpaper.propTypes = {
	background: './assets/background.jpg',
  	background: PropTypes.string.isRequired,
}
PanelDashboard.propTypes = {
	panelWidthHeight: function(props, propName, componentName) {
    	if (!/^([34][0-9]{2}|500)/.test(props[propName])) {
      		return new Error(
        		'Invalid prop `' + propName + '` supplied to' +
        		' `' + componentName + '`. Validation failed. Please enter a number between 300 and 500'
      		);
    	}
  	},
  	backgroundBlurred: './assets/background-blurred.jpg',
  	backgroundBlurred: PropTypes.string.isRequired,
}

// View render
ReactDOM.render (
	<div>
		<PanelWallpaper background="./assets/background.jpg" />
		<PanelDashboard panelWidthHeight="390" backgroundBlurred="./assets/background-blurred.jpg" welcomeMessage="Hello World!" />
	</div>,
	document.getElementById('content')
)