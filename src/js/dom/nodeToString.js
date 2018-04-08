function nodeToString (node) {
  var tmpNode = document.createElement('div')
  tmpNode.appendChild(node.cloneNode(true))
  var str = tmpNode.innerHTML
  tmpNode = node = null // prevent memory leaks in IE
  return str
}

export default nodeToString
