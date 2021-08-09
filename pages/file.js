import Tree from "../components/TreeFiles/Tree";
import { getTreeData } from "../components/TreeFiles/utils";

export default function file(TreeDataProp) {

  const { treeData } = TreeDataProp;

  return <Tree treeData={treeData} />;
}

export async function getStaticProps() {
  return {
    props: {
      treeData: getTreeData(),
    },
  };
}
