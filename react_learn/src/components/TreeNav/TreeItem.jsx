import { useState } from "react"
import TreeList from "./TreeList"
import PropTypes from "prop-types"
import "./treeStyle.css";
import { NavLink } from "react-router-dom";


const TreeItem = ({item}) => {
const [displayChildren , setDisplayChildren] = useState({})

const handleToggle = (label ) => {
  setDisplayChildren({ ...displayChildren, [label] : !displayChildren[label],})
};



  return (
    < div className="items">
        <li >
        < NavLink 
        className={
          ({isActive}) => 
           isActive  ? "active" : "inactive" } 
         to={item.to}>
          {item.label}</NavLink>


        {
            item && item.children && item.children.length  ? 
            <span onClick= { () => handleToggle(item.label)}
            style={{
              cursor: "pointer",
              padding: "0 5px",
              fontSize: "20px",
               transition: "0.3s"

            }}
            >
              { displayChildren[item.label] ? "\t ▴" : " \t▾"  }

                  </span> : null
        }
        </li>

        { item && item.children && item.children.length > 0 && displayChildren[item.label] ? 
    <TreeList  list={item.children} />

: null}

    </div>
  )
}

TreeItem.propTypes = {
    item : PropTypes.object,

} 
export default TreeItem;