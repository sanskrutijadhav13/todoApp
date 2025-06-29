export default function TodoItem1() {
    let task="buy milk";
    let date="12/12/2022"

    return <div className="container ">
        <div className="row my-row">
            <div className="col-6">
                {task}
            </div>
            <div className="col-4">
                {date}
            </div>
            <div className="col-2">
                <button type="button" className="btn btn-danger">Delete</button>
            </div>
        </div>
    </div>
}