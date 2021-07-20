import React from "react";

import useFetch from "../../effects/useFetch.effect";

const FetchUser = ({ id }) => {
  const user = useFetch(`https://jsonplaceholder.typicode.com/users?id=${id}`);
  if (user) {
    return (
      <div className="card">
        <h2 className="user__name">{user.name}</h2>
        <p className="user__email">{user.email}</p>
      </div>
    );
  } else {
    return <div className="card">Sorry. There is nothing</div>;
  }
};

const FetchPost = ({ id }) => {
  const post = useFetch(`https://jsonplaceholder.typicode.com/posts?id=${id}`);
  if (post) {
    return (
      <div className="card">
        <h2 className="post__title">{post.title}</h2>
        <p className="post__email">{post.body}</p>
      </div>
    );
  } else {
    return <div className="card">Sorry. There is nothing</div>;
  }
};

const Contact = () => {
  return (
    <section className="contacts">
      <h2>Contacts</h2>
      <FetchUser id={2} />
      <FetchPost id={1} />
    </section>
  );
};

export default Contact;
