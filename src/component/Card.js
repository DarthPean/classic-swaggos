/* eslint-disable jsx-a11y/anchor-is-valid */

function Card(props) {
  return (
    <div className="swaggos_collection">
      {props.NFTsList.map((item, i) => {
        return (
          <div className="swaggo" data-sort="a" key={i}>
            <img
              src={`https://ipfs.io/ipfs/QmRNJJbYRabSHYxBpR5bwXC52DDwd9Bs5pCnnLTgaj9AJG/${item.ID}.png`}
              alt=""
            />
            <p className="swaggo_name">Classic Swaggo #{item.ID}</p>
            <p className="swaggo_rank">Rarity Rank #{item.Rarity}</p>
            <p className="swaggo_owner"></p>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
