import React, {useState, useEffect} from 'react'
import DescriptionIcon from "@material-ui/icons/Description";
import Folder from "@material-ui/icons/Folder";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import TwoJson from "../public/2.json";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import styles from "../components/styles/row.module.scss";
import classnames from "classnames";
import ItemToRender from './ItemToRender';

const Test = (Props) => {

    const { treeData, id, level, obj } = Props;
    
    //const obj = TwoJson.tree.children;

    console.log(treeData);


    const [isCollapsed, setIsCollapsed] = useState(false);
    const [hasChildren, setHasChildren] = useState(false);
    
    const [isChild, setIsChild] = useState(false);
    

    const entityIcon = hasChildren ? (
        isCollapsed ? (
        <Folder className={styles.folder}/>
        ) : (
        <FolderOpenIcon className={styles.folderOpen}/>
        )
    ) : (
        <DescriptionIcon  />
    );
    

    return (
        <div>
            {obj.map((item) => (
                <ItemToRender key={item.id} folder={item} level={level}>
                    <Test treeData={treeData} id={item.id} level={level + 1}/>
                </ItemToRender>
            ))}     
        </div>
        
    );
}

export default Test
