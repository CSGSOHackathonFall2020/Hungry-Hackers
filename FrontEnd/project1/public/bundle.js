"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { "class": "header" },
                React.createElement(
                    "h1",
                    null,
                    "SoCYety"
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Nav = function (_React$Component2) {
    _inherits(Nav, _React$Component2);

    function Nav() {
        _classCallCheck(this, Nav);

        return _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).apply(this, arguments));
    }

    _createClass(Nav, [{
        key: "render",
        value: function render() {
            var _this3 = this;

            return React.createElement(
                "div",
                { "class": "topnav" },
                React.createElement(
                    "a",
                    null,
                    React.createElement(
                        "form",
                        null,
                        React.createElement(
                            "select",
                            null,
                            React.createElement(
                                "option",
                                null,
                                "COM S 363"
                            ),
                            React.createElement(
                                "option",
                                null,
                                "AMD 165"
                            ),
                            React.createElement(
                                "option",
                                null,
                                "Class 3"
                            ),
                            React.createElement(
                                "option",
                                null,
                                "Class 4"
                            )
                        )
                    )
                ),
                React.createElement(
                    "a",
                    { onClick: function onClick() {
                            return _this3.props.handleLogOut();
                        } },
                    "Log out"
                ),
                React.createElement(
                    "a",
                    { onClick: function onClick() {
                            return _this3.props.handleHomepage();
                        } },
                    "Homepage"
                ),
                React.createElement(
                    "a",
                    { onClick: function onClick() {
                            return _this3.props.handleMemes();
                        } },
                    "Memes"
                )
            );
        }
    }]);

    return Nav;
}(React.Component);

var Homework = function (_React$Component3) {
    _inherits(Homework, _React$Component3);

    function Homework() {
        _classCallCheck(this, Homework);

        return _possibleConstructorReturn(this, (Homework.__proto__ || Object.getPrototypeOf(Homework)).apply(this, arguments));
    }

    _createClass(Homework, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { "class": "column side" },
                React.createElement(
                    "h2",
                    null,
                    "Homework assignments and questions"
                )
            );
        }
    }]);

    return Homework;
}(React.Component);

var Comments = function (_React$Component4) {
    _inherits(Comments, _React$Component4);

    function Comments() {
        _classCallCheck(this, Comments);

        return _possibleConstructorReturn(this, (Comments.__proto__ || Object.getPrototypeOf(Comments)).apply(this, arguments));
    }

    _createClass(Comments, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { "class": "column side" },
                React.createElement(
                    "h2",
                    null,
                    "Comments on solution."
                )
            );
        }
    }]);

    return Comments;
}(React.Component);

var Solution = function (_React$Component5) {
    _inherits(Solution, _React$Component5);

    function Solution() {
        _classCallCheck(this, Solution);

        return _possibleConstructorReturn(this, (Solution.__proto__ || Object.getPrototypeOf(Solution)).apply(this, arguments));
    }

    _createClass(Solution, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { "class": "column middle" },
                React.createElement(
                    "h2",
                    null,
                    "Solutions of assignments."
                )
            );
        }
    }]);

    return Solution;
}(React.Component);

var Homepage_header = function (_React$Component6) {
    _inherits(Homepage_header, _React$Component6);

    function Homepage_header() {
        _classCallCheck(this, Homepage_header);

        return _possibleConstructorReturn(this, (Homepage_header.__proto__ || Object.getPrototypeOf(Homepage_header)).apply(this, arguments));
    }

    _createClass(Homepage_header, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { "class": "header" },
                React.createElement(
                    "h1",
                    null,
                    "SoCYety Homepage"
                ),
                React.createElement(
                    "h2",
                    null,
                    "What would you like to do?"
                )
            );
        }
    }]);

    return Homepage_header;
}(React.Component);

var Homepage_body = function (_React$Component7) {
    _inherits(Homepage_body, _React$Component7);

    function Homepage_body() {
        _classCallCheck(this, Homepage_body);

        return _possibleConstructorReturn(this, (Homepage_body.__proto__ || Object.getPrototypeOf(Homepage_body)).apply(this, arguments));
    }

    _createClass(Homepage_body, [{
        key: "render",
        value: function render() {
            var _this9 = this;

            return React.createElement(
                "div",
                { "class": "row" },
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        { onClick: function onClick() {
                                return _this9.props.handleAS();
                            } },
                        "Assignments and solutions"
                    ),
                    React.createElement(
                        "li",
                        { onClick: function onClick() {
                                return _this9.props.handleMemes();
                            } },
                        "Memes"
                    ),
                    React.createElement(
                        "li",
                        { onClick: function onClick() {
                                return alert("Did you know that Kangaroos can't fart?");
                            } },
                        "Learn something new"
                    ),
                    React.createElement(
                        "li",
                        { onClick: function onClick() {
                                return _this9.props.handleLogOut();
                            } },
                        "Log Out"
                    )
                )
            );
        }
    }]);

    return Homepage_body;
}(React.Component);

