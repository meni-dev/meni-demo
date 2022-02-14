import React, { Component } from "react";
import './Add.css'
import axios from "axios"


class Add extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            code: "",
            name: "",
            age: "",
            phoneNumber: "",
            PinCode: "",
            country: "0",
            gender: "",
            codeErrorMessage: "",
            nameErrorMessage: "",
            ageErrorMessage: "",
            phoneNumberErrorMessage: "",
            pinCodeErrorMessage: "",
            countryErrorMessage: "",
            genderErrorMessage: ""
        };
    }

    onCodeChange = (event) => {
        this.setState({ code: event.target.value });
    }
    onNamechange = (event) => {
        this.setState({ name: event.target.value });
    }
    onAgechange = (event) => {
        this.setState({ age: event.target.value });
    }
    onphoneNumberchange = (event) => {
        this.setState({ phoneNumber: event.target.value });
    }
    OnPinCodechange = (event) => {
        this.setState({ PinCode: event.target.value });

    }
    oncountryChange = (event) => {
        this.setState({ country: event.target.value });
    }

    onGenderChange = (event) => {
        this.setState({ gender: event.target.value });
    }

    onClear = () => {
        this.setState({ code: "", name: "", age: "", PinCode: "", country: "", gender: "", phoneNumber: "" });
    }



    saveCustomerInfo = () => {
        var isValidForm = true;

        // Code
        if (this.state.code === "") {
            isValidForm = false;
            this.setState({ codeErrorMessage: "*Code is mandatory" });
        } else {
            this.setState({ codeErrorMessage: "" });
        }

        //Name
        if (this.state.name === "") {
            isValidForm = false;
            this.setState({ nameErrorMessage: "*Name is mandatory" });
        } else {
            this.setState({ nameErrorMessage: "" });
        }

        //age
        var age = parseInt(this.state.age);
        if (isNaN(age)) {
            isValidForm = false;
            this.setState({ ageErrorMessage: "*Age is mandatory" });
        } else if (age > 100 || age < 1) {
            isValidForm = false;
            this.setState({ ageErrorMessage: "*Please provide valid age" })
        }
        else {
            this.setState({ ageErrorMessage: "" });
        }
        //phoneNumber
        var phoneNumber = parseInt(this.state.phoneNumber);
        if (isNaN(phoneNumber)) {
            isValidForm = false;
            this.setState({ phoneNumberErrorMessage: "*Enter valid phone number" })
        } else {

            if (this.state.phoneNumber.length != 10) {
                isValidForm = false;
                this.setState({ phoneNumberErrorMessage: "*Phone number should be 10 numbers" });
            }
            else {
                this.setState({ phoneNumberErrorMessage: "" });
            }
        }

        // PinCode
        if (this.state.PinCode === "") {
            isValidForm = false;
            this.setState({ pinCodeErrorMessage: "*PinCode is mandatory" });
        } else {
            this.setState({ pinCodeErrorMessage: "" });
        }
        //country
        var country = parseInt(this.state.country);
        if (country == 0) {
            isValidForm = false;
            this.setState({ countryErrorMessage: "choose countryname" })
        }
        else {
            this.setState({ countryErrorMessage: "" });
        }

        // Gender

        if (this.state.gender === "Male" || this.state.gender === "Female") {
            this.setState({ genderErrorMessage: "" });
        } else {
            isValidForm = false;
            this.setState({ genderErrorMessage: "*Please choose gender" });
        }

        if (isValidForm) {
            var data = {
                customerCode: this.state.code,
                customerName: this.state.name,
                mobileNumber: this.state.phoneNumber,
                age: parseInt(this.state.age),
                country: this.state.country
            };
            axios.post("https://pos-api-react.azurewebsites.net/api/customer/addcustomer", data)
                .then(function (response) {
                    alert(JSON.stringify(response.data));

                })
                .catch(function () {
                    alert("error")
                });
            this.onClear();
        }


    }

    render() {
        return (
            <div className="container">
                <h1>Add Customer Information</h1><hr></hr><br></br>
                <form className="form-horizontal">
                    <div className="row mb-3">
                        <label htmlFor="inputCode" className="col-sm-2 col-form-label">Customer Code</label>
                        <div className="col-sm-6">
                            <input type="text" className="form-control" id="inputCode" value={this.state.code} onChange={this.onCodeChange} />
                        </div>
                        <span className="text-danger col-sm-2">{this.state.codeErrorMessage}</span>
                    </div>

                    <div className="row mb-3">
                        <label htmlFor="inputName" className="col-sm-2 col-form-label">Customer Name</label>
                        <div className="col-sm-6">
                            <input type="text" className="form-control" id="inputName" value={this.state.name} onChange={this.onNamechange} />
                        </div>
                        <span className="text-danger  col-sm-2">{this.state.nameErrorMessage}</span>
                    </div>

                    <div className="row mb-3">
                        <label htmlFor="inputAge" className="col-sm-2 col-form-label">Age</label>
                        <div className="col-sm-6">
                            <input type="number" className="form-control" id="inputAge" value={this.state.age} onChange={this.onAgechange} />
                        </div>
                        <span className="text-danger  col-sm-2">{this.state.ageErrorMessage}</span>
                    </div>

                    <div className="row mb-3">
                        <label htmlFor="inputMobile" className="col-sm-2 col-form-label">Mobile Number</label>
                        <div className="col-sm-6">
                            <input type="number" className="form-control" id="inputMobile" value={this.state.phoneNumber} onChange={this.onphoneNumberchange} />

                        </div>
                        <span className="text-danger  col-sm-2">{this.state.phoneNumberErrorMessage}</span>
                    </div>

                    <div className="row mb-3">
                        <label htmlFor="inputPinCode" className="col-sm-2 col-form-label">Pin Code</label>
                        <div className="col-sm-6">
                            <input type="number" className="form-control" id="inputPinCode" value={this.state.PinCode} onChange={this.OnPinCodechange} />

                        </div>
                        <span className="text-danger col-sm-2">{this.state.pinCodeErrorMessage}</span>
                    </div>

                    <fieldset className="row mb-3">
                        <label className="col-sm-2 col-form-label">Gender</label>
                        <div className="col-sm-6">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="rdoGender" id="male" value="Male"
                                    onChange={this.onGenderChange} />
                                <label className="form-check-label" htmlFor="male">
                                    Male
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="rdoGender" id="female" value="Female"
                                    onChange={this.onGenderChange} />
                                <label className="form-check-label" htmlFor="female">
                                    Female
                                </label>
                            </div>

                        </div>
                        <span className="text-danger col-sm-2">{this.state.genderErrorMessage}</span>
                    </fieldset>

                    <div className="row mb-3">
                        <label className="col-sm-2 col-form-label" htmlFor="country">Country</label>
                        <div className="col-sm-6">
                            <select className="form-select" id="country" onChange={this.oncountryChange}>
                                <option value="0">Choose Country...</option>
                                <option value="1">India</option>
                                <option value="2">China</option>
                                <option value="3">USA</option>
                            </select>
                        </div>
                        <span className="text-danger col-sm-2">{this.state.countryErrorMessage}</span>
                    </div>
                    <div className="row">

                        <div className="col-sm-6">
                            <button type="button" onClick={this.saveCustomerInfo} className="btn btn-primary btn-lg btn-space">Submit</button>
                            <button type="button" className="btn btn-primary btn-lg" onClick={this.onClear}>Clear</button>
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