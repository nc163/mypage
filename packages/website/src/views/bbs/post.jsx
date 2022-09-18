const post = (props) => {
  return (
    <div className="post" id={props.id}>
      <div>
        <span className="number">{props.id}</span>
        <span className="name">{props.name}</span>
        <span className="updated_at">{props.updated_at}</span>
      </div>
      <div class="message">{props.message}</div>
    </div>
  );
};

export default post;