var Memes = function (_React$Component8) {
    _inherits(Memes, _React$Component8);

    function Memes() {
        _classCallCheck(this, Memes);

        return _possibleConstructorReturn(this, (Memes.__proto__ || Object.getPrototypeOf(Memes)).apply(this, arguments));
    }

    _createClass(Memes, [{
        key: "render",
        value: function render() {
            var _this11 = this;

            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    { "class": "header" },
                    "Enjoy and have a wonderful day!"
                ),
                React.createElement(
                    "button",
                    { "class": "button", onClick: function onClick() {
                            return _this11.props.handleGoBack();
                        } },
                    "Back"
                ),
                React.createElement("img", { src: "lukememe.jpeg", alt: "luke meme", width: "300", height: "500" }),
                React.createElement("img", { src: "susmeme.jpeg", alt: "sus meme", width: "500", height: "300" })
            );
        }
    }]);

    return Memes;
}(React.Component);

var App = function (_React$Component9) {
    _inherits(App, _React$Component9);

    function App(props) {
        _classCallCheck(this, App);

        var _this12 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this12.state = {
            netID: '',
            password: '',
            error: '',
            login_success: false,
            hw: false,
            memes: false
        };

        _this12.dismissError = _this12.dismissError.bind(_this12);
        _this12.handleSubmit = _this12.handleSubmit.bind(_this12);
        _this12.handlePassChange = _this12.handlePassChange.bind(_this12);
        _this12.handleNetIDChange = _this12.handleNetIDChange.bind(_this12);
        _this12.handleLogOut = _this12.handleLogOut.bind(_this12);
        _this12.handleAS = _this12.handleAS.bind(_this12);
        _this12.handleHomepage = _this12.handleHomepage.bind(_this12);
        _this12.handleMemes = _this12.handleMemes.bind(_this12);
        _this12.handleGoBack = _this12.handleGoBack.bind(_this12);
        return _this12;
    }

    _createClass(App, [{
        key: "dismissError",
        value: function dismissError() {
            this.setState({ error: '' });
        }
    }, {
        key: "handleSubmit",
        value: function handleSubmit(event) {
            event.preventDefault();

            if (!this.state.netID) {
                return this.setState({ error: 'ISU netID is required' });
            } else if (!this.state.password) {
                return this.setState({ error: 'Please enter password' });
            } else {
                this.setState({ login_success: true });
            }
            return this.setState({ error: '' });
        }
    }, {
        key: "handleNetIDChange",
        value: function handleNetIDChange(event) {
            this.setState({
                netID: event.target.value
            });
        }
    }, {
        key: "handlePassChange",
        value: function handlePassChange(event) {
            this.setState({
                password: event.target.value
            });
        }
    }, {
        key: "handleLogOut",
        value: function handleLogOut() {
            this.setState({ login_success: false });
            this.setState({ hw: false });
            this.setState({ memes: false });
        }
    }, {
        key: "handleAS",
        value: function handleAS() {
            this.setState({ hw: true });
            this.setState({ memes: false });
        }
    }, {
        key: "handleMemes",
        value: function handleMemes() {
            this.setState({ hw: false });
            this.setState({ memes: true });
        }
    }, {
        key: "handleGoBack",
        value: function handleGoBack() {
            this.setState({ memes: false });
        }
    }, {
        key: "handleHomepage",
        value: function handleHomepage() {
            this.setState({ hw: false });
            this.setState({ memes: false });
        }
    }, {
        key: "render",
        value: function render() {
            if (this.state.memes && this.state.login_success) {
                return React.createElement(
                    "div",
                    null,
                    React.createElement(Memes, { handleGoBack: this.handleGoBack })
                );
            }
            if (this.state.hw && this.state.login_success) {
                return React.createElement(
                    "div",
                    null,
                    React.createElement(Header, null),
                    React.createElement(Nav, { handleLogOut: this.handleLogOut, handleHomepage: this.handleHomepage, handleMemes: this.handleMemes }),
                    React.createElement(Homework, null),
                    React.createElement(Solution, null),
                    React.createElement(Comments, null)
                );
            }
            if (this.state.login_success && !this.state.hw && !this.state.memes) {
                return React.createElement(
                    "div",
                    null,
                    React.createElement(Homepage_header, null),
                    React.createElement(Homepage_body, { handleLogOut: this.handleLogOut, handleAS: this.handleAS, handleMemes: this.handleMemes })
                );
            }
            return React.createElement(
                "div",
                { "class": "a" },
                React.createElement(
                    "h1",
                    null,
                    React.createElement(
                        "logo",
                        null,
                        "SoCYety"
                    )
                ),
                React.createElement(
                    "form",
                    { onSubmit: this.handleSubmit },
                    React.createElement(
                        "label",
                        null,
                        "Net ID"
                    ),
                    React.createElement("br", null),
                    React.createElement("input", { type: "text", value: this.state.netID, onChange: this.handleNetIDChange, placeholder: "Enter Net-ID" }),
                    React.createElement("br", null),
                    React.createElement("br", null),
                    React.createElement(
                        "label",
                        null,
                        "Password"
                    ),
                    React.createElement("br", null),
                    React.createElement("input", { type: "password", value: this.state.password, onChange: this.handlePassChange, placeholder: "Enter password" }),
                    React.createElement("br", null),
                    React.createElement("br", null),
                    React.createElement("input", { type: "submit", value: "Log in" }),
                    React.createElement("input", { type: "button", value: "Sign up" }),
                    React.createElement("br", null),
                    React.createElement("br", null),
                    this.state.error && React.createElement(
                        "p",
                        { "data-test": "error", onClick: this.dismissError },
                        "\u2716 ",
                        this.state.error
                    )
                )
            );
        }
    }]);

    return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));
