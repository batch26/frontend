let index = (props) => {
    return (
        <div className="col-md-4 m-t-40">
            <div className="image-box"> <img src={props.image} alt="demo1" className="img-responsive" />
                <div className="image-overly"> <a className="btn btn-rounded btn-info" href="../main/index2.html" target="_blank">Live Preview</a> </div>
            </div>
            <h5 className="p-20">{props.label}</h5> </div>
    )
}

export default index;