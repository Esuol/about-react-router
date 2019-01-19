import React from 'react'
import PropTypes from 'prop-types'
export default function PostItem (props) {
  const handleClick = () => {
    console.log(props.post.id)
    props.onVote(props.post.id)
  }
  const { post } = props
  return (
    <li>
      <div>
        {post.title}
      </div>
      <div>
        创建人：
        <span>
          {post.author}
        </span>
      </div>
      <div>
        时间：
        <span>
          {post.date}
        </span>
      </div>
      <div>
        <button
          onClick={handleClick}>
        点赞
        </button>
        <span>
          {post.vote}
        </span>
      </div>
    </li>
  )
}
PostItem.propTypes = {
  // post: PropTypes.object,
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
    date: PropTypes.string,
    vote: PropTypes.number,
  }),
  onVote: PropTypes.func
}