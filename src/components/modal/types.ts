export interface ModalProps {
  title: string;
  open: boolean;
  children: React.ReactNode | React.ReactNode[];
  onClickOutside?: () => void;
}
