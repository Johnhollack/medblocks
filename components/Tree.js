import React, {useState, useEffect} from 'react'
import ItemToRender from './ItemToRender';


const Tree = (Props) => {

    const { treeData, id, level, obj, treeID, } = Props;

    const [rootID, setRootID] = useState("");
    

    return (
        <div >
            {obj.map((item) => (
                <div key={item.id} onClick={() => setRootID(item.id)}>
                    <ItemToRender key={item.id} folder={item} level={level} treeID={treeID} rootID={rootID}>
                        <Tree treeData={treeData} id={item.id} level={level + 1} treeID={treeID}/>
                    </ItemToRender>
                </div>
            ))}     
        </div>
        
    );
}

export default Tree
