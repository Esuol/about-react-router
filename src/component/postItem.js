import React, { Component } from 'react'
class PostItem extends Component {
    constructor (props) {
      super(props)
      this.state = {
        vote: 0
      }
    }
    handleClick () {
      let vote = this.state.vote
      vote ++
      this.setState({
        vote
      })
    }
    render () {
      const {title, author, date} = this.props
      return (
        <li>
          <div>
            {title}
          </div>
          <div>
            创建人：{author}
          </div>
          <div>
            创建时间：{date}
          </div>
          <button onClick={() => {
            this.handleClick()
          }}>
          点赞
          </button>
          <span>
            {this.state.vote}
          </span>
        </li>
      )
    }
}
export default PostItem