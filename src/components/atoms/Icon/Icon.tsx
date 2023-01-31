interface Props {
  type: 'card' | 'stripe' | 'mag' | 'chevron-down' | 'pound';
}

const icons = {
  card: '/card.svg',
  stripe: '/stripe.png',
  mag: '/mag.svg',
  'chevron-down': '/chevron-down.svg',
  pound: '/pound.svg',
};

export const Icon = ({ type }: Props) => {
  const iconPath = icons[type];

  return <img alt="" src={iconPath} />;
};
