import React from 'react';
import './IngredientsModal.scss';

function IngredientsModal({ isShow, product, btnHandler }) {
  return (
    <div className="IngredientsModal">
      <div className={isShow ? 'ingredientsModal on' : 'ingredientsModal'}>
        <button className="closeBtn" onClick={btnHandler}>
          X
        </button>
        <div className="modalBox">
          <p>성분</p>
          <p>{product.ingredients_etc}</p>
          <p>
            성분 목록은 변경될 수 있습니다. 구매하신 제품에 대한 정확한 성분
            목록은, 사용 전 제품 라벨을 참조하시기 바랍니다.
          </p>
          <p>
            이솝은 PETA로부터 비건 인증을 받은 브랜드로 자체 안전성과 효능,
            지속가능성을 확인한 성분을 사용합니다.
          </p>
        </div>
      </div>
    </div>
  );
}

export default IngredientsModal;
