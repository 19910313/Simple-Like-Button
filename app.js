// to declare a componentin React:
// -declare a class (old school)
// -define a function (new approach)
let like = false;
//like button component definition
const LikeButton = () => {
  const clickHandler = () => {
    like = !like;
    console.log(like ? "You`ve liked this" : "You`ve unliked this");
  };
  // return React.createElement("button", null, "Like");
  return (
    <button onClick={clickHandler}>
      {" "}
      <Icon />
      Like
    </button>
  );
};
//render our component in the div*root
let root = ReactDOM.createRoot(document.getElementById("root"));
// let rootFooter = ReactDOM.createRoot(document.getElementById("footer"));
root.render(
  // React.createElement(LikeButton, null)
  [<LikeButton />, <LikeButton />]
);
// rootFooter.render(
//   // React.createElement(LikeButton, null)
//   <LikeButton />
// );
const Icon = () => {
  return <i class="fa-regular fa-thumbs-up"></i>;
};
