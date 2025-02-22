//
function useEffect(callback, dependencies) {
  console.log(callback, dependencies);

  // 의존성 배열 자체가 안들어 옸을때
  if (dependencies === undefined) {
    setTimeout(callback, 0); // 렌더링 이후 실행
    return;
  }
  // 의존성 배열이 값이 없을때
  if (dependencies.length === 0) {
    //
  }
  // 의존성 배열에 값이 있을때,
  if (dependencies) {
    //
  }
  //
}
