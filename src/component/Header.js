function Header() {
  return (
    <section className="more_padding_up">
      <div className="left_section">
        <span className="section_title">
          Discover, collect, and mine extraordinary{" "}
          <span className="green_text">swaggos</span> NFTs
        </span>
        <span className="section_text">
          Limited 10,000 unique pixelated collection. What will the future of
          the Ethereum Classic have in store for us?
        </span>
        <span className="edged_button">Minting is live. 2ETC per swaggos</span>
        <br />
        <a href="https://twitter.com/classicswaggos?s=21" target="blank" className="nav_link button_type free_button">
          TWITTER
        </a>{" "}
        &nbsp; &nbsp; &nbsp;
        <a href="https://discord.gg/vrjaUZnVfb" target="blank" className="nav_link button_type free_button">
          DISCORD
        </a>
        &nbsp; &nbsp; &nbsp;
        <a href="https://t.me/classicswaggosnftofficial" target="blank" className="nav_link button_type free_button">
          TELEGRAM
        </a>
      </div>
      <div className="right_section">
        <img src="img/nfts.svg" alt="" className="right_box" />
      </div>
    </section>
  );
}

export default Header;
