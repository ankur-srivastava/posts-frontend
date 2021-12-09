export default function Feedcard(props) {
  return (
    <div className="row p-4 mb-3 rounded">
      <div className="column bg-light feedvote">
        <img src="images/up.png" alt="upvote" className="vote" />
        <div className="count">20</div>
        <img src="images/down.png" alt="downvote" className="vote" />
      </div>
      <div className="column feedtext">
        <h4>{props.title}</h4>
        <p className="mb-0">{props.body}</p>
      </div>
    </div>
  );
}
