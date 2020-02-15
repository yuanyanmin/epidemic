export function getMapData(staticList) {
  const mapList = [];
  staticList.forEach(item => {
    const mapItem = {
      name: item.provinceShortName,
      value: item.confirmedCount,
      ...item
    }
    mapList.push(mapItem)
  })
  return mapList;
}