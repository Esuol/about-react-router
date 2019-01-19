import React, {Component} from 'react'
import PostItem from './postItem.js'
const data = [
  {title: 't1',author:'zhangsan',date:'2019/1/1'},
  {title: 't2',author:'zhangsi',date:'2019/1/2'},
  {title: 't3',author:'zhangwu',date:'2019/1/3'}
]
class PostList extends Component {
  render () {
    return (
      <div>
        帖子列表
        <ul>
          {data.map( item =>
            <PostItem
              title={item.title}
              author={item.author}
              data={item.date}
            />
          )}
        </ul>
      </div>
    )
  }
}
export default PostList