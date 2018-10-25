//
//  App.js
//  Project
//
//  Created by dc.
//  Copyright © 2018 UX Divergent. All rights reserved.
//

import Home from "./App/Home/Home"
import React from "react"
import { createStackNavigator } from "react-navigation"
import { Font, DangerZone } from "expo"
import AddClient from "./App/AddClient/AddClient"
import Client from "./App/Client/Client"
const PushRouteOne = createStackNavigator({
	Home: {
		screen: Home,
	},
}, {
	initialRouteName: "Home",
})
const RootNavigator = createStackNavigator({
	PushRouteOne: {
		screen: PushRouteOne,
	},
}, {
	mode: "modal",
	headerMode: "none",
	initialRouteName: "PushRouteOne",
})



export default class App extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			fontsReady: false,
		}
	}

	componentDidMount() {
	
		this.initProjectFonts()
	}

	async initProjectFonts() {
	
		await Font.loadAsync({
			"Poppins-Regular": require("./assets/fonts/PoppinsRegular.ttf"),
			"Poppins-Light": require("./assets/fonts/PoppinsLight.ttf"),
			"Poppins-Medium": require("./assets/fonts/PoppinsMedium.ttf"),
			"OpenSans-Bold": require("./assets/fonts/OpenSansBold.ttf"),
			"Poppins-SemiBold": require("./assets/fonts/PoppinsSemiBold.ttf"),
		})
		this.setState({
			fontsReady: true,
		})
	}

	render() {
	
		if (!this.state.fontsReady) { return (<Expo.AppLoading/>); }
		return <RootNavigator/>
	}
}
