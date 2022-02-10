import React, { Component } from "react";
import './Add.css'


class Add extends React.Component {
    render() {
        return (
            <div>
                <form className="form-horizontal">
                    <div className="row mb-3">
                        <label htmlFor="inputCode" className="col-sm-2 col-form-label">Customer Code</label>
                        <div className="col-sm-6">
                            <input type="text" className="form-control" id="inputCode" />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label htmlFor="inputName" className="col-sm-2 col-form-label">Customer Name</label>
                        <div className="col-sm-6">
                            <input type="text" className="form-control" id="inputName" />
                        </div>
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
                            <button type="submit" className="btn btn-primary btn-lg btn-space">Submit</button>
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