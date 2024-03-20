import FormChangePassword from "../../atom/form"

const Cards = () => {
    return (
        <div className="card">
            <div class="card-header border-0 font-weight-bold mt-2 " style={{ backgroundColor: "white" }}>
            Form Change Password
            </div>
            <div className="card-body">
                <FormChangePassword/>
            </div>
        </div>
    )
}

export default Cards