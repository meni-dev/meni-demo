import React, { Component } from "react";
import './Add.css'


class Add extends React.Component {

    constructor(props) {
        super(props);
        this.state = { code: "", name: "", codeErrorMessage: "", nameErrorMessage: "" };
    }

    onCodeChange = (event) => {
        this.setState({ code: event.target.value });
    }
    onNamechange = (event) => {
        this.setState({ name: event.target.value });
    }

    saveCustomerInfo = () => {

        // Code
        if (this.state.code === "") {
            this.setState({ codeErrorMessage: "Code is mandatory" });
        } else {
            this.setState({ codeErrorMessage: "" });
        }

        //Name
        if (this.state.name === "") {
            this.setState({ nameErrorMessage: "name is mandatory" });
        } else {
            this.setState({ nameErrorMessage: "" });
        }
    }


    render() {
        return (
            <div>
                <form className="form-horizontal">
                    <div className="row mb-3">
                        <label htmlFor="inputCode" className="col-sm-2 col-form-label">Customer Code</label>
                        <div className="col-sm-6">
                            <input type="text" className="form-control" id="inputCode" value={this.state.code} onChange={this.onCodeChange} />
                        </div>
                        <span className="text-danger">{this.state.codeErrorMessage}</span>
                    </div>

                    <div className="row mb-3">
                        <label htmlFor="inputName" className="col-sm-2 col-form-label">Customer Name</label>
                        <div className="col-sm-6">
                            <input type="text" className="form-control" id="inputName" value={this.state.name} onChange={this.onNamechange} />
                        </div>
                        <span className="text-danger">{this.state.nameErrorMessage}</span>
                    </div>

                    <div className="row mb-3">
                        <label htmlFor="inputAge" className="col-sm-2 col-form-label">Age</label>
                        <div className="col-sm-6">
                            <input type="number" className="form-control" id="inputAge" />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label htmlFor="inputMobile" className="col-sm-2 col-form-label">Mobile Number</label>
                        <div className="col-sm-6">
                            <input type="number" className="form-control" id="inputMobile" />
                        </div>
                    </div>

                    <fieldset className="row mb-3">
                        <label className="col-sm-2 col-form-label">Gender</label>
                        <div className="col-sm-10">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="rdoGender" id="male" value="Male" />
                                <label className="form-check-label" htmlFor="male">
                                    Male
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="rdoGender" id="female" value="Female" />
                                <label className="form-check-label" htmlFor="female">
                                    Female
                                </label>
                            </div>

                        </div>
                    </fieldset>

                    <div className="row mb-3">
                        <label className="col-sm-2 col-form-label" htmlFor="country">Country</label>
                        <div className="col-sm-6">
                            <select className="form-select" id="country">
                                <option >Choose Country...</option>
                                <option value="1">India</option>
                                <option value="2">China</option>
                                <option value="3">USA</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2">

                        </div>
                        <div className="col-sm-6">
                            <button type="button" onClick={this.saveCustomerInfo} className="btn btn-primary btn-lg btn-space">Submit</button>
                            <button type="button" className="btn btn-primary btn-lg">Clear</button>
                        </div>
                    </div>

                </form>
                <br />
                <br />
                <br />
                <br />
                <br />
                <a href="/" >Go Back Customer Table</a>
            </div>
        )
    };

}



export default Add;