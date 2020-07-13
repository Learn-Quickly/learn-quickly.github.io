function copyJSON() {
  if (document.selection) {
    let range = document.body.createTextRange();
    range.moveToElementText(document.getElementById('json_place'));
    range.select().createTextRange();
    document.execCommand("copy");
  } else if (window.getSelection) {
    let range = document.createRange();
    range.selectNode(document.getElementById('json_place'));
    window.getSelection().addRange(range);
    document.execCommand("copy");
  }
}