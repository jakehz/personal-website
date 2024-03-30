function Main() {
  const style = {
    zIndex: 2,
    color: "white",
    "a:link": "white",
    "a:unvisited": "white",
  };
  return (
    <div style={style} class="center">
      <h1>Hi there</h1>
      <h2>My name is Jacob Hernandez, I'm a software engineer.</h2>
      <p>
        You can view my resume{" "}
        <a
          style={style}
          href="https://drive.google.com/drive/folders/1b26qinS5cujA71rPf8Asql1_SivXRxiG?usp=drive_link"
        >
          here.
        </a>
      </p>
    </div>
  );
}

export default Main;
