declare module "@heroicons/*";
type Meta = {
  errorCode: number;
  message: string;
  type: string;
};

type Login = {
  Meta: {
    errorCode: number;
    message: string;
    type: string;
  };
  Data: {
    result: {
      userId: number;
      name: string;
      FName: string;
      LName: string;
      cellphone: string;
      Addrss: string;
      Credit: string;
      CustImg: null;
      IntroduceCode: string;
      done: boolean;
      custId: number;
      AccSystem: boolean;
      SaleSystem: boolean;
      WareSystem: boolean;
      VisitSystem: boolean;
      VisitorManagment: boolean;
      AccNo: string;
      Shaba: string;
      CardNumber: string;
      Perms: string;
    };
  };
};

type MenuResult = {
  Id: number;
  Name: string;
  ParentId: number;
  HasChild: boolean;
  icon: null;
  Path: string;
};

type Menu = {
  Meta: {
    errorCode: number;
    message: string;
    type: string;
  };
  Data: {
    result: MenuResult[];
  };
};

type MenuItem = {
  menuResult: MenuResult;
  children?: MenuItem[];
};
