import TwoJson from "../public/2.json";

export function getTreeData() {

  const TwoJsonItem = TwoJson.tree.children;

  return TwoJsonItem.map((item) => ({
    ...item,
    hasChildren:
    TwoJsonItem.filter((i) => i.id === item.id).length > 0,
    
    }));
}

export const treeData = TwoJson.tree.children;
