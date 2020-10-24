class Header extends React.Component{
    render(){
        return(
            <div class="header">
                <h1>SoCYety</h1>
            </div>
        );
    }
}
class Nav extends React.Component {
    render() {
        return (
            <div class="topnav">
                <a>Navigation bar</a>
                <a href="#">Log out</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
            </div>
        );
    }
}

class Homework extends React.Component {
    render() {
        return (
            <div class="column side">
                <h2>Homework assignments and questions</h2>
            </div>
        );
    }
}

class Comments extends React.Component {
    render() {
        return (
            <div class="column side">
                <h2>Comments on solution.</h2>
            </div>
        );
    }
}

class Solution extends React.Component {
    render() {
        return (
            <div class="column middle">
                <h2>Solutions of assignments.</h2>
            </div>
        );
    }
}

class App extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            netID: '',
            password: '',
            error: '',
            login_success: false,
        };

        this.dismissError = this.dismissError.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleNetIDChange = this.handleNetIDChange.bind(this);
        this.handleLogOut = this.handleLogOut.bind(this);
    }

    dismissError(){
        this.setState({error: ''});
    }

    handleSubmit(event){
        event.preventDefault();

        if(!this.state.netID){
            return this.setState({error: 'ISU netID is required' });
        }
        else if(!this.state.password){
            return this.setState({error: 'Please enter password' });
        }
        else{
            this.setState({login_success: true});
        }
        return this.setState({error: '' });
    }

    handleNetIDChange(event){
        this.setState({
            netID: event.target.value,
        });
    }

    handlePassChange(event){
        this.setState({
            password: event.target.value,
        });
    }

    handleLogOut(){
        this.setState({login_success: false});
    }

    render(){
        if(this.state.login_success){
            return(
                <div>
                    <Header />
                    <Nav handleLogOut={this.handleLogOut}/>
                    <Homework />
                    <Solution />
                    <Comments />
                </div>
            );
        }
        return(
            <div class="a">
                <h1>
                    <logo>SoCYety</logo>
                </h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Net ID</label><br />
                    <input type="text" value={this.state.netID} onChange={this.handleNetIDChange} placeholder="Enter Net-ID"/><br /><br />
                    <label>Password</label><br />
                    <input type="password"  value={this.state.password} onChange={this.handlePassChange} placeholder="Enter password"/><br/><br/>
                    <input type="submit" value="Log in" />
					<input type="button" value="Sign up" />
					<br></br>
					<br></br>
                    {
                        this.state.error &&
                        <p data-test="error" onClick={this.dismissError}>
                            ✖ {this.state.error}
                        </p>
                    }
                </form>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
