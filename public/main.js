const newDiv = document.createElement("div");
newDiv.style = "height:100px;width:100px;background-color:red";
document.body.append(newDiv, "main.js加载成功");

getJSON.onclick = (e) => {
  const request = new XMLHttpRequest();
  request.open("GET", "./1.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status === 200) {
        const newDiv = document.createElement("div");
        newDiv.innerHTML = JSON.parse(request.responseText).id;
        document.body.prepend(newDiv);
      } else {
        alert("JSON文件加载失败！");
      }
    }
  };

  request.send();
};
