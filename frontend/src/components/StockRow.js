const StockRow = (props) => {

  return (<tr>
    <td>
      <a href={`/stocks/${props.stock.symbol}`}>{props.stock.symbol}</a>
    </td>
    <td>
      {props.stock.limit}
    </td>
  </tr>);
}

export default StockRow;
