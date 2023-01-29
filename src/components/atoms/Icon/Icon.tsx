interface Props {
  type: 'card' | 'stripe' | 'mag' | 'chevron-down';
}

const icons = {
  card: '/card.svg',
  stripe: '/stripe.png',
  mag: '/mag.svg',
  'chevron-down': '/chevron-down.svg',
};

export const Icon = ({ type }: Props) => {
  const iconPath = icons[type];

  return <img alt="" src={iconPath} />;
};
