function App() {
  stateStore.resetStateIndex();

  console.log("✅✅✅ 랜더링 ✅✅✅");
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  // const [b, setB] = useState("b");

  // console.log(a(), b());
  // setB("c");
  // console.log(a(), b());

  function increaseA() {
    console.log(`🍎${a()}`);
    setA(a() + 2);
    console.log(`🍎${a()}`);

    setA(a() + 1);

    console.log("increaseA");
  }

  function increaseB() {
    setB(b() + 1);
  }

  function increaseC() {
    setC(c() + 1);
  }

  // console.log(a());
  // console.log(b());

  document.getElementById("app").innerHTML = `
    <h1>count: ${a()}</h1>
    <button id="a">클릭</button>
    <h1>count: ${b()}</h1>
    <button id="b">클릭</button>
    <h1>count: ${c()}</h1>
    <button id="c">클릭</button>
  `;
  document.getElementById("a").addEventListener("click", increaseA);
  document.getElementById("b").addEventListener("click", increaseB);
  document.getElementById("c").addEventListener("click", increaseC);
}

App();
