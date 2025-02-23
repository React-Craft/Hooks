function App() {
  resetStateIndex();
  console.log("✅✅✅ 랜더링 ✅✅✅");

  const [getCount, setCount] = useState(0);
  const [a, setA] = useState("True");
  const [b, setB] = useState(0);

  useEffect(() => {
    console.log("🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯");
    setCount(getCount() + 1);
  }, [a()]);

  // useEffect(() => {
  //   console.log("🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌");
  //   setCount(getCount() + 1);
  // }, [a(), b()]);

  function handleUpdateText() {
    setA(a() === "True" ? "false" : "True");
  }

  function increase() {
    setB(b() + 1);
  }

  // console.log(a(), b());

  document.getElementById("app").innerHTML = `
    <h1>Count: ${getCount()}</h1>
    <button id="a"> 의존성에 넣을 예정 ${a()}</button>
    <button id="b">의존성에 넣지 않을 예정 ${b()}</button>
  `;

  document.getElementById("a").addEventListener("click", handleUpdateText);
  document.getElementById("b").addEventListener("click", increase);
}

App();
