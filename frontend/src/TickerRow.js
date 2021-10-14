const TickerRow = (props) => {

  return (
    <tr>
      <td>
        {props.ticker.ticker}
      </td>
      <td>
        {props.ticker.limit}
      </td>
    </tr>
  );
}

export default TickerRow;
