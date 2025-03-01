function App() {
  stateStore.resetStateIndex();
  console.log("✅✅✅ 랜더링 ✅✅✅");

  const [a, setA] = useState("True");
  const [b, setB] = useState(0);

  const objRef = useRef({ value: 0 });
  const buttonRef = useRef(null); // 초기값은 null

  useEffect(() => {
    console.log("🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯");
  }, [objRef.current]);

  function handleUpdateText() {
    setA(a() === "True" ? "false" : "True");
  }

  function increase() {
    setB(b() + 1);
  }

  function increaseObject() {
    objRef.current.value += 1;
    console.log("Updated objRef:", objRef.current);
  }

  function handleHover() {
    console.log(" 버튼 위에 마우스 올림", buttonRef.current);
  }

  document.getElementById("app").innerHTML = `
    <h1>Count: ${objRef.current.value}</h1>
    <button id="a"> 의존성에 넣을 예정 ${a()}</button>
    <button id="b">의존성에 넣지 않을 예정 ${b()}</button>
    <button id="c">참조값</button>
    <button id="myButton">포커스 버튼</button>
  `;

  document.getElementById("a").addEventListener("click", handleUpdateText);
  document.getElementById("b").addEventListener("click", increase);
  document.getElementById("c").addEventListener("click", increaseObject);

  buttonRef.current = document.getElementById("myButton");
  buttonRef.current.onmouseover = handleHover;
}

App();
