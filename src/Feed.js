import "./styles.css";
import axios from "axios";
import React from "react";
import Feedcard from "./Feedcard";

export default function Feed() {
  const [feeds, setFeeds] = React.useState([]);

  React.useEffect(() => {
    async function getFeed() {
      let response;
      try {
        response = await axios.get("http://localhost:8000/api/post");
        if (response !== undefined) {
          setFeeds(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getFeed();
  }, []);

  return (
    <main className="container">
      <div className="row g-5">
        <div className="col-md-8">
          <h3 className="pb-4 mb-4 border-bottom">Posts</h3>
          <div>
            {feeds.map((post) => {
              return <Feedcard title={post.title} body={post.body} />;
            })}
          </div>
        </div>

        <div className="col-md-4">
          <div className="position-sticky sticky">
            <div className="p-4 mb-3 bg-light rounded">
              <h4 className="fst-italic">Popular Posts</h4>
              <ol className="list-unstyled mb-0">
                <li>
                  <a href="#">System Design Tutorial</a>
                </li>
                <li>
                  <a href="#">ABC of Security</a>
                </li>
              </ol>
            </div>

            <div className="p-4 mb-3 bg-light rounded">
              <h4 className="fst-italic">Popular Courses</h4>
              <ol className="list-unstyled mb-0">
                <li>
                  <a href="#">HTML Basics</a>
                </li>
                <li>
                  <a href="#">Learn Javascript</a>
                </li>
                <li>
                  <a href="#">Lessons from the book</a>
                </li>
              </ol>
            </div>

            <div className="p-4">
              <h4 className="fst-italic">Elsewhere</h4>
              <ol className="list-unstyled">
                <li>
                  <a href="#">GitHub</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Facebook</a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
