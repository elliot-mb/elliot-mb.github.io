import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';


// pasta talking to the github api
export class GitResource extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loaded: "no", // options: yes, no, error
      errmsg: null,
      code: null,
      item: null
    }
    this.result = "";
    this.requested = false;
  }

  getResource(url){
    const siteRoot = "https://github.com";
    const re = new RegExp(siteRoot);
    if(!url.match(re)) { 
      const e = `Attempting to load ${url}, it was incorrectly formatted.`;
      console.error(e);
      this.setState({loaded: "error", errmsg: e}); 
      return {};
    }
    const apiRoot = "https://raw.githubusercontent.com";
    const call = `${apiRoot}${url.split(siteRoot)[1]}/master/README.md`;
    console.log(`GET ${call}`);
    let self = this;
    fetch(call).then(r => {
      //this.setState(c));
      if(!r.ok) {
        const e = `Attempting to load ${url}, got status ${r.status}.`;
        console.error(e);
        this.setState({loaded: "error", errmsg: e}); 
        return "error";
      }else{
        return r.body.getReader();
      }
    }
    ).then(reader => { 
        if(reader !== "error"){
          reader.read().then(function processText({done, value}) {
            if(done){
              //this.setState({loaded: "yes", item: value});
              //self.result += ",101";
              const str = new TextDecoder("utf-8").decode(Uint8Array.from(self.result.split(/,/)));
              //console.log(str);
              //console.log((Array.of(chars))[0].split(/,/).reduce((x, y) => `${x} ${y}`, ""));
              self.setState({loaded: "yes", item: str});
              return;
            }
            const chunk = value; 
            self.result += chunk;
            return reader.read().then(processText);
          })
        }else{ return; }
      }
    );
  }

  componentDidMount(){ 
    if(!this.requested) { this.getResource(this.props.url); this.requested = true; }
  }

  render(){
    if(this.props.display){
      switch(this.state.loaded){
        case "no":
          return( 
            <div>
              <p>Fetching from github...</p>
            </div>
          )
        case "error":
          return(
            <div>
              <h2>An error occured</h2>
              <p>{this.state.errmsg}</p>
              <p><strong>This repository may be private.</strong></p>
            </div>
          )
        default:
          return(
            <div>
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>{`${this.state.item}`}</ReactMarkdown>
            </div>
          )
      }
    }else{
      return(<></>);
    }
  }
}