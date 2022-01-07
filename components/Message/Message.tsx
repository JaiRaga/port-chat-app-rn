import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Message() {
	const isMe = true

	return (
		<View
			style={[
				styles.container,
				{
					backgroundColor: isMe ? '#1597E5' : '#161853',
					marginLeft: isMe ? 'auto' : 10,
					marginRight: !isMe ? 'auto' : 10,
				},
			]}>
			<Text
				style={[
					styles.text,
					{
						fontStyle: isMe ? 'italic' : 'normal',
					},
				]}>
				Message Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
				perspiciatis, recusandae asperiores alias facilis consequuntur, ea
				laborum, perferendis blanditiis quisquam deleniti voluptates dicta!
				Cupiditate, reiciendis! Commodi harum sapiente vel ratione. elit. Cum
				perspiciatis, recusandae asperiores alias facilis consequuntur, ea
				laborum, perferendis blanditiis quisquam deleniti voluptates dicta!
				Cupiditate, reiciendis! Commodi harum sapiente vel ratione. elit. Cum
				perspiciatis, recusandae asperiores alias facilis consequuntur, ea
				laborum, perferendis blanditiis quisquam deleniti voluptates dicta!
				Cupiditate, reiciendis! Commodi harum sapiente vel ratione.
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#161853',
		padding: 10,
		margin: 10,
		borderRadius: 10,
		maxWidth: '72%',
	},
	text: {
		color: 'white',
	},
})
