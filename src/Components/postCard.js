function PostCard(props) {
  const displayPosts = (props) => {
    const { posts } = props;

    if (posts.length > 0) {
      return posts.map((post, index) => {
        console.log(post);
        return (
          <article className="post" key={post._id}>
            <div
              className="post-img"
              style={{ backgroundImage: `url(${post.image})` }}
            ></div>
            <p className="post-caption">{post.caption}</p>
          </article>
        );
      });
    } else {
      return <p>No posts</p>;
    }
  };
  return <>{displayPosts(props)}</>;
}

export default PostCard;
