let index = (props) => {
    return (
        <div className="col-lg-3 col-md-6">
            <ul className="footer-link list-icons">
                <li><a href={props.label1}><i className="ti-angle-right"></i>{props.label6}</a></li>
                <li><a href={props.label2}><i className="ti-angle-right"></i>{props.label7}</a></li>
                <li><a href={props.label3}><i className="ti-angle-right"></i>{props.label8}</a></li>
                <li><a href={props.label4}><i className="ti-angle-right"></i>{props.label9}</a></li>
                <li><a href={props.label5}><i className="ti-angle-right"></i>{props.label10}</a></li>
            </ul>
        </div>
    )
}

export default index;