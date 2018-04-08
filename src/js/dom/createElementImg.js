function createElementImg (id, className, src, alt) {
  const img = document.createElement('img')
  img.setAttribute('id', id)
  img.setAttribute('src', src)
  img.setAttribute('class', className)
  img.setAttribute('alt', alt)

  return img
  // document.getElementById(elementContent).append(img)
}

export default createElementImg
