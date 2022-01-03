import * as React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

import ChatRoomItem from '../components/ChatRoomItem'
import chatRoomData from '../assets/dummy-data/ChatRooms'

const chatRoom1 = chatRoomData[0]
const chatRoom2 = chatRoomData[2]

export default function TabOneScreen() {
	return (
		<View style={styles.page}>
			<ChatRoomItem chatRoom={chatRoom1} />
			<ChatRoomItem chatRoom={chatRoom2} />
		</View>
	)
}

const styles = StyleSheet.create({
	page: {
		flex: 1,
		backgroundColor: 'white',
	},
})
