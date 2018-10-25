//
//  Client.js
//  Project
//
//  Created by dc.
//  Copyright © 2018 UX Divergent. All rights reserved.
//

import React from "react"
import { StyleSheet, Image, View, Text } from "react-native"


export default class Client extends React.Component {

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
				style={styles.clientView}>
				<View
					pointerEvents="box-none"
					style={styles.mainFilterView}>
					<View
						pointerEvents="box-none"
						style={styles.personalView}>
						<View
							pointerEvents="box-none"
							style={styles.personalTwoView}>
							<View
								pointerEvents="box-none"
								style={{
									flexDirection: "row",
									alignSelf: "stretch",
									alignItems: "center",
								}}>
								<View
									pointerEvents="box-none"
									style={styles.fieldTwelveView}>
									<Text
										style={styles.weightEightText}>AGE</Text>
									<Text
										style={styles.originalEightText}>48</Text>
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
										style={styles.fieldThirteenView}>
										<Text
											style={styles.weightNineText}>HEIGHT</Text>
										<Text
											style={styles.originalNineText}>5' 6"</Text>
									</View>
								</View>
							</View>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={styles.fieldTenView}>
						<View
							pointerEvents="box-none"
							style={styles.fieldElevenView}>
							<View
								pointerEvents="box-none"
								style={{
									flexDirection: "row",
									alignSelf: "stretch",
								}}>
								<Text
									style={styles.weightSevenText}>WEIGHT</Text>
								<View
									pointerEvents="box-none"
									style={{
										flexDirection: "row",
										flex: 1,
										justifyContent: "flex-end",
									}}>
									<Text
										style={styles.currentSixText}>194</Text>
									<Text
										style={styles.lbsSixText}>LBS</Text>
								</View>
							</View>
							<Text
								style={styles.originalSevenText}>194</Text>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={styles.fieldEightView}>
						<View
							pointerEvents="box-none"
							style={styles.fieldNineView}>
							<View
								pointerEvents="box-none"
								style={{
									flexDirection: "row",
									alignSelf: "stretch",
								}}>
								<Text
									style={styles.weightSixText}>BP</Text>
								<View
									pointerEvents="box-none"
									style={{
										flexDirection: "row",
										flex: 1,
										justifyContent: "flex-end",
									}}>
									<Text
										style={styles.currentFiveText}>100/80</Text>
									<Text
										style={styles.lbsFiveText}> </Text>
								</View>
							</View>
							<Text
								style={styles.originalSixText}>120/80</Text>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={styles.fieldSixView}>
						<View
							pointerEvents="box-none"
							style={styles.fieldSevenView}>
							<View
								pointerEvents="box-none"
								style={{
									flexDirection: "row",
									alignSelf: "stretch",
								}}>
								<Text
									style={styles.weightFiveText}>PULSE</Text>
								<View
									pointerEvents="box-none"
									style={{
										flexDirection: "row",
										flex: 1,
										justifyContent: "flex-end",
									}}>
									<Text
										style={styles.currentFourText}>120</Text>
									<Text
										style={styles.lbsFourText}> </Text>
								</View>
							</View>
							<Text
								style={styles.originalFiveText}>120</Text>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={styles.fieldFourView}>
						<View
							pointerEvents="box-none"
							style={styles.fieldFiveView}>
							<View
								pointerEvents="box-none"
								style={{
									flexDirection: "row",
									alignSelf: "stretch",
								}}>
								<Text
									style={styles.weightFourText}>O2 SAT</Text>
								<View
									pointerEvents="box-none"
									style={{
										flexDirection: "row",
										flex: 1,
										justifyContent: "flex-end",
									}}>
									<Text
										style={styles.currentThreeText}>99</Text>
									<Text
										style={styles.lbsThreeText}> </Text>
								</View>
							</View>
							<Text
								style={styles.originalFourText}>99</Text>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={styles.fieldTwoView}>
						<View
							pointerEvents="box-none"
							style={styles.fieldThreeView}>
							<Text
								style={styles.currentTwoText}> </Text>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									width: "100%",
									height: "100%",
								}}>
								<View
									pointerEvents="box-none"
									style={{
										flexDirection: "row",
										alignSelf: "stretch",
									}}>
									<Text
										style={styles.weightThreeText}>PHYSICIAN</Text>
									<View
										pointerEvents="box-none"
										style={{
											flexDirection: "row",
											flex: 1,
											justifyContent: "flex-end",
										}}>
										<Text
											style={styles.lbsTwoText}> </Text>
									</View>
								</View>
								<Text
									style={styles.originalThreeText}>DR. HAM</Text>
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
							style={styles.fieldView}>
							<Text
								style={styles.currentText}> </Text>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									width: "100%",
									height: "100%",
								}}>
								<View
									pointerEvents="box-none"
									style={{
										flexDirection: "row",
										alignSelf: "stretch",
									}}>
									<Text
										style={styles.weightTwoText}>NOTES</Text>
									<View
										pointerEvents="box-none"
										style={{
											flexDirection: "row",
											flex: 1,
											justifyContent: "flex-end",
										}}>
										<Text
											style={styles.lbsText}> </Text>
									</View>
								</View>
								<Text
									style={styles.originalTwoText}>Nothing to document</Text>
							</View>
						</View>
						<View
							pointerEvents="box-none"
							style={styles.signView}>
							<View
								pointerEvents="box-none"
								style={styles.signTwoView}>
								<View
									pointerEvents="box-none"
									style={{
										flexDirection: "row",
										alignSelf: "stretch",
										alignItems: "center",
									}}>
									<View
										pointerEvents="box-none"
										style={styles.baseView}>
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
											alignItems: "center",
										}}>
										<Text
											style={styles.originalText}>Consent form</Text>
									</View>
								</View>
							</View>
						</View>
						<View
							pointerEvents="box-none"
							style={styles.minorBtnView}>
							<View
								pointerEvents="box-none"
								style={styles.minorView}>
								<Text
									style={styles.saveText}>SAVE</Text>
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
						style={styles.headerView}>
						<View
							pointerEvents="box-none"
							style={styles.whiteView}>
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
								style={styles.divideTwoView}>
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
							}}>
							<View
								pointerEvents="box-none"
								style={{
									flexDirection: "row",
									alignSelf: "stretch",
								}}>
								<Image
									source={require("./../../assets/images/back.png")}
									style={styles.backImage}/>
								<Image
									source={require("./../../assets/images/oval-2.png")}
									style={styles.oval2Image}/>
								<Text
									style={styles.davidCervantes94Text}>David Cervantes  </Text>
							</View>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={styles.productsView}>
						<View
							pointerEvents="box-none"
							style={{
								flexDirection: "row",
								alignSelf: "stretch",
							}}>
							<Text
								style={styles.availableShotsText}>Available Shots</Text>
							<View
								pointerEvents="box-none"
								style={{
									flexDirection: "row",
									flex: 1,
									justifyContent: "flex-end",
								}}>
								<Text
									style={styles.remainingText}>Remaining</Text>
							</View>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								flexDirection: "row",
								alignSelf: "stretch",
							}}>
							<View
								pointerEvents="box-none"
								style={styles.foldersView}>
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
								<View
									pointerEvents="box-none"
									style={styles.rowThreeView}>
									<View
										pointerEvents="box-none"
										style={styles.rowFourView}>
										<View
											pointerEvents="box-none"
											style={styles.lineTwoView}>
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
												<Text
													style={styles.lipoExtremeTwoText}>Lipo Extreme</Text>
												<View
													pointerEvents="box-none"
													style={styles.billsTwoView}>
													<View
														pointerEvents="box-none"
														style={{
															flexDirection: "row",
															justifyContent: "center",
															alignSelf: "stretch",
															alignItems: "center",
														}}/>
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
															style={styles.pillBtnEighteenView}>
															<View
																pointerEvents="box-none"
																style={styles.pillBtnOffFortySixView}>
																<View
																	pointerEvents="box-none"
																	style={styles.pillBtnOffFortySevenView}>
																	<Text
																		style={styles.textThirtyOneText}>F</Text>
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
														<View
															pointerEvents="box-none"
															style={{
																flexDirection: "row",
																alignSelf: "stretch",
																alignItems: "center",
															}}>
															<View
																pointerEvents="box-none"
																style={styles.pillBtnTwentyFourView}>
																<View
																	pointerEvents="box-none"
																	style={styles.pillBtnOffFiftyEightView}>
																	<View
																		pointerEvents="box-none"
																		style={styles.pillBtnOffFiftyNineView}>
																		<Text
																			style={styles.textThirtySevenText}>F</Text>
																	</View>
																</View>
															</View>
															<View
																pointerEvents="box-none"
																style={styles.pillBtnTwentyThreeView}>
																<View
																	pointerEvents="box-none"
																	style={styles.pillBtnOffFiftySixView}>
																	<View
																		pointerEvents="box-none"
																		style={styles.pillBtnOffFiftySevenView}>
																		<Text
																			style={styles.textThirtySixText}>F</Text>
																	</View>
																</View>
															</View>
															<View
																pointerEvents="box-none"
																style={styles.pillBtnTwentyTwoView}>
																<View
																	pointerEvents="box-none"
																	style={styles.pillBtnOffFiftyFourView}>
																	<View
																		pointerEvents="box-none"
																		style={styles.pillBtnOffFiftyFiveView}>
																		<Text
																			style={styles.textThirtyFiveText}>F</Text>
																	</View>
																</View>
															</View>
															<View
																pointerEvents="box-none"
																style={styles.pillBtnTwentyOneView}>
																<View
																	pointerEvents="box-none"
																	style={styles.pillBtnOffFiftyTwoView}>
																	<View
																		pointerEvents="box-none"
																		style={styles.pillBtnOffFiftyThreeView}>
																		<Text
																			style={styles.textThirtyFourText}>F</Text>
																	</View>
																</View>
															</View>
															<View
																pointerEvents="box-none"
																style={styles.pillBtnTwentyView}>
																<View
																	pointerEvents="box-none"
																	style={styles.pillBtnOffFiftyView}>
																	<View
																		pointerEvents="box-none"
																		style={styles.pillBtnOffFiftyOneView}>
																		<Text
																			style={styles.textThirtyThreeText}>F</Text>
																	</View>
																</View>
															</View>
															<View
																pointerEvents="box-none"
																style={styles.pillBtnNineteenView}>
																<View
																	pointerEvents="box-none"
																	style={styles.pillBtnOffFortyEightView}>
																	<View
																		pointerEvents="box-none"
																		style={styles.pillBtnOffFortyNineView}>
																		<Text
																			style={styles.textThirtyTwoText}>F</Text>
																	</View>
																</View>
															</View>
														</View>
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
													<Text
														style={styles.textThirtyEightText}>11</Text>
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
								style={styles.rowView}>
								<View
									pointerEvents="box-none"
									style={styles.rowTwoView}>
									<View
										pointerEvents="box-none"
										style={{
											flexDirection: "row",
											alignSelf: "stretch",
											alignItems: "center",
										}}>
										<Text
											style={styles.lipoExtremeText}>Glutathione</Text>
										<View
											pointerEvents="box-none"
											style={styles.billsView}>
											<View
												pointerEvents="box-none"
												style={{
													flexDirection: "row",
													justifyContent: "center",
													alignSelf: "stretch",
													alignItems: "center",
												}}/>
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
													style={styles.pillBtnFiveView}>
													<View
														pointerEvents="box-none"
														style={styles.pillBtnOffThirteenView}>
														<View
															pointerEvents="box-none"
															style={styles.pillBtnOffFourteenView}>
															<Text
																style={styles.textTenText}>F</Text>
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
															style={styles.pillBtnOnFiveView}>
															<View
																pointerEvents="box-none"
																style={styles.pillBtnOffFifteenView}>
																<Text
																	style={styles.textElevenText}>F</Text>
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
												<View
													pointerEvents="box-none"
													style={{
														flexDirection: "row",
														alignSelf: "stretch",
														alignItems: "center",
													}}>
													<View
														pointerEvents="box-none"
														style={styles.pillBtnElevenView}>
														<View
															pointerEvents="box-none"
															style={styles.pillBtnOffThirtyOneView}>
															<View
																pointerEvents="box-none"
																style={styles.pillBtnOffThirtyTwoView}>
																<Text
																	style={styles.textTwentyTwoText}>F</Text>
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
																style={styles.pillBtnOnElevenView}>
																<View
																	pointerEvents="box-none"
																	style={styles.pillBtnOffThirtyThreeView}>
																	<Text
																		style={styles.textTwentyThreeText}>F</Text>
																</View>
															</View>
														</View>
													</View>
													<View
														pointerEvents="box-none"
														style={styles.pillBtnTenView}>
														<View
															pointerEvents="box-none"
															style={styles.pillBtnOffTwentyEightView}>
															<View
																pointerEvents="box-none"
																style={styles.pillBtnOffTwentyNineView}>
																<Text
																	style={styles.textTwentyText}>F</Text>
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
																style={styles.pillBtnOnTenView}>
																<View
																	pointerEvents="box-none"
																	style={styles.pillBtnOffThirtyView}>
																	<Text
																		style={styles.textTwentyOneText}>F</Text>
																</View>
															</View>
														</View>
													</View>
													<View
														pointerEvents="box-none"
														style={styles.pillBtnNineView}>
														<View
															pointerEvents="box-none"
															style={styles.pillBtnOffTwentyFiveView}>
															<View
																pointerEvents="box-none"
																style={styles.pillBtnOffTwentySixView}>
																<Text
																	style={styles.textEighteenText}>F</Text>
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
																style={styles.pillBtnOnNineView}>
																<View
																	pointerEvents="box-none"
																	style={styles.pillBtnOffTwentySevenView}>
																	<Text
																		style={styles.textNineteenText}>F</Text>
																</View>
															</View>
														</View>
													</View>
													<View
														pointerEvents="box-none"
														style={styles.pillBtnEightView}>
														<View
															pointerEvents="box-none"
															style={styles.pillBtnOffTwentyTwoView}>
															<View
																pointerEvents="box-none"
																style={styles.pillBtnOffTwentyThreeView}>
																<Text
																	style={styles.textSixteenText}>F</Text>
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
																style={styles.pillBtnOnEightView}>
																<View
																	pointerEvents="box-none"
																	style={styles.pillBtnOffTwentyFourView}>
																	<Text
																		style={styles.textSeventeenText}>F</Text>
																</View>
															</View>
														</View>
													</View>
													<View
														pointerEvents="box-none"
														style={styles.pillBtnSevenView}>
														<View
															pointerEvents="box-none"
															style={styles.pillBtnOffNineteenView}>
															<View
																pointerEvents="box-none"
																style={styles.pillBtnOffTwentyView}>
																<Text
																	style={styles.textFourteenText}>F</Text>
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
																style={styles.pillBtnOnSevenView}>
																<View
																	pointerEvents="box-none"
																	style={styles.pillBtnOffTwentyOneView}>
																	<Text
																		style={styles.textFifteenText}>F</Text>
																</View>
															</View>
														</View>
													</View>
													<View
														pointerEvents="box-none"
														style={styles.pillBtnSixView}>
														<View
															pointerEvents="box-none"
															style={styles.pillBtnOffSixteenView}>
															<View
																pointerEvents="box-none"
																style={styles.pillBtnOffSeventeenView}>
																<Text
																	style={styles.textTwelveText}>F</Text>
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
																style={styles.pillBtnOnSixView}>
																<View
																	pointerEvents="box-none"
																	style={styles.pillBtnOffEighteenView}>
																	<Text
																		style={styles.textThirteenText}>F</Text>
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
												flexDirection: "row",
												flex: 1,
												justifyContent: "flex-end",
												alignItems: "center",
											}}>
											<Text
												style={styles.textTwentyFourText}>10</Text>
										</View>
									</View>
								</View>
							</View>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={styles.tableView}>
						<View
							pointerEvents="box-none"
							style={{
								flexDirection: "row",
								alignSelf: "stretch",
							}}>
							<Text
								style={styles.dateText}>DATE</Text>
							<Text
								style={styles.typeText}>TYPE</Text>
							<Text
								style={styles.locationText}>LOCATION</Text>
							<Text
								style={styles.weightText}>WEIGHT</Text>
							<Text
								style={styles.bpText}>BP</Text>
							<View
								pointerEvents="box-none"
								style={{
									flexDirection: "row",
									flex: 1,
									justifyContent: "flex-end",
								}}>
								<Text
									style={styles.pulseText}>PULSE</Text>
								<Text
									style={styles.textText}>02</Text>
								<Text
									style={styles.notesText}>NOTES</Text>
								<Text
									style={styles.clientInitialsText}>CLIENT INITIALS</Text>
								<Text
									style={styles.nurseInitialsText}>NURSE INITIALS</Text>
							</View>
						</View>
						<View
							pointerEvents="box-none"
							style={styles.lineView}>
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
								style={styles.mainButtonCopyView}>
								<View
									pointerEvents="box-none"
									style={styles.mainButtonView}>
									<Text
										style={styles.doneText}>DONE</Text>
								</View>
							</View>
						</View>
					</View>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	clientView: {
		backgroundColor: 'rgb(244, 248, 249)',
		flex: 1,
	},
	mainFilterView: {
		width: 304,
		height: 901,
		marginLeft: -1,
		backgroundColor: 'rgb(255, 255, 255)',
		shadowColor: 'rgba(0, 0, 0, 0.03)',
		shadowRadius: 4,
		shadowOpacity: 1,
	},
	headerView: {
		height: 88,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	productsView: {
		width: 1112,
		height: 220,
		marginTop: 2,
		marginRight: 12,
		backgroundColor: 'rgb(255, 255, 255)',
		borderRadius: 6,
		shadowColor: 'rgba(0, 0, 0, 0.03)',
		shadowRadius: 4,
		shadowOpacity: 1,
		alignSelf: "flex-end",
	},
	tableView: {
		width: 1112,
		height: 643,
		marginTop: 12,
		marginRight: 12,
		backgroundColor: 'rgb(255, 255, 255)',
		borderRadius: 6,
		shadowColor: 'rgba(0, 0, 0, 0.03)',
		shadowRadius: 4,
		shadowOpacity: 1,
		alignSelf: "flex-end",
	},
	dateText: {
		marginLeft: 22,
		marginTop: 4,
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
	typeText: {
		marginLeft: 73,
		marginTop: 4,
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
	locationText: {
		marginLeft: 124,
		marginTop: 4,
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
	weightText: {
		marginLeft: 59,
		marginTop: 4,
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
	bpText: {
		marginLeft: 33,
		marginTop: 4,
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
	nurseInitialsText: {
		marginTop: 4,
		marginRight: 16,
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
	clientInitialsText: {
		marginTop: 4,
		marginRight: 16,
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
	notesText: {
		marginTop: 4,
		marginRight: 147,
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
	textText: {
		marginTop: 4,
		marginRight: 89,
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
	pulseText: {
		marginTop: 4,
		marginRight: 37,
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
	lineView: {
		height: 3,
		marginTop: 8,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	mainButtonCopyView: {
		width: 263,
		height: 50,
		marginRight: 387,
		marginBottom: 77,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		alignSelf: "flex-end",
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
	group3View: {
		width: 940,
		height: 74,
		marginRight: 46,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		alignSelf: "flex-end",
	},
	divideView: {
		height: 2,
		backgroundColor: 'rgb(244, 248, 249)',
	},
	nameText: {
		marginLeft: 22,
		marginTop: 6,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(51, 51, 51)',
		fontFamily: "Poppins-Regular",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0,
	},
	group3CopyView: {
		height: 43,
		marginTop: 1,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	nameCopyText: {
		marginTop: 6,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(51, 51, 51)',
		fontFamily: "Poppins-Regular",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0,
	},
	groupImage: {
		width: 8,
		height: 5,
		marginLeft: 79,
		marginTop: 21,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		resizeMode: "center",
	},
	companyCopy3Text: {
		marginLeft: 109,
		marginTop: 6,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(139, 145, 147)',
		fontFamily: "Poppins-Regular",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0,
	},
	companyCopy4Text: {
		marginLeft: 61,
		marginTop: 6,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(139, 145, 147)',
		fontFamily: "Poppins-Regular",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0,
	},
	companyCopy5Text: {
		marginLeft: 26,
		marginTop: 6,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(139, 145, 147)',
		fontFamily: "Poppins-Regular",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0,
	},
	boxUncheckedImage: {
		width: 27,
		height: 27,
		marginTop: 20,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		resizeMode: "center",
	},
	boxUncheckedTwoImage: {
		width: 27,
		height: 27,
		marginTop: 20,
		marginRight: 77,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		resizeMode: "center",
	},
	divideCopy3View: {
		width: 2,
		height: 74,
		marginRight: 44,
		backgroundColor: 'rgb(244, 248, 249)',
	},
	companyCopyText: {
		marginTop: 6,
		marginRight: 138,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(51, 51, 51)',
		fontFamily: "Poppins-Regular",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0,
	},
	companyCopy6Text: {
		marginTop: 6,
		marginRight: 90,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(139, 145, 147)',
		fontFamily: "Poppins-Regular",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0,
	},
	nameCopyTwoText: {
		marginLeft: 126,
		marginTop: -4,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(51, 51, 51)',
		fontFamily: "Poppins-Regular",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0,
	},
	divideCopy2View: {
		height: 2,
		backgroundColor: 'rgb(244, 248, 249)',
	},
	availableShotsText: {
		marginLeft: 22,
		marginTop: 14,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(51, 60, 72)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0,
	},
	remainingText: {
		marginTop: 14,
		marginRight: 32,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(51, 60, 72)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		letterSpacing: 0,
	},
	foldersView: {
		width: 178,
		height: 33,
		marginLeft: 30,
		marginTop: 9,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	rowThreeView: {
		width: 1090,
		height: 83,
		marginTop: 7,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	rowView: {
		width: 1090,
		height: 83,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		alignSelf: "flex-end",
		justifyContent: "center",
	},
	rowTwoView: {
		height: 83,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	lipoExtremeText: {
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(51, 60, 72)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0,
	},
	billsView: {
		width: 616,
		height: 40,
		marginLeft: 94,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	textTwentyFourText: {
		marginRight: 32,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(51, 60, 72)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		letterSpacing: 0,
	},
	pillBtnView: {
		width: 40,
		height: 40,
		marginRight: 96,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	pillBtnTwoView: {
		width: 40,
		height: 40,
		marginRight: 8,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	pillBtnThreeView: {
		width: 40,
		height: 40,
		marginRight: 8,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	pillBtnFourView: {
		width: 40,
		height: 40,
		marginRight: 8,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	pillBtnFiveView: {
		width: 40,
		height: 40,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		alignSelf: "center",
		justifyContent: "center",
	},
	pillBtnElevenView: {
		width: 40,
		height: 40,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	pillBtnTenView: {
		width: 40,
		height: 40,
		marginLeft: 8,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	pillBtnNineView: {
		width: 40,
		height: 40,
		marginLeft: 8,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	pillBtnEightView: {
		width: 40,
		height: 40,
		marginLeft: 8,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	pillBtnSevenView: {
		width: 40,
		height: 40,
		marginLeft: 8,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	pillBtnSixView: {
		width: 40,
		height: 40,
		marginLeft: 8,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	pillBtnOffView: {
		height: 40,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	pillBtnOnView: {
		height: 40,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	pillBtnOffTwoView: {
		height: 40,
		backgroundColor: 'rgb(204, 207, 207)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(139, 145, 147)',
		borderStyle: "solid",
		justifyContent: "center",
	},
	textTwoText: {
		marginLeft: 16,
		marginRight: 15,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(255, 255, 255)',
		fontFamily: "Poppins-Medium",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0,
	},
	pillBtnOffThreeView: {
		height: 40,
		backgroundColor: 'rgb(204, 207, 207)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(139, 145, 147)',
		borderStyle: "solid",
		justifyContent: "center",
	},
	textThreeText: {
		marginLeft: 16,
		marginRight: 15,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(255, 255, 255)',
		fontFamily: "Poppins-Medium",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0,
	},
	pillBtnOffFourView: {
		height: 40,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	pillBtnOnTwoView: {
		height: 40,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	pillBtnOffFiveView: {
		height: 40,
		backgroundColor: 'rgb(204, 207, 207)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(139, 145, 147)',
		borderStyle: "solid",
		justifyContent: "center",
	},
	textFourText: {
		marginLeft: 16,
		marginRight: 15,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(255, 255, 255)',
		fontFamily: "Poppins-Medium",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0,
	},
	pillBtnOffSixView: {
		height: 40,
		backgroundColor: 'rgb(204, 207, 207)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(139, 145, 147)',
		borderStyle: "solid",
		justifyContent: "center",
	},
	textFiveText: {
		marginLeft: 16,
		marginRight: 15,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(255, 255, 255)',
		fontFamily: "Poppins-Medium",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0,
	},
	pillBtnOffSevenView: {
		height: 40,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	pillBtnOnThreeView: {
		height: 40,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	pillBtnOffEightView: {
		height: 40,
		backgroundColor: 'rgb(204, 207, 207)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(139, 145, 147)',
		borderStyle: "solid",
		justifyContent: "center",
	},
	textSixText: {
		marginLeft: 16,
		marginRight: 15,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(255, 255, 255)',
		fontFamily: "Poppins-Medium",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0,
	},
	pillBtnOffNineView: {
		height: 40,
		backgroundColor: 'rgb(204, 207, 207)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(139, 145, 147)',
		borderStyle: "solid",
		justifyContent: "center",
	},
	textSevenText: {
		marginLeft: 16,
		marginRight: 15,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(255, 255, 255)',
		fontFamily: "Poppins-Medium",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0,
	},
	pillBtnOffTenView: {
		height: 40,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	pillBtnOnFourView: {
		height: 40,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	pillBtnOffElevenView: {
		height: 40,
		backgroundColor: 'rgb(204, 207, 207)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(139, 145, 147)',
		borderStyle: "solid",
		justifyContent: "center",
	},
	textEightText: {
		marginLeft: 16,
		marginRight: 15,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(255, 255, 255)',
		fontFamily: "Poppins-Medium",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0,
	},
	pillBtnOffTwelveView: {
		height: 40,
		backgroundColor: 'rgb(204, 207, 207)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(139, 145, 147)',
		borderStyle: "solid",
		justifyContent: "center",
	},
	textNineText: {
		marginLeft: 16,
		marginRight: 15,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(255, 255, 255)',
		fontFamily: "Poppins-Medium",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0,
	},
	pillBtnOffThirteenView: {
		height: 40,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	pillBtnOnFiveView: {
		height: 40,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	pillBtnOffFourteenView: {
		height: 40,
		backgroundColor: 'rgb(204, 207, 207)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(139, 145, 147)',
		borderStyle: "solid",
		justifyContent: "center",
	},
	textTenText: {
		marginLeft: 16,
		marginRight: 15,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(255, 255, 255)',
		fontFamily: "Poppins-Medium",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0,
	},
	pillBtnOffFifteenView: {
		height: 40,
		backgroundColor: 'rgb(204, 207, 207)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(139, 145, 147)',
		borderStyle: "solid",
		justifyContent: "center",
	},
	textElevenText: {
		marginLeft: 16,
		marginRight: 15,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(255, 255, 255)',
		fontFamily: "Poppins-Medium",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0,
	},
	pillBtnOffSixteenView: {
		height: 40,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	pillBtnOnSixView: {
		height: 40,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	pillBtnOffSeventeenView: {
		height: 40,
		backgroundColor: 'rgb(204, 207, 207)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(139, 145, 147)',
		borderStyle: "solid",
		justifyContent: "center",
	},
	textTwelveText: {
		marginLeft: 16,
		marginRight: 15,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(255, 255, 255)',
		fontFamily: "Poppins-Medium",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0,
	},
	pillBtnOffEighteenView: {
		height: 40,
		backgroundColor: 'rgb(204, 207, 207)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(139, 145, 147)',
		borderStyle: "solid",
		justifyContent: "center",
	},
	textThirteenText: {
		marginLeft: 16,
		marginRight: 15,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(255, 255, 255)',
		fontFamily: "Poppins-Medium",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0,
	},
	pillBtnOffNineteenView: {
		height: 40,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	pillBtnOnSevenView: {
		height: 40,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	pillBtnOffTwentyView: {
		height: 40,
		backgroundColor: 'rgb(204, 207, 207)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(139, 145, 147)',
		borderStyle: "solid",
		justifyContent: "center",
	},
	textFourteenText: {
		marginLeft: 16,
		marginRight: 15,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(255, 255, 255)',
		fontFamily: "Poppins-Medium",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0,
	},
	pillBtnOffTwentyOneView: {
		height: 40,
		backgroundColor: 'rgb(204, 207, 207)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(139, 145, 147)',
		borderStyle: "solid",
		justifyContent: "center",
	},
	textFifteenText: {
		marginLeft: 16,
		marginRight: 15,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(255, 255, 255)',
		fontFamily: "Poppins-Medium",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0,
	},
	pillBtnOffTwentyTwoView: {
		height: 40,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	pillBtnOnEightView: {
		height: 40,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	pillBtnOffTwentyThreeView: {
		height: 40,
		backgroundColor: 'rgb(204, 207, 207)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(139, 145, 147)',
		borderStyle: "solid",
		justifyContent: "center",
	},
	textSixteenText: {
		marginLeft: 16,
		marginRight: 15,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(255, 255, 255)',
		fontFamily: "Poppins-Medium",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0,
	},
	pillBtnOffTwentyFourView: {
		height: 40,
		backgroundColor: 'rgb(204, 207, 207)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(139, 145, 147)',
		borderStyle: "solid",
		justifyContent: "center",
	},
	textSeventeenText: {
		marginLeft: 16,
		marginRight: 15,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(255, 255, 255)',
		fontFamily: "Poppins-Medium",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0,
	},
	pillBtnOffTwentyFiveView: {
		height: 40,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	pillBtnOnNineView: {
		height: 40,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	pillBtnOffTwentySixView: {
		height: 40,
		backgroundColor: 'rgb(204, 207, 207)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(139, 145, 147)',
		borderStyle: "solid",
		justifyContent: "center",
	},
	textEighteenText: {
		marginLeft: 16,
		marginRight: 15,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(255, 255, 255)',
		fontFamily: "Poppins-Medium",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0,
	},
	pillBtnOffTwentySevenView: {
		height: 40,
		backgroundColor: 'rgb(204, 207, 207)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(139, 145, 147)',
		borderStyle: "solid",
		justifyContent: "center",
	},
	textNineteenText: {
		marginLeft: 16,
		marginRight: 15,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(255, 255, 255)',
		fontFamily: "Poppins-Medium",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0,
	},
	pillBtnOffTwentyEightView: {
		height: 40,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	pillBtnOnTenView: {
		height: 40,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	pillBtnOffTwentyNineView: {
		height: 40,
		backgroundColor: 'rgb(204, 207, 207)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(139, 145, 147)',
		borderStyle: "solid",
		justifyContent: "center",
	},
	textTwentyText: {
		marginLeft: 16,
		marginRight: 15,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(255, 255, 255)',
		fontFamily: "Poppins-Medium",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0,
	},
	pillBtnOffThirtyView: {
		height: 40,
		backgroundColor: 'rgb(204, 207, 207)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(139, 145, 147)',
		borderStyle: "solid",
		justifyContent: "center",
	},
	textTwentyOneText: {
		marginLeft: 16,
		marginRight: 15,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(255, 255, 255)',
		fontFamily: "Poppins-Medium",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0,
	},
	pillBtnOffThirtyOneView: {
		height: 40,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	pillBtnOnElevenView: {
		height: 40,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	pillBtnOffThirtyTwoView: {
		height: 40,
		backgroundColor: 'rgb(204, 207, 207)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(139, 145, 147)',
		borderStyle: "solid",
		justifyContent: "center",
	},
	textTwentyTwoText: {
		marginLeft: 16,
		marginRight: 15,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(255, 255, 255)',
		fontFamily: "Poppins-Medium",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0,
	},
	pillBtnOffThirtyThreeView: {
		height: 40,
		backgroundColor: 'rgb(204, 207, 207)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(139, 145, 147)',
		borderStyle: "solid",
		justifyContent: "center",
	},
	textTwentyThreeText: {
		marginLeft: 16,
		marginRight: 15,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(255, 255, 255)',
		fontFamily: "Poppins-Medium",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0,
	},
	rowFourView: {
		height: 83,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	lineTwoView: {
		height: 3,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	lipoExtremeTwoText: {
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(51, 60, 72)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0,
	},
	billsTwoView: {
		width: 616,
		height: 40,
		marginLeft: 84,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	textThirtyEightText: {
		marginRight: 32,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(51, 60, 72)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		letterSpacing: 0,
	},
	pillBtnTwelveView: {
		width: 40,
		height: 40,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	pillBtnThirteenView: {
		width: 40,
		height: 40,
		marginRight: 8,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	pillBtnFourteenView: {
		width: 40,
		height: 40,
		marginRight: 8,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	pillBtnFifteenView: {
		width: 40,
		height: 40,
		marginRight: 8,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	pillBtnSixteenView: {
		width: 40,
		height: 40,
		marginRight: 8,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	pillBtnSeventeenView: {
		width: 40,
		height: 40,
		marginRight: 8,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	pillBtnEighteenView: {
		width: 40,
		height: 40,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		alignSelf: "center",
		justifyContent: "center",
	},
	pillBtnTwentyFourView: {
		width: 40,
		height: 40,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	pillBtnTwentyThreeView: {
		width: 40,
		height: 40,
		marginLeft: 8,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	pillBtnTwentyTwoView: {
		width: 40,
		height: 40,
		marginLeft: 8,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	pillBtnTwentyOneView: {
		width: 40,
		height: 40,
		marginLeft: 8,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	pillBtnTwentyView: {
		width: 40,
		height: 40,
		marginLeft: 8,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	pillBtnNineteenView: {
		width: 40,
		height: 40,
		marginLeft: 8,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	pillBtnOffThirtyFourView: {
		height: 40,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	pillBtnOffThirtyFiveView: {
		height: 40,
		backgroundColor: 'rgb(204, 207, 207)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(139, 145, 147)',
		borderStyle: "solid",
		justifyContent: "center",
	},
	textTwentyFiveText: {
		marginLeft: 16,
		marginRight: 15,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(255, 255, 255)',
		fontFamily: "Poppins-Medium",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0,
	},
	pillBtnOffThirtySixView: {
		height: 40,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	pillBtnOffThirtySevenView: {
		height: 40,
		backgroundColor: 'rgb(204, 207, 207)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(139, 145, 147)',
		borderStyle: "solid",
		justifyContent: "center",
	},
	textTwentySixText: {
		marginLeft: 16,
		marginRight: 15,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(255, 255, 255)',
		fontFamily: "Poppins-Medium",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0,
	},
	pillBtnOffThirtyEightView: {
		height: 40,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	pillBtnOffThirtyNineView: {
		height: 40,
		backgroundColor: 'rgb(204, 207, 207)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(139, 145, 147)',
		borderStyle: "solid",
		justifyContent: "center",
	},
	textTwentySevenText: {
		marginLeft: 16,
		marginRight: 15,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(255, 255, 255)',
		fontFamily: "Poppins-Medium",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0,
	},
	pillBtnOffFortyView: {
		height: 40,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	pillBtnOffFortyOneView: {
		height: 40,
		backgroundColor: 'rgb(204, 207, 207)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(139, 145, 147)',
		borderStyle: "solid",
		justifyContent: "center",
	},
	textTwentyEightText: {
		marginLeft: 16,
		marginRight: 15,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(255, 255, 255)',
		fontFamily: "Poppins-Medium",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0,
	},
	pillBtnOffFortyTwoView: {
		height: 40,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	pillBtnOffFortyThreeView: {
		height: 40,
		backgroundColor: 'rgb(204, 207, 207)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(139, 145, 147)',
		borderStyle: "solid",
		justifyContent: "center",
	},
	textTwentyNineText: {
		marginLeft: 16,
		marginRight: 15,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(255, 255, 255)',
		fontFamily: "Poppins-Medium",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0,
	},
	pillBtnOffFortyFourView: {
		height: 40,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	pillBtnOffFortyFiveView: {
		height: 40,
		backgroundColor: 'rgb(204, 207, 207)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(139, 145, 147)',
		borderStyle: "solid",
		justifyContent: "center",
	},
	textThirtyText: {
		marginLeft: 16,
		marginRight: 15,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(255, 255, 255)',
		fontFamily: "Poppins-Medium",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0,
	},
	pillBtnOffFortySixView: {
		height: 40,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	pillBtnOffFortySevenView: {
		height: 40,
		backgroundColor: 'rgb(204, 207, 207)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(139, 145, 147)',
		borderStyle: "solid",
		justifyContent: "center",
	},
	textThirtyOneText: {
		marginLeft: 16,
		marginRight: 15,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(255, 255, 255)',
		fontFamily: "Poppins-Medium",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0,
	},
	pillBtnOffFortyEightView: {
		height: 40,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	pillBtnOffFortyNineView: {
		height: 40,
		backgroundColor: 'rgb(204, 207, 207)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(139, 145, 147)',
		borderStyle: "solid",
		justifyContent: "center",
	},
	textThirtyTwoText: {
		marginLeft: 16,
		marginRight: 15,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(255, 255, 255)',
		fontFamily: "Poppins-Medium",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0,
	},
	pillBtnOffFiftyView: {
		height: 40,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	pillBtnOffFiftyOneView: {
		height: 40,
		backgroundColor: 'rgb(204, 207, 207)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(139, 145, 147)',
		borderStyle: "solid",
		justifyContent: "center",
	},
	textThirtyThreeText: {
		marginLeft: 16,
		marginRight: 15,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(255, 255, 255)',
		fontFamily: "Poppins-Medium",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0,
	},
	pillBtnOffFiftyTwoView: {
		height: 40,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	pillBtnOffFiftyThreeView: {
		height: 40,
		backgroundColor: 'rgb(204, 207, 207)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(139, 145, 147)',
		borderStyle: "solid",
		justifyContent: "center",
	},
	textThirtyFourText: {
		marginLeft: 16,
		marginRight: 15,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(255, 255, 255)',
		fontFamily: "Poppins-Medium",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0,
	},
	pillBtnOffFiftyFourView: {
		height: 40,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	pillBtnOffFiftyFiveView: {
		height: 40,
		backgroundColor: 'rgb(204, 207, 207)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(139, 145, 147)',
		borderStyle: "solid",
		justifyContent: "center",
	},
	textThirtyFiveText: {
		marginLeft: 16,
		marginRight: 15,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(255, 255, 255)',
		fontFamily: "Poppins-Medium",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0,
	},
	pillBtnOffFiftySixView: {
		height: 40,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	pillBtnOffFiftySevenView: {
		height: 40,
		backgroundColor: 'rgb(204, 207, 207)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(139, 145, 147)',
		borderStyle: "solid",
		justifyContent: "center",
	},
	textThirtySixText: {
		marginLeft: 16,
		marginRight: 15,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(255, 255, 255)',
		fontFamily: "Poppins-Medium",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0,
	},
	pillBtnOffFiftyEightView: {
		height: 40,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	pillBtnOffFiftyNineView: {
		height: 40,
		backgroundColor: 'rgb(204, 207, 207)',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'rgb(139, 145, 147)',
		borderStyle: "solid",
		justifyContent: "center",
	},
	textThirtySevenText: {
		marginLeft: 16,
		marginRight: 15,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(255, 255, 255)',
		fontFamily: "Poppins-Medium",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0,
	},
	personalView: {
		width: 265,
		height: 65,
		marginLeft: 15,
		marginTop: 92,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	fieldTenView: {
		height: 84,
		marginLeft: 15,
		marginTop: 21,
		marginRight: 15,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	fieldEightView: {
		height: 84,
		marginLeft: 15,
		marginTop: 12,
		marginRight: 15,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	fieldSixView: {
		height: 84,
		marginLeft: 15,
		marginTop: 11,
		marginRight: 15,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	fieldFourView: {
		height: 84,
		marginLeft: 15,
		marginTop: 12,
		marginRight: 15,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	fieldTwoView: {
		height: 84,
		marginLeft: 15,
		marginTop: 11,
		marginRight: 15,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	fieldView: {
		height: 76,
		marginLeft: 15,
		marginRight: 15,
		marginBottom: 20,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	signView: {
		width: 267,
		height: 28,
		marginRight: 6,
		marginBottom: 27,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		alignSelf: "flex-end",
		justifyContent: "center",
	},
	minorBtnView: {
		width: 263,
		height: 50,
		marginRight: 20,
		marginBottom: 44,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		alignSelf: "flex-end",
		justifyContent: "center",
	},
	signTwoView: {
		height: 28,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	baseView: {
		width: 28,
		height: 28,
		backgroundColor: 'rgb(255, 255, 255)',
		borderRadius: 5,
		borderWidth: 2,
		borderColor: 'rgb(26, 25, 25)',
		borderStyle: "solid",
	},
	originalText: {
		marginRight: 119,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(26, 25, 25)',
		fontFamily: "Poppins-Light",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0,
	},
	currentText: {
		marginTop: 32,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(86, 166, 18)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0,
		alignSelf: "center",
	},
	weightTwoText: {
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(50, 60, 71)',
		fontFamily: "Poppins-Light",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.1,
	},
	lbsText: {
		marginTop: 42,
		marginRight: 12,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(50, 60, 71)',
		fontFamily: "Poppins-Light",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		letterSpacing: 0,
	},
	originalTwoText: {
		marginLeft: 13,
		marginTop: 21,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(139, 145, 147)',
		fontFamily: "Poppins-Light",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0,
	},
	fieldThreeView: {
		height: 76,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	currentTwoText: {
		marginTop: 32,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(86, 166, 18)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0,
		alignSelf: "center",
	},
	weightThreeText: {
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(50, 60, 71)',
		fontFamily: "Poppins-Light",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.1,
	},
	lbsTwoText: {
		marginTop: 42,
		marginRight: 12,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(50, 60, 71)',
		fontFamily: "Poppins-Light",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		letterSpacing: 0,
	},
	originalThreeText: {
		marginLeft: 13,
		marginTop: 14,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(50, 60, 71)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0,
	},
	fieldFiveView: {
		height: 76,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	weightFourText: {
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(50, 60, 71)',
		fontFamily: "Poppins-Light",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.1,
	},
	lbsThreeText: {
		marginTop: 42,
		marginRight: 12,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(50, 60, 71)',
		fontFamily: "Poppins-Light",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		letterSpacing: 0,
	},
	currentThreeText: {
		marginTop: 32,
		marginRight: 96,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(86, 166, 18)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0,
	},
	originalFourText: {
		marginLeft: 13,
		marginTop: 14,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(50, 60, 71)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0,
	},
	fieldSevenView: {
		height: 76,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	weightFiveText: {
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(50, 60, 71)',
		fontFamily: "Poppins-Light",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.1,
	},
	lbsFourText: {
		marginTop: 42,
		marginRight: 12,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(50, 60, 71)',
		fontFamily: "Poppins-Light",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		letterSpacing: 0,
	},
	currentFourText: {
		marginTop: 32,
		marginRight: 91,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(86, 166, 18)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0,
	},
	originalFiveText: {
		marginLeft: 13,
		marginTop: 14,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(50, 60, 71)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0,
	},
	fieldNineView: {
		height: 76,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	weightSixText: {
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(50, 60, 71)',
		fontFamily: "Poppins-Light",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.1,
	},
	lbsFiveText: {
		marginTop: 42,
		marginRight: 12,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(50, 60, 71)',
		fontFamily: "Poppins-Light",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		letterSpacing: 0,
	},
	currentFiveText: {
		marginTop: 32,
		marginRight: 52,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(86, 166, 18)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0,
	},
	originalSixText: {
		marginLeft: 13,
		marginTop: 14,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(50, 60, 71)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0,
	},
	fieldElevenView: {
		height: 76,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	weightSevenText: {
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(50, 60, 71)',
		fontFamily: "Poppins-Light",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.1,
	},
	lbsSixText: {
		marginTop: 42,
		marginRight: 12,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(50, 60, 71)',
		fontFamily: "Poppins-Light",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		letterSpacing: 0,
	},
	currentSixText: {
		marginTop: 32,
		marginRight: 73,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(86, 166, 18)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0,
	},
	originalSevenText: {
		marginLeft: 13,
		marginTop: 14,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(50, 60, 71)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0,
	},
	personalTwoView: {
		height: 53,
		marginRight: 13,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		justifyContent: "center",
	},
	fieldTwelveView: {
		width: 42,
		height: 53,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	fieldThirteenView: {
		width: 121,
		height: 53,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
	},
	weightEightText: {
		marginRight: 20,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(50, 60, 71)',
		fontFamily: "Poppins-Light",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.1,
	},
	originalEightText: {
		marginTop: 2,
		marginRight: 12,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(50, 60, 71)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0,
	},
	weightNineText: {
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(50, 60, 71)',
		fontFamily: "Poppins-Light",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.1,
	},
	originalNineText: {
		marginTop: 2,
		marginRight: 75,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(50, 60, 71)',
		fontFamily: "Poppins-Light",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0,
	},
	minorView: {
		height: 50,
		backgroundColor: 'rgb(232, 232, 232)',
		borderRadius: 5,
		borderWidth: 2,
		borderColor: 'rgb(232, 232, 232)',
		borderStyle: "solid",
		justifyContent: "center",
	},
	saveText: {
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(255, 255, 255)',
		fontFamily: "Poppins-Regular",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0,
		alignSelf: "center",
	},
	whiteView: {
		height: 83,
		backgroundColor: 'rgb(255, 255, 255)',
	},
	divideTwoView: {
		height: 8,
		backgroundColor: 'rgb(244, 248, 249)',
	},
	backImage: {
		width: 16,
		height: 29,
		marginLeft: 19,
		marginTop: 27,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		resizeMode: "center",
	},
	oval2Image: {
		width: 51,
		height: 51,
		marginLeft: 30,
		marginTop: 15,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		borderWidth: 1,
		borderColor: 'rgb(255, 255, 255)',
		borderStyle: "solid",
		resizeMode: "center",
	},
	davidCervantes94Text: {
		marginLeft: 14,
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
