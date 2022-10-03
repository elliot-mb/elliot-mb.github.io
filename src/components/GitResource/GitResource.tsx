import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { git } from '../../data/api_endpoints';
import { github } from '../../data/urls';

type Props = {
  url: string,
  display: boolean
}

type State = {
  loaded: string,
  errmsg?: string,
  item?: string
}

export class GitResource extends React.Component<Props, State> {
  constructor(props: Props){
    super(props);
    this.state = {
      loaded: "no", // options: yes, no, error
      errmsg: undefined,
      item: undefined
    }
    this.setError = this.setError.bind(this)
    this.setItem = this.setItem.bind(this)
  }

  setError(errmsg: string){
    this.setState({loaded: "error", errmsg: errmsg, item: undefined})
  }

  setItem(item: string){
    this.setState({loaded: "yes", errmsg: undefined, item: item})
  }

  getResource(url: string){
    let isValidGitRepo: boolean = url.split("https://github.com").length === 2; 
    if (isValidGitRepo) {
      const fetchURL: string = `${git.endpoint}${url.split(github)[1]}/master/README.md`;
      fetch(fetchURL)
        .then(response => {
          if (response.ok) return response.text()
          else throw new Error(`Error code ${response.status}`)
        })
        .then(text => this.setItem(text))
        .catch(error => this.setError(error.message))
    }else{
      this.setError(`Invalid repository url '${url}'`)
    }
  }

  componentDidMount(){ 
    if(this.state.loaded === "no") { 
      this.getResource(this.props.url);
    }
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
              <h2>{this.state.errmsg}</h2>
              <p><strong>This repository may be private.</strong></p>
            </div>
          )
        case "yes":
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