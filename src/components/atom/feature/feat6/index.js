let index = (props) => {
    return (
        <div className="col-lg-4 col-md-4"> <img src={props.image} alt="Monster admin template" />
            <h4 className="font-500">{props.label1}</h4>
            <p>{props.label2}<br />
            {props.label3}
            </p>
        </div>
    )
}

export default index;