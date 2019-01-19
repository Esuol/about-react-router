import  React from 'react'
import PostItem from './PostItem-a.js'
export default class PostList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      posts: []
    }
    this.timer = null
    this.handleClick = this.handleVote.bind(this)
  }
  componentDidMount () {
    this.timer = setTimeout(()=>{
      this.setState({
        posts: [
          {id: 1,title: 't1',author:'zhangsan',date:'2019/1/1',vote: 0},
          {id: 2,title: 't2',author:'zhangsi',date:'2019/1/2',vote: 0},
          {id: 3,title: 't3',author:'zhangwu',date:'2019/1/3',vote: 0}
        ]
      })
    },1000)
  }
  componentWillUnmount () {
    if(this.timer) clearTimeout(this.timer)
  }
  handleVote (id) {
    console.log(this.state.posts)
    const posts = this.state.posts.map( item => {
      return item.id === id ? { ...item,vote: ++ item.vote} : item
    })
    this.setState({
      posts
    })
  }
  render () {
    return (
      <div>
        帖子列表：
        <ul>
          {this.state.posts.map( item =>
              <PostItem
                key={item.id}
                post={item}
                onVote={this.handleVote}
              />
            )}
        </ul>
      </div>
    )
  }
}