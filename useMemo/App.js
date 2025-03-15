function App() {
  stateStore.resetStateIndex();
  console.log("✅✅✅ 랜더링 ✅✅✅");

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const expensiveValue = useMemo(() => {
    // 값을 반환해야함 ㅇㅇ
    return count() * 2; // 예제용 단순 계산
  }, [count()]); // count() → count 수정!

  // const handleClick = () => {
  //   console.log(`Count is: ${count}`);
  // };
  function increase() {
    setCount(count() + 1);
  }

  function increase2() {
    setCount2(count2() + 1);
  }

  useEffect(() => {
    console.log("🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯", count());
  }, [expensiveValue]);

  document.getElementById("app").innerHTML = `
      <p>${expensiveValue}</p>
      <button id="a"> 숫자 올리기(캐시값 사용x) </button>
      <button id="b"> 숫자 올리기(캐시값 사용) </button>
    `;

  document.getElementById("a").addEventListener("click", increase);
  document.getElementById("b").addEventListener("click", increase2);
}

App();
