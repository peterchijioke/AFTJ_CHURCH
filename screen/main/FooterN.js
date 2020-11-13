import React from "react";
import { View, Text, Dimensions, StyleSheet, Pressable } from "react-native";
import { Footer } from "native-base";
const { height, width } = Dimensions.get("window");

export default function footerN() {
  return (
    <Footer
      style={{
        backgroundColor: "skyblue",
      }}
    >
      <View
        style={{
          width: width / 3,
          justifyContent: "center",
          alignItems: "center",
          padding: 5,
        }}
      >
        <Pressable onPress={() => console.log("next service")}>
          <Text
            style={{
              fontSize: 12,
              textAlign: "center",
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            NEXT SERVICE COUNTDOWN
          </Text>
        </Pressable>
      </View>
      <View
        style={{
          // backgroundColor: "skyblue",
          width: width - 120,
          flexDirection: "row",
          padding: 5,
          marginLeft: 25,
        }}
      >
        <View style={[styles.viewTT, { marginRight: 18 }]}>
          <Text style={[styles.inText, { fontSize: 16 }]}>03</Text>
          <Text style={styles.inText}>DAYS</Text>
        </View>
        <View style={[styles.viewTT, { marginRight: 18 }]}>
          <Text style={[styles.inText, { fontSize: 16 }]}>11</Text>
          <Text style={[styles.inText]}>HOURS</Text>
        </View>
        <View style={[styles.viewTT, { marginRight: 18 }]}>
          <Text style={[styles.inText, { fontSize: 16 }]}>23</Text>
          <Text style={styles.inText}>MINUTES</Text>
        </View>
        <View style={[styles.viewTT]}>
          <Text style={[styles.inText, { fontSize: 16 }]}>56</Text>
          <Text style={styles.inText}>SECONDS</Text>
        </View>
      </View>
    </Footer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  child: {
    height: height - 110,
    width,
    justifyContent: "center",
  },
  text: {
    fontSize: width * 0.5,
    textAlign: "center",
  },
  icon: {
    marginLeft: 10,
    position: "absolute",
    zIndex: 1,
    // top:
  },
  inText: { textAlign: "center", color: "#fff", fontSize: 10 },
  viewTT: { justifyContent: "center", alignItems: "center" },
});
