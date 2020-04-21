import React, {Component} from 'react'; 
import {
	View,
	Text, 
	TouchableHighlight,
	TextInput,
	StyleSheet,
} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {formatDateTime, saveEvent} from "./api";


const styles = StyleSheet.create({
	fieldContainer: {
		marginTop: 20,
		marginBottom: 20,
		backgroundColor: "#fff",
	},
	text: {
		height: 40,
		margin: 0,
		marginRight: 7,
		paddingLeft: 10,
	},
	 button: {
    height: 50,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    alignSelf: 'stretch',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  	},
  	buttonText: {
    color: '#fff',
    fontSize: 18,
  	},
  	borderTop:{
  		borderColor: '#edeeef',
  		borderTopWidth: 0.5

  	}


});


class EventForm extends Component{
	state = {
		title: null,
		date: '',
		//showDatePicker:false, // - not needed
	};

	some = 1


	handleChangeTitle = (value) => {
		this.setState({title: value});
	}

	handleAddPress = () => {
		console.log("pressed", this.state.title)
		saveEvent(this.state)
		.then(() => this.props.navigation.goBack());
	}


	handleDatePress = () => {
		this.setState({showDatePicker: true})
	}

	handleDatePicked = (date) => {
		console.log(12)
		this.setState({
			date
		});
	
	this.handleDatePickerHide();
	}

	handleDatePickerHide = () => {
		console.log("out")
		this.setState({showDatePicker: false});
		

	}


	render() {
		return (
			<View
				style = {{
					flex:1
				}}

			>
			<View style={styles.fieldContainer}> 
				<TextInput
					style={styles.text}
					placeholder=" Event title"
					spellCheck={false}
					value={this.state.title}
					onChangeText={this.handleChangeTitle}
				/>
				<TextInput
					style={[styles.text, styles.borderTop]} //allows us to combine styles. the last one will overwrite the first. 
					placeholder="Event Date"
					spellCheck={false}
					value={formatDateTime(this.state.date.toString())}
					editable={!this.state.showDatePicker}
					onFocus={ this.handleDatePress}
				/>
				<DateTimePickerModal
					isVisible={this.state.showDatePicker}
					mode="datetime"
					onConfirm={this.handleDatePicked}
					onCancel={this.handleDatePickerHide}
				/>
			</View>
				<TouchableHighlight
				style={styles.button}
				//onPress={console.log("pressed", this.state.title)}
				onPress={this.handleAddPress}
				>
				<Text style={styles.buttonText}>Add </Text>
				</TouchableHighlight>

			</View>
			);
	}


}

export default EventForm