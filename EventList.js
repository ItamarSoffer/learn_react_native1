import React, {Component} from 'react';
import {Text, FlatList} from 'react-native';

import EventCard from "./EventCard";

class EventList extends Component {
	state = {
		events: []
	}

	componentDidMount(){
		const events = require('./db.json').events.map( ev => ({ ...ev,
				date: new Date(ev.date)
					}));
		this.setState({events})
	}

	render(){
		return(
			<FlatList
			data={this.state.events}
			renderItem={({item}) => <EventCard event={item} />}
			KeyExtractor={item => item.id}
			/>

	);
}
}


export default EventList;