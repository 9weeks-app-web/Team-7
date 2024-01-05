import styled from "styled-components";

export const SlideContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
  height: 306px;
  padding: 20px 0;
  display: flex;
  gap: 24px;
`;

// 텍스트 구역
export const LeftWrapper = styled.div`
  width: 181px;
  padding: 41px 20px 41px 30px;
  color: white;
`;

export const LeftBtn = styled.button`
  width: 32px;
  height: 32px;
`;
export const RightBtn = styled.button`
  width: 32px;
  height: 32px;
`;

// 슬라이드 구역
export const RightWrapper = styled.div`
  width: 995px;
  overflow: hidden;
  position: relative;
`;

export const SlideWrapper = styled.div`
  width: 1440px;
  height: 100%;
  display: flex;
  overflow: hidden;
`;

export const SlideCard = styled.li`
  width: 246px;
  height: 264px;
  border-radius: 6px;
  background-color: #fff;
  transition: all 0.4s ease-in-out;
  cursor: pointer;

  > img {
    object-fit: contain;
    width: 246px;
  }
`;

export const Hover = styled.div`
  width: 246px;
  height: 264px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 10px;
  color: #fff;
  opacity: 0;
  transition: all 0.4s;
  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
    height: 100%;
    z-index: 9999;
    opacity: 1;
    border-radius: 6px;
  }
`;

export const TextBox = styled.div`
  padding: 16px 26px 10px 16px;
  font-size: 12px;
`;
