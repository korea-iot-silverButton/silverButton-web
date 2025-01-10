/** @jsxImportSource @emotion/react */
import React from "react";
import * as s from "./style";
import HealthMagazinePagination from "../../../components/HealthMagazine/HealthMagazinePagination";

export default function Index() {
  const pageList = [1, 2, 3, 4, 5];
  const currentPage = 1;

  const handlePageClick = (page: number) => {
    console.log(`Page clicked: ${page}`);
  };

  const handlePreSectionClick = () => {
    console.log("Previous section clicked");
  };

  const handleNextSectionClick = () => {
    console.log("Next section clicked");
  };

  return (
    <div css={s.magazineContainer}>
      <div css={s.magazineBox}>
        <div css={s.magazineHeader}>
          실버니즈 헬스 매거진
          <select css={s.selectBox}>
            <option value="latest" css={s.option}>
              최신순
            </option>
            <option value="popular" css={s.option}>
              조회순
            </option>
          </select>
        </div>
        <div css={s.Box}>
          <div css={s.mainBox}>
            <div css={s.magazinesContainer}>
              <div css={s.contentBox}>
                <div css={s.contentImg}>사진</div>
                <div css={s.contentTitle}>기사제목</div>
              </div>
            </div>
          </div>

          <div css={s.paginationContainer}>
            <HealthMagazinePagination
              pageList={pageList}
              currentPage={currentPage}
              handlePageClick={handlePageClick}
              handlePreSectionClick={handlePreSectionClick}
              handleNextSectionClick={handleNextSectionClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
