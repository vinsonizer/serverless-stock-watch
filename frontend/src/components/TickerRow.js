const TickerRow = (props) => {

  return (<tr>
    <td>
      <a href={`/ticker/${props.ticker.ticker}`}>{props.ticker.ticker}</a>
    </td>
    <td>
      {props.ticker.limit}
    </td>
  </tr>);
}

export default TickerRow;
