import * as React from 'react'
import { View, Image, Text, StyleSheet, FlatList } from 'react-native'

import ChatRoomItem from '../components/ChatRoomItem'
import chatRoomData from '../assets/dummy-data/ChatRooms'

export default function TabOneScreen() {
	return (
		<View style={styles.page}>
			<FlatList
				data={chatRoomData}
				renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	page: {
		flex: 1,
		backgroundColor: 'white',
	},
})
