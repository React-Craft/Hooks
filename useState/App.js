function App() {
  const [a, setA] = useState(0);
  // const [b, setB] = useState("b");

  // console.log(a(), b());
  // setB("c");
  // console.log(a(), b());

  function increase() {
    setA(a() + 1);
  }

  console.log(a());

  document.getElementById("app").innerHTML = `
    <h1>count: ${a()}</h1>
    <button id="a">클릭</button>
  `;
  document.getElementById("a").addEventListener("click", increase);
}

App();
