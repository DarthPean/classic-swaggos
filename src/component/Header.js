function Header() {
  return (
    <section className="more_padding_up">
      <div className="left_section">
        <span className="section_title">
          Discover, collect, and mint next level{" "}
          <span className="green_text">Swaggos</span> NFTs
        </span>
        <span className="section_text">
           A Limited collection of 10,000 unique pixelated NFTs.
        </span>
        <span className="section_text yellow_text">
        Regular sale is active, join our socials to be alerted to future minting discounts!
      </span>
        <a href="/#MINT" className="nav_link button_type free_button">
          Mint now!
        </a>
        <br />
        <br />
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
        <img src="img/nfts.png" alt="" className="right_box" />
      </div>
    </section>
  );
}

export default Header;
