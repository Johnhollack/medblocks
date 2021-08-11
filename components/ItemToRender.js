import React, {useState, useEffect} from 'react'
import DescriptionIcon from "@material-ui/icons/Description";
import Folder from "@material-ui/icons/Folder";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import TwoJson from "../public/2.json";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import styles from "../components/styles/row.module.scss";
import classnames from "classnames";
import Test from './Test';



const ItemToRender = ({folder, level=0}) => {

  const [isCollapsed, setIsCollapsed] = useState(true);
  const [children, setChildren] = useState([]);

  console.log(children);
  
  const item = folder;
  const items = children?.children;

  console.log("items: ", items);

  return (
    <div>
      <div key={`section-${item.id}`}>
        <div
          className={classnames(styles.row, styles[`level-${level}`])}
          onClick={() => [setIsCollapsed(!isCollapsed), setChildren(item)]}
        >
          
          <ChevronRightIcon
            className={classnames(styles.chevron, {
              [styles.rotated]: !isCollapsed,
            })}
          />
        
          {
            isCollapsed ? (
              <><Folder className={styles.folder} />  {item.id}</> 
            ) : (
              <><FolderOpenIcon className={styles.folderOpen} /> {item.id}</> 
              
            )
          }
          
          <span className={styles.text}>{item.text}</span>
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
                  <ItemToRender key={item.id} folder={item} level={level}>
                    <Test treeData={items} id={item.id} level={level + 1}/>
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
      {/* {
        items.map((item) => {
          if(typeof item === 'object' || typeof item === 'array')
          return (
          // <div>
          //   <Folder onClick={onPress} className={styles.folder}/> { item.id }

          //   {isChild && 
          //     <div><Folder className={styles.folder}/> { item.id }</div>   
          //   }
          // </div>
          )
          else
          return (
            <div><DescriptionIcon  /> { item.id }</div>
          )                    
        })        
      } */}
          
    </div>
    
  );
};

export default ItemToRender;
