export const AuthorCard = ({ author }) => {
  return (
    <div>
      <h2>{author.name}</h2>
      <h3>{author.description}</h3>
      <img src={author.avatar.file.url} alt="" style={{ width: "80px" }} />
    </div>
  );
};
