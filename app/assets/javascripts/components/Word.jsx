class Word extends React.Component{
    constructor(props) {
        super(props);
        this.state={word: '', wordActive: "false"};
        var that=this;
        setTimeout(function(){
            that.changeWords(0);
        }, this.props.duration*1000);
    }

    changeWords(pos) {
        var word=this.props.words[pos];
        this.setState({
            word: word,
            wordActive: "true"
        });
        pos=pos+1;
        if(pos>=this.props.words.length){
            pos=0;
        }
        var that=this;
        setTimeout(function(){
            that.setState({
                wordActive: "false"
            });
        },1000);
        setTimeout(function(){
            that.changeWords(pos);
        },3000);
    }

    render() {
        return (
            <div className="large text-center" active={this.state.wordActive}>
                {this.state.word}
            </div>
        )
    }
}