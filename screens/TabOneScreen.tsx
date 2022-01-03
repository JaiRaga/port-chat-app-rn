import * as React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

export default function TabOneScreen() {
	return (
		<View style={styles.container}>
			<Image
				source={{ uri: 'https://avatars.githubusercontent.com/u/44367062?v=4' }}
				style={styles.image}
			/>
			<View style={styles.rightContainer}>
				<View style={styles.details}>
					<Text style={styles.name}>Raga Jai Santhosh</Text>
					<Text style={styles.grayedText}>1:00 AM</Text>
				</View>
				<Text numberOfLines={1} style={styles.grayedText}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla culpa
					iste minima sit totam nesciunt praesentium provident perferendis in
					sapiente! Nostrum ex, labore est delectus animi quidem maiores
					repudiandae tenetur.
				</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		padding: 10,
	},
	image: {
		height: 50,
		width: 50,
		borderRadius: 50,
		marginRight: 10,
	},
	rightContainer: {
		flex: 1,
		justifyContent: 'center',
	},
	details: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	name: {
		fontWeight: 'bold',
		fontSize: 18,
		marginBottom: 3,
	},
	grayedText: {
		color: 'grey',
		fontWeight: '300',
	},
})
