import React, { Component } from 'react'

export default class ProductForm extends Component {
    render() {
        return (
            <form>
                <div className="form-group">
                <label className="form-label">Product Id</label>
                <input type="text" className="form-control" placeholder="Product Id" />
                </div>
                <div className="form-group">
                <label className="form-label">Product Name</label>
                <input type="text" className="form-control" placeholder="Product Name" />
                </div>
                <div className="form-group">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" placeholder="Password" />
                </div>
                <div className="form-group">
                <label className="form-label">Textarea</label>
                <textarea className="form-control" placeholder="Textarea" rows={1} defaultValue={""} />
                </div>
                <div className="form-group">
                <label className="form-label w-100">File input</label>
                <input type="file" />
                <small className="form-text text-muted">Example block-level help text here.</small>
                </div>
                <div className="form-group">
                <label className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" />
                    <span className="custom-control-label">Check me out</span>
                </label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}
