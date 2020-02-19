export function getMapData(staticList) {
  const mapList = [];
  staticList.forEach(item => {
    const mapItem = {
      name: item.provinceName,
      value: item.confirmedCount,
      ...item
    }
    mapList.push(mapItem)
  })
  return mapList;
}