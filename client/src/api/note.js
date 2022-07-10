export const uploadnote = async (note) => {
  await fetch("/note/upload", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(note),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

export const getallnotes = async (author) => {
  let notedata;
  await fetch(`/note/getall/${author}`)
    .then((res) => res.json())
    .then((data) => (notedata = data));

  return notedata;
};

export const updatenote = async (note, id) => {
  await fetch(`/note/update/${id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(note),
  });
};

export const deletenote = async (id) => {
  await fetch(`/note/delete/${id}`, {
    method: "POST",
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};
