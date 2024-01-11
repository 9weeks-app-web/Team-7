const PopularPost = () => {
  return (
    <>
      <div className="flex items-center font-semibold text-[20px] text-neutral-80 mb-[6px] ml-[20px]">
        <span className="mr-[6px]">🔥 이번주 HOT 게시글</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 9.16667V13.3333M10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10C17.5 14.1421 14.1421 17.5 10 17.5ZM10.0415 6.66667V6.75L9.9585 6.75016V6.66667H10.0415Z"
            stroke="#B3B3B3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>

      <div className="ml-[20px] w-[359px] flex flex-col items-start justify-start border-#f3f3f3 border border-[0_0_1px] rounded-md">
        <div className="w-[359px] flex flex-col items-start justify-center gap-[10px] pt-[20px] pr-[20px] pb-[20px] pl-[24px] border-#f3f3f3 border-b border-[0_0_1px]">
          <div className="w-[289px] flex flex-col items-start justify-start">
            <div className="w-[315px] flex flex-col items-start justify-start">
              <div className="w-[300px] text-[16px] leading-[140%] font-semibold text-[#1a1a1a]">
                포트폴리오 만들 때 프레임 크기는 어떻게 하...
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start">
            <div className="flex flex-row items-start justify-start gap-[6px]">
              <div className="flex flex-row items-center justify-start gap-[6px]">
                <svg
                  width="15"
                  height="11"
                  viewBox="0 0 15 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.18094 5.98923C1.08756 5.84137 1.04086 5.76743 1.01472 5.65339C0.995092 5.56774 0.995092 5.43265 1.01472 5.347C1.04086 5.23296 1.08756 5.15903 1.18094 5.01116C1.95265 3.78923 4.2497 0.700195 7.75028 0.700195C11.2508 0.700195 13.5479 3.78923 14.3196 5.01116C14.413 5.15903 14.4597 5.23296 14.4858 5.347C14.5055 5.43265 14.5055 5.56774 14.4858 5.65339C14.4597 5.76743 14.413 5.84136 14.3196 5.98923C13.5479 7.21116 11.2508 10.3002 7.75028 10.3002C4.2497 10.3002 1.95265 7.21116 1.18094 5.98923Z"
                    stroke="#808080"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.75028 7.55734C8.8864 7.55734 9.80742 6.63632 9.80742 5.5002C9.80742 4.36407 8.8864 3.44305 7.75028 3.44305C6.61415 3.44305 5.69313 4.36407 5.69313 5.5002C5.69313 6.63632 6.61415 7.55734 7.75028 7.55734Z"
                    stroke="#808080"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <div className="text-[12px] leading-[140%] text-[#808080] text-center whitespace-nowrap">
                  1.1k
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[6px]">
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.27828 4.34891C7.20204 3.0907 5.40735 2.75224 4.0589 3.90439C2.71045 5.05653 2.52061 6.98286 3.57956 8.3455C4.46 9.47845 7.12452 11.8679 7.9978 12.6413C8.0955 12.7278 8.14436 12.7711 8.20134 12.7881C8.25107 12.8029 8.30549 12.8029 8.35522 12.7881C8.4122 12.7711 8.46106 12.7278 8.55876 12.6413C9.43204 11.8679 12.0966 9.47845 12.977 8.3455C14.0359 6.98286 13.8693 5.04441 12.4977 3.90439C11.126 2.76436 9.35451 3.0907 8.27828 4.34891Z"
                    stroke="#808080"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <div className="text-[12px] leading-[140%] text-[#808080] whitespace-nowrap">
                  1
                </div>
              </div>
              <div className="flex flex-row items-center justify-center gap-[6px]">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.85713 12.2544L4.77151 11.5229L4.77823 11.5177C4.96886 11.3652 5.06505 11.2882 5.17237 11.2334C5.26866 11.1842 5.37133 11.1484 5.47725 11.1267C5.59663 11.1021 5.72098 11.1021 5.97061 11.1021H11.1792C11.85 11.1021 12.1857 11.1021 12.4422 10.9715C12.668 10.8564 12.8517 10.6727 12.9667 10.4469C13.0974 10.1904 13.0974 9.85504 13.0974 9.1843V4.62029C13.0974 3.94954 13.0974 3.61367 12.9667 3.35723C12.8517 3.13143 12.6676 2.94799 12.4418 2.83294C12.1851 2.70215 11.8495 2.70215 11.1775 2.70215H4.21748C3.54542 2.70215 3.20914 2.70215 2.95244 2.83294C2.72665 2.94799 2.5432 3.13143 2.42816 3.35723C2.29736 3.61392 2.29736 3.9502 2.29736 4.62227V11.5049C2.29736 12.1443 2.29736 12.4639 2.42844 12.6281C2.54243 12.7709 2.71522 12.854 2.89795 12.8538C3.10805 12.8536 3.35783 12.6538 3.85713 12.2544Z"
                    stroke="#808080"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <div className="text-[12px] leading-[140%] text-[#808080] whitespace-nowrap">
                  5
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[359px] flex flex-col items-start justify-center gap-[10px] pt-[20px] pr-[20px] pb-[20px] pl-[24px] border-#f3f3f3 border-b border-[0_0_1px]">
          <div className="w-[289px] flex flex-col items-start justify-start">
            <div className="w-[315px] flex flex-col items-start justify-start">
              <div className="w-[300px] text-[16px] leading-[140%] font-semibold text-[#1a1a1a]">
                알아두면 쓸모있는 피피티 팁
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start">
            <div className="flex flex-row items-start justify-start gap-[6px]">
              <div className="flex flex-row items-center justify-start gap-[6px]">
                <svg
                  width="15"
                  height="11"
                  viewBox="0 0 15 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.18094 5.98923C1.08756 5.84137 1.04086 5.76743 1.01472 5.65339C0.995092 5.56774 0.995092 5.43265 1.01472 5.347C1.04086 5.23296 1.08756 5.15903 1.18094 5.01116C1.95265 3.78923 4.2497 0.700195 7.75028 0.700195C11.2508 0.700195 13.5479 3.78923 14.3196 5.01116C14.413 5.15903 14.4597 5.23296 14.4858 5.347C14.5055 5.43265 14.5055 5.56774 14.4858 5.65339C14.4597 5.76743 14.413 5.84136 14.3196 5.98923C13.5479 7.21116 11.2508 10.3002 7.75028 10.3002C4.2497 10.3002 1.95265 7.21116 1.18094 5.98923Z"
                    stroke="#808080"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.75028 7.55734C8.8864 7.55734 9.80742 6.63632 9.80742 5.5002C9.80742 4.36407 8.8864 3.44305 7.75028 3.44305C6.61415 3.44305 5.69313 4.36407 5.69313 5.5002C5.69313 6.63632 6.61415 7.55734 7.75028 7.55734Z"
                    stroke="#808080"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <div className="text-[12px] leading-[140%] text-[#808080] text-center whitespace-nowrap">
                  1.1k
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[6px]">
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.27828 4.34891C7.20204 3.0907 5.40735 2.75224 4.0589 3.90439C2.71045 5.05653 2.52061 6.98286 3.57956 8.3455C4.46 9.47845 7.12452 11.8679 7.9978 12.6413C8.0955 12.7278 8.14436 12.7711 8.20134 12.7881C8.25107 12.8029 8.30549 12.8029 8.35522 12.7881C8.4122 12.7711 8.46106 12.7278 8.55876 12.6413C9.43204 11.8679 12.0966 9.47845 12.977 8.3455C14.0359 6.98286 13.8693 5.04441 12.4977 3.90439C11.126 2.76436 9.35451 3.0907 8.27828 4.34891Z"
                    stroke="#808080"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <div className="text-[12px] leading-[140%] text-[#808080] whitespace-nowrap">
                  1
                </div>
              </div>
              <div className="flex flex-row items-center justify-center gap-[6px]">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.85713 12.2544L4.77151 11.5229L4.77823 11.5177C4.96886 11.3652 5.06505 11.2882 5.17237 11.2334C5.26866 11.1842 5.37133 11.1484 5.47725 11.1267C5.59663 11.1021 5.72098 11.1021 5.97061 11.1021H11.1792C11.85 11.1021 12.1857 11.1021 12.4422 10.9715C12.668 10.8564 12.8517 10.6727 12.9667 10.4469C13.0974 10.1904 13.0974 9.85504 13.0974 9.1843V4.62029C13.0974 3.94954 13.0974 3.61367 12.9667 3.35723C12.8517 3.13143 12.6676 2.94799 12.4418 2.83294C12.1851 2.70215 11.8495 2.70215 11.1775 2.70215H4.21748C3.54542 2.70215 3.20914 2.70215 2.95244 2.83294C2.72665 2.94799 2.5432 3.13143 2.42816 3.35723C2.29736 3.61392 2.29736 3.9502 2.29736 4.62227V11.5049C2.29736 12.1443 2.29736 12.4639 2.42844 12.6281C2.54243 12.7709 2.71522 12.854 2.89795 12.8538C3.10805 12.8536 3.35783 12.6538 3.85713 12.2544Z"
                    stroke="#808080"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <div className="text-[12px] leading-[140%] text-[#808080] whitespace-nowrap">
                  5
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[359px] flex flex-col items-start justify-center gap-[10px] pt-[20px] pr-[20px] pb-[20px] pl-[24px] border-#f3f3f3 border-b border-[0_0_1px]">
          <div className="w-[289px] flex flex-col items-start justify-start">
            <div className="w-[315px] flex flex-col items-start justify-start">
              <div className="w-[300px] text-[16px] leading-[140%] font-semibold text-[#1a1a1a]">
                👚 (기프티콘 증정) 쇼핑 플랫폼 설문조사 부...
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start">
            <div className="flex flex-row items-start justify-start gap-[6px]">
              <div className="flex flex-row items-center justify-start gap-[6px]">
                <svg
                  width="15"
                  height="11"
                  viewBox="0 0 15 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.18094 5.98923C1.08756 5.84137 1.04086 5.76743 1.01472 5.65339C0.995092 5.56774 0.995092 5.43265 1.01472 5.347C1.04086 5.23296 1.08756 5.15903 1.18094 5.01116C1.95265 3.78923 4.2497 0.700195 7.75028 0.700195C11.2508 0.700195 13.5479 3.78923 14.3196 5.01116C14.413 5.15903 14.4597 5.23296 14.4858 5.347C14.5055 5.43265 14.5055 5.56774 14.4858 5.65339C14.4597 5.76743 14.413 5.84136 14.3196 5.98923C13.5479 7.21116 11.2508 10.3002 7.75028 10.3002C4.2497 10.3002 1.95265 7.21116 1.18094 5.98923Z"
                    stroke="#808080"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.75028 7.55734C8.8864 7.55734 9.80742 6.63632 9.80742 5.5002C9.80742 4.36407 8.8864 3.44305 7.75028 3.44305C6.61415 3.44305 5.69313 4.36407 5.69313 5.5002C5.69313 6.63632 6.61415 7.55734 7.75028 7.55734Z"
                    stroke="#808080"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <div className="text-[12px] leading-[140%] text-[#808080] text-center whitespace-nowrap">
                  1.1k
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[6px]">
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.27828 4.34891C7.20204 3.0907 5.40735 2.75224 4.0589 3.90439C2.71045 5.05653 2.52061 6.98286 3.57956 8.3455C4.46 9.47845 7.12452 11.8679 7.9978 12.6413C8.0955 12.7278 8.14436 12.7711 8.20134 12.7881C8.25107 12.8029 8.30549 12.8029 8.35522 12.7881C8.4122 12.7711 8.46106 12.7278 8.55876 12.6413C9.43204 11.8679 12.0966 9.47845 12.977 8.3455C14.0359 6.98286 13.8693 5.04441 12.4977 3.90439C11.126 2.76436 9.35451 3.0907 8.27828 4.34891Z"
                    stroke="#808080"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <div className="text-[12px] leading-[140%] text-[#808080] whitespace-nowrap">
                  1
                </div>
              </div>
              <div className="flex flex-row items-center justify-center gap-[6px]">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.85713 12.2544L4.77151 11.5229L4.77823 11.5177C4.96886 11.3652 5.06505 11.2882 5.17237 11.2334C5.26866 11.1842 5.37133 11.1484 5.47725 11.1267C5.59663 11.1021 5.72098 11.1021 5.97061 11.1021H11.1792C11.85 11.1021 12.1857 11.1021 12.4422 10.9715C12.668 10.8564 12.8517 10.6727 12.9667 10.4469C13.0974 10.1904 13.0974 9.85504 13.0974 9.1843V4.62029C13.0974 3.94954 13.0974 3.61367 12.9667 3.35723C12.8517 3.13143 12.6676 2.94799 12.4418 2.83294C12.1851 2.70215 11.8495 2.70215 11.1775 2.70215H4.21748C3.54542 2.70215 3.20914 2.70215 2.95244 2.83294C2.72665 2.94799 2.5432 3.13143 2.42816 3.35723C2.29736 3.61392 2.29736 3.9502 2.29736 4.62227V11.5049C2.29736 12.1443 2.29736 12.4639 2.42844 12.6281C2.54243 12.7709 2.71522 12.854 2.89795 12.8538C3.10805 12.8536 3.35783 12.6538 3.85713 12.2544Z"
                    stroke="#808080"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <div className="text-[12px] leading-[140%] text-[#808080] whitespace-nowrap">
                  5
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[359px] flex flex-col items-start justify-center gap-[10px] pt-[20px] pr-[20px] pb-[20px] pl-[24px] border-#f3f3f3 border-b border-[0_0_1px]">
          <div className="w-[289px] flex flex-col items-start justify-start">
            <div className="w-[315px] flex flex-col items-start justify-start">
              <div className="w-[300px] text-[16px] leading-[140%] font-semibold text-[#1a1a1a]">
                지난주 피그마에서 UX 강연이 열렸나보네요
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start">
            <div className="flex flex-row items-start justify-start gap-[6px]">
              <div className="flex flex-row items-center justify-start gap-[6px]">
                <svg
                  width="15"
                  height="11"
                  viewBox="0 0 15 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.18094 5.98923C1.08756 5.84137 1.04086 5.76743 1.01472 5.65339C0.995092 5.56774 0.995092 5.43265 1.01472 5.347C1.04086 5.23296 1.08756 5.15903 1.18094 5.01116C1.95265 3.78923 4.2497 0.700195 7.75028 0.700195C11.2508 0.700195 13.5479 3.78923 14.3196 5.01116C14.413 5.15903 14.4597 5.23296 14.4858 5.347C14.5055 5.43265 14.5055 5.56774 14.4858 5.65339C14.4597 5.76743 14.413 5.84136 14.3196 5.98923C13.5479 7.21116 11.2508 10.3002 7.75028 10.3002C4.2497 10.3002 1.95265 7.21116 1.18094 5.98923Z"
                    stroke="#808080"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.75028 7.55734C8.8864 7.55734 9.80742 6.63632 9.80742 5.5002C9.80742 4.36407 8.8864 3.44305 7.75028 3.44305C6.61415 3.44305 5.69313 4.36407 5.69313 5.5002C5.69313 6.63632 6.61415 7.55734 7.75028 7.55734Z"
                    stroke="#808080"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <div className="text-[12px] leading-[140%] text-[#808080] text-center whitespace-nowrap">
                  1.1k
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[6px]">
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.27828 4.34891C7.20204 3.0907 5.40735 2.75224 4.0589 3.90439C2.71045 5.05653 2.52061 6.98286 3.57956 8.3455C4.46 9.47845 7.12452 11.8679 7.9978 12.6413C8.0955 12.7278 8.14436 12.7711 8.20134 12.7881C8.25107 12.8029 8.30549 12.8029 8.35522 12.7881C8.4122 12.7711 8.46106 12.7278 8.55876 12.6413C9.43204 11.8679 12.0966 9.47845 12.977 8.3455C14.0359 6.98286 13.8693 5.04441 12.4977 3.90439C11.126 2.76436 9.35451 3.0907 8.27828 4.34891Z"
                    stroke="#808080"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <div className="text-[12px] leading-[140%] text-[#808080] whitespace-nowrap">
                  1
                </div>
              </div>
              <div className="flex flex-row items-center justify-center gap-[6px]">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.85713 12.2544L4.77151 11.5229L4.77823 11.5177C4.96886 11.3652 5.06505 11.2882 5.17237 11.2334C5.26866 11.1842 5.37133 11.1484 5.47725 11.1267C5.59663 11.1021 5.72098 11.1021 5.97061 11.1021H11.1792C11.85 11.1021 12.1857 11.1021 12.4422 10.9715C12.668 10.8564 12.8517 10.6727 12.9667 10.4469C13.0974 10.1904 13.0974 9.85504 13.0974 9.1843V4.62029C13.0974 3.94954 13.0974 3.61367 12.9667 3.35723C12.8517 3.13143 12.6676 2.94799 12.4418 2.83294C12.1851 2.70215 11.8495 2.70215 11.1775 2.70215H4.21748C3.54542 2.70215 3.20914 2.70215 2.95244 2.83294C2.72665 2.94799 2.5432 3.13143 2.42816 3.35723C2.29736 3.61392 2.29736 3.9502 2.29736 4.62227V11.5049C2.29736 12.1443 2.29736 12.4639 2.42844 12.6281C2.54243 12.7709 2.71522 12.854 2.89795 12.8538C3.10805 12.8536 3.35783 12.6538 3.85713 12.2544Z"
                    stroke="#808080"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <div className="text-[12px] leading-[140%] text-[#808080] whitespace-nowrap">
                  5
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[359px] flex flex-col items-start justify-center gap-[10px] pt-[20px] pr-[20px] pb-[20px] pl-[24px]">
          <div className="w-[289px] flex flex-col items-start justify-start">
            <div className="w-[315px] flex flex-col items-start justify-start">
              <div className="w-[300px] text-[16px] leading-[140%] font-semibold text-[#1a1a1a]">
                👚 (기프티콘 증정) 쇼핑 플랫폼 설문조사 부...
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start">
            <div className="flex flex-row items-start justify-start gap-[6px]">
              <div className="flex flex-row items-center justify-start gap-[6px]">
                <svg
                  width="15"
                  height="11"
                  viewBox="0 0 15 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.18094 5.98923C1.08756 5.84137 1.04086 5.76743 1.01472 5.65339C0.995092 5.56774 0.995092 5.43265 1.01472 5.347C1.04086 5.23296 1.08756 5.15903 1.18094 5.01116C1.95265 3.78923 4.2497 0.700195 7.75028 0.700195C11.2508 0.700195 13.5479 3.78923 14.3196 5.01116C14.413 5.15903 14.4597 5.23296 14.4858 5.347C14.5055 5.43265 14.5055 5.56774 14.4858 5.65339C14.4597 5.76743 14.413 5.84136 14.3196 5.98923C13.5479 7.21116 11.2508 10.3002 7.75028 10.3002C4.2497 10.3002 1.95265 7.21116 1.18094 5.98923Z"
                    stroke="#808080"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.75028 7.55734C8.8864 7.55734 9.80742 6.63632 9.80742 5.5002C9.80742 4.36407 8.8864 3.44305 7.75028 3.44305C6.61415 3.44305 5.69313 4.36407 5.69313 5.5002C5.69313 6.63632 6.61415 7.55734 7.75028 7.55734Z"
                    stroke="#808080"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <div className="text-[12px] leading-[140%] text-[#808080] text-center whitespace-nowrap">
                  1.1k
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[6px]">
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.27828 4.34891C7.20204 3.0907 5.40735 2.75224 4.0589 3.90439C2.71045 5.05653 2.52061 6.98286 3.57956 8.3455C4.46 9.47845 7.12452 11.8679 7.9978 12.6413C8.0955 12.7278 8.14436 12.7711 8.20134 12.7881C8.25107 12.8029 8.30549 12.8029 8.35522 12.7881C8.4122 12.7711 8.46106 12.7278 8.55876 12.6413C9.43204 11.8679 12.0966 9.47845 12.977 8.3455C14.0359 6.98286 13.8693 5.04441 12.4977 3.90439C11.126 2.76436 9.35451 3.0907 8.27828 4.34891Z"
                    stroke="#808080"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <div className="text-[12px] leading-[140%] text-[#808080] whitespace-nowrap">
                  1
                </div>
              </div>
              <div className="flex flex-row items-center justify-center gap-[6px]">
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.27828 4.34891C7.20204 3.0907 5.40735 2.75224 4.0589 3.90439C2.71045 5.05653 2.52061 6.98286 3.57956 8.3455C4.46 9.47845 7.12452 11.8679 7.9978 12.6413C8.0955 12.7278 8.14436 12.7711 8.20134 12.7881C8.25107 12.8029 8.30549 12.8029 8.35522 12.7881C8.4122 12.7711 8.46106 12.7278 8.55876 12.6413C9.43204 11.8679 12.0966 9.47845 12.977 8.3455C14.0359 6.98286 13.8693 5.04441 12.4977 3.90439C11.126 2.76436 9.35451 3.0907 8.27828 4.34891Z"
                    stroke="#808080"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <div className="text-[12px] leading-[140%] text-[#808080] whitespace-nowrap">
                  5
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex mt-[12px] ml-auto mr-[20px] mb-[20px]">
          <svg
            className="mr-[10px] cursor-pointer"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="-0.5"
              y="0.5"
              width="31"
              height="31"
              rx="15.5"
              transform="matrix(-1 0 0 1 31 0)"
              fill="white"
            />
            <rect
              x="-0.5"
              y="0.5"
              width="31"
              height="31"
              rx="15.5"
              transform="matrix(-1 0 0 1 31 0)"
              stroke="#F3F3F3"
            />
            <path
              d="M19 23L12 16L19 9"
              stroke="#CCDEFF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            className="cursor-pointer"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="-0.5"
              width="31"
              height="31"
              rx="15.5"
              transform="matrix(1 0 0 -1 0 31)"
              fill="white"
            />
            <rect
              x="0.5"
              y="-0.5"
              width="31"
              height="31"
              rx="15.5"
              transform="matrix(1 0 0 -1 0 31)"
              stroke="#99BDFF"
            />
            <path
              d="M14 9L21 16L14 23"
              stroke="#196AFF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default PopularPost;
