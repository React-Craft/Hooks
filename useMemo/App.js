function App() {
  stateStore.resetStateIndex();
  console.log("✅✅✅ 랜더링 ✅✅✅");

  const [a, setA] = useState("True");
  const [b, setB] = useState(0);

  const memoizedA = useMemo(() => {
    console.log("📌 memoizedA 재계산!");
    return a();
  }, [a()]);

  const memoizedB = useMemo(() => {
    console.log("📌 memoizedB 재계산!");
    return b();
  }, [b()]);

  function handleUpdateText() {
    setA(memoizedA === "True" ? "false" : "True");
  }

  function increase() {
    setB(memoizedB + 1);
  }

  document.getElementById("app").innerHTML = `
    <button id="a"> ${memoizedA} </button>
    <button id="b"> ${memoizedB} </button>
  `;

  document.getElementById("a").addEventListener("click", handleUpdateText);
  document.getElementById("b").addEventListener("click", increase);
}

App();
