import React from 'react';
//step4
import axios from 'axios'

import './App.css';

class App extends React.Component{
  //step0 justshowing form shape
  //step1 using state and testing it
  state ={
    title:'',
    body:'',
    posts:[]

  };
  componentDidMount = () => {
    this.getBlogPost();
  }
  
  getBlogPost = ()=>{
    axios.get('/api')
    .then((response)=>{
      const data = response.data;
      this.setState({posts:data})
      console.log('Data has been received!!');
    })
    .catch(()=>{
      alert("Error retrieving data")
    })
  }

  //after state 2 changing state value...
  // event=>this parameter is use for accessing all the event in the form 
  handleChange = ({target}) =>{
    const {name, value} = target;
    this.setState({[name]:value});
    
    // const target= event.target;
    //Here you can test the data in the event
    // console.log(target)
    // const name = target.name;
    // const value = target.value;

    // this.setState({
      // [name]:value
    // });
  };

  //form submiting 3
  submit = (event) =>{
    event.preventDefault();
    const payload = {
      title: this.state.title,
      body: this.state.body
    };

    //step4
    axios({
      url: '/api/save',
      method: "POST",
      data: payload
    })
    .then(()=>{
      console.log("Data has been sent to the serverrr");
      this.resetUserInputs();
      this.getBlogPost();

    })
    .catch(()=>{
      console.log("Internal server error");
    })
  };

  resetUserInputs = () =>{
    this.setState({
      title: '',
      body: ''
    });
  };

  displayBlogPost = (posts) =>{

    if (!posts.length) return null;

    return posts.map((post,ind) => (
      <div key={ind} className="blog-post_display">
          <h3>{post.title}</h3>
          <p>{post.body}</p>
      </div>
    ));
  };
  render(){
    console.log("state:",this.state)
    return (
    <div className="app">
      <h2> Wellcome to the MZosn Blog-Post App</h2>
      <form onSubmit={this.submit}>
        <div className='form-input'>
          <input
            type="text"
            name="title"
            placeholder="Title"
            // value='' before state
            value={this.state.title}
            onChange={this.handleChange}
            />
        </div>
        <div className="form-input">
          <textarea
           name="body"
           placeholder="Write something here................."
            cols="30"
            rows="10"
            // value=""
            value={this.state.body}
            onChange={this.handleChange}
            ></textarea>
        </div>
        <button>Submit</button>
      </form>
      <div>
        {this.displayBlogPost(this.state.posts)}
      </div>
    </div>
    )
  }
   
}
export default App;
