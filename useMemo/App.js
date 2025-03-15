function App() {
  stateStore.resetStateIndex();
  console.log("✅✅✅ 랜더링 ✅✅✅");

  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleClick = useMemo(() => {
    console.log(`Count is: ${count()}`);
  }, [count]); // count() → count 수정!

  // const handleClick = () => {
  //   console.log(`Count is: ${count}`);
  // };
  function increase() {
    setCount(count() + 1);
  }

  useEffect(() => {
    console.log("🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯");
  }, [handleClick]);

  let app = document.getElementById("app");
  if (!app.innerHTML) {
    app.innerHTML = `
      <button id="a"> 숫자 올리기(캐시값 사용x) </button>
      <button id="b"> 캐시값 사용 </button>
      <input id="textInput" placeholder="Type something" />
      <p id="textOutput"></p>
    `;

    document.getElementById("a").addEventListener("click", increase);
    document.getElementById("b").addEventListener("click", handleClick);

    document.getElementById("textInput").addEventListener("input", (e) => {
      setText(e.target.value);
    });
  }

  document.getElementById("textInput").value = text();
}

App();
