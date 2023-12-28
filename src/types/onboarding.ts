export interface OnboardingContainerProps {
  children: JSX.Element | JSX.Element[];
}

export interface OnboardingListItemProps {
  id?: string;
  imageUrl: string;
  altText: string;
  title: string;
  selectedImg?: string;
  isSubmitActive?: boolean;
}
