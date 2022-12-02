function App() {
  const [quotes, setQuotes] = React.useState([]);
  const [randomQuote, setRandomQuote] = React.useState("");
  const [color, setColor] = React.useState("#16a085");

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();

      setQuotes(data);
      let index = Math.floor(Math.random() * data.length);
      setRandomQuote(data[index]);
    }
    fetchData();
  }, []);

  const getNewQuote = () => {
    const colors = [
      "#16a085",
      "#27ae60",
      "#2c3e50",
      "#f39c12",
      "#e74c3c",
      "#9b59b6",
      "#FB6964",
      "#342224",
      "#472E32",
      "#BDBB99",
      "#77B1A9",
      "#73A857",
    ];
    let index = Math.floor(Math.random() * quotes.length);
    let randomColor = Math.floor(Math.random() * colors.length);
    setRandomQuote(quotes[index]);
    setColor(colors[randomColor]);
  };

  return (
    <div style={{ backgroundColor: color }}>
      <div className="container container-fluid">
        <div className="box">
          {randomQuote ? (
            <div>
              <p className="quote-text" style={{ color: color }}>
                <i class="fa fa-quote-left" style={{ color: color }}></i>
                <span> </span>
                {randomQuote.text}
              </p>
              <h5 className="author" style={{ color: color }}>
                - {randomQuote.author || "No author"}
              </h5>
            </div>
          ) : (
            <h5>loading</h5>
          )}

          <div className="row">
            <a
              className="btn twitter"
              style={{ backgroundColor: color }}
              href={
                "https://twitter.com/intent/tweet?hashtags=quotes&related=thusmiley&text=" +
                encodeURIComponent(
                  '"' + randomQuote.text + '"' + randomQuote.author
                )
              }
              target="_blank"
            >
              Tweet
            </a>
            <a
              className="btn tumblr"
              href="#"
              style={{ backgroundColor: color }}
            >
              Share
            </a>
            <button
              onClick={getNewQuote}
              className="btn new-quote"
              style={{ backgroundColor: color }}
            >
              New quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
