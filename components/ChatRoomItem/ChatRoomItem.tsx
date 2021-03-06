import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

import styles from './styles'

export default function ChatRoomItem({ chatRoom }) {
	const user = chatRoom.users[1]

	return (
		<View style={styles.container}>
			<Image source={{ uri: user.imageUri }} style={styles.image} />
			{chatRoom.newMessages ? (
				<View style={styles.badgeContainer}>
					<Text style={styles.badgeText}>{chatRoom.newMessages}</Text>
				</View>
			) : null}
			<View style={styles.rightContainer}>
				<View style={styles.details}>
					<Text style={styles.name}>{user.name}</Text>
					<Text style={styles.grayedText}>
						{chatRoom.lastMessage.createdAt}
					</Text>
				</View>
				<Text numberOfLines={1} style={styles.grayedText}>
					{chatRoom.lastMessage.content}
				</Text>
			</View>
		</View>
	)
}
