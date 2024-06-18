import "./write.css";
import Topbar from "../../topbar/topbar";

export default function write() {
  return (
    <>
      <Topbar></Topbar>
      <div className="write">
        <img
          src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          alt=""
          className="writeimg"
        />
        <form className="writeform">
          <div className="writeformgroup">
            <label htmlFor="fileinput">
              <i class="writeicon fa-solid fa-plus"></i>
            </label>
            <input type="file" id="fileinput" style={{ display: "none" }} />
            <input
              type="text"
              placeholder="Title"
              className="writepost"
              autoFocus="true"
            />
          </div>
          <div className="writeformgroup">
            <textarea
              placeholder="Tell your story.."
              type="text"
              className="writeinput writetext"
            ></textarea>
          </div>

          <button className="writesubmit">Publish</button>
        </form>
      </div>
    </>
  );
}
