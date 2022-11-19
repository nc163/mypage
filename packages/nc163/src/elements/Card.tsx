function Card(props: CardProps) {
  return (
    <div className="card">
        <div className="card-header font-weight-bold">{props.title}</div>
        <ul className='list-group list-group-flush'>
            {props.items.map((item) => {
                if(item.link) {
                    return (<a className="list-group-item list-group-item-action text-body" href={item.link} target="_blank" rel="noreferrer">
                        <img src={item.logo} className="align-self-center" alt="logo" width="20" height="20"/>&nbsp;<span>{item.title}</span>
                    </a>)
                }
                else {
                    return (<span className="list-group-item list-group-item-action text-body">
                        <img src={item.logo} className="align-self-center" alt="logo" width="20" height="20"/>&nbsp;<span>{item.title}</span>
                    </span>)
                }
            })}
        </ul>
    </div>
  );
}

export default Card;
