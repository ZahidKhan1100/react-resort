import React, { Component } from 'react';
import {RoomContext} from '../context';

export default class FeaturedRooms extends Component {
    static contextType = RoomContext;
    render() {
        const {name,greetings} = this.context;
       
        return (
            <div>
                {greetings} {name} From Featured Rooms
            </div>
        )
    }
}
