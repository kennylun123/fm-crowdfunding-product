export type ProductHeaderProps = {
  title: string;
  content: string;
  iconUrl: string;
  isDialogOpened: boolean;
  toggleDialogById: (id: string) => void;
};

export type ProductStatusProps = {
  targetFunding: number;
  backedFunding: number;
  backers: number;
  daysLeft: number;
};

export type AboutProjectProps = {
  contents: string[];
  pledges: PledgeProps[];
  toggleDialogById: (id: string) => void;
};

export type PledgeProps = {
  id: string;
  title: string;
  content: string;
  price: number;
  qty: number;
  toggleDialogById?: (id: string) => void;
  disabled?: boolean;
};

export type DialogProps = {
  title: string;
  content: string;
  pledges: PledgeProps[];
  selectedOpt: string;
  setData: React.Dispatch<React.SetStateAction<ProductState>>;
  closeModal: () => void;
};

export type DialogPledgeProps = {
  pledge: PledgeProps;
  selectedOptionId: string;
  handleOptionChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  input: number;
  setInput: React.Dispatch<React.SetStateAction<number>>;
  disabled?: boolean;
};

export type ProductState = {
  status: {
    backed: number;
    backers: number;
  };
  pledges: PledgeProps[];
};

export type CustomButtonProp = {
  title: string;
  type?: "submit" | "reset" | "button" | undefined;
  containerStyle?: string;
  textStyle?: string;
  disabled?: boolean;
  aria_label?: string;
  aria_expand?: "true" | "false" | undefined;
  aria_controls?: string;
  handleClick?: () => void;
};
