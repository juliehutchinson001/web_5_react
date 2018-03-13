import React, {Component} from 'react';
// import Categories from './components/categories';

class SortingBar extends Component {
    render() {
        return (
            <nav id="slide-menu">
                <ul>
                    <li className="timeline">Timeline</li>
                    <li className="events">Events</li>
                    <li className="calendar">Calendar</li>
                    <li className="sep settings">Settings</li>
                    <li className="logout">Logout</li>
                </ul>
            </nav>
        )
    };
}

export default SortingBar