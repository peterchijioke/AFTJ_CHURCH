import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from "react-native";

import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Title,
  Content,
  List,
  ListItem,
  Thumbnail,
} from "native-base";
import { AntDesign, Feather } from "react-native-vector-icons";
// import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");
const data = [
  {
    sdate: "01/10/20",
    edate: "01/10/20",
    name: "Widows",
    cost: "$1,000,000",
    id: 1,
  },
  {
    sdate: "01/10/20",
    edate: "01/10/20",
    name: "Widows",
    cost: "$1,000,000",
    id: 2,
  },
  {
    sdate: "01/10/20",
    edate: "01/10/20",
    name: "Widows",
    cost: "$1,000,000",
    id: 3,
  },
  {
    sdate: "01/10/20",
    edate: "01/10/20",
    name: "Widows",
    cost: "$1,000,000",
    id: 4,
  },
  {
    sdate: "01/10/20",
    edate: "01/10/20",
    name: "Widows",
    cost: "$1,000,000",
    id: 5,
  },
  {
    sdate: "01/10/20",
    edate: "01/10/20",
    name: "Widows",
    cost: "$1,000,000",
    id: 6,
  },
  {
    sdate: "01/10/20",
    edate: "01/10/20",
    name: "Widows",
    cost: "$1,000,000",
    id: 7,
  },
  {
    sdate: "01/10/20",
    edate: "01/10/20",
    name: "Widows",
    cost: "$1,000,000",
    id: 8,
  },
  {
    sdate: "01/10/20",
    edate: "01/10/20",
    name: "Widows",
    cost: "$1,000,000",
    id: 9,
  },
  {
    sdate: "01/10/20",
    edate: "01/10/20",
    name: "Widows",
    cost: "$1,000,000",
    id: 10,
  },
];

export default class Projects extends Component {
  render() {
    return (
      <Container>
        <Header
          androidStatusBarColor={Platform.OS == "android" ? "#000" : "#fff"}
          style={{ backgroundColor: "#fff" }}
        >
          <Left>
            <Button transparent onPress={() => navigation.goBack()}>
              <AntDesign name="arrowleft" color="#000" size={20} />
            </Button>
          </Left>
          <Body>
            <Title style={{ color: "#000" }}>Projects</Title>
          </Body>
          <Right>
            <Button transparent>
              <Feather name="printer" color="#000" size={20} />
            </Button>
          </Right>
        </Header>
        <SafeAreaView>
          <View>
            <View>
              <Text style={styles.churProject}>Church Projects</Text>
            </View>
            {/* <View style={{ borderBottomColor: "#ccc", borderBottomWidth: 1 }}> */}
            <ScrollView>
              <View style={styles.contain}>
                <View>
                  <Text style={styles.txt}>Name</Text>
                </View>
                <View style={{ marginHorizontal: 35 }}>
                  <Text style={[styles.txt, { marginLeft: 6 }]}>
                    Start Date
                  </Text>
                </View>
                <View>
                  <Text style={styles.txt}>End Date</Text>
                </View>
                <View style={{ marginHorizontal: 35 }}>
                  <Text style={[styles.txt, { marginRight: 8 }]}>Cost</Text>
                </View>
              </View>
              <View style={styles.line}></View>
              {/* ========================================================= */}

              {data.map((item) => {
                return (
                  <View key={item.id}>
                    <View style={styles.contain}>
                      <View>
                        <Text style={styles.inTXT}>{item.name}</Text>
                      </View>
                      <View style={{ marginHorizontal: 30 }}>
                        <Text style={styles.inTXT}>{item.sdate}</Text>
                      </View>
                      <View>
                        <Text style={styles.inTXT}>{item.edate}</Text>
                      </View>
                      <View style={{ marginHorizontal: 30 }}>
                        <Text style={styles.inTXT}>{item.cost}</Text>
                      </View>
                    </View>
                    <View style={styles.line}></View>
                  </View>
                );
              })}
              {/* ============================================================================== */}
            </ScrollView>
          </View>
          {/* </View> */}
        </SafeAreaView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  line: {
    borderBottomWidth: 2,
    borderBottomColor: "#ccc",
    marginTop: 10,
  },
  churProject: {
    fontSize: 18,
    marginLeft: 10,
    marginTop: 10,
    fontWeight: "bold",
  },
  contain: {
    marginLeft: 13,
    marginRight: 10,
    flexDirection: "row",
    marginTop: 15,
    // borderBottomColor: "#ccc",
    // borderBottomWidth: 2,
  },
  txt: { fontWeight: "bold" },
  inTXT: {},
});
