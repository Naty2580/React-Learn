import TreeItem from "./TreeItem";
import PropTypes from 'prop-types';
import "./treeStyle.css";



const TreeList = ({list=[] }) => {

  return (
    <div className="treeList">

    <ul>
        {
        list && list.length > 0 ? 
        list.map((item , index) =>

            (
            <div key={index}>
            <TreeItem  item={item} />
            </div>
            )
        )

        : null
}
    </ul>
    </div>
  )
}
TreeList.propTypes = {
    list : PropTypes.array
} 

export default TreeList;