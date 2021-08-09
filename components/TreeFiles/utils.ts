import nestedTreeData from "./nestedTreeData.json";
//import OneJson from "../../public/1.json";

export function getTreeData(): TreeDataItem[] {

  //console.log("OneJson: ", OneJson)

  return nestedTreeData.map((item) => ({
    ...item,
    hasChildren:
      nestedTreeData.filter((i) => i.parentId === item.id).length > 0,
  }));
}
