export const getImageName = (imageArrayObject, name) => {
  return (imageArrayObject.find((imageObject) => {
    return imageObject.key == name
  }))
}