function submit() {
  var inputPass = document.getElementById("passWord");
  pass = inputPass.value;
  console.log(pass);
}

function checkSignup() {
  var defaultPass = "Bunny";
  var defaultUser = "Susy";
  var inputUser = document.getElementById("userName");
  var inputPass = document.getElementById("passWord");
  var pass = inputPass.value;
  var userName = inputUser.value;

  var noti = document.getElementById("notiBox");

  if (pass.trim() !== "" && pass == defaultPass && userName == defaultUser) {
    noti.innerHTML = "Chúc mừng bạn đã đăng nhập thành công!";
    document.getElementById("passWord").value = "";
    document.getElementById("userName").value = "";
    setTimeout(function () {
      noti.innerHTML = "";
    }, 1000);

    setTimeout(function () {
      var loadingBox = document.getElementById("loadBox");
      loadingBox.style.display = "block";
    }, 4000);

    // setTimeout(function () {
    //   window.location.href = "page2.html";
    // }, 3000);
  } else {
    noti.innerHTML = "Sai mật khẩu!";
    document.getElementById("passWord").value = "";
    document.getElementById("userName").value = "";
  }
}
