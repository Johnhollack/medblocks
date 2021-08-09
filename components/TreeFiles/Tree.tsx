import Row from "./Row";
import OneJson from "../../public/1.json";
import TwoJson from "../../public/2.json";


const Tree = (TreeProps) => {

  const { treeData, parentId = 0, level = 0 } = TreeProps;

  const items = treeData.filter((item) => item.parentId === parentId).sort((a, b) => (a.text > b.text ? 1 : -1));
  if (!items.length) return null;


  //console.log("children: ", TwoJson.tree.children );
  console.log("parent: ", TwoJson.tree.children[2]?.id);
  console.log("children: ", TwoJson.tree.children[2]?.children[0]?.id);
  console.log("Grandchildren: ", TwoJson.tree.children[2]?.children[0]?.children[0]?.id);
  
  
  
  return (
    <>
      {items.map((item) => (
        <Row key={item.id} item={item} level={level}>
          <Tree treeData={treeData} parentId={item.id} level={level + 1} />
        </Row>
      ))}
    </>
  );
}

export default Tree;
