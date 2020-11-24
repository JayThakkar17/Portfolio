import React, { Component } from 'react'

const TITLES = [
    'a software engineer',
    'a music lover',
    'an enthusiastic learner',
    'an adventure seeker'
];

class Title extends Component {
    state = { titleIndex: 0 };

    componentDidMount() {
        console.log('Title Component Has Mounted !');

        this.animateTitle();
    }

    animateTitle = () => {
        setInterval(() => {
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
            this.setState({ titleIndex });
        }, 4000);
    }

    render() {
        const title = TITLES[this.state.titleIndex]
        return (
            <p>I am {title}</p>
        )
    }
}

export default Title;