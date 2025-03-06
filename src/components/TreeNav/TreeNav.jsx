import "./treeStyle.css";
import TreeList from "./TreeList";
import PropTypes from "prop-types";


const TreeNav = ( {trees}) => {

  return <div className="treeNav">
    <TreeList list={trees}  />
  </div>
 
};
TreeNav.propTypes = {
    trees : PropTypes.array
} 
export default TreeNav;
 