const React = require('react')
const ReactDOM = require('react-dom')

class PanelWallpaper extends React.Component {	
	render () {
		console.log(this.props.background)
		return (
			<div className="spa-background" style={{backgroundImage: "url(" + this.props.background + ")"}}></div>
		)
	}
}

class PanelDashboard extends React.Component {
	constructor(props) {
		super(props)
		this.handleResize = this.handleResize.bind(this)
		let windowWidth = Math.round(window.innerWidth)
		let windowHeight = Math.round(window.innerHeight)
		let backgroundX = Math.round((windowWidth - this.props.panelWidthHeight)/2)
		let backgroundY = Math.round((windowHeight - this.props.panelWidthHeight)/2)
		this.state = {
			background: {
				width: windowWidth-4,	
				height: windowHeight,
				backgroundPosition: "-" + backgroundX +"px -" + backgroundY + "px",
				backgroundImage: "url(" + this.props.backgroundBlurred + ")"
			}
		}
	}
	componentDidMount () {
		window.addEventListener('resize', this.handleResize)
	}
	componentWillUnmount () {
		window.removeEventListener('resize', this.handleResize)
	}
	handleResize(event) {
		let windowWidth = Math.round(window.innerWidth)
		let windowHeight = Math.round(window.innerHeight)
		let backgroundX = Math.round((windowWidth - this.props.panelWidthHeight)/2)
		let backgroundY = Math.round((windowHeight - this.props.panelWidthHeight)/2)
	 	this.setState ({
	 		background: {
	 			width: windowWidth-4,
	 			height: windowHeight,
	 			backgroundPosition: "-" + backgroundX +"px -" + backgroundY + "px",
	 			backgroundImage: "url(" + this.props.backgroundBlurred + ")"
	 		}
	 	})
	}
	render () {
		return (
			<div className="spa-dashboard-container">
				<div className="spa-dashboard-panel" style={{width: this.props.panelWidthHeight+"px"}}>
					<div className="spa-score" style={{width: this.props.panelWidthHeight+"px", height: this.props.panelWidthHeight+"px"}}>
						<div className="spa-background-blurred" style={this.state.background}>
							<div className="spa-welcome-message-container" style={{width: this.props.panelWidthHeight+"px", height: this.props.panelWidthHeight+"px"}}>
								<div className="spa-welcome-message">
									{this.props.welcomeMessage}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}


module.exports = {
	PanelWallpaper,
	PanelDashboard
}