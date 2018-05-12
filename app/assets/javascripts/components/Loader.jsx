class Loader extends React.Component {
    constructor(props) {
        super(props);
        this.state={readyClass:"loaderText", readyText: "Loading", loaderClick: null, layout: null};
        var that=this;
        setTimeout(function(){
            $(".loader").css("animation-name","null");
            $(".loader").css({
                background: '#D7AD00 url(assets/play.png) no-repeat center',
                backgroundSize: '35%'
            });
            $("#loaderBackground").css("background-color","#000000");
            that.setState({
                readyClass: "loaderText ready",
                readyText: "Let us begin.",
                loaderClick: that.handleClick.bind(that)
            });
        },(props.duration*1000));
    }

    handleClick() {
        this.loadClick();
    }

    loadClick() {
        $("#loaderHolder").removeAttr("active");
        $("#loaderBackground").removeAttr("active");
        this.setState({
            layout: <Layout words={['Entrepreneur', 'Developer', 'Traveller', 'Photographer', 'Anoop']} duration="1" play={false} />
        });
    }

    render() {
        return (
            <div>
                <div id="loaderBackground" active="true">
                    <div id="loaderHolder" active="true">
                        <div className="loader" onClick={this.state.loaderClick}></div>
                        <br/>
                        <div className={this.state.readyClass}>
                            {this.state.readyText}
                        </div>
                    </div>
                </div>
                {this.state.layout}
            </div>
        )
    }
}