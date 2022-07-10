export const uploadblog = async (blog) => {
  await fetch("/blog/upload", {
    method: "POST",
    // headers: {
    //   Accept: "application/json",
    //   "Content-Type": "multipart/form-data",
    // },
    body: blog,
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

export const getallblogs = async (author) => {
  let blogdata;
  await fetch(`/blog/getall/${author}`)
    .then((res) => res.json())
    .then((data) => (blogdata = data));
  return blogdata;
};

export const updateblog = async (blog, id) => {
  await fetch(`/blog/update/${id}`, {
    method: "POST",
    // headers: {
    //   Accept: "application/json",
    //   "Content-Type": "multipart/form-data",
    // },
    body: blog,
  });
};

export const deleteblog = async (id) => {
  await fetch(`/blog/delete/${id}`, {
    method: "POST",
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};
