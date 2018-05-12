class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <br/>
                <br/>
                <h1 class="text-left">About me - Anoop Santhanam</h1>
                <hr/>
                <div className="white-glass">
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/pjJMbukyrwk?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    <br/>
                    <div className="row">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-8">
                            <p><strong>Bangalore/Bengaluru, India: </strong> With over 6 years of experience, Anoop is a full stack developer. In the span of 6 years, he has run his own startup, Binox, as CEO, worked for Dust as CTO, and as senior software engineer for Spectral Insights. </p>
                            <p>During his time as CEO of Binox, he filed for a patent in India and the US (<a href="https://patents.google.com/patent/US20140059117" target="_blank">Read here</a>) and was featured in several regional and national newspapers and magazines.</p>
                            <p>In whatever little free time he is able to scavenge, Anoop is an avid reader, plays the guitar, loves to travel with his wife, and loves to run around hills and forests with his camera.</p>
                            <p>He also manages to write his blog from time to time and if luxury permits it, even this website where he writes about himself in third person. He's fooling no one. He even spends time giving guest lectures at colleges around the city to help students out with their skills and career perspectives. He thinks nobody knows, but we do.</p>
                            <p>If you take a look around, you'll find links to projects, skills, achievements, and much more. In the hope that you realize that he's the hero the world deserves, but not the one it needs right now; so, maybe contact him. Because he can take it, because he's not a hero. He's a silent tester, a watchful leader, a Dark Kn -... um, <strong>a full stack developer</strong>.</p>
                        </div>
                        <div className="col-sm-2"></div>
                    </div>
                </div>
                <hr/>
            </div>
        )
    }
}