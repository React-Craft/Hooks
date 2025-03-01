function App() {
  stateStore.resetStateIndex();
  console.log("✅✅✅ 랜더링 ✅✅✅");

  const [getCount, setCount] = useState(0);
  const [a, setA] = useState("True");
  const [b, setB] = useState(0);
  const [obj, setObj] = useState({ value: 0 });
  useEffect(() => {
    console.log("🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯");
    // setCount(getCount() + 1);
  }, [obj().value]);

  // useEffect(() => {
  //   console.log("🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌");
  //   setCount(getCount() + 1);
  // }, [a(), b()]);
  console.log(obj().value);

  function handleUpdateText() {
    setA(a() === "True" ? "false" : "True");
  }

  function increase() {
    setB(b() + 1);
  }

  function increaseObject() {
    setObj({ value: obj().value });
  }

  // console.log(a(), b());

  document.getElementById("app").innerHTML = `
    <h1>Count: ${getCount()}</h1>
    <button id="a"> 의존성에 넣을 예정 ${a()}</button>
    <button id="b">의존성에 넣지 않을 예정 ${b()}</button>
    <button id="c">참조값</button>

  `;

  document.getElementById("a").addEventListener("click", handleUpdateText);
  document.getElementById("b").addEventListener("click", increase);
  document.getElementById("c").addEventListener("click", increaseObject);
}

App();
