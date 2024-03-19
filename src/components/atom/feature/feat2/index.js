let index = (props) => {
    return (
        <div className="col-lg-3 col-md-6">
            <img src={props.image} alt="Monster admin template" />
            <h4 className="font-500">{props.label}</h4>
            <p>{props.plabel}</p>
        </div>
    )
}

export default index;