class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            links: "0.0",
            frame: 0,
            mainbg: "home"
        };
        setTimeout(function(){
            $(".links").attr("active","true");
            $(".main").removeAttr("active");
            $("#home").attr("active","true");
        },this.props.duration);
        var that=this;
        setTimeout(function(){
            that.setState({
                links: "1.0"
            });
        },(this.props.words.length-1)*3000);
    }

    changePrevFrame() {
        this.changeFrame(0);
    }

    changeNextFrame() {
        this.changeFrame(1);
    }

    changeFrame(val) {
        var frame=this.state.frame;
        if(val == 1) {
            frame+=1;
        }
        else {
            frame-=1;
        }
        if(frame<0) {
            frame=1;
        }
        else if(frame > 2) {
            frame=0;
        }
        this.setState({
            frame: frame
        });
        $(".main").removeAttr("active");
        switch(frame) {
            case 0:
            default:
            $("#home").attr("active","true");
            this.setState({
                mainbg: "home"
            });
            break;
            case 1:
            $("#about").attr("active","true");
            this.setState({
                mainbg: "about"
            });
            break;
            case 2:
            $("#projects").attr("active","true");
            this.setState({
                mainbg: "projects"
            });
            break;
        }
    }

    render() {
        setTimeout(function(){
            $('[data-toggle="tooltip"]').tooltip({
                trigger: 'hover'
            });
        },100);
        return (
            <div>
                <div className="mainBackground" active={this.state.mainbg}></div>
                <div className="main" id="about">
                    <About />
                </div>
                <div className="main" id="projects">
                    <Projects />
                </div>
                <div className="main" id="home">
                    <br/>
                    <br/>
                    <br/>
                    <Word words={this.props.words} duration={this.props.duration} />
                    <br/>
                    <div className="container">
                        <div className="text-center">
                            <div className="picture" data-toggle="tooltip" title="Me" data-placement="auto"></div>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <div className="links">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-sm-3"></div>
                                <div className="col-sm-1">
                                    <a href="https://instagram.com/anoop_viaggiatore" target="_blank">
                                        <div className="icon" instagram="true" data-toggle="tooltip" title="Instagram" data-placement="auto"></div>
                                    </a>
                                </div>
                                <div className="col-sm-1">
                                    <a href="https://www.linkedin.com/in/anoop-santhanam-742a6256/" target="_blank">
                                        <div className="icon" linkedin="true" data-toggle="tooltip" title="LinkedIn" data-placement="auto"></div>
                                    </a>
                                </div>
                                <div className="col-sm-1">
                                    <a href="https://medium.com/@anoop.santhanam" target="_blank">
                                        <div className="icon" medium="true" data-toggle="tooltip" title="Medium" data-placement="auto"></div>
                                    </a>
                                </div>
                                <div className="col-sm-1">
                                    <div className="icon" skype="true" data-toggle="tooltip" title="Skype: anoop.santhanam" data-placement="auto"></div>
                                </div>
                                <div className="col-sm-1">
                                    <a href="https://twitter.com/anoopsanthanam" target="_blank">
                                        <div className="icon" twitter="true" data-toggle="tooltip" title="Twitter" data-placement="auto"></div>
                                    </a>
                                </div>
                                <div className="col-sm-1">
                                    <a href="https://github.com/stonebinox/" target="_blank">
                                        <div className="icon" github="true" data-toggle="tooltip" title="Github" data-placement="auto"></div>
                                    </a>
                                </div>
                                <div className="col-sm-3"></div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="navlinks" left="true" style={{opacity: this.state.links}} data-toggle="tooltip" title="Contact me!" data-placement="auto" onClick={this.changePrevFrame.bind(this)}><span className="glyphicon glyphicon-chevron-left" style={{marginTop: "300px"}}></span><span className="glyphicon glyphicon-chevron-left" style={{marginTop: "300px"}}></span></div>
                        <div className="navlinks" right="true" style={{opacity: this.state.links}} data-toggle="tooltip" title="Who am I?" data-placement="auto" onClick={this.changeNextFrame.bind(this)}><span className="glyphicon glyphicon-chevron-right" style={{marginTop: "300px"}}></span><span className="glyphicon glyphicon-chevron-right" style={{marginTop: "300px"}}></span></div>
                    </div>
                    <Player play={this.props.play} />
                </div>
            </div>
        )
    }
}