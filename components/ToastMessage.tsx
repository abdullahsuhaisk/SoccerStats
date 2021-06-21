import { Alert } from "react-native";

const ToastMessage = (type?: string, alertTitle: string, alertMessage: string) => (
  Alert.alert(
    alertTitle,
    alertMessage,
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  )
 )

export default ToastMessage;

