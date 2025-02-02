import './Lists.css';
import PropTypes from 'prop-types';
function ListObjectParentToChild(props){

    const category = props.category;
    const itemLists = props.items;
    
    const fruits = itemLists.map(item => <li key={item.id}>
                                                {item.name} : &nbsp;
                                                <b>{item.calories}</b>
                                            </li>);

    const sports = itemLists.map(item => <li key={item.id}>
        {item.name} : &nbsp;
        <b>{item.code}</b>
    </li>);

    return (<>
       <h2 className="list-category">{category == "Sports" ? "Sports" : "Fruits"}</h2> 
       <ol className="list-items">{category == 'Sports' ? sports : fruits}</ol>
    </>)

}

ListObjectParentToChild.defaultProps = {
    category: "Category",
    items: []
}

ListObjectParentToChild.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id:PropTypes.number,
                                            name:PropTypes.string,
                                            calories:PropTypes.number}

    )) 
}

export default ListObjectParentToChild;