export interface UserInitialData {
  readonly _id: string;
  readonly __v: number;
  email: string;
  address_one: string;
  address_two: string;
  post_code: string;
  state?: string;
  country: string | null;
}

export interface UserFormData {
  readonly _id: string;
  readonly __v: number;
  address_one: string;
  address_two: string;
  post_code: string;
  country: string;
  state?: string;
  // not sending card details to the server for security reasons, ideally this should be handled with stripe
}

export interface PaymentFormProps {
  // all properties optional - not sure if all items are always present in a response
  initialData: Partial<UserInitialData>;
  submitDisabled?: boolean;
  onSubmit: (data: Partial<UserFormData>) => Promise<void>;
  onAbort: () => void;
}
