import React from 'react';
import { useNavigate } from 'react-router-dom';
import SubcatNavList from '../SubcatNavList/SubcatNavList';
import './SubcatNav.scss';

function SubcatNav({ subcategory, setCategoryId }) {
  const navigate = useNavigate();
  const goToAll = () => {
    const queryString = ``;
    navigate(queryString);
    setCategoryId(queryString);
    window.location.reload();
  };

  return (
    <div className="Subnav">
      <ul className="SubnavUl">
        <li
          className="SubnavLi"
          onClick={() => {
            goToAll();
          }}
        >
          <button type="button" className="SubnavSelected main">
            <span className="SubnavInnerText">모든 스킨</span>
          </button>
        </li>
        {subcategory.map(category => {
          return (
            <SubcatNavList
              key={category.sub_category_id}
              id={category.sub_category_id}
              name={category.sub_category_name}
              setCategoryId={setCategoryId}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default SubcatNav;
