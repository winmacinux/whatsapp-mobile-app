import React from "react";
import { Text, View } from "react-native";

const Header = React.memo((props) => {
  return (
    <React.Fragment>
      <View>
        <Text>Whatsapp</Text>
      </View>
    </React.Fragment>
  );
});

export default Header;
