import React, {useState, useEffect, useReducer} from 'react'
import DescriptionIcon from "@material-ui/icons/Description";
import Folder from "@material-ui/icons/Folder";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import styles from "../components/styles/row.module.scss";
import classnames from "classnames";
import Test from './Tree';


const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        path: [ state.path + "/" + action.path ]
      };

    default:
      return state;
  }
};


const ItemToRender = (Props) => {

  const {folder, level=0, treeID, rootID} = Props; 

  const [isCollapsed, setIsCollapsed] = useState(true);
  const [children, setChildren] = useState([]);

  const item = folder;
  const items = children?.children;
  
  const [{ path }, dispatch] = useReducer(reducer, {
    path: [],
  });
  
  const onPress = async () => {
    dispatch(
      {
        type: "add", 
        path: treeID + "/" + rootID + "/" + item?.id,
      });
  };


  return (
    <div>
      <div key={`section-${item.id}`}>
        <div
          className={classnames(styles.row, styles[`level-${level}`])}
          className="flex w-40"
          onClick={() => [
            setIsCollapsed(!isCollapsed), 
            setChildren(item), 
            children && isCollapsed && onPress(),            
          ]}
        >
          
          <ChevronRightIcon
            className={classnames(styles.chevron, {
              [styles.rotated]: !isCollapsed,
            })}
          />
        
          {
            isCollapsed ? (
              <div><Folder className={styles.folder}/></div>
            ) : (
              <div><FolderOpenIcon className={styles.folderOpen} /></div>
            )
          }
          
          <span className={styles.text}>{item.id}</span>
          {!isCollapsed && !children.children &&
            <div className="ml-10">
              <span className={styles.text}> {`${path}`}</span>
            </div>
          }
        </div>
        <div
          className={classnames(styles.children, {
            [styles.collapsed]: isCollapsed,
          })}
        >
          {children && 
              items?.map((item) => {
                if(typeof item === 'object' || typeof item === 'array') {
                return (
                  <ItemToRender key={item.id} folder={item} level={level} treeID={treeID} rootID={rootID}>
                    <Test treeData={items} id={item.id} level={level + 1} treeID={treeID}/>
                  </ItemToRender>
                )}
                if(typeof item !== 'object' || typeof item !== 'array'){
                return (
                  <div><DescriptionIcon className={styles.file} /> { item.id }</div>
                )}
                else{
                return null
                }                   
              }) 
            } 
        </div>
      </div>          
    </div>
    
  );
};

export default ItemToRender;
