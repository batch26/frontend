let index = () => {
    return (
        <form className="form-horizontal form-material" id="loginform" action="index.html">
            <h3 className="box-title m-b-20">Recover Password</h3>
            <div className="form-group">
                <div className="col-xs-12">
                    <label>Username</label>
                    <input className="form-control" type="text" required="true" placeholder="" />
                </div>
            </div>
            <div className="form-group">
                <div className="col-xs-12">
                    <label>Password</label>
                    <input className="form-control" type="text" required="true" placeholder="" />
                </div>
            </div>
            <div className="form-group text-center m-t-20">
                <div className="col-xs-12">
                    <button className="btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light" type="submit">Reset</button>
                </div>
            </div>
        </form>
    )
}

export default index;