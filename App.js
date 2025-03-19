function App() {
  stateStore.resetStateIndex();
  console.log("✅✅✅ 랜더링 ✅✅✅");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const usernameRef = useRef(null);

  const handleLogin = useCallback(() => {
    if (username() && password()) {
      console.log(`🟢 로그인 성공! ID: ${username()}, PW: ${password()}`);
      setIsLoggedIn(true);
    } else {
      console.log("🔴 아이디와 비밀번호를 입력하세요!");
    }
  }, [username(), password()]);

  useEffect(() => {
    console.log("🎯 로그인 상태 변경됨:", isLoggedIn());
  }, [isLoggedIn()]);

  let app = document.getElementById("app");
  if (!app.innerHTML) {
    app.innerHTML = `
      <div class="login-container">
        <h2>로그인</h2>
        <input id="usernameInput" class="input-field" placeholder="아이디" />
        <input id="passwordInput" class="input-field" type="password" placeholder="비밀번호" />
        <button id="loginBtn" class="login-btn">로그인</button>
        <p id="statusMessage" class="status-message"></p>
      </div>
    `;

    document.getElementById("loginBtn").addEventListener("click", handleLogin);

    document.getElementById("usernameInput").addEventListener("input", (e) => {
      setUsername(e.target.value);
    });

    document.getElementById("passwordInput").addEventListener("input", (e) => {
      setPassword(e.target.value);
    });
  }

  document.getElementById("usernameInput").value = username();
  document.getElementById("passwordInput").value = password();

  document.getElementById("statusMessage").textContent = isLoggedIn()
    ? `✅ ${username()}님, 환영합니다!`
    : "❌ 로그인해주세요.";
}

App();
