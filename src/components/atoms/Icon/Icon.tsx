interface Props {
  type: 'card';
}

const icons = {
  card: '/card.svg',
  stripe: '/stripe.png',
};

export const Icon = ({ type }: Props) => {
  const iconPath = icons[type];

  return <img alt="" src={iconPath} />;
};
