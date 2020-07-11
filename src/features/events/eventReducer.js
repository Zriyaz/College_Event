import {createReducer} from "../../app/common/util/reducerUtils"
import {CREATE_EVENT,UPDATE_EVENT,DELETE_EVENT} from "./eventConstant"


const initialState =  [
    {
        id: '1',
        title: 'Trip to Empire State building',
        date: '2020-08-21',
        category: 'culture',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
        city: 'NY, USA',
        venue: 'Empire State Building, 5th Avenue, New York, NY, USA',
        hostedBy: 'Bob',
        hostPhotoURL: 'https://randomuser.me/api/portraits/women/20.jpg',
        attendees: [
            {
                id: 'a',
                name: 'Bob',
                photoURL: 'https://randomuser.me/api/portraits/women/20.jpg'
            },
            {
                id: 'b',
                name: 'Tom',
                photoURL: 'https://randomuser.me/api/portraits/women/20.jpg'
            }
        ]
    },
    {
        id: '2',
        title: 'Trip to Punch and Judy Pub',
        date: '2020-09-18',
        category: 'drinks',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
        city: 'London, UK',
        venue: 'Punch & Judy, Henrietta Street, London, UK',
        hostedBy: 'Tom',
        hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
        attendees: [
            {
                id: 'a',
                name: 'Bob',
                photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
            },
            {
                id: 'b',
                name: 'Tom',
                photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
            }
        ]
    }
];

const createEvent = (state , payload)=>{
	return [...state, payload.event]
}

const updateEvent = (state,payload)=>{
	return [
		...state.filter(event=>event.id !== payload.event.id), payload.event
	]
}

const deleteEvent=(state,payload)=>{
	return[
	 	...state.filter(event=> event.id !== payload.eventId)
	]
}

export default createReducer(initialState, {
	[CREATE_EVENT]: createEvent,
	[UPDATE_EVENT]: updateEvent,
	[DELETE_EVENT]: deleteEvent
})