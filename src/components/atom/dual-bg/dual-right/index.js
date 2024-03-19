let index = (props) => {
    return (
        <div className="col-md-6 text-right"> <small className="text-info">{props.label1}</small>
            <h2 className="text-white">{props.label2}<br /> {props.label3}</h2>
            <img src={props.image} alt="image" className="img-responsive m-t-30" />
        </div>
    )
}

export default index;