import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import propTypes from 'prop-types';
import {formatDate, getCountdownParts } from './api'; 

const styles = StyleSheet.create({

})

export default function EventCard({event}){
	const {
		days,
		hours,
		minutes,
		seconds,
	} = getCountdownParts(event.date)

	return (
		<View style={styles.card}>
			<View style={styles.cardHeader}>
				<Text style={styles.date}>{formatDate(event.date)}</Text>
				<Text style={styles.title}>{event.title}</Text>
			</View>

			<View style={styles.counterContainer}>
        <View
          style={styles.counter}
        >
          <Text style={styles.counterText}>{days}</Text>
          <Text style={styles.counterLabel}>DAYS</Text>
        </View>
        <View
          style={styles.counter}
        >
          <Text style={styles.counterText}>{hours}</Text>
          <Text style={styles.counterLabel}>HOURS</Text>
        </View>
        <View
          style={styles.counter}
        >
          <Text style={styles.counterText}>{minutes}</Text>
          <Text style={styles.counterLabel}>MINUTES</Text>
        </View>
        <View
          style={styles.counter}
        >
          <Text style={styles.counterText}>{seconds}</Text>
          <Text style={styles.counterLabel}>SECONDS</Text>
        </View>
      </View>
		</View>
		)

}


//object validation.
EventCard.propTypes = {
	event: propTypes.shape({
		title:propTypes.string.isRequired,
		date: propTypes.instanceOf(Date)
	}),
};