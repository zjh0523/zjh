// 为了渲染 cavans 效果的标题，生成一个 title 列表
function generateBlogTitle() {
  var root=document.createElement("div");
  root.id='ui';
  for (var i=0; i < 50; i++) {
    var node=document.createElement("div");
    node.className='text';
    node.innerHTML='最后的完美';
    root.appendChild(node);
  }
  document.getElementById("blogTitle").appendChild(root);

  var subTitle=document.createElement("h2");
  subTitle.innerHTML='Talk is cheap, show me the code.';
  document.getElementById("blogTitle").appendChild(subTitle);
}
