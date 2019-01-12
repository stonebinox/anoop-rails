class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            projects: [{
                title: "Spectral Insights Website",
                content: "",
                link: "",
                image: ""
            },{
                title: "Dust Architecture",
                content: "",
                link: "",
                image: ""
            },{

            }]
        };
    }

    displayProjects() {

    }

    render() {
        return (
            <div className="container">
                <br/>
                <br/>
                <h1 class="text-center">Projects</h1>
                <hr/>
            </div>
        )
    }
}