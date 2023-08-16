import { StyleSheet, Text, View, Platform } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const Header = ({ headerText, headerIcon }) => {
	return (
		<View style={{ flexDirection: "row", alignItems: "center",
		justifyContent: "space-between", marginTop: Platform.OS === "ios" ? 20 : 30 ,marginBottom: 8,  
		}}>
			<Text style={{ flex: 1, fontSize: 22, fontWeight: "700" }}>
				{headerText}
			</Text>

			<FontAwesome name={headerIcon} size={24} color="#f96163" />
		</View>
	);
};

export default Header;

const styles = StyleSheet.create({});
