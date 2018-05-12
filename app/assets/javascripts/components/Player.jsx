class Player extends React.Component{
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="player">
                <audio autoPlay={this.props.play}>
                    <source src="assets/gnr.mp3" type="audio/mpeg" id="player" />
                </audio>               
            </div>
        )
    }
}