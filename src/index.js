import React ,{useState,useEffect}from 'react';
import './style.css';
import ReactDOM from 'react-dom';


function App(){
    const[quotes,setQuotes]=React.useState([]);
    const[randomQuote,setRandomQuote]=React.useState([]);

    React.useEffect(()=>{
        async function fetchData(){
            const response= await fetch("https://type.fit/api/quotes")
            const data=await response.json();

            setQuotes(data);
            let randindex=Math.floor(Math.random()*data.length);
            setRandomQuote(data[randindex]);
        }
        fetchData();
    },[]);


    const getNewQuote=()=>{
        let randindex=Math.floor(Math.random()*quotes.length);
        setRandomQuote(quotes[randindex]);
    }

    return(
        <div>
            <div id="quote-box">
                <div id="quote-text">
                    <i className="fas fa-quote-left">  <span id="text">
                        {randomQuote ? (
                            <>
                            {randomQuote.text}
                            </>
                        ):(
                            <h2>Loading...</h2>
                        )}
                        </span>
                    </i>
                </div>
                <div id="quote-author"><span id="author">-{randomQuote.author||"no author"}</span></div>
                <div className="buttons">
                    <a href="https://twitter.com/" id="tweet-quote" class="button" title="post this tweet">
                    <i className="fab fa-twitter"></i>
                    </a>
                    <button id="new-quote" className="button" onClick={getNewQuote}>New Qoute</button>
                </div>
            </div>
       </div>
    )
}

ReactDOM.render(<App/>,document.getElementById("app"));

