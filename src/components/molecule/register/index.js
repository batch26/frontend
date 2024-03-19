let index = (props) => {
    return (
        <div className="form-group m-t-20" >
            <div className="col-xs-12">
                <label>{props.label}</label>
                <input className="form-control" type={props.type} name={props.name} required=""></input>
            </div>
        </div >
    )
}

export default index;