function App() {
  const [a, setA] = useState("a");
  const [b, setB] = useState("b");

  console.log(a(), b());
  setB("c");
  console.log(a(), b());
}

App();
