//
//  Home.js
//  Project
//
//  Created by dc.
//  Copyright © 2018 UX Divergent. All rights reserved.
//

import React from "react"
import { StyleSheet, Image, View, Text } from "react-native"


export default class Home extends React.Component {

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
				style={styles.homeView}>
				<View
					pointerEvents="box-none"
					style={styles.navigationView}>
					<View
						pointerEvents="box-none"
						style={{
							flexDirection: "row",
							alignSelf: "stretch",
							alignItems: "center",
						}}>
						<View
							pointerEvents="box-none"
							style={styles.maskView}>
							<View
								pointerEvents="box-none"
								style={{
									flex: 1,
									flexDirection: "column",
									justifyContent: "flex-end",
								}}/>
						</View>
						<View
							pointerEvents="box-none">
							<View
								pointerEvents="box-none"
								style={styles.activeView}>
								<View
									pointerEvents="box-none"
									style={{
										flex: 1,
										flexDirection: "column",
										justifyContent: "flex-end",
									}}/>
							</View>
							<Text
								style={styles.todayText}>Today</Text>
						</View>
						<Text
							style={styles.yesterdayText}>Yesterday</Text>
						<Text
							style={styles.thisWeekText}>This Week</Text>
						<Text
							style={styles.allText}>All</Text>
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
								style={styles.searchView}>
								<View
									pointerEvents="box-none"
									style={{
										flexDirection: "row",
										alignSelf: "stretch",
										alignItems: "center",
									}}>
									<View
										pointerEvents="box-none"
										style={styles.viewTwoView}>
										<View
											pointerEvents="box-none"
											style={{
												flex: 1,
												flexDirection: "column",
												justifyContent: "flex-end",
											}}/>
									</View>
									<Text
										style={styles.searchText}>Search</Text>
									<View
										pointerEvents="box-none"
										style={{
											flexDirection: "row",
											flex: 1,
											justifyContent: "flex-end",
											alignItems: "center",
										}}>
										<Image
											source={require("./../../assets/images/group-2.png")}
											style={styles.groupTwoImage}/>
									</View>
								</View>
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
						<Image
							source={require("./../../assets/images/shape-2.png")}
							style={styles.shapeImage}/>
					</View>
				</View>
				<View
					pointerEvents="box-none"
					style={styles.viewView}>
					<View
						pointerEvents="box-none"
						style={styles.topBarView}>
						<View
							pointerEvents="box-none"
							style={{
								flexDirection: "row",
								alignSelf: "stretch",
							}}>
							<Text
								style={styles.clientsText}>Clients</Text>
							<Text
								style={styles.totalText}>4233 Total</Text>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={styles.tableView}>
						<View
							pointerEvents="box-none"
							style={styles.headerView}>
							<View
								pointerEvents="box-none"
								style={{
									flexDirection: "row",
									alignSelf: "stretch",
								}}>
								<Text
									style={styles.dateText}>DATE</Text>
								<Text
									style={styles.clientElevenText}>CLIENT</Text>
								<View
									pointerEvents="box-none"
									style={styles.iconArrowDownView}>
									<Image
										source={require("./../../assets/images/group-3.png")}
										style={styles.groupImage}/>
								</View>
								<Text
									style={styles.ageElevenText}>AGE</Text>
								<Text
									style={styles.genderElevenText}>GENDER</Text>
								<View
									pointerEvents="box-none"
									style={{
										flexDirection: "row",
										flex: 1,
										justifyContent: "flex-end",
									}}>
									<Text
										style={styles.notesElevenText}>NOTES</Text>
								</View>
							</View>
						</View>
						<View
							pointerEvents="box-none"
							style={styles.rowView}>
							<View
								pointerEvents="box-none"
								style={styles.separatorLineTwoView}>
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
									flex: 1,
									flexDirection: "column",
									justifyContent: "flex-end",
								}}>
								<View
									pointerEvents="box-none"
									style={styles.separatorLineView}>
									<View
										pointerEvents="box-none"
										style={{
											flex: 1,
											flexDirection: "column",
											justifyContent: "flex-end",
										}}/>
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
									style={{
										flexDirection: "row",
										alignSelf: "stretch",
										alignItems: "center",
									}}>
									<Text
										style={styles.lastUpdatedText}>9/12/2017</Text>
									<Text
										style={styles.clientText}>Cervantes, David</Text>
									<Text
										style={styles.ageText}>48</Text>
									<Text
										style={styles.genderText}>Male</Text>
									<View
										pointerEvents="box-none"
										style={{
											flexDirection: "row",
											flex: 1,
											justifyContent: "flex-end",
											alignItems: "center",
										}}>
										<Text
											style={styles.notesText}>None</Text>
										<Image
											source={require("./../../assets/images/icon-add.png")}
											style={styles.iconAddImage}/>
									</View>
								</View>
							</View>
						</View>
						<View
							pointerEvents="box-none"
							style={styles.rowCopyView}>
							<View
								pointerEvents="box-none"
								style={styles.separatorLineFourView}>
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
									flex: 1,
									flexDirection: "column",
									justifyContent: "flex-end",
								}}>
								<View
									pointerEvents="box-none"
									style={styles.separatorLineThreeView}>
									<View
										pointerEvents="box-none"
										style={{
											flex: 1,
											flexDirection: "column",
											justifyContent: "flex-end",
										}}/>
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
									style={{
										flexDirection: "row",
										alignSelf: "stretch",
										alignItems: "center",
									}}>
									<Text
										style={styles.lastUpdatedTwoText}>9/12/2017</Text>
									<Text
										style={styles.clientTwoText}>Cervantes, David</Text>
									<Text
										style={styles.ageTwoText}>48</Text>
									<Text
										style={styles.genderTwoText}>Male</Text>
									<View
										pointerEvents="box-none"
										style={{
											flexDirection: "row",
											flex: 1,
											justifyContent: "flex-end",
											alignItems: "center",
										}}>
										<Text
											style={styles.notesTwoText}>None</Text>
										<Image
											source={require("./../../assets/images/icon-add.png")}
											style={styles.iconAddTwoImage}/>
									</View>
								</View>
							</View>
						</View>
						<View
							pointerEvents="box-none"
							style={styles.rowCopy2View}>
							<View
								pointerEvents="box-none"
								style={styles.separatorLineSixView}>
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
									flex: 1,
									flexDirection: "column",
									justifyContent: "flex-end",
								}}>
								<View
									pointerEvents="box-none"
									style={styles.separatorLineFiveView}>
									<View
										pointerEvents="box-none"
										style={{
											flex: 1,
											flexDirection: "column",
											justifyContent: "flex-end",
										}}/>
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
									style={{
										flexDirection: "row",
										alignSelf: "stretch",
										alignItems: "center",
									}}>
									<Text
										style={styles.lastUpdatedThreeText}>9/12/2017</Text>
									<Text
										style={styles.clientThreeText}>Cervantes, David</Text>
									<Text
										style={styles.ageThreeText}>48</Text>
									<Text
										style={styles.genderThreeText}>Male</Text>
									<View
										pointerEvents="box-none"
										style={{
											flexDirection: "row",
											flex: 1,
											justifyContent: "flex-end",
											alignItems: "center",
										}}>
										<Text
											style={styles.notesThreeText}>None</Text>
										<Image
											source={require("./../../assets/images/icon-add.png")}
											style={styles.iconAddThreeImage}/>
									</View>
								</View>
							</View>
						</View>
						<View
							pointerEvents="box-none"
							style={styles.rowCopy3View}>
							<View
								pointerEvents="box-none"
								style={styles.separatorLineEightView}>
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
									flex: 1,
									flexDirection: "column",
									justifyContent: "flex-end",
								}}>
								<View
									pointerEvents="box-none"
									style={styles.separatorLineSevenView}>
									<View
										pointerEvents="box-none"
										style={{
											flex: 1,
											flexDirection: "column",
											justifyContent: "flex-end",
										}}/>
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
									style={{
										flexDirection: "row",
										alignSelf: "stretch",
										alignItems: "center",
									}}>
									<Text
										style={styles.lastUpdatedFourText}>9/12/2017</Text>
									<Text
										style={styles.clientFourText}>Cervantes, David</Text>
									<Text
										style={styles.ageFourText}>48</Text>
									<Text
										style={styles.genderFourText}>Male</Text>
									<View
										pointerEvents="box-none"
										style={{
											flexDirection: "row",
											flex: 1,
											justifyContent: "flex-end",
											alignItems: "center",
										}}>
										<Text
											style={styles.notesFourText}>None</Text>
										<Image
											source={require("./../../assets/images/icon-add.png")}
											style={styles.iconAddFourImage}/>
									</View>
								</View>
							</View>
						</View>
						<View
							pointerEvents="box-none"
							style={styles.rowCopy4View}>
							<View
								pointerEvents="box-none"
								style={styles.separatorLineTenView}>
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
									flex: 1,
									flexDirection: "column",
									justifyContent: "flex-end",
								}}>
								<View
									pointerEvents="box-none"
									style={styles.separatorLineNineView}>
									<View
										pointerEvents="box-none"
										style={{
											flex: 1,
											flexDirection: "column",
											justifyContent: "flex-end",
										}}/>
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
									style={{
										flexDirection: "row",
										alignSelf: "stretch",
										alignItems: "center",
									}}>
									<Text
										style={styles.lastUpdatedFiveText}>9/12/2017</Text>
									<Text
										style={styles.clientFiveText}>Cervantes, David</Text>
									<Text
										style={styles.ageFiveText}>48</Text>
									<Text
										style={styles.genderFiveText}>Male</Text>
									<View
										pointerEvents="box-none"
										style={{
											flexDirection: "row",
											flex: 1,
											justifyContent: "flex-end",
											alignItems: "center",
										}}>
										<Text
											style={styles.notesFiveText}>None</Text>
										<Image
											source={require("./../../assets/images/icon-add.png")}
											style={styles.iconAddFiveImage}/>
									</View>
								</View>
							</View>
						</View>
						<View
							pointerEvents="box-none"
							style={styles.rowCopy5View}>
							<View
								pointerEvents="box-none"
								style={styles.separatorLineTwelveView}>
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
									flex: 1,
									flexDirection: "column",
									justifyContent: "flex-end",
								}}>
								<View
									pointerEvents="box-none"
									style={styles.separatorLineElevenView}>
									<View
										pointerEvents="box-none"
										style={{
											flex: 1,
											flexDirection: "column",
											justifyContent: "flex-end",
										}}/>
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
									style={{
										flexDirection: "row",
										alignSelf: "stretch",
										alignItems: "center",
									}}>
									<Text
										style={styles.lastUpdatedSixText}>9/12/2017</Text>
									<Text
										style={styles.clientSixText}>Cervantes, David</Text>
									<Text
										style={styles.ageSixText}>48</Text>
									<Text
										style={styles.genderSixText}>Male</Text>
									<View
										pointerEvents="box-none"
										style={{
											flexDirection: "row",
											flex: 1,
											justifyContent: "flex-end",
											alignItems: "center",
										}}>
										<Text
											style={styles.notesSixText}>None</Text>
										<Image
											source={require("./../../assets/images/icon-add.png")}
											style={styles.iconAddSixImage}/>
									</View>
								</View>
							</View>
						</View>
						<View
							pointerEvents="box-none"
							style={styles.rowCopy6View}>
							<View
								pointerEvents="box-none"
								style={styles.separatorLineFourteenView}>
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
									flex: 1,
									flexDirection: "column",
									justifyContent: "flex-end",
								}}>
								<View
									pointerEvents="box-none"
									style={styles.separatorLineThirteenView}>
									<View
										pointerEvents="box-none"
										style={{
											flex: 1,
											flexDirection: "column",
											justifyContent: "flex-end",
										}}/>
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
									style={{
										flexDirection: "row",
										alignSelf: "stretch",
										alignItems: "center",
									}}>
									<Text
										style={styles.lastUpdatedSevenText}>9/12/2017</Text>
									<Text
										style={styles.clientSevenText}>Cervantes, David</Text>
									<Text
										style={styles.ageSevenText}>48</Text>
									<Text
										style={styles.genderSevenText}>Male</Text>
									<View
										pointerEvents="box-none"
										style={{
											flexDirection: "row",
											flex: 1,
											justifyContent: "flex-end",
											alignItems: "center",
										}}>
										<Text
											style={styles.notesSevenText}>None</Text>
										<Image
											source={require("./../../assets/images/icon-add.png")}
											style={styles.iconAddSevenImage}/>
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
								style={styles.rowCopy7View}>
								<View
									pointerEvents="box-none"
									style={styles.separatorLineSixteenView}>
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
										flex: 1,
										flexDirection: "column",
										justifyContent: "flex-end",
									}}>
									<View
										pointerEvents="box-none"
										style={styles.separatorLineFifteenView}>
										<View
											pointerEvents="box-none"
											style={{
												flex: 1,
												flexDirection: "column",
												justifyContent: "flex-end",
											}}/>
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
										style={{
											flexDirection: "row",
											alignSelf: "stretch",
											alignItems: "center",
										}}>
										<Text
											style={styles.lastUpdatedEightText}>9/12/2017</Text>
										<Text
											style={styles.clientEightText}>Cervantes, David</Text>
										<Text
											style={styles.ageEightText}>48</Text>
										<Text
											style={styles.genderEightText}>Male</Text>
										<View
											pointerEvents="box-none"
											style={{
												flexDirection: "row",
												flex: 1,
												justifyContent: "flex-end",
												alignItems: "center",
											}}>
											<Text
												style={styles.notesEightText}>None</Text>
											<Image
												source={require("./../../assets/images/icon-add.png")}
												style={styles.iconAddEightImage}/>
										</View>
									</View>
								</View>
							</View>
							<View
								pointerEvents="box-none"
								style={styles.rowCopy8View}>
								<View
									pointerEvents="box-none"
									style={styles.separatorLineEighteenView}>
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
										flex: 1,
										flexDirection: "column",
										justifyContent: "flex-end",
									}}>
									<View
										pointerEvents="box-none"
										style={styles.separatorLineSeventeenView}>
										<View
											pointerEvents="box-none"
											style={{
												flex: 1,
												flexDirection: "column",
												justifyContent: "flex-end",
											}}/>
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
										style={{
											flexDirection: "row",
											alignSelf: "stretch",
											alignItems: "center",
										}}>
										<Text
											style={styles.lastUpdatedNineText}>9/12/2017</Text>
										<Text
											style={styles.clientNineText}>Cervantes, David</Text>
										<Text
											style={styles.ageNineText}>48</Text>
										<Text
											style={styles.genderNineText}>Male</Text>
										<View
											pointerEvents="box-none"
											style={{
												flexDirection: "row",
												flex: 1,
												justifyContent: "flex-end",
												alignItems: "center",
											}}>
											<Text
												style={styles.notesNineText}>None</Text>
											<Image
												source={require("./../../assets/images/icon-add.png")}
												style={styles.iconAddNineImage}/>
										</View>
									</View>
								</View>
							</View>
							<View
								pointerEvents="box-none"
								style={styles.rowCopy9View}>
								<View
									pointerEvents="box-none"
									style={styles.separatorLineTwentyView}>
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
										flex: 1,
										flexDirection: "column",
										justifyContent: "flex-end",
									}}>
									<View
										pointerEvents="box-none"
										style={styles.separatorLineNineteenView}>
										<View
											pointerEvents="box-none"
											style={{
												flex: 1,
												flexDirection: "column",
												justifyContent: "flex-end",
											}}/>
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
										style={{
											flexDirection: "row",
											alignSelf: "stretch",
											alignItems: "center",
										}}>
										<Text
											style={styles.lastUpdatedTenText}>9/12/2017</Text>
										<Text
											style={styles.clientTenText}>Cervantes, David</Text>
										<Text
											style={styles.ageTenText}>48</Text>
										<Text
											style={styles.genderTenText}>Male</Text>
										<View
											pointerEvents="box-none"
											style={{
												flexDirection: "row",
												flex: 1,
												justifyContent: "flex-end",
												alignItems: "center",
											}}>
											<Text
												style={styles.notesTenText}>None</Text>
											<Image
												source={require("./../../assets/images/icon-add.png")}
												style={styles.iconAddTenImage}/>
										</View>
									</View>
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
						style={styles.bottomView}>
						<View
							pointerEvents="box-none"
							style={styles.bottomTwoView}>
							<View
								pointerEvents="box-none"
								style={styles.mainButtonCopyView}>
								<View
									pointerEvents="box-none"
									style={styles.mainButtonView}>
									<Text
										style={styles.doneText}>ADD NEW CUSTOMER</Text>
								</View>
							</View>
						</View>
					</View>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						width: "100%",
						height: "100%",
					}}>
					<View
						pointerEvents="box-none"
						style={styles.notificationView}>
						<View
							pointerEvents="box-none"
							style={styles.rectangleCopyView}>
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
							<Text
								style={styles.textText}>1</Text>
						</View>
					</View>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	homeView: {
		backgroundColor: 'rgb(244, 248, 249)',
		flex: 1,
	},
	navigationView: {
		height: 80,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	viewView: {
		height: 752,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	bottomView: {
		height: 83,
		marginBottom: -15,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	notificationView: {
		width: 56,
		height: 48,
		marginTop: 16,
		marginRight: 344,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		alignSelf: "flex-end",
	},
	topBarView: {
		height: 63,
		backgroundColor: 'rgb(255, 255, 255)',
		borderWidth: 3,
		borderColor: 'rgb(244, 248, 249)',
		borderStyle: "solid",
	},
	tableView: {
		height: 688,
		marginTop: 1,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	headerView: {
		height: 48,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	rowView: {
		height: 64,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	rowCopyView: {
		height: 64,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	rowCopy2View: {
		height: 64,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	rowCopy3View: {
		height: 64,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	rowCopy4View: {
		height: 64,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	rowCopy5View: {
		height: 64,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	rowCopy6View: {
		height: 64,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	rowCopy7View: {
		height: 64,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	rowCopy8View: {
		height: 64,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	rowCopy9View: {
		height: 64,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	separatorLineTwoView: {
		height: 2,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	separatorLineView: {
		height: 2,
		marginBottom: -1,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	lastUpdatedText: {
		marginLeft: 25,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(51, 51, 51)',
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0,
	},
	clientText: {
		marginLeft: 66,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(51, 51, 51)',
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0,
	},
	ageText: {
		marginLeft: 170,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(51, 51, 51)',
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0,
	},
	genderText: {
		marginLeft: 155,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(51, 51, 51)',
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0,
	},
	iconAddImage: {
		width: 24,
		height: 24,
		marginRight: 16,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		resizeMode: "center",
	},
	notesText: {
		marginRight: 439,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(51, 51, 51)',
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0,
	},
	separatorLineFourView: {
		height: 2,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	separatorLineThreeView: {
		height: 2,
		marginBottom: -1,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	lastUpdatedTwoText: {
		marginLeft: 25,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(51, 51, 51)',
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0,
	},
	clientTwoText: {
		marginLeft: 66,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(51, 51, 51)',
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0,
	},
	ageTwoText: {
		marginLeft: 170,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(51, 51, 51)',
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0,
	},
	genderTwoText: {
		marginLeft: 155,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(51, 51, 51)',
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0,
	},
	iconAddTwoImage: {
		width: 24,
		height: 24,
		marginRight: 16,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		resizeMode: "center",
	},
	notesTwoText: {
		marginRight: 439,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(51, 51, 51)',
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0,
	},
	separatorLineSixView: {
		height: 2,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	separatorLineFiveView: {
		height: 2,
		marginBottom: -1,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	lastUpdatedThreeText: {
		marginLeft: 25,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(51, 51, 51)',
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0,
	},
	clientThreeText: {
		marginLeft: 66,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(51, 51, 51)',
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0,
	},
	ageThreeText: {
		marginLeft: 170,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(51, 51, 51)',
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0,
	},
	genderThreeText: {
		marginLeft: 155,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(51, 51, 51)',
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0,
	},
	iconAddThreeImage: {
		width: 24,
		height: 24,
		marginRight: 16,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		resizeMode: "center",
	},
	notesThreeText: {
		marginRight: 439,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(51, 51, 51)',
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0,
	},
	separatorLineEightView: {
		height: 2,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	separatorLineSevenView: {
		height: 2,
		marginBottom: -1,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	lastUpdatedFourText: {
		marginLeft: 25,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(51, 51, 51)',
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0,
	},
	clientFourText: {
		marginLeft: 66,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(51, 51, 51)',
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0,
	},
	ageFourText: {
		marginLeft: 170,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(51, 51, 51)',
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0,
	},
	genderFourText: {
		marginLeft: 155,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(51, 51, 51)',
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0,
	},
	iconAddFourImage: {
		width: 24,
		height: 24,
		marginRight: 16,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		resizeMode: "center",
	},
	notesFourText: {
		marginRight: 439,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(51, 51, 51)',
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0,
	},
	separatorLineTenView: {
		height: 2,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	separatorLineNineView: {
		height: 2,
		marginBottom: -1,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	lastUpdatedFiveText: {
		marginLeft: 25,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(51, 51, 51)',
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0,
	},
	clientFiveText: {
		marginLeft: 66,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(51, 51, 51)',
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0,
	},
	ageFiveText: {
		marginLeft: 170,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(51, 51, 51)',
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0,
	},
	genderFiveText: {
		marginLeft: 155,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(51, 51, 51)',
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0,
	},
	iconAddFiveImage: {
		width: 24,
		height: 24,
		marginRight: 16,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		resizeMode: "center",
	},
	notesFiveText: {
		marginRight: 439,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(51, 51, 51)',
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0,
	},
	separatorLineTwelveView: {
		height: 2,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	separatorLineElevenView: {
		height: 2,
		marginBottom: -1,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	lastUpdatedSixText: {
		marginLeft: 25,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(51, 51, 51)',
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0,
	},
	clientSixText: {
		marginLeft: 66,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(51, 51, 51)',
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0,
	},
	ageSixText: {
		marginLeft: 170,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(51, 51, 51)',
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0,
	},
	genderSixText: {
		marginLeft: 155,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(51, 51, 51)',
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0,
	},
	iconAddSixImage: {
		width: 24,
		height: 24,
		marginRight: 16,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		resizeMode: "center",
	},
	notesSixText: {
		marginRight: 439,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(51, 51, 51)',
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0,
	},
	separatorLineFourteenView: {
		height: 2,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	separatorLineThirteenView: {
		height: 2,
		marginBottom: -1,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	lastUpdatedSevenText: {
		marginLeft: 25,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(51, 51, 51)',
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0,
	},
	clientSevenText: {
		marginLeft: 66,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(51, 51, 51)',
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0,
	},
	ageSevenText: {
		marginLeft: 170,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(51, 51, 51)',
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0,
	},
	genderSevenText: {
		marginLeft: 155,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(51, 51, 51)',
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0,
	},
	iconAddSevenImage: {
		width: 24,
		height: 24,
		marginRight: 16,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		resizeMode: "center",
	},
	notesSevenText: {
		marginRight: 439,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(51, 51, 51)',
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0,
	},
	separatorLineSixteenView: {
		height: 2,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	separatorLineFifteenView: {
		height: 2,
		marginBottom: -1,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	lastUpdatedEightText: {
		marginLeft: 25,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(51, 51, 51)',
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0,
	},
	clientEightText: {
		marginLeft: 66,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(51, 51, 51)',
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0,
	},
	ageEightText: {
		marginLeft: 170,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(51, 51, 51)',
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0,
	},
	genderEightText: {
		marginLeft: 155,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(51, 51, 51)',
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0,
	},
	iconAddEightImage: {
		width: 24,
		height: 24,
		marginRight: 16,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		resizeMode: "center",
	},
	notesEightText: {
		marginRight: 439,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(51, 51, 51)',
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0,
	},
	separatorLineEighteenView: {
		height: 2,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	separatorLineSeventeenView: {
		height: 2,
		marginBottom: -1,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	lastUpdatedNineText: {
		marginLeft: 25,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(51, 51, 51)',
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0,
	},
	clientNineText: {
		marginLeft: 66,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(51, 51, 51)',
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0,
	},
	ageNineText: {
		marginLeft: 170,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(51, 51, 51)',
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0,
	},
	genderNineText: {
		marginLeft: 155,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(51, 51, 51)',
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0,
	},
	iconAddNineImage: {
		width: 24,
		height: 24,
		marginRight: 16,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		resizeMode: "center",
	},
	notesNineText: {
		marginRight: 439,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(51, 51, 51)',
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0,
	},
	separatorLineTwentyView: {
		height: 2,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	separatorLineNineteenView: {
		height: 2,
		marginBottom: -1,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	lastUpdatedTenText: {
		marginLeft: 25,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(51, 51, 51)',
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0,
	},
	clientTenText: {
		marginLeft: 66,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(51, 51, 51)',
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0,
	},
	ageTenText: {
		marginLeft: 170,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(51, 51, 51)',
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0,
	},
	genderTenText: {
		marginLeft: 155,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(51, 51, 51)',
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0,
	},
	iconAddTenImage: {
		width: 24,
		height: 24,
		marginRight: 16,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		resizeMode: "center",
	},
	notesTenText: {
		marginRight: 439,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(51, 51, 51)',
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0,
	},
	dateText: {
		marginLeft: 25,
		marginTop: 7,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		opacity: 0.5,
		color: 'rgb(51, 51, 51)',
		fontFamily: "Poppins-SemiBold",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0,
	},
	clientElevenText: {
		marginLeft: 100,
		marginTop: 7,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(86, 166, 18)',
		fontFamily: "Poppins-SemiBold",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0,
	},
	iconArrowDownView: {
		width: 25,
		height: 24,
		marginLeft: 43,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	ageElevenText: {
		marginLeft: 167,
		marginTop: 7,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		opacity: 0.5,
		color: 'rgb(51, 51, 51)',
		fontFamily: "Poppins-SemiBold",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0,
	},
	genderElevenText: {
		marginLeft: 149,
		marginTop: 7,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		opacity: 0.5,
		color: 'rgb(51, 51, 51)',
		fontFamily: "Poppins-SemiBold",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0,
	},
	notesElevenText: {
		marginTop: 7,
		marginRight: 475,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		opacity: 0.5,
		color: 'rgb(51, 51, 51)',
		fontFamily: "Poppins-SemiBold",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0,
	},
	groupImage: {
		width: 8,
		height: 12,
		marginLeft: 8,
		marginRight: 9,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		resizeMode: "center",
	},
	clientsText: {
		marginLeft: 24,
		marginTop: 1,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(51, 51, 51)',
		fontFamily: "Poppins-Light",
		fontSize: 28,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 48,
		letterSpacing: 0,
	},
	totalText: {
		marginLeft: 13,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		opacity: 0.3,
		color: 'rgb(51, 51, 51)',
		fontFamily: "Poppins-Regular",
		fontSize: 21,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0,
		paddingTop: 6,
	},
	maskView: {
		width: 87,
		height: 80,
		backgroundColor: 'rgb(86, 166, 18)',
	},
	yesterdayText: {
		marginLeft: 68,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		opacity: 0.87,
		color: 'rgb(77, 70, 81)',
		fontFamily: "Poppins-Medium",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0,
	},
	thisWeekText: {
		marginLeft: 71,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		opacity: 0.87,
		color: 'rgb(77, 70, 81)',
		fontFamily: "Poppins-Medium",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0,
	},
	allText: {
		marginLeft: 83,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		opacity: 0.87,
		color: 'rgb(77, 70, 81)',
		fontFamily: "Poppins-Medium",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0,
	},
	searchView: {
		width: 321,
		height: 80,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	shapeImage: {
		width: 18,
		height: 12,
		marginLeft: 34,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		resizeMode: "center",
	},
	viewTwoView: {
		width: 1,
		height: 79,
		backgroundColor: 'rgb(234, 234, 234)',
	},
	searchText: {
		marginLeft: 20,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		opacity: 0.87,
		color: 'rgb(77, 70, 81)',
		fontFamily: "Poppins-Medium",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0,
	},
	groupTwoImage: {
		width: 80,
		height: 80,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		resizeMode: "center",
	},
	rectangleCopyView: {
		width: 21,
		height: 16,
		backgroundColor: 'rgb(235, 88, 88)',
		borderRadius: 2,
		alignSelf: "flex-end",
	},
	shapeTwoImage: {
		width: 15,
		height: 17,
		marginLeft: 17,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		resizeMode: "center",
	},
	textText: {
		marginTop: -1,
		marginRight: 7,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(255, 255, 255)',
		fontFamily: "OpenSans-Bold",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		lineHeight: 14,
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
})
