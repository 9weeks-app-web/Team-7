const CommunityPostButton = () => {
  return (
    <div className="fixed bottom-[62px] right-[130px] bg-neutral-90 text-white flex justify-center items-center rounded-[100px] px-[28px] py-[10px] font-semibold text-[20px] cursor-pointer">
      <div className="relative w-[28px] h-[28px] shrink-0">
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.6667 9.33317H23.3333C23.9777 9.33317 24.5 9.85551 24.5 10.4998V23.3332L20.6115 20.1026C20.402 19.9286 20.1376 19.8332 19.8652 19.8332H10.5C9.85567 19.8332 9.33333 19.3108 9.33333 18.6665V15.1665H8.13477C7.86245 15.1665 7.59797 15.2618 7.38851 15.4358L3.5 18.6669V5.83317C3.5 5.18884 4.02233 4.6665 4.66667 4.6665H17.5C18.1443 4.6665 18.6667 5.18884 18.6667 5.83317V9.33317Z"
            fill="#196AFF"
          />
          <path
            d="M18.6667 9.33317H23.3333C23.9777 9.33317 24.5 9.85551 24.5 10.4998V23.3332L20.6115 20.1026C20.402 19.9286 20.1376 19.8332 19.8652 19.8332H10.5C9.85567 19.8332 9.33333 19.3108 9.33333 18.6665V15.1665M18.6667 9.33317V5.83317C18.6667 5.18884 18.1443 4.6665 17.5 4.6665H4.66667C4.02233 4.6665 3.5 5.18884 3.5 5.83317V18.6668L7.38851 15.4358C7.59797 15.2618 7.86245 15.1665 8.13477 15.1665H9.33333M18.6667 9.33317V13.9998C18.6667 14.6442 18.1443 15.1665 17.5 15.1665H9.33333"
            stroke="#196AFF"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div className="ml-[6px]">커뮤니티 글쓰기</div>
    </div>
  );
};

export default CommunityPostButton;
