import React, { Component } from "react";
import Projects from "./Projects";
import SocialProfiles from "./SocialProfiles";
import Title from "./Title";
import jay from "./assets/img/jay.JPG";
import "./index.css";

class App extends Component {
    state = { displayBio: false };

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }

    render() {
        return (
            <div>
                <img src={jay} alt="Jay Thakkar" className="profile" />
                <h1>Hello!</h1>
                <p>My name is Jay Thakkar. I'm a student of DA-IICT.</p>
                <Title />
                <p>I'm always looking forward to working on meaningful projects.</p>
                <p>I'm a React Front-end developer.</p>
                {
                    this.state.displayBio ? (
                        <div>
                            <p>I'm Living in Gujarat, India.</p>
                            <p>I used to code everyday.</p>
                            <p>My favourite programming language is C++.</p>
                            <p>Besides coding, I also love to play cricket and mobile games</p>
                            <button onClick={this.toggleDisplayBio}>Show Less</button>
                        </div>
                    ) : (
                            <div>
                                <button onClick={this.toggleDisplayBio}>Read More</button>
                            </div>
                        )
                }
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
            </div>
        )
    }
}

export default App;