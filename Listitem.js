function Listitem() {
    return (
        <div className="col-md-4 offset-md-4">
          <div style={{ margin: "10px" }} className="list-group-item">
            <button style={{ float: "right" }}>
              <i className="fas fa-trash"></i>
            </button>
            <input
              style={{ float: "left", marginTop: "5px" }}
              type="checkbox"
            ></input>
            <h6>My first ListItem</h6>
          </div>
        </div>
    );
}

export default Listitem;