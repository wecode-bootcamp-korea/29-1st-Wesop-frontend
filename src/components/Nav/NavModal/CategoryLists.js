import React, { useState, useEffect } from 'react';
import MainCategoryList from './MainCategoryList';
import CategoryList from './CategoryList';
import './CategoryLists.scss';

function CategoryLists({ closeModal }) {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch('/data/CategoryList.json')
      .then(res => res.json())
      .then(data => {
        setList(data);
      });
  }, []);

  return (
    <div className="categoryLists">
      <MainCategoryList closeModal={closeModal} />
      <div className="secondaryLists">
        <div className="topListsWrap">
          <div>
            {list.map(lists => {
              return (
                <CategoryList
                  key={lists.id}
                  className={lists.className}
                  categoryName={lists.categoryName}
                  contentsList={lists.listContents}
                />
              );
            })}
          </div>
          <ul className="lovesList">
            <h2 className="categoryListTitle">사랑받는 제품</h2>
            <li className="listContents">
              파슬리 씨드 안티 옥시던트 인텐스 세럼
            </li>
            <li className="listContents">
              파슬리 씨드 안티 옥시던트 페이셜 트리트먼트
            </li>
            <li className="listContents">
              파슬리 씨드 안티 옥시던트 페이셜 토너
            </li>
          </ul>
        </div>

        <ul className="extra">
          <li className="listContents">실험실에서 배운 교훈</li>
          <h2 className="categoryListTitle"> 피부 타입 소개 </h2>
          <li>
            <img
              className="skintypeImg"
              alt="피부 타입 소개"
              src="https://images.pexels.com/photos/3621234/pexels-photo-3621234.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CategoryLists;
