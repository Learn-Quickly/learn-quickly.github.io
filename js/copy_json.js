function copyJSON() {
  let div = document.getElementById('json_place');
  let text = div.innerText;
  let textArea = document.createElement('textarea');
  textArea.width = '1px';
  textArea.heigth = '1px';
  textArea.background = 'transparents';
  textArea.value = text;
  document.body.append(textArea);;
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
}