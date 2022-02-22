/* eslint-disable jsx-a11y/anchor-is-valid */

function Card(props) {
  return (
    <div className="swaggos_collection">
      {props.NFTsList.map((item, i) => {
        return (
          <div className="swaggo" data-sort="a" key={i}>
            <a href={`https://blockscout.com/etc/mainnet/token/0x578fea35147ab2a4a821df70332d81f68d2b1691/instance/${item.ID}/token-transfers`} target="_blank">
            <img
              src={`https://ipfs.io/ipfs/QmRNJJbYRabSHYxBpR5bwXC52DDwd9Bs5pCnnLTgaj9AJG/${item.ID}.png`}
              alt=""
            /></a>
            <p className="swaggo_name">Classic Swaggo Rank #{item.Rarity}</p>
            <p className="swaggo_rank">Token ID #{item.ID}</p>
            <a href={`https://blockscout.com/etc/mainnet/token/0x578fea35147ab2a4a821df70332d81f68d2b1691/instance/${item.ID}/token-transfers`} target="_blank">
            <p className="swaggo_owner">Click to see if minted</p>
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
