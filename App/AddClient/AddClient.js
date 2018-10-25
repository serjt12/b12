//
//  AddClient.js
//  Project
//
//  Created by dc.
//  Copyright © 2018 UX Divergent. All rights reserved.
//

import React from "react"
import { StyleSheet, Image, View, Text } from "react-native"


export default class AddClient extends React.Component {

	static navigationOptions = ({ navigation }) => {
	
		const { params = {} } = navigation.state
		return {
				header: null,
				headerLeft: null,
				headerRight: null,
			}
	}

	constructor(props) {
		super(props)
	}

	componentDidMount() {
	
	}

	render() {
	
		return <View
				pointerEvents="box-none"
				style={styles.addClientView}>
				<View
					pointerEvents="box-none"
					style={styles.headerView}>
					<View
						pointerEvents="box-none"
						style={styles.divideView}>
						<View
							pointerEvents="box-none"
							style={{
								flex: 1,
								flexDirection: "column",
								justifyContent: "flex-end",
							}}/>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							width: "100%",
							height: "100%",
							justifyContent: "center",
						}}>
						<View
							pointerEvents="box-none"
							style={{
								flexDirection: "row",
								alignSelf: "stretch",
								alignItems: "center",
							}}>
							<Image
								source={require("./../../assets/images/back.png")}
								style={styles.backImage}/>
							<Text
								style={styles.newCustomerText}>New Customer</Text>
						</View>
					</View>
				</View>
				<View
					pointerEvents="box-none"
					style={styles.section1View}>
					<View
						pointerEvents="box-none"
						style={styles.row1View}>
						<View
							pointerEvents="box-none"
							style={{
								flexDirection: "row",
								alignSelf: "stretch",
								alignItems: "center",
							}}>
							<View
								pointerEvents="box-none"
								style={styles.fieldFourView}>
								<View
									pointerEvents="box-none"
									style={styles.baseFortyView}>
									<View
										pointerEvents="box-none"
										style={{
											flex: 1,
											flexDirection: "column",
											justifyContent: "flex-end",
										}}/>
								</View>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										width: "100%",
										height: "100%",
										justifyContent: "center",
									}}>
									<Text
										style={styles.originalFortyOneText}>First Name</Text>
								</View>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									flexDirection: "row",
									flex: 1,
									justifyContent: "flex-end",
									alignItems: "center",
								}}>
								<View
									pointerEvents="box-none"
									style={styles.fieldCopyThreeView}>
									<View
										pointerEvents="box-none"
										style={styles.baseFortyOneView}>
										<View
											pointerEvents="box-none"
											style={{
												flex: 1,
												flexDirection: "column",
												justifyContent: "flex-end",
											}}/>
									</View>
									<View
										pointerEvents="box-none"
										style={{
											position: "absolute",
											width: "100%",
											height: "100%",
											justifyContent: "center",
										}}>
										<Text
											style={styles.originalFortyTwoText}>Last Name</Text>
									</View>
								</View>
							</View>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={styles.row2View}>
						<View
							pointerEvents="box-none"
							style={styles.baseThirtyNineView}>
							<View
								pointerEvents="box-none"
								style={{
									flex: 1,
									flexDirection: "column",
									justifyContent: "flex-end",
								}}/>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								width: "100%",
								height: "100%",
								justifyContent: "center",
							}}>
							<Text
								style={styles.originalFortyText}>Address</Text>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={styles.row3View}>
						<View
							pointerEvents="box-none"
							style={styles.fieldThreeView}>
							<View
								pointerEvents="box-none"
								style={styles.baseThirtySixView}>
								<View
									pointerEvents="box-none"
									style={{
										flex: 1,
										flexDirection: "column",
										justifyContent: "flex-end",
									}}/>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									width: "100%",
									height: "100%",
									justifyContent: "center",
								}}>
								<Text
									style={styles.originalThirtySevenText}>City</Text>
							</View>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								width: "100%",
								height: "100%",
								justifyContent: "center",
							}}>
							<View
								pointerEvents="box-none"
								style={styles.fieldCopyTwoView}>
								<View
									pointerEvents="box-none"
									style={styles.baseThirtySevenView}>
									<View
										pointerEvents="box-none"
										style={{
											flex: 1,
											flexDirection: "column",
											justifyContent: "flex-end",
										}}/>
								</View>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										width: "100%",
										height: "100%",
										justifyContent: "center",
									}}>
									<Text
										style={styles.originalThirtyEightText}>State</Text>
								</View>
							</View>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								width: "100%",
								height: "100%",
								justifyContent: "center",
							}}>
							<View
								pointerEvents="box-none"
								style={styles.fieldCopy2ThreeView}>
								<View
									pointerEvents="box-none"
									style={styles.baseThirtyEightView}>
									<View
										pointerEvents="box-none"
										style={{
											flex: 1,
											flexDirection: "column",
											justifyContent: "flex-end",
										}}/>
								</View>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										width: "100%",
										height: "100%",
										justifyContent: "center",
									}}>
									<Text
										style={styles.originalThirtyNineText}>Zip Code</Text>
								</View>
							</View>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={styles.row4View}>
						<View
							pointerEvents="box-none"
							style={{
								flexDirection: "row",
								justifyContent: "center",
								alignSelf: "stretch",
							}}/>
						<View
							pointerEvents="box-none"
							style={{
								flex: 1,
								flexDirection: "column",
								justifyContent: "flex-end",
							}}/>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								width: "100%",
								height: "100%",
							}}>
							<View
								pointerEvents="box-none"
								style={styles.group3CopyView}>
								<View
									pointerEvents="box-none"
									style={{
										flexDirection: "row",
										alignSelf: "stretch",
									}}>
									<View
										pointerEvents="box-none"
										style={styles.baseThirtyFiveView}>
										<View
											pointerEvents="box-none"
											style={{
												flex: 1,
												flexDirection: "column",
												justifyContent: "flex-end",
											}}/>
									</View>
									<View
										pointerEvents="box-none"
										style={{
											flexDirection: "row",
											flex: 1,
											justifyContent: "flex-end",
										}}>
										<Text
											style={styles.originalThirtySixText}>Female</Text>
									</View>
								</View>
							</View>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							flex: 1,
							flexDirection: "column",
							justifyContent: "flex-end",
						}}>
						<View
							pointerEvents="box-none"
							style={styles.row5View}>
							<View
								pointerEvents="box-none"
								style={styles.fieldView}>
								<View
									pointerEvents="box-none"
									style={styles.baseTwentyNineView}>
									<View
										pointerEvents="box-none"
										style={{
											flex: 1,
											flexDirection: "column",
											justifyContent: "flex-end",
										}}/>
								</View>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										width: "100%",
										height: "100%",
										justifyContent: "center",
									}}>
									<Text
										style={styles.originalThirtyText}>Phone</Text>
								</View>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									width: "100%",
									height: "100%",
									justifyContent: "center",
								}}>
								<View
									pointerEvents="box-none"
									style={styles.fieldCopyView}>
									<View
										pointerEvents="box-none"
										style={styles.baseThirtyView}>
										<View
											pointerEvents="box-none"
											style={{
												flex: 1,
												flexDirection: "column",
												justifyContent: "flex-end",
											}}/>
									</View>
									<View
										pointerEvents="box-none"
										style={{
											position: "absolute",
											width: "100%",
											height: "100%",
											justifyContent: "center",
										}}>
										<Text
											style={styles.originalThirtyOneText}>Email</Text>
									</View>
								</View>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									width: "100%",
									height: "100%",
									justifyContent: "center",
								}}>
								<View
									pointerEvents="box-none"
									style={styles.fieldCopy2View}>
									<View
										pointerEvents="box-none"
										style={styles.baseThirtyOneView}>
										<View
											pointerEvents="box-none"
											style={{
												flex: 1,
												flexDirection: "column",
												justifyContent: "flex-end",
											}}/>
									</View>
									<View
										pointerEvents="box-none"
										style={{
											position: "absolute",
											width: "100%",
											height: "100%",
											justifyContent: "center",
										}}>
										<Text
											style={styles.originalThirtyTwoText}>Occupation</Text>
									</View>
								</View>
							</View>
						</View>
						<View
							pointerEvents="box-none"
							style={styles.row6View}>
							<View
								pointerEvents="box-none"
								style={{
									flexDirection: "row",
									alignSelf: "stretch",
									alignItems: "center",
								}}>
								<View
									pointerEvents="box-none"
									style={styles.fieldCopy3View}>
									<View
										pointerEvents="box-none"
										style={styles.baseTwentySevenView}>
										<View
											pointerEvents="box-none"
											style={{
												flex: 1,
												flexDirection: "column",
												justifyContent: "flex-end",
											}}/>
									</View>
									<View
										pointerEvents="box-none"
										style={{
											position: "absolute",
											width: "100%",
											height: "100%",
											justifyContent: "center",
										}}>
										<Text
											style={styles.originalTwentyEightText}>Emergency Contact Name</Text>
									</View>
								</View>
								<View
									pointerEvents="box-none"
									style={{
										flexDirection: "row",
										flex: 1,
										justifyContent: "flex-end",
										alignItems: "center",
									}}>
									<View
										pointerEvents="box-none"
										style={styles.fieldCopy4View}>
										<View
											pointerEvents="box-none"
											style={styles.baseTwentyEightView}>
											<View
												pointerEvents="box-none"
												style={{
													flex: 1,
													flexDirection: "column",
													justifyContent: "flex-end",
												}}/>
										</View>
										<View
											pointerEvents="box-none"
											style={{
												position: "absolute",
												width: "100%",
												height: "100%",
												justifyContent: "center",
											}}>
											<Text
												style={styles.originalTwentyNineText}>Contact Phone</Text>
										</View>
									</View>
								</View>
							</View>
						</View>
					</View>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	addClientView: {
		backgroundColor: 'rgb(255, 255, 255)',
		flex: 1,
	},
	headerView: {
		height: 84,
		backgroundColor: 'rgb(255, 255, 255)',
	},
	section1View: {
		width: 1285,
		height: 594,
		marginTop: 42,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		alignSelf: "center",
	},
	informedConsentForText: {
		marginLeft: 46,
		marginTop: 40,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(51, 60, 72)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0,
	},
	originalText: {
		width: 1200,
		marginTop: 5,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(50, 60, 71)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 51,
		letterSpacing: 0,
		alignSelf: "center",
	},
	divideCopyView: {
		height: 4,
		marginLeft: 2,
		backgroundColor: 'rgb(244, 248, 249)',
	},
	howDidYouLearnAbText: {
		marginTop: 28,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(51, 60, 72)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0,
	},
	group4View: {
		width: 1251,
		height: 33,
		marginTop: 33,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	group4CopyView: {
		width: 1251,
		height: 33,
		marginTop: 31,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	group4Copy2View: {
		width: 1251,
		height: 33,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	checkRowView: {
		width: 387,
		height: 33,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	checkRowThreeView: {
		width: 387,
		height: 33,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		alignSelf: "center",
	},
	checkRowFiveView: {
		width: 387,
		height: 33,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		alignSelf: "flex-end",
	},
	checkRowTwoView: {
		height: 50,
		marginTop: -11,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	baseView: {
		width: 28,
		height: 28,
		marginTop: 15,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(26, 25, 25)',
		borderStyle: "solid",
	},
	originalTwoText: {
		marginTop: -8,
		marginRight: 187,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(50, 60, 71)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 50,
		letterSpacing: 0,
	},
	checkRowFourView: {
		height: 50,
		marginTop: -11,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	baseTwoView: {
		width: 28,
		height: 28,
		marginTop: 15,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(26, 25, 25)',
		borderStyle: "solid",
	},
	originalThreeText: {
		marginTop: -8,
		marginRight: 174,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(50, 60, 71)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 50,
		letterSpacing: 0,
	},
	checkRowSixView: {
		height: 50,
		marginTop: -11,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	baseThreeView: {
		width: 28,
		height: 28,
		marginTop: 15,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(26, 25, 25)',
		borderStyle: "solid",
	},
	originalFourText: {
		marginTop: -8,
		marginRight: 252,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(50, 60, 71)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 50,
		letterSpacing: 0,
	},
	checkRowSevenView: {
		width: 387,
		height: 33,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	checkRowNineView: {
		width: 387,
		height: 33,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		alignSelf: "center",
	},
	checkRowElevenView: {
		width: 387,
		height: 33,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		alignSelf: "flex-end",
	},
	checkRowEightView: {
		height: 50,
		marginTop: -11,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	baseFourView: {
		width: 28,
		height: 28,
		marginTop: 15,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(26, 25, 25)',
		borderStyle: "solid",
	},
	originalFiveText: {
		marginTop: -8,
		marginRight: 205,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(50, 60, 71)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 50,
		letterSpacing: 0,
	},
	checkRowTenView: {
		height: 50,
		marginTop: -11,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	baseFiveView: {
		width: 28,
		height: 28,
		marginTop: 15,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(26, 25, 25)',
		borderStyle: "solid",
	},
	originalSixText: {
		marginTop: -8,
		marginRight: 204,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(50, 60, 71)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 50,
		letterSpacing: 0,
	},
	checkRowTwelveView: {
		height: 50,
		marginTop: -11,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	baseSixView: {
		width: 28,
		height: 28,
		marginTop: 15,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(26, 25, 25)',
		borderStyle: "solid",
	},
	originalSevenText: {
		marginTop: -8,
		marginRight: 194,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(50, 60, 71)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 50,
		letterSpacing: 0,
	},
	checkRowThirteenView: {
		width: 387,
		height: 33,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	checkRowFifteenView: {
		width: 387,
		height: 33,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		alignSelf: "center",
	},
	checkRowFourteenView: {
		height: 50,
		marginTop: -11,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	baseSevenView: {
		width: 28,
		height: 28,
		marginTop: 15,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(26, 25, 25)',
		borderStyle: "solid",
	},
	originalEightText: {
		marginTop: -8,
		marginRight: 247,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(50, 60, 71)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 50,
		letterSpacing: 0,
	},
	checkRowSixteenView: {
		height: 50,
		marginTop: -11,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	baseEightView: {
		width: 28,
		height: 28,
		marginTop: 15,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(26, 25, 25)',
		borderStyle: "solid",
	},
	originalNineText: {
		marginTop: -8,
		marginRight: 281,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(50, 60, 71)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 50,
		letterSpacing: 0,
	},
	divideCopyTwoView: {
		height: 4,
		marginLeft: 2,
		backgroundColor: 'rgb(244, 248, 249)',
	},
	pleaseCheckIfYouText: {
		marginTop: 28,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(51, 60, 72)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0,
	},
	group4TwoView: {
		width: 1251,
		height: 33,
		marginTop: 33,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	group4CopyTwoView: {
		width: 1251,
		height: 33,
		marginTop: 31,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	group4Copy2TwoView: {
		width: 1251,
		height: 33,
		marginTop: 31,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	group4Copy3View: {
		width: 1251,
		height: 33,
		marginTop: 31,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	group4Copy4View: {
		width: 1251,
		height: 33,
		marginBottom: 31,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	group4Copy5View: {
		width: 1251,
		height: 33,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	checkRowSeventeenView: {
		width: 387,
		height: 33,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	checkRowNineteenView: {
		width: 387,
		height: 33,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		alignSelf: "center",
	},
	checkRowTwentyOneView: {
		width: 387,
		height: 33,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		alignSelf: "flex-end",
	},
	checkRowEighteenView: {
		height: 50,
		marginTop: -11,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	baseNineView: {
		width: 28,
		height: 28,
		marginTop: 15,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(26, 25, 25)',
		borderStyle: "solid",
	},
	originalTenText: {
		marginTop: -8,
		marginRight: 259,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(50, 60, 71)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 50,
		letterSpacing: 0,
	},
	checkRowTwentyView: {
		height: 50,
		marginTop: -11,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	baseTenView: {
		width: 28,
		height: 28,
		marginTop: 15,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(26, 25, 25)',
		borderStyle: "solid",
	},
	originalElevenText: {
		marginTop: -8,
		marginRight: 95,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(50, 60, 71)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 50,
		letterSpacing: 0,
	},
	checkRowTwentyTwoView: {
		height: 50,
		marginTop: -11,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	baseElevenView: {
		width: 28,
		height: 28,
		marginTop: 15,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(26, 25, 25)',
		borderStyle: "solid",
	},
	originalTwelveText: {
		marginTop: -8,
		marginRight: 129,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(50, 60, 71)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 50,
		letterSpacing: 0,
	},
	checkRowTwentyThreeView: {
		width: 387,
		height: 33,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	checkRowTwentyFiveView: {
		width: 387,
		height: 33,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		alignSelf: "center",
	},
	checkRowTwentySevenView: {
		width: 387,
		height: 33,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		alignSelf: "flex-end",
	},
	checkRowTwentyFourView: {
		height: 50,
		marginTop: -11,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	baseTwelveView: {
		width: 28,
		height: 28,
		marginTop: 15,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(26, 25, 25)',
		borderStyle: "solid",
	},
	originalThirteenText: {
		marginTop: -8,
		marginRight: 186,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(50, 60, 71)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 50,
		letterSpacing: 0,
	},
	checkRowTwentySixView: {
		height: 50,
		marginTop: -11,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	baseThirteenView: {
		width: 28,
		height: 28,
		marginTop: 15,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(26, 25, 25)',
		borderStyle: "solid",
	},
	originalFourteenText: {
		marginTop: -8,
		marginRight: 92,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(50, 60, 71)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 50,
		letterSpacing: 0,
	},
	checkRowTwentyEightView: {
		height: 50,
		marginTop: -11,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	baseFourteenView: {
		width: 28,
		height: 28,
		marginTop: 15,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(26, 25, 25)',
		borderStyle: "solid",
	},
	originalFifteenText: {
		marginTop: -8,
		marginRight: 16,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(50, 60, 71)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 50,
		letterSpacing: 0,
	},
	checkRowTwentyNineView: {
		width: 387,
		height: 33,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	checkRowThirtyOneView: {
		width: 387,
		height: 33,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		alignSelf: "center",
	},
	checkRowThirtyThreeView: {
		width: 387,
		height: 33,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		alignSelf: "flex-end",
	},
	checkRowThirtyView: {
		height: 50,
		marginTop: -11,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	baseFifteenView: {
		width: 28,
		height: 28,
		marginTop: 15,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(26, 25, 25)',
		borderStyle: "solid",
	},
	originalSixteenText: {
		marginTop: -8,
		marginRight: 183,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(50, 60, 71)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 50,
		letterSpacing: 0,
	},
	checkRowThirtyTwoView: {
		height: 50,
		marginTop: -11,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	baseSixteenView: {
		width: 28,
		height: 28,
		marginTop: 15,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(26, 25, 25)',
		borderStyle: "solid",
	},
	originalSeventeenText: {
		marginTop: -8,
		marginRight: 242,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(50, 60, 71)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 50,
		letterSpacing: 0,
	},
	checkRowThirtyFourView: {
		height: 50,
		marginTop: -11,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	baseSeventeenView: {
		width: 28,
		height: 28,
		marginTop: 15,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(26, 25, 25)',
		borderStyle: "solid",
	},
	originalEighteenText: {
		marginTop: -8,
		marginRight: 42,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(50, 60, 71)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 50,
		letterSpacing: 0,
	},
	checkRowThirtyFiveView: {
		width: 387,
		height: 33,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	checkRowThirtySevenView: {
		width: 387,
		height: 33,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		alignSelf: "center",
	},
	checkRowThirtyNineView: {
		width: 387,
		height: 33,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		alignSelf: "flex-end",
	},
	checkRowThirtySixView: {
		height: 50,
		marginTop: -11,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	baseEighteenView: {
		width: 28,
		height: 28,
		marginTop: 15,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(26, 25, 25)',
		borderStyle: "solid",
	},
	originalNineteenText: {
		marginTop: -8,
		marginRight: 165,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(50, 60, 71)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 50,
		letterSpacing: 0,
	},
	checkRowThirtyEightView: {
		height: 50,
		marginTop: -11,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	baseNineteenView: {
		width: 28,
		height: 28,
		marginTop: 15,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(26, 25, 25)',
		borderStyle: "solid",
	},
	originalTwentyText: {
		marginTop: -8,
		marginRight: 192,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(50, 60, 71)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 50,
		letterSpacing: 0,
	},
	checkRowFortyView: {
		height: 50,
		marginTop: -11,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	baseTwentyView: {
		width: 28,
		height: 28,
		marginTop: 15,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(26, 25, 25)',
		borderStyle: "solid",
	},
	originalTwentyOneText: {
		marginTop: -8,
		marginRight: 227,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(50, 60, 71)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 50,
		letterSpacing: 0,
	},
	checkRowFortyOneView: {
		width: 387,
		height: 33,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	checkRowFortyThreeView: {
		width: 387,
		height: 33,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		alignSelf: "center",
	},
	checkRowFortyFiveView: {
		width: 387,
		height: 33,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		alignSelf: "flex-end",
	},
	checkRowFortyTwoView: {
		height: 50,
		marginTop: -11,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	baseTwentyOneView: {
		width: 28,
		height: 28,
		marginTop: 15,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(26, 25, 25)',
		borderStyle: "solid",
	},
	originalTwentyTwoText: {
		marginTop: -8,
		marginRight: 255,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(50, 60, 71)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 50,
		letterSpacing: 0,
	},
	checkRowFortyFourView: {
		height: 50,
		marginTop: -11,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	baseTwentyTwoView: {
		width: 28,
		height: 28,
		marginTop: 15,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(26, 25, 25)',
		borderStyle: "solid",
	},
	originalTwentyThreeText: {
		marginTop: -8,
		marginRight: 249,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(50, 60, 71)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 50,
		letterSpacing: 0,
	},
	checkRowFortySixView: {
		height: 50,
		marginTop: -11,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	baseTwentyThreeView: {
		width: 28,
		height: 28,
		marginTop: 15,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(26, 25, 25)',
		borderStyle: "solid",
	},
	originalTwentyFourText: {
		marginTop: -8,
		marginRight: 104,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(50, 60, 71)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 50,
		letterSpacing: 0,
	},
	checkRowFortySevenView: {
		width: 387,
		height: 33,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	checkRowFortyNineView: {
		width: 387,
		height: 33,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		alignSelf: "center",
	},
	checkRowFiftyOneView: {
		width: 387,
		height: 33,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		alignSelf: "flex-end",
	},
	checkRowFortyEightView: {
		height: 50,
		marginTop: -11,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	baseTwentyFourView: {
		width: 28,
		height: 28,
		marginTop: 15,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(26, 25, 25)',
		borderStyle: "solid",
	},
	originalTwentyFiveText: {
		marginTop: -8,
		marginRight: 144,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(50, 60, 71)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 50,
		letterSpacing: 0,
	},
	checkRowFiftyView: {
		height: 50,
		marginTop: -11,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	baseTwentyFiveView: {
		width: 28,
		height: 28,
		marginTop: 15,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(26, 25, 25)',
		borderStyle: "solid",
	},
	originalTwentySixText: {
		marginTop: -8,
		marginRight: 43,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(50, 60, 71)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 50,
		letterSpacing: 0,
	},
	checkRowFiftyTwoView: {
		height: 50,
		marginTop: -11,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	baseTwentySixView: {
		width: 28,
		height: 28,
		marginTop: 15,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(26, 25, 25)',
		borderStyle: "solid",
	},
	originalTwentySevenText: {
		marginTop: -8,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(50, 60, 71)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 50,
		letterSpacing: 0,
	},
	row1View: {
		height: 76,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	row2View: {
		height: 76,
		marginTop: 20,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	row3View: {
		height: 76,
		marginTop: 20,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	row4View: {
		width: 1264,
		height: 76,
		marginTop: 28,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	row5View: {
		height: 76,
		marginBottom: 34,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	row6View: {
		height: 76,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	fieldCopy3View: {
		width: 629,
		height: 76,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	fieldCopy4View: {
		width: 629,
		height: 76,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	baseTwentySevenView: {
		height: 53,
		marginTop: 23,
		backgroundColor: 'rgb(255, 255, 255)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(233, 239, 244)',
		borderStyle: "solid",
	},
	originalTwentyEightText: {
		marginLeft: 13,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(50, 60, 71)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 50,
		letterSpacing: 0,
	},
	baseTwentyEightView: {
		height: 53,
		marginTop: 23,
		backgroundColor: 'rgb(255, 255, 255)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(233, 239, 244)',
		borderStyle: "solid",
	},
	originalTwentyNineText: {
		marginLeft: 13,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(50, 60, 71)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 50,
		letterSpacing: 0,
	},
	fieldView: {
		width: 412,
		height: 76,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	fieldCopyView: {
		width: 412,
		height: 76,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		alignSelf: "center",
	},
	fieldCopy2View: {
		width: 412,
		height: 76,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		alignSelf: "flex-end",
	},
	baseTwentyNineView: {
		height: 53,
		marginTop: 23,
		marginRight: -1,
		backgroundColor: 'rgb(255, 255, 255)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(233, 239, 244)',
		borderStyle: "solid",
	},
	originalThirtyText: {
		marginLeft: 12,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(50, 60, 71)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 50,
		letterSpacing: 0,
	},
	baseThirtyView: {
		height: 53,
		marginTop: 23,
		marginRight: -1,
		backgroundColor: 'rgb(255, 255, 255)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(233, 239, 244)',
		borderStyle: "solid",
	},
	originalThirtyOneText: {
		marginLeft: 12,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(50, 60, 71)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 50,
		letterSpacing: 0,
	},
	baseThirtyOneView: {
		height: 53,
		marginTop: 23,
		marginRight: -1,
		backgroundColor: 'rgb(255, 255, 255)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(233, 239, 244)',
		borderStyle: "solid",
	},
	originalThirtyTwoText: {
		marginLeft: 12,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(50, 60, 71)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 50,
		letterSpacing: 0,
	},
	group3View: {
		width: 232,
		height: 50,
		marginTop: 20,
		marginRight: 144,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	fieldCopy2TwoView: {
		width: 412,
		height: 76,
		marginRight: 40,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	fieldTwoView: {
		width: 412,
		height: 76,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	group3CopyView: {
		width: 232,
		height: 50,
		marginTop: 20,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		alignSelf: "flex-end",
	},
	baseThirtyTwoView: {
		height: 53,
		marginTop: 23,
		marginRight: -1,
		backgroundColor: 'rgb(255, 255, 255)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(233, 239, 244)',
		borderStyle: "solid",
	},
	originalThirtyThreeText: {
		marginLeft: 12,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(50, 60, 71)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 50,
		letterSpacing: 0,
	},
	baseThirtyThreeView: {
		height: 53,
		marginTop: 23,
		marginRight: -1,
		backgroundColor: 'rgb(255, 255, 255)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(233, 239, 244)',
		borderStyle: "solid",
	},
	originalThirtyFourText: {
		marginLeft: 12,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(50, 60, 71)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 50,
		letterSpacing: 0,
	},
	baseThirtyFourView: {
		width: 28,
		height: 28,
		marginTop: 15,
		backgroundColor: 'rgb(255, 255, 255)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(26, 25, 25)',
		borderStyle: "solid",
	},
	originalThirtyFiveText: {
		marginTop: -8,
		marginRight: 136,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(50, 60, 71)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 50,
		letterSpacing: 0,
	},
	baseThirtyFiveView: {
		width: 28,
		height: 28,
		marginTop: 15,
		backgroundColor: 'rgb(255, 255, 255)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(26, 25, 25)',
		borderStyle: "solid",
	},
	originalThirtySixText: {
		marginTop: -8,
		marginRight: 105,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(50, 60, 71)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 50,
		letterSpacing: 0,
	},
	fieldThreeView: {
		width: 412,
		height: 76,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	fieldCopyTwoView: {
		width: 412,
		height: 76,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		alignSelf: "center",
	},
	fieldCopy2ThreeView: {
		width: 412,
		height: 76,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		alignSelf: "flex-end",
	},
	baseThirtySixView: {
		height: 53,
		marginTop: 23,
		marginRight: -1,
		backgroundColor: 'rgb(255, 255, 255)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(233, 239, 244)',
		borderStyle: "solid",
	},
	originalThirtySevenText: {
		marginLeft: 12,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(50, 60, 71)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 50,
		letterSpacing: 0,
	},
	baseThirtySevenView: {
		height: 53,
		marginTop: 23,
		marginRight: -1,
		backgroundColor: 'rgb(255, 255, 255)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(233, 239, 244)',
		borderStyle: "solid",
	},
	originalThirtyEightText: {
		marginLeft: 12,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(50, 60, 71)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 50,
		letterSpacing: 0,
	},
	baseThirtyEightView: {
		height: 53,
		marginTop: 23,
		marginRight: -1,
		backgroundColor: 'rgb(255, 255, 255)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(233, 239, 244)',
		borderStyle: "solid",
	},
	originalThirtyNineText: {
		marginLeft: 12,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(50, 60, 71)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 50,
		letterSpacing: 0,
	},
	baseThirtyNineView: {
		height: 53,
		marginTop: 23,
		backgroundColor: 'rgb(255, 255, 255)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(233, 239, 244)',
		borderStyle: "solid",
	},
	originalFortyText: {
		marginLeft: 13,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(50, 60, 71)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 50,
		letterSpacing: 0,
	},
	fieldFourView: {
		width: 629,
		height: 76,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	fieldCopyThreeView: {
		width: 629,
		height: 76,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	baseFortyView: {
		height: 53,
		marginTop: 23,
		backgroundColor: 'rgb(255, 255, 255)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(233, 239, 244)',
		borderStyle: "solid",
	},
	originalFortyOneText: {
		marginLeft: 13,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(50, 60, 71)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 50,
		letterSpacing: 0,
	},
	baseFortyOneView: {
		height: 53,
		marginTop: 23,
		backgroundColor: 'rgb(255, 255, 255)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(233, 239, 244)',
		borderStyle: "solid",
	},
	originalFortyTwoText: {
		marginLeft: 13,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(50, 60, 71)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 50,
		letterSpacing: 0,
	},
	rectangleView: {
		height: 252,
		backgroundColor: 'rgb(255, 255, 255)',
	},
	bottomView: {
		height: 83,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	divideCopy2View: {
		height: 4,
		backgroundColor: 'rgb(244, 248, 249)',
	},
	checkRowFiftyThreeView: {
		width: 1271,
		height: 55,
		marginLeft: 76,
		marginTop: 12,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	checkRowFiftyFourView: {
		width: 1271,
		height: 55,
		marginLeft: 76,
		marginTop: 25,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	baseFortyTwoView: {
		width: 28,
		height: 28,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(26, 25, 25)',
		borderStyle: "solid",
	},
	originalFortyThreeText: {
		marginLeft: 11,
		marginTop: -8,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(50, 60, 71)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 50,
		letterSpacing: 0,
	},
	dateView: {
		width: 241,
		height: 55,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	originalCopyText: {
		marginTop: -8,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(50, 60, 71)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 50,
		letterSpacing: 0,
	},
	baseFortyThreeView: {
		width: 165,
		height: 53,
		backgroundColor: 'rgb(255, 255, 255)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(233, 239, 244)',
		borderStyle: "solid",
		alignSelf: "flex-end",
	},
	originalFortyFourText: {
		marginTop: -8,
		marginRight: 24,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(50, 60, 71)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 50,
		letterSpacing: 0,
		alignSelf: "flex-end",
	},
	baseFortyFourView: {
		width: 28,
		height: 28,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(26, 25, 25)',
		borderStyle: "solid",
	},
	originalFortyFiveText: {
		marginLeft: 11,
		marginTop: -8,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(50, 60, 71)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 50,
		letterSpacing: 0,
	},
	dateTwoView: {
		width: 241,
		height: 55,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	dateThreeView: {
		height: 55,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	originalCopyTwoText: {
		marginTop: -8,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(50, 60, 71)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 50,
		letterSpacing: 0,
	},
	baseFortyFiveView: {
		width: 165,
		height: 53,
		backgroundColor: 'rgb(255, 255, 255)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(233, 239, 244)',
		borderStyle: "solid",
		alignSelf: "flex-end",
	},
	originalFortySixText: {
		marginTop: -8,
		marginRight: 24,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(50, 60, 71)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 50,
		letterSpacing: 0,
		alignSelf: "flex-end",
	},
	bottomTwoView: {
		height: 83,
		backgroundColor: 'rgb(244, 248, 249)',
		justifyContent: "center",
	},
	mainButtonCopyView: {
		width: 263,
		height: 50,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		alignSelf: "center",
		justifyContent: "center",
	},
	mainButtonView: {
		height: 50,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		borderRadius: 5,
		borderWidth: 2,
		borderColor: 'rgb(86, 166, 18)',
		borderStyle: "solid",
		justifyContent: "center",
	},
	doneText: {
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(86, 166, 18)',
		fontFamily: "Poppins-Regular",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0,
		alignSelf: "center",
	},
	divideView: {
		height: 4,
		backgroundColor: 'rgb(244, 248, 249)',
	},
	backImage: {
		width: 16,
		height: 29,
		marginLeft: 19,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		resizeMode: "center",
	},
	newCustomerText: {
		marginLeft: 41,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(51, 60, 72)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0,
	},
})
